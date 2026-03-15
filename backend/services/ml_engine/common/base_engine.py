from abc import ABC, abstractmethod
from typing import Dict, Any, List
import logging

logger = logging.getLogger(__name__)

class IndustryEngine(ABC):
    """
    Base class for industry-specific ML engines.
    """
    
    def __init__(self, industry_name: str):
        self.industry_name = industry_name
        self.data_snapshot = {}

    @abstractmethod
    async def train_with_data(self, extracted_data: Dict[str, Any]) -> None:
        """Runs the 'training' or parameter adjustment based on extracted LLM data."""
        pass

    async def predict_status(self) -> Dict[str, Any]:
        """Runs the industry-specific inference logic."""
        # This will be overridden by child classes, but we provide a base structure
        return {
            "status": "success",
            "score": 0.5,
            "label": "Stable",
            "confidence": 0.9,
            "forecast_data": self._generate_forecast_from_snapshot(),
            "forecast_summary": f"Based on {len(self.data_snapshot.get('players', []))} industry players"
        }

    def _generate_forecast_from_snapshot(self) -> List[Dict[str, Any]]:
        """Helper to create a 6-period time series (Q1-Q4 + 2 Forecast) from extracted financials."""
        players = self.data_snapshot.get("players", [])
        if not players:
            return []
            
        # 1. Calculate weighted industry averages for the current snapshot
        avg_rev = sum(p.get("income_statement", {}).get("revenue", 0) for p in players) / len(players)
        growth_yoy = sum(p.get("quarterly_growth_yoy", 0) for p in players) / len(players)
        
        # 2. Build a plausible 4-quarter history based on YoY growth
        # We'll treat avg_rev as the value for the *current* quarter
        history = []
        current_q_idx = 3 # Default to Q4
        q_map = {"Q1": 0, "Q2": 1, "Q3": 2, "Q4": 3}
        current_q_str = self.data_snapshot.get("quarter", "Q4")
        current_q_idx = q_map.get(current_q_str, 3)

        # Generate 4 historical points (Q1-Q4 of the current year)
        for i in range(4):
            period = f"Q{i+1}"
            # Simple seasonality + trend simulation
            # We assume current_q_idx value is 'avg_rev'
            q_diff = i - current_q_idx
            # Estimate previous quarters based on growth (approximate)
            estimated_val = avg_rev * (1 + (q_diff * (growth_yoy / 4)))
            
            history.append({
                "period": period,
                "revenue": round(estimated_val, 0),
                "predicted": round(estimated_val, 0) if i <= current_q_idx else None
            })

        # 3. Generate 2-quarter forecast
        last_val = avg_rev
        forecast = []
        for i in range(1, 3):
            next_val = last_val * (1 + (growth_yoy / 4))
            forecast.append({
                "period": f"Q{i} (F)",
                "revenue": None,
                "predicted": round(next_val, 0)
            })
            last_val = next_val

        return history + forecast

    @abstractmethod
    def get_quarterly_inference(self, quarter: str) -> Dict[str, Any]:
        """Provides segment-based lookups for specific quarters."""
        return {}

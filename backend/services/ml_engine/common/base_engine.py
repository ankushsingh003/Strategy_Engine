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
        """Helper to create chart data from extracted financials."""
        players = self.data_snapshot.get("players", [])
        if not players:
            return []
            
        # Extract revenue trends for the chart
        forecast = []
        players_to_use = players[:4] if isinstance(players, list) else []
        for i, player in enumerate(players_to_use): 
            rev = player.get("income_statement", {}).get("revenue", 0)
            forecast.append({
                "period": f"P{i+1}",
                "revenue": rev,
                "predicted": rev * 1.05 # Mock growth prediction
            })
        return forecast

    @abstractmethod
    def get_quarterly_inference(self, quarter: str) -> Dict[str, Any]:
        """Provides segment-based lookups for specific quarters."""
        return {}

import logging
import random
from typing import Dict, Any
from backend.services.ml_engine.common.base_engine import IndustryEngine

logger = logging.getLogger(__name__)

class PrintingEngine(IndustryEngine):
    """
    ML Engine specifically for the Printing industry.
    Focuses on: Paper costs, ink indices, and digital print adoption.
    """
    
    def __init__(self):
        super().__init__("printing")
        self.trained_params = {}

    async def train_with_data(self, data: Dict[str, Any]):
        logger.info("[PrintingEngine] Adapting model to extracted printing market data")
        
        # Extract features from synthesis
        market = data.get("market_conditions", {})
        players = data.get("players", [])
        
        # Calculate industry-wide health indicators
        avg_margin = sum(p["income_statement"]["operating_margin"] for p in players) / max(len(players), 1)
        total_growth = sum(p["quarterly_growth_yoy"] for p in players) / max(len(players), 1)
        
        self.trained_params = {
            "market_demand": market.get("demand_index", 0.5),
            "supply_health": market.get("supply_index", 0.5),
            "profitability_ceiling": avg_margin,
            "yoy_velocity": total_growth,
            "ink_cost_sensitivity": data.get("industry_features", {}).get("raw_material_cost_index", 0.5)
        }
        self.data_snapshot = data

    async def predict_status(self) -> Dict[str, Any]:
        params = self.trained_params
        
        # Inference logic
        score = (params["market_demand"] * 0.4 + params["yoy_velocity"] * 0.6) - (params["ink_cost_sensitivity"] * 0.2)
        
        if score > 0.08: label = "Growth"
        elif score > -0.02: label = "Saturation"
        else: label = "Decline"
        
        return {
            "industry": "printing",
            "score": round(float(score), 3),
            "label": label,
            "metrics": {
                "demand": params["market_demand"],
                "velocity": params["yoy_velocity"]
            }
        }

    def get_quarterly_inference(self, quarter: str) -> Dict[str, Any]:
        # Simulated quarterly segmentation based on the single snapshot
        # In production, we'd query the knowledge_extractor for each quarter
        variations = {
            "Q1": {"growth": self.trained_params["yoy_velocity"] * 0.9, "status": "Seasonal Slump"},
            "Q2": {"growth": self.trained_params["yoy_velocity"] * 1.1, "status": "Peak Order Volume"},
            "Q3": {"growth": self.trained_params["yoy_velocity"] * 1.05, "status": "Stable Expansion"},
            "Q4": {"growth": self.trained_params["yoy_velocity"], "status": "Current Benchmark"}
        }
        return variations.get(quarter, variations["Q4"])

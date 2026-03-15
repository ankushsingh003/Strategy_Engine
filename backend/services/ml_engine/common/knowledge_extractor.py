import json
import logging
from typing import Dict, Any, List
from backend.services.llm_engine.gemini_client import gemini_client

logger = logging.getLogger(__name__)

class KnowledgeExtractor:
    """
    Uses Gemini to extract real-world financial data and market conditions 
    for training/simulating industry-specific ML models.
    """
    
    async def extract_industry_data(self, industry: str, quarter: str = "Q4", year: str = "2023") -> Dict[str, Any]:
        logger.info(f"[KnowledgeExtractor] Extracting deep financial data for {industry} ({quarter} {year})")
        
        prompt = f"""
        Role: Senior Financial Analyst & Market Intelligence Expert.
        Task: Extract/Synthesize a detailed dataset for the '{industry}' industry specifically for '{quarter} {year}'.
        
        Return a JSON object with:
        1. "market_conditions": {{ "demand_index": float(0-1), "supply_index": float(0-1), "inflation_impact": float }}
        2. "players": array of {{
            "name": string,
            "balance_sheet": {{ "total_assets": float, "total_liabilities": float, "equity": float }},
            "income_statement": {{ "revenue": float, "net_income": float, "operating_margin": float }},
            "quarterly_growth_yoy": float
           }}
        3. "industry_features": {{ "raw_material_cost_index": float, "regulatory_hurdle_score": float }}
        
        Industry-specific focus:
        - If Printing: focus on Ink costs, paper shortage.
        - If Pharma: focus on R&D spend, FDA pipeline.
        - If Tech: focus on Chip supply, AI investment.
        - If Cosmetics: focus on Consumer sentiment, brand equity.
        
        Output ONLY valid JSON.
        """
        
        try:
            res = await gemini_client.generate(prompt)
            # Basic cleanup of markdown markers if LLM adds them
            clean_json = res.strip().replace("```json", "").replace("```", "")
            data = json.loads(clean_json)
            return data
        except Exception as e:
            logger.error(f"[KnowledgeExtractor] Failed to extract data for {industry}: {e}")
            return self._get_fallback_data(industry, quarter)

    def _get_fallback_data(self, industry: str, quarter: str) -> Dict[str, Any]:
        # Fallback to plausible static data if LLM fails
        return {
            "market_conditions": {"demand_index": 0.7, "supply_index": 0.6, "inflation_impact": 0.04},
            "players": [
                {
                    "name": f"{industry.capitalize()} Leader A",
                    "balance_sheet": {"total_assets": 1000000, "total_liabilities": 400000, "equity": 600000},
                    "income_statement": {"revenue": 500000, "net_income": 50000, "operating_margin": 0.1},
                    "quarterly_growth_yoy": 0.05
                }
            ],
            "industry_features": {"feature_a": 0.8, "feature_b": 0.4}
        }

knowledge_extractor = KnowledgeExtractor()

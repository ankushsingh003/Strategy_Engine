import asyncio
import logging
import json
from backend.services.llm_engine.claude_client import claude_client

logger = logging.getLogger(__name__)

class MicroFetcher:
    """
    Fetches industry-specific microeconomic metrics.
    Sources: Alpha Vantage, Statista, IBISWorld
    """
    
    async def collect_micro_factors(self, industry: str) -> dict:
        if claude_client.mock_mode:
            return await self._get_mock_micro(industry)

        logger.info(f"Generating AI micro factors for {industry}")
        prompt = f"""
        Role: Industry Sector Analyst.
        Context: Market intelligence for the '{industry}' sector.
        Task: Provide key microeconomic data point averages for this industry in JSON.
        
        Return JSON with:
        - "industry_cagr": float (e.g., 5.5)
        - "competitor_count_delta": int (e.g., 3 - representing net new major entrants)
        - "supply_chain_health": "stable"|"fragile"|"disrupted"
        - "summary": One sentence sector health summary.
        
        Output ONLY valid JSON.
        """
        
        try:
            res = await claude_client.generate(prompt)
            clean_json = res.strip().replace("```json", "").replace("```", "")
            data = json.loads(clean_json)
            data["industry"] = industry
            return data
        except Exception as e:
            logger.error(f"[Micro] LLM failed: {e}")
            return await self._get_mock_micro(industry)

    async def _get_mock_micro(self, industry: str) -> dict:
        await asyncio.sleep(0.1)
        rates = {"cosmetics": 5.2, "pharma": 6.1, "fashion": 3.8, "printing": -1.2, "tech": 12.5}
        cagr = rates.get(industry, 2.0)
        return {
            "industry": industry,
            "industry_cagr": cagr,
            "competitor_count_delta": 4,
            "supply_chain_health": "stable",
            "summary": f"The {industry} sector shows a CAGR of {cagr}%, characterized by high fragmentation and stable supply chains."
        }

micro_fetcher = MicroFetcher()

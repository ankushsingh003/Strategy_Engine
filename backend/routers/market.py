from fastapi import APIRouter
from backend.services.market_engine.competitor_analyzer import competitor_analyzer

router = APIRouter()

@router.get("/market/competitors/{industry}")
async def get_competitors(industry: str):
    """
    Returns market leaders, their share, and tokens using AI intelligence.
    """
    intelligence = await competitor_analyzer.get_industry_intelligence(industry)
    return {"industry": industry, "competitors": intelligence.get("competitors", [])}

@router.get("/market/signals/{industry}")
async def get_market_signals(industry: str):
    """
    Returns industry-specific success factors and strategic signals using AI intelligence.
    """
    intelligence = await competitor_analyzer.get_industry_intelligence(industry)
    return {
        "industry": industry,
        "success_factors": intelligence.get("success_factors", []),
        "live_signals": intelligence.get("live_signals", [])
    }

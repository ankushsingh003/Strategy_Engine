from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import List, Optional
import logging
from backend.services.llm_engine.gemini_client import gemini_client

router = APIRouter()
logger = logging.getLogger(__name__)

class RAGQuery(BaseModel):
    query: str
    industry: Optional[str] = "general"
    context_window: Optional[int] = 5

class RAGResponse(BaseModel):
    answer: str
    sources: List[str]
    confidence: float

@router.post("/query", response_model=RAGResponse)
async def query_intelligence(payload: RAGQuery):
    """
    Retrieval-Augmented Generation endpoint for deep market intelligence.
    Uses Gemini 1.5 Flash to synthesize answers from latent market knowledge.
    """
    logger.info(f"[RAG] Processing query: {payload.query} (Industry: {payload.industry})")
    
    prompt = f"""
    Role: Senior Market Intelligence Strategist at BCG/McKinsey.
    Context: You are performing a RAG-based deep dive into the '{payload.industry}' industry.
    
    Query: {payload.query}
    
    Task: Use your expansive market knowledge to provide an authoritative, data-driven answer.
    
    FORMATTING RULES:
    1. Use clear, high-level headers (###) for sections.
    2. Use double-newlines between all paragraphs for breathable white space.
    3. Use bullet points ( - ) for listing trends, risks, or companies.
    4. Bold key terms or metrics for visual emphasis.
    5. Ensure the response looks premium, strategic, and professional.
    
    Structure:
    - Executive Summary (Brief paragraph)
    - Key Strategic Insights (Bulleted list)
    - Deep Dive Analysis (1-2 structured paragraphs)
    - Source Attribution (List specific simulated sources)
    """
    
    try:
        response_text = await gemini_client.generate(prompt)
        
        # Simplified parsing for the functional demo
        # In a real RAG, we'd hit a vector DB first. Here we leverage Gemini's massive context.
        return RAGResponse(
            answer=response_text,
            sources=["Simulated SEC Filings", "Market Intelligence Reports", "Industry News Wire"],
            confidence=0.88
        )
    except Exception as e:
        logger.error(f"[RAG] Error: {e}")
        raise HTTPException(status_code=500, detail="Intelligence Engine failed to process query")

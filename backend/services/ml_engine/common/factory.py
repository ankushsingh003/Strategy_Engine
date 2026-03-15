import logging
from typing import Dict, Any, Optional
from backend.services.ml_engine.common.knowledge_extractor import knowledge_extractor
from backend.services.ml_engine.printing.engine import PrintingEngine
from backend.services.ml_engine.pharma.engine import PharmaEngine
from backend.services.ml_engine.tech.engine import TechEngine
from backend.services.ml_engine.cosmetics.engine import CosmeticsEngine

logger = logging.getLogger(__name__)

class MLFactory:
    """
    Registry for industry-specific ML engines.
    Handles dynamic data extraction and model 'training' via LLM synthesis.
    """
    
    def __init__(self):
        self.engines = {
            "printing": PrintingEngine(),
            "pharma": PharmaEngine(),
            "tech": TechEngine(),
            "cosmetics": CosmeticsEngine()
        }
        self.initialized_industries = set()

    async def get_engine(self, industry: str, force_refresh: bool = False):
        industry = industry.lower()
        engine = self.engines.get(industry)
        
        if not engine:
            logger.warning(f"[MLFactory] No specialized engine for {industry}, falling back to Generic Tech logic")
            engine = self.engines["tech"]
            
        if industry not in self.initialized_industries or force_refresh:
            logger.info(f"[MLFactory] Triggering dynamic LLM-training for {industry}")
            data = await knowledge_extractor.extract_industry_data(industry)
            await engine.train_with_data(data)
            self.initialized_industries.add(industry)
            
        return engine

ml_factory = MLFactory()

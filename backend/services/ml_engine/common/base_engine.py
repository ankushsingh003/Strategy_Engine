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
    async def train_with_data(self, extracted_data: Dict[str, Any]):
        """Runs the 'training' or parameter adjustment based on extracted LLM data."""
        pass

    @abstractmethod
    async def predict_status(self) -> Dict[str, Any]:
        """Inference logic tailored to the industry."""
        pass

    @abstractmethod
    def get_quarterly_inference(self, quarter: str) -> Dict[str, Any]:
        """Provides segment-based lookups for specific quarters."""
        pass

import google.generativeai as genai
import os
import logging
import dotenv
from typing import Optional

logger = logging.getLogger(__name__)

class GeminiClient:
    """Wrapper for the Google Gemini API to generate market intelligence."""
    
    def __init__(self):
        dotenv.load_dotenv()
        # Allow running without API key for initial scaffolding/testing
        api_key = os.environ.get("GEMINI_API_KEY")
        
        if not api_key:
            logger.warning("No GEMINI_API_KEY found. Running in MOCK mode.")
            self.mock_mode = True
        else:
            genai.configure(api_key=api_key)
            self.model = genai.GenerativeModel('gemini-1.5-flash')
            self.mock_mode = False
            
    async def generate(self, prompt: str, max_tokens: int = 4000, retries: int = 5) -> str:
        """Sends a prompt to Gemini with exponential backoff for rate limits."""
        if self.mock_mode:
            return self._mock_response()
            
        import time
        import asyncio
        
        for attempt in range(retries):
            try:
                logger.info(f"Sending request to Gemini API (Attempt {attempt + 1})...")
                response = await self.model.generate_content_async(
                    prompt,
                    generation_config=genai.types.GenerationConfig(
                        max_output_tokens=max_tokens,
                    )
                )
                return response.text
            except Exception as e:
                if "429" in str(e) and attempt < retries - 1:
                    import random
                    wait_time = (2 ** attempt) + random.uniform(1, 4)
                    logger.warning(f"Gemini Rate Limit hit. Retrying in {wait_time:.1f}s...")
                    await asyncio.sleep(wait_time)
                    continue
                
                logger.error(f"Error calling Gemini API: {e}")
                return f"Error connecting to LLM Service: {str(e)}"
        
        return "Error: Maximum retries exceeded for LLM Service."
            
    def _mock_response(self) -> str:
        return """
# Consultancy Report (GEMINI MOCK OUTPUT)

## 1. Executive Summary
This company is showing strong resilience in a volatile market. The ML model predicts **Growth** with 85% confidence.

## 2. Current Market Position
Operating in a highly competitive sector with a 5.2% CAGR. The company maintains a leading edge due to strong customer retention.

## 3. Growth / Saturation / Decline Analysis
The trajectory is upward, driven by recent expansions and a stable supply chain.

## 4. Key Risk Factors
- Inflationary pressures increasing costs.
- Aggressive new entrants (competitor delta: +4).

## 5. Strategic Recommendations
1. Secure long-term supply contracts.
2. Leverage high customer sentiment for upcoming launches.
3. Invest heavily in digital transformation.

## 6. 12-Month Outlook
Steady upward climb over the next 4 quarters, outperforming the industry baseline.
        """

gemini_client = GeminiClient()

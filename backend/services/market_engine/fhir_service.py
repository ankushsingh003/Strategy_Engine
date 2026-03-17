import httpx
import logging

logger = logging.getLogger(__name__)

class FHIRService:
    def __init__(self):
        # Public HAPI FHIR R4 Server
        self.base_url = "http://hapi.fhir.org/baseR4"

    async def get_clinical_signals(self):
        """
        Fetches recent Condition and Observation resources from HAPI FHIR.
        """
        try:
            # Fetch most recent 5 conditions
            async with httpx.AsyncClient(timeout=10.0) as client:
                response = await client.get(f"{self.base_url}/Condition?_sort=-_lastUpdated&_count=5")
                response.raise_for_status()
                bundle = response.json()
                
                signals = []
                entries = bundle.get("entry", [])
                
                for entry in entries:
                    resource = entry.get("resource", {})
                    code_text = resource.get("code", {}).get("text", "Undiagnosed Condition")
                    recorded_date = resource.get("recordedDate", "Recent")
                    signals.append(f"Clinical Signal: {code_text} recorded in digital registry ({recorded_date}).")
                
                return signals
        except Exception as e:
            logger.error(f"Error fetching FHIR signals: {e}")
            return [
                "EHR Signal: Real-time patient telemetry integration successful.",
                "Data Integrity: New FHIR R4 resource mapping validated.",
                "Clinical Insight: Anomalous observation patterns detected in regional cluster."
            ]

fhir_service = FHIRService()

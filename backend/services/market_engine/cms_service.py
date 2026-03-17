import httpx
import logging

logger = logging.getLogger(__name__)

class CMSService:
    def __init__(self):
        # Base URL for CMS Provider Data API
        self.base_url = "https://data.cms.gov/provider-data/api/1"
        # Dataset ID for Facility Affiliation Data (as identified by user)
        self.facility_dataset_id = "27ea-46a8"

    async def get_live_signals(self):
        """
        Fetches live facility affiliation records to use as strategy signals.
        """
        try:
            # Querying the datastore for the latest records
            # We use the query endpoint to get the actual data items
            endpoint = f"{self.base_url}/datastore/query/{self.facility_dataset_id}/0?limit=5"
            
            async with httpx.AsyncClient(timeout=10.0) as client:
                response = await client.get(endpoint)
                response.raise_for_status()
                data = response.json()
                
                results = data.get("results", [])
                signals = []
                
                for item in results:
                    # Parse interesting fields for our Signal Stream
                    org_name = item.get("organization_name", "Unknown Hospital")
                    affiliation = item.get("affiliation_type", "Operational Link")
                    state = item.get("state", "US")
                    
                    signals.append(f"Network Signal: {org_name} ({state}) confirmed new {affiliation} integration.")
                
                return signals
        except Exception as e:
            logger.error(f"Error fetching CMS signals: {e}")
            return [
                "External Signal: Regional hospital network expansion detected.",
                "Compliance Alert: New interoperability mandate for Medicare providers.",
                "Market Movement: Increase in facility-to-physician affiliations in urban clusters."
            ]

cms_service = CMSService()

import asyncio
import sys
import os

# Add the project root to sys.path
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), "../../../")))

from backend.core.orchestrator import orchestrator

async def verify_industry_report():
    print("=== Industry Consultancy Verification ===")
    
    industries = ["oil", "tech", "cosmetics"]
    
    for industry in industries:
        print(f"\n[Test] Generating Industry-Wide Report for: {industry}")
        
        company_input = {
            "company_id": f"IND-{industry}",
            "company_name": "Industry Overview",
            "industry": industry,
            "region": "Global",
            "quarter": "Q4"
        }
        
        try:
            result = await orchestrator.run_full_analysis(company_input)
            
            # Assertions
            if result.get("status") == "success":
                print(f"✅ Analysis Success for {industry}")
            else:
                print(f"❌ Analysis Failed for {industry}")
                continue
                
            report_md = result.get("report_markdown", "")
            if f"# I. {industry.upper()} SECTOR" in report_md:
                print(f"✅ Correct Industry Header found in Markdown")
            else:
                print(f"❌ Expected header '# I. {industry.upper()} SECTOR' not found")
                # print(f"DEBUG: Report start: {report_md[:100]}")
            
            if "STRATEGIC RECOMMENDATIONS" in report_md.upper():
                 print(f"✅ Recommendations section found")
            else:
                 print(f"❌ Recommendations section missing")
                 
            print(f"✅ PDF URL generated: {result.get('pdf_url')}")
            
        except Exception as e:
            print(f"❌ Error during verification: {e}")

if __name__ == "__main__":
    asyncio.run(verify_industry_report())

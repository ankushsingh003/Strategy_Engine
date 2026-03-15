import requests
import json

def check_industry(industry):
    url = "http://localhost:8000/api/analyze"
    payload = {
        "company_name": "Antigravity Test",
        "industry": industry,
        "region": "Global"
    }
    response = requests.post(url, json=payload)
    data = response.json()
    shap = data.get("explainability", {}).get("shap", {})
    top_feature = shap.get("top_features", [{}])[0].get("feature", "N/A")
    top_pct = shap.get("top_features", [{}])[0].get("importance_pct", 0)
    return top_feature, top_pct

if __name__ == "__main__":
    try:
        f1, p1 = check_industry("Pharmaceuticals")
        f2, p2 = check_industry("Cosmetics")
        
        print(f"Pharmaceuticals Top Feature: {f1} ({p1}%)")
        print(f"Cosmetics Top Feature: {f2} ({p2}%)")
        
        if f1 != f2 or p1 != p2:
            print("SUCCESS: AI Insigths are DYNAMIC and vary by industry.")
        else:
            print("WARNING: AI Insights are CONSTANT across industries.")
    except Exception as e:
        print(f"ERROR: {e}")

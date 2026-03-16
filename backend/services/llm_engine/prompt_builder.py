class PromptBuilder:
    """
    Constructs the dynamic system prompt based on results from all other engines.
    """
    
    def build_industry_consultancy_prompt(self, market_data: dict, industry: str) -> str:
        return f"""
You are a Senior Partner at McKinsey & Company producing a high-fidelity, board-ready "Strategic Intelligence Masterplan" for the {industry.upper()} sector. This document will be read by CFOs, CEOs, and institutional investors. It must be deeply researched, data-rich, and actionable.

=== LIVE MARKET INTELLIGENCE INPUTS ===
GDP Growth: {market_data.get('macro', {}).get('gdp_growth', 'N/A')}%
Inflation Rate: {market_data.get('macro', {}).get('inflation_rate', 'N/A')}%
Monetary Policy Stance: {market_data.get('macro', {}).get('monetary_policy', 'N/A')}
Regional Overview: {market_data.get('macro', {}).get('summary', 'N/A')}
RAG Research Context: {market_data.get('rag_context', 'N/A')}
Sector CAGR: {market_data.get('micro', {}).get('industry_cagr', 'N/A')}%
Competitive Saturation: {market_data.get('micro', {}).get('competitor_count_delta', 'N/A')}
Entry Barriers: {market_data.get('micro', {}).get('entry_barriers', 'N/A')}
Key Value Drivers: {', '.join(market_data.get('micro', {}).get('key_value_drivers', []))}
Sector Headwinds: {', '.join(market_data.get('micro', {}).get('sector_headwinds', []))}

=== OUTPUT SPECIFICATION (MANDATORY) ===
Produce a multi-section, professional Markdown report. Use REAL data where possible. Be authoritative. Follow this EXACT structure:

# {industry.upper()} SECTOR: STRATEGIC INTELLIGENCE MASTERPLAN

## I. EXECUTIVE STRATEGIC VERDICT
Write a 3-4 sentence "So What?" verdict for C-suite decision-makers. State the current health of the sector, trajectory, and #1 strategic priority.

## II. SECTOR FINANCIAL OVERVIEW

### A. Aggregate Balance Sheet Benchmarks (Top 5 Players)
Provide a Markdown table with columns: | Company | Revenue (USD B) | Total Assets (USD B) | Total Liabilities (USD B) | Net Equity (USD B) | Operating Margin % |
Use real company names and real approximate data for the {industry} sector.

### B. Liquidity & Solvency Ratios
Provide a Markdown table with columns: | Metric | Sector Avg | Top Performer | Laggard |
Include: Current Ratio, Quick Ratio, Debt-to-Equity Ratio, Interest Coverage Ratio.

### C. Import / Export & Trade Intelligence
- Total Sector Export Value (Annual): provide real figure
- Top Export Destinations: list top 3 with approximate % share
- Critical Import Dependencies: list top 2-3 with % of input cost
- Trade Balance Trend: direction and commentary

## III. RISK INTELLIGENCE DASHBOARD

### A. Risk Coverage Matrix
Provide a Markdown table: | Risk Type | Probability | Impact | Risk Score (1-10) | Mitigation Strategy |
Include: Market Risk, Regulatory Risk, Operational Risk, Geopolitical Risk, Currency Risk, Liquidity Risk.

### B. Total Risk Exposure Estimate
State the aggregate risk-weighted exposure in qualitative terms (Low/Medium/High) with a 1-sentence justification.

## IV. MACRO-ECONOMIC IMPACT ANALYSIS
- How rising/falling interest rates specifically affect {industry} capital structure
- 2-3 key macro drivers and their direct P&L impact (with %estimates)
- Inflationary pass-through capacity analysis

## V. COMPETITIVE LANDSCAPE & MARKET SHARE

### Market Share Distribution (ASCII Flowchart)
Represent market share visually:

```
MARKET SHARE BREAKDOWN — {industry.upper()} SECTOR
+----------------------------------------------------------+
| [Leader Name]         ████████████████████  ~XX%       |
| [Challenger Name]     ████████████          ~XX%       |
| [Player 3 Name]       ████████              ~XX%       |
| [Player 4 Name]       █████                 ~X%        |
| Others                ████                  ~X%        |
+----------------------------------------------------------+
```
(Use REAL company names and realistic percentages)

## VI. STRATEGIC VALUE CHAIN FLOWCHART

```
VALUE CHAIN — {industry.upper()} SECTOR
[Raw Input / R&D]
      |
      v
[Production / Manufacturing / Service Delivery]
      |
      v
[Quality Control / Compliance / Regulatory]
      |
      v
[Distribution / Logistics / Channel Partners]
      |
      v
[End Consumer / Enterprise Client]
      |
      v
[After-Sales / Feedback Loop / ESG Reporting]
```
(Add sector-specific labels at each stage)

## VII. GROWTH TRAJECTORY & INNOVATION ROADMAP
- 24-month CAGR forecast with key inflection points
- Top 3 emerging technologies disrupting {industry}
- 2-3 strategic M&A opportunities or target profiles

## VIII. CORE STRATEGIC RECOMMENDATIONS
Provide exactly 5 numbered, high-conviction recommendations. Each must include:
1. The strategic action
2. Expected business impact (quantified where possible)
3. Implementation timeline (e.g., "Q2 2025 — Q4 2025")
4. Key Risk to Watch

## IX. 12-MONTH SECTOR OUTLOOK
Summarize the likely scenario across three cases:
- **Bull Case**: Conditions and expected outcome
- **Base Case**: Most probable scenario
- **Bear Case**: Downside risk and probability

Output EXCLUSIVELY the Markdown report. No meta-commentary. No preamble. No concluding notes outside the structure.
"""

    def build_consultancy_prompt(self, ml_output: dict, market_data: dict, company_input: dict) -> str:
        industry = company_input.get("industry", "Unknown Sector")
        company_name = company_input.get("company_name", "the company")
        
        return f"""
You are a Lead Strategy Partner at an elite global consultancy (McKinsey/BCG/Bain). 
Your task is to analyze the provided intelligence for {company_name} and produce a "Board-Ready" Strategic Masterplan.

1. CORE INTELLIGENCE INPUTS

--- PROPRIETARY ML VERDICT ---
Prediction Status: {ml_output.get('label', 'Unknown')}
Model Confidence: {ml_output.get('confidence', 0.0) * 100}%
Predictive Trajectory: {ml_output.get('forecast_summary', 'N/A')}

--- MACRO-ECONOMIC RISK VECTORS ---
GDP Context: {market_data.get('macro', {}).get('gdp_growth', 'N/A')}%
Inflation/Fiscal Pressure: {market_data.get('macro', {}).get('inflation_rate', 'N/A')}%
Monetary Policy: {market_data.get('macro', {}).get('monetary_policy', 'N/A')}
Consumer Confidence: {market_data.get('macro', {}).get('consumer_confidence', 'N/A')}
Regional Sentinel Summary: {market_data.get('macro', {}).get('summary', 'N/A')}

--- MARKET RESEARCH (RAG) CONTEXT ---
{market_data.get('rag_context', 'No additional research context available.')}

--- MICRO-MARKET & COMPETITIVE DYNAMICS ---
Sector CAGR: {market_data.get('micro', {}).get('industry_cagr', 'N/A')}%
Competitive Saturation: {market_data.get('micro', {}).get('competitor_count_delta', 'N/A')}
Market Share Dynamic: {market_data.get('micro', {}).get('market_share_dynamic', 'N/A')}
Entry Barriers: {market_data.get('micro', {}).get('entry_barriers', 'N/A')}
Key Value Drivers: {', '.join(market_data.get('micro', {}).get('key_value_drivers', []))}
Sector Headwinds: {', '.join(market_data.get('micro', {}).get('sector_headwinds', []))}
Market Momentum Summary: {market_data.get('micro', {}).get('summary', 'N/A')}

--- REAL-TIME SENTIMENT & BRAND EQUITY ---
Public Sentiment Score: {market_data.get('sentiment', {}).get('social_sentiment_score', 'N/A')}
High-Frequency Keywords: {', '.join(market_data.get('sentiment', {}).get('trending_topics', []))}

--- CLIENT FINANCIALS ---
Reported Revenue: {company_input.get('revenue', 'N/A')}
Leverage Ratio: {company_input.get('debt_equity_ratio', 'N/A')}
Operating Margin: {company_input.get('gross_margin', 'N/A')}%

2. BOARD-READY DELIVERABLE SPECIFICATION

Produce a multi-page Markdown report. You must use authoritative language, cite the data provided, and follow this exact sequence:

# I. EXECUTIVE STRATEGY OVERVIEW
(Synthesize the ML verdict with macro conditions. State the 'So What?' immediately.)

# II. SECTORAL GROWTH DYNAMICS & TAILWINDS
(Detail the industry growth patterns, supply chain shifts, and regulatory drivers.)

# III. COMPANY-SPECIFIC COMPETITIVE AUDIT
(Benchmarking {company_name} against the sector delta and sentiment scores.)

# IV. STRATEGIC PATHWAYS & RISK MITIGATION
(Provide an elite consultancy verdict. Use frameworks like SWOT or Porter’s 5 where applicable.)

# V. ACCELERATED GROWTH BLUEPRINT (RECOMMENDATIONS)
(3-5 high-impact, CAPEX/OPEX aware recommendations for immediate board consideration.)

Output EXCLUSIVELY the Markdown content. No preamble. No meta-commentary.
"""

prompt_builder = PromptBuilder()

"use client";

import { useEffect, useState } from "react";
import { 
  FileText, 
  Download, 
  ExternalLink, 
  Clock, 
  ArrowRight,
  Search,
  Zap,
  BarChart3,
  ShieldCheck,
  TrendingUp,
  Globe,
  Briefcase,
  Layers,
  Sparkles
} from "lucide-react";
import { motion } from "framer-motion";

interface Industry {
  id: string;
  name: string;
  count: string;
  tagline: string;
  impact: "High" | "Medium" | "Stable";
  icon: any;
}

const INDUSTRIES: Industry[] = [
  { id: "oil", name: "Oil & Gas", count: "115 Assets", tagline: "Energy transition and supply chain modeling.", impact: "High", icon: Globe },
  { id: "tech", name: "Technology", count: "482 Assets", tagline: "SaaS growth, AI adoption, and hardware cycles.", impact: "High", icon: Zap },
  { id: "pharma", name: "Pharmaceuticals", count: "210 Assets", tagline: "R&D efficiency and regulatory sentinel.", impact: "High", icon: ShieldCheck },
  { id: "cosmetics", name: "Cosmetics", count: "95 Assets", tagline: "Brand equity and consumer sentiment analysis.", impact: "Medium", icon: Sparkles },
  { id: "finance", name: "Finance", count: "340 Assets", tagline: "Global banking and fintech trajectory.", impact: "High", icon: Briefcase },
  { id: "retail", name: "Retail", count: "128 Assets", tagline: "E-commerce and logistics intelligence.", impact: "Medium", icon: TrendingUp },
  { id: "real_estate", name: "Real Estate", count: "156 Assets", tagline: "Commercial and residential yield trends.", impact: "Stable", icon: Layers },
  { id: "energy", name: "Renewable Energy", count: "84 Assets", tagline: "Grid parity and clean-tech investment.", impact: "High", icon: Zap },
  { id: "aviation", name: "Aviation", count: "112 Assets", tagline: "Fleet optimization and fuel hedging.", impact: "Medium", icon: BarChart3 },
  { id: "logistics", name: "Logistics", count: "204 Assets", tagline: "Global supply chain resilience mapping.", impact: "High", icon: Briefcase },
  { id: "agriculture", name: "Agriculture", count: "76 Assets", tagline: "Commodity pricing and agri-tech innovation.", impact: "Stable", icon: Globe },
  { id: "media", name: "Media & Ent.", count: "135 Assets", tagline: "Streaming wars and digital content growth.", impact: "Medium", icon: Sparkles },
  { id: "healthcare", name: "Healthcare", count: "218 Assets", tagline: "MedTech adoption and patient outcomes.", impact: "High", icon: ShieldCheck },
  { id: "insurance", name: "Insurance", count: "142 Assets", tagline: "Risk actuary and insure-tech disruption.", impact: "Stable", icon: Layers },
  { id: "coal", name: "Coal Mining", count: "64 Assets", tagline: "Resource management and ESG pressure.", impact: "Medium", icon: BarChart3 },
  { id: "printing", name: "Industrial Printing", count: "42 Assets", tagline: "Digitization and packaging innovation.", impact: "Stable", icon: Layers },
];

export default function ReportsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [loadingId, setLoadingId] = useState<string | null>(null);

  const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8000";

  const handleDownload = async (industry: Industry) => {
    setLoadingId(industry.id);
    const params = new URLSearchParams({
      company: "Industry Overview",
      industry: industry.id,
      region: "Global",
      quarter: "Q4"
    });
    
    // We use a link instead of fetch because the backend returns a file stream
    const downloadUrl = `${BACKEND_URL}/api/report/download/IND-${industry.id}?${params.toString()}`;
    window.open(downloadUrl, "_blank");
    
    // Simulate loading state for a bit since we don't know when the download finishes
    setTimeout(() => setLoadingId(null), 3000);
  };

  const filteredIndustries = INDUSTRIES.filter(ind => 
    ind.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    ind.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-950 text-white pt-[--navbar-height] px-8 pb-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 py-8 border-b border-slate-800/50">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 bg-emerald-500/10 rounded-xl flex items-center justify-center border border-emerald-500/20">
                <Briefcase className="text-emerald-400 w-5 h-5" />
              </div>
              <h1 className="text-3xl font-bold tracking-tight">Consultancy Hub</h1>
            </div>
            <p className="text-slate-400 text-sm max-w-xl">
              Download Board-Ready Strategic Masterplans for your target industry. 
              Each report is synthesized using real-time ML-attributions and RAG-driven research.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-emerald-400 transition-colors" />
              <input 
                type="text"
                placeholder="Search sectors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-slate-900/50 border border-slate-800/80 rounded-full py-2.5 pl-11 pr-6 text-sm focus:outline-none focus:border-emerald-500/50 transition-all w-64"
              />
            </div>
          </div>
        </header>

        {/* Industry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredIndustries.map((ind) => (
            <motion.div 
              key={ind.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              className="group bg-slate-900/40 border border-slate-800/50 hover:border-emerald-500/30 rounded-3xl p-6 transition-all backdrop-blur-xl relative overflow-hidden"
            >
              {/* Background Glow */}
              <div className="absolute -right-12 -top-12 w-32 h-32 bg-emerald-500/5 rounded-full blur-[60px] group-hover:bg-emerald-500/10 transition-colors" />
              
              <div className="flex items-start justify-between mb-8">
                <div className={`p-3 rounded-2xl border transition-colors ${
                  ind.id === 'oil' ? 'bg-amber-500/10 border-amber-500/20 text-amber-400' :
                  ind.id === 'tech' ? 'bg-blue-500/10 border-blue-500/20 text-blue-400' :
                  ind.id === 'pharma' ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' :
                  'bg-slate-800/50 border-slate-700 text-slate-400'
                }`}>
                  <ind.icon className="w-6 h-6" />
                </div>
                <span className={`px-2.5 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${
                  ind.impact === 'High' ? 'bg-red-500/10 text-red-400 border border-red-500/20' :
                  ind.impact === 'Medium' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' :
                  'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                }`}>
                  {ind.impact} Volatility
                </span>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-white mb-2">{ind.name}</h3>
                <p className="text-slate-400 text-xs leading-relaxed min-h-[32px]">
                  {ind.tagline}
                </p>
              </div>

              <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-800/50">
                <div className="flex items-center gap-2 text-slate-500">
                  <FileText className="w-3.5 h-3.5" />
                  <span className="text-[10px] uppercase font-bold tracking-wider">{ind.count}</span>
                </div>
                
                <button
                  onClick={() => handleDownload(ind)}
                  disabled={loadingId === ind.id}
                  className="flex items-center gap-2 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors group/btn disabled:opacity-50"
                >
                  {loadingId === ind.id ? "Synthesizing..." : "Get Verdict"}
                  <Download className={`w-3.5 h-3.5 group-hover/btn:translate-y-0.5 transition-transform`} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredIndustries.length === 0 && (
          <div className="py-20 flex flex-col items-center justify-center text-slate-600">
            <Search className="w-12 h-12 mb-4 opacity-20" />
            <p className="text-lg">No industry sectors matching your search.</p>
          </div>
        )}

        {/* Disclaimer */}
        <div className="mt-16 p-6 rounded-2xl bg-slate-900/20 border border-slate-800/50 text-center">
          <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-slate-500 mb-2">Technical Disclaimer</p>
          <p className="text-xs text-slate-600 max-w-2xl mx-auto leading-relaxed">
            All reports are dynamically generated by Gemini 1.5 Flash using live RAG context. Financial predictions are based on ensemble ML models (XGBoost/LSTM) and should be used as secondary decision support tools in professional consultancy workflows.
          </p>
        </div>
      </div>
    </div>
  );
}

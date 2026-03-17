'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useSearchParams } from 'next/navigation';
import { 
  Activity, 
  Search, 
  Cpu, 
  Zap, 
  BrainCircuit, 
  LineChart, 
  Globe, 
  ShieldCheck 
} from 'lucide-react';

export default function ConsultancyIntelligencePage({ params }: { params: { industry: string } }) {
  const searchParams = useSearchParams();
  const capability = searchParams.get('capability');
  const [loading, setLoading] = useState(true);
  const [analysisData, setAnalysisData] = useState<any>(null);

  useEffect(() => {
    // Simulate real-time data fetching and LLM inference
    const timer = setTimeout(() => {
      setAnalysisData({
        industry: params.industry,
        capability: capability,
        signals: [
          "Recent market volatility in " + params.industry + " sector.",
          "High correlation between " + capability + " and operational margins.",
          "Competitor A recently integrated RAG-based diagnostics."
        ],
        inference: "The convergence of AI-driven diagnostics and " + capability + " and " + params.industry + " represents a 42% growth opportunity. Enterprises should prioritize vector-engine integration for real-time strategic pivot capabilities."
      });
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [params.industry, capability]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#020617] flex flex-col items-center justify-center p-6">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="mb-8"
        >
          <BrainCircuit className="w-16 h-16 text-emerald-400" />
        </motion.div>
        <h2 className="text-white text-2xl font-black uppercase tracking-[0.2em]">Initializing Intelligence Core...</h2>
        <p className="text-emerald-500/60 mt-4 animate-pulse uppercase tracking-widest text-xs font-bold">Synthesizing real-time market data</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#020617] text-white p-6 lg:p-12">
      <div className="max-w-7xl mx-auto">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16 border-b border-white/5 pb-12">
          <div>
            <div className="flex items-center gap-3 text-emerald-400 text-xs font-black uppercase tracking-[0.4em] mb-4">
              <Activity className="w-4 h-4" /> Strategic Intelligence Report
            </div>
            <h1 className="text-5xl lg:text-7xl font-black tracking-tighter leading-none">
              {params.industry.toUpperCase()} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-white italic">ANALYSIS.</span>
            </h1>
          </div>
          <div className="bg-white/5 backdrop-blur-3xl rounded-3xl p-6 border border-white/10 max-w-sm">
             <span className="text-[10px] font-black text-emerald-500 uppercase tracking-widest block mb-2">Capability Focus</span>
             <p className="text-lg font-bold text-white leading-tight">{capability}</p>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Signal Stream */}
          <div className="lg:col-span-1 flex flex-col gap-6">
             <div className="bg-white/5 rounded-[32px] p-8 border border-white/10 h-full">
                <h3 className="text-xl font-black mb-8 flex items-center gap-3 uppercase tracking-tighter">
                  <Search className="text-emerald-400" /> Signal Stream
                </h3>
                <div className="flex flex-col gap-4">
                  {analysisData.signals.map((signal: string, i: number) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.2 }}
                      className="p-4 bg-black/40 rounded-2xl border border-white/5 text-sm text-slate-400 font-medium leading-relaxed"
                    >
                      {signal}
                    </motion.div>
                  ))}
                </div>
             </div>
          </div>

          {/* Strategic Inference */}
          <div className="lg:col-span-2">
             <div className="bg-gradient-to-br from-emerald-950/40 to-slate-900/40 rounded-[48px] p-10 lg:p-16 border border-emerald-500/20 shadow-2xl relative overflow-hidden h-full">
                {/* Visual Flair */}
                <div className="absolute top-0 right-0 p-12 opacity-10">
                   <Cpu className="w-64 h-64 text-emerald-400" />
                </div>
                
                <div className="relative z-10">
                   <div className="flex items-center gap-4 mb-10">
                      <div className="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center">
                         <Zap className="text-white w-6 h-6" />
                      </div>
                      <h3 className="text-3xl font-black tracking-tighter uppercase">AI Strategic Inference</h3>
                   </div>
                   
                   <p className="text-2xl lg:text-3xl font-bold leading-tight text-white/90 mb-12">
                      {analysisData.inference}
                   </p>

                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-auto">
                      <div className="bg-black/40 p-6 rounded-[24px] border border-white/5">
                         <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest block mb-2">Confidence Score</span>
                         <span className="text-4xl font-black tabular-nums">96.4%</span>
                      </div>
                      <div className="bg-black/40 p-6 rounded-[24px] border border-white/5">
                         <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest block mb-2">Resource Allocation</span>
                         <span className="text-4xl font-black tabular-nums">HIGH</span>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>

        {/* Technical Footer */}
        <footer className="mt-16 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 opacity-30 font-mono text-[10px] tracking-widest">
           <div className="flex gap-8">
              <span>CORE_v2.0 // RAG_VECTOR_ENABLED</span>
              <span>INFERENCE_LATENCY // 420MS</span>
           </div>
           <div>ENGINEERED BY ANKUSH KUMAR SINGH</div>
        </footer>
      </div>
    </main>
  );
}

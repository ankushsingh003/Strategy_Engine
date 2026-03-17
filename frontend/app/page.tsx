"use client";

import Link from "next/link";
import {
  Activity,
  Beaker,
  Printer,
  Cpu,
  Fuel,
  Landmark,
  ShoppingCart,
  Building2,
  Zap,
  Plane,
  Truck,
  Factory,
  Leaf,
  Film,
  HeartPulse,
  BadgeDollarSign,
  Database,
  TrendingUp,
  Layers,
} from "lucide-react";
import { motion, Variants } from "framer-motion";

export default function Home() {
  const industries = [
    { id: "cosmetics",    name: "Cosmetics & Beauty",      icon: <Beaker strokeWidth={2.5} className="w-8 h-8" />,          color: "text-[#143D2C] group-hover:text-white", image: "/images/industries/cosmetics_layout.png" },
    { id: "pharma",       name: "Pharmaceuticals",         icon: <Activity strokeWidth={2.5} className="w-8 h-8" />,         color: "text-[#143D2C] group-hover:text-white", image: "/images/industries/pharma_shelf.png" },
    { id: "tech",         name: "Technology & IT",         icon: <Cpu strokeWidth={2.5} className="w-8 h-8" />,              color: "text-[#143D2C] group-hover:text-white", image: "/images/industries/it_infrastructure.png" },
    { id: "printing",     name: "Commercial Printing",     icon: <Printer strokeWidth={2.5} className="w-8 h-8" />,          color: "text-[#143D2C] group-hover:text-white", image: "/images/industries/large_format_printer.png" },
    { id: "oil",          name: "Oil & Gas",               icon: <Fuel strokeWidth={2.5} className="w-8 h-8" />,             color: "text-[#143D2C] group-hover:text-white", image: "/images/industries/oil_refinery.png" },
    { id: "coal",         name: "Coal & Mining",           icon: <Factory strokeWidth={2.5} className="w-8 h-8" />,          color: "text-[#143D2C] group-hover:text-white", image: "/images/industries/mining_operation.png" },
    { id: "finance",      name: "Finance & Banking",       icon: <Landmark strokeWidth={2.5} className="w-8 h-8" />,         color: "text-[#143D2C] group-hover:text-white", image: "/images/industries/banking_collage.png" },
    { id: "retail",       name: "Retail & E-commerce",     icon: <ShoppingCart strokeWidth={2.5} className="w-8 h-8" />,     color: "text-[#143D2C] group-hover:text-white", image: "/images/industries/retail_layout.png" },
    { id: "real_estate",  name: "Real Estate",             icon: <Building2 strokeWidth={2.5} className="w-8 h-8" />,        color: "text-[#143D2C] group-hover:text-white", image: "/images/industries/real_estate_towers.png" },
    { id: "energy",       name: "Renewable Energy",        icon: <Zap strokeWidth={2.5} className="w-8 h-8" />,              color: "text-[#143D2C] group-hover:text-white", image: "/images/industries/renewable_energy_site.png" },
    { id: "aviation",     name: "Aviation & Aerospace",    icon: <Plane strokeWidth={2.5} className="w-8 h-8" />,            color: "text-[#143D2C] group-hover:text-white", image: "/images/industries/aviation_aerospace.png" },
    { id: "logistics",    name: "Logistics & Supply Chain",icon: <Truck strokeWidth={2.5} className="w-8 h-8" />,            color: "text-[#143D2C] group-hover:text-white", image: "/images/industries/logistics_supply_chain.png" },
    { id: "agriculture",  name: "Agriculture & Food",      icon: <Leaf strokeWidth={2.5} className="w-8 h-8" />,             color: "text-[#143D2C] group-hover:text-white", image: "/images/industries/agriculture_tech.png" },
    { id: "media",        name: "Media & Entertainment",   icon: <Film strokeWidth={2.5} className="w-8 h-8" />,             color: "text-[#143D2C] group-hover:text-white", image: "/images/industries/media_entertainment.png" },
    { id: "healthcare",   name: "Healthcare Services",     icon: <HeartPulse strokeWidth={2.5} className="w-8 h-8" />,       color: "text-[#143D2C] group-hover:text-white", image: "/images/industries/healthcare_tech.png" },
    { id: "insurance",    name: "Insurance & FinTech",     icon: <BadgeDollarSign strokeWidth={2.5} className="w-8 h-8" />,  color: "text-[#143D2C] group-hover:text-white", image: "/images/industries/insurance_lic_theme.png" },
  ];

  const container: Variants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.03 } },
  };
  const item: Variants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
  };

  return (
    <main className="min-h-screen bg-white dark:bg-[#020617] text-[#143D2C] dark:text-white overflow-hidden pb-16 pt-32">
      
      {/* BCG Style Split Hero Section */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center py-12 lg:py-24">
        <div className="relative z-10 flex flex-col items-start gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-[#143D2C] dark:text-[#A1F28B] text-xs font-black uppercase tracking-[0.3em]"
          >
            <div className="w-12 h-[2px] bg-[#A1F28B]" />
            Market Intelligence Platform
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] text-[#143D2C] dark:text-white"
          >
            STRATEGIC <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#143D2C] to-slate-500 dark:from-[#A1F28B] dark:to-white">CLARITY.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 dark:text-slate-400 text-xl max-w-xl leading-relaxed font-medium"
          >
            Harness the power of AI-driven market analysis. We transform complex data signals into high-impact strategic insights for global enterprises.
          </motion.p>
          
          <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ delay: 0.3 }}
             className="flex flex-wrap gap-4"
          >
            <Link 
              href="#industries"
              className="group flex items-center gap-4 bg-[#A1F28B] text-[#143D2C] px-8 py-4 rounded-full font-black uppercase tracking-widest text-sm transition-all hover:scale-105 hover:shadow-2xl"
            >
              Explore Our Expertise
              <div className="w-8 h-8 bg-[#143D2C] text-[#A1F28B] rounded-full flex items-center justify-center transition-transform group-hover:translate-x-1">
                <TrendingUp className="w-4 h-4" />
              </div>
            </Link>
          </motion.div>
        </div>

        {/* Premium Hero Visual Column - Neural Intelligence Console Redesign */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative h-[450px] lg:h-[600px] w-full bg-[#020617] rounded-[32px] overflow-hidden border border-emerald-500/20 shadow-[0_0_50px_rgba(16,185,129,0.1)] group"
        >
          {/* Scanning Beam Animation */}
          <motion.div 
            animate={{ top: ["0%", "100%", "0%"] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent z-20 pointer-events-none"
          />

          <div className="absolute inset-0 p-8 flex flex-col justify-between relative z-10">
            {/* Top Metadata Header */}
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-1">
                <span className="text-[10px] font-black text-emerald-500/60 uppercase tracking-[0.3em]">Global Strategy Unit</span>
                <h3 className="text-3xl font-black text-white tracking-tighter leading-none">
                  NEURAL <br /> INTELLIGENCE <br /> ENGINE
                </h3>
                <div className="flex items-center gap-2 mt-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[9px] font-bold text-emerald-500/80 uppercase tracking-widest">Core Consult Unit Active</span>
                </div>
              </div>

              <div className="text-right font-mono text-[8px] text-emerald-500/40 flex flex-col gap-1">
                <div className="flex justify-between gap-4"><span>SYS_ARCH:</span> <span>VECTOR_RAG_V2</span></div>
                <div className="flex justify-between gap-4"><span>LATENCY:</span> <span>42ms</span></div>
                <div className="flex justify-between gap-4"><span>THROUGHPUT:</span> <span>1.2M/s</span></div>
                <div className="mt-2 text-emerald-500/60">
                  <span>CLUSTER: SLC_FILINGS_DB</span> <br />
                  <span>SYNC: 100%</span> <br />
                  <span>TRACING: LANGFUSE_ENABLED</span>
                </div>
              </div>
            </div>

            {/* Central Neural Sphere Visual */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="relative">
                {/* Outer Rotating Rings */}
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-[-60px] border border-emerald-500/10 rounded-full"
                />
                <motion.div 
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-[-40px] border border-emerald-500/20 rounded-full border-dashed"
                />
                
                {/* Inner Glowing Core */}
                <div className="relative w-40 h-40 flex items-center justify-center">
                  <motion.div 
                    animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute inset-0 bg-emerald-500/20 rounded-full blur-3xl"
                  />
                  <div className="w-32 h-32 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full p-0.5 shadow-[0_0_40px_rgba(52,211,153,0.4)]">
                    <div className="w-full h-full bg-[#020617] rounded-full flex items-center justify-center overflow-hidden relative">
                      <div className="absolute inset-0 opacity-20" 
                           style={{ backgroundImage: `radial-gradient(#10b981 1px, transparent 1px)`, backgroundSize: '8px 8px' }} />
                      <Zap className="w-16 h-16 text-emerald-400 relative z-10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Section: Logs and Metrics */}
            <div className="flex items-end justify-between gap-6">
              {/* Dynamic Log Feed */}
              <div className="flex-1 bg-black/40 backdrop-blur-md rounded-xl p-4 border border-emerald-500/10 font-mono text-[9px] h-24 overflow-hidden relative">
                <motion.div 
                  animate={{ y: [-100, 0] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  className="flex flex-col gap-1.5"
                >
                  <span className="text-amber-500/80">[WARN] High volatility detected,</span>
                  <span className="text-emerald-500/80">[INFO] Generating strategy paths,</span>
                  <span className="text-emerald-400 font-bold">[SUCCESS] Strategic roadmap ready for review</span>
                  <span className="text-slate-500">[DATA] Ingesting real-time market signals...</span>
                  <span className="text-blue-400">[RAG] Vector similarity search complete.</span>
                  <span className="text-emerald-500/80">[INFO] Synthesizing Q4 SEC filings...</span>
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Accuracy & Insights Card */}
              <div className="w-1/2 bg-white/5 backdrop-blur-xl rounded-2xl p-5 border border-white/10 flex flex-col gap-3 shadow-2xl">
                 <div className="flex justify-between items-center border-b border-white/5 pb-2">
                    <div className="flex flex-col">
                       <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Strategy Accuracy:</span>
                       <span className="text-3xl font-black text-white">98.2%</span>
                    </div>
                 </div>
                 <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                       <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Roadside Insights:</span>
                       <span className="text-2xl font-black text-white tabular-nums">3.1M</span>
                    </div>
                    <TrendingUp className="w-6 h-6 text-emerald-400" />
                 </div>
                 <div className="text-[9px] text-center text-emerald-500/60 font-bold uppercase tracking-[0.2em] mt-1 italic">xprilion consultancy</div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Select an Industry Section */}
      <section id="industries" className="bg-[#FBF9F4] dark:bg-[#0a0f1e] py-32 mt-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
              <div className="max-w-2xl">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="text-[#A1F28B] font-black text-xs uppercase tracking-[0.4em] mb-4"
                >
                  Global Sectors
                </motion.div>
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-[#143D2C] dark:text-white leading-[0.9]">
                  INDUSTRIES WE <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-600 dark:from-slate-500 dark:to-white">TRANSFORM.</span>
                </h2>
              </div>
              <p className="text-slate-500 font-medium max-w-sm">Select a sector to deploy our proprietary ML diagnostics and strategic RAG context.</p>
          </div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 no-scrollbar scroll-smooth"
          >
            {industries.map((ind) => (
              <motion.div 
                key={ind.id} 
                variants={item}
                className="flex-shrink-0 w-[280px] md:w-[320px] snap-center"
              >
                <Link
                  href={`/dashboard/${ind.id}`}
                  className="group relative flex flex-col justify-between p-8 h-64 rounded-[28px] bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-white/5 hover:bg-[#143D2C] dark:hover:bg-[#A1F28B] transition-all duration-500 hover:scale-[1.02] cursor-pointer overflow-hidden shadow-sm hover:shadow-2xl"
                >
                  {/* Industry Image Background (if exists) */}
                  {ind.image && (
                    <div className="absolute inset-0 z-0 overflow-hidden">
                       <img 
                        src={ind.image} 
                        alt={ind.name}
                        className="w-full h-full object-cover opacity-[0.15] dark:opacity-[0.25] group-hover:opacity-40 group-hover:scale-110 transition-all duration-700" 
                       />
                       <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/50 to-white dark:via-transparent dark:to-slate-950/80" />
                    </div>
                  )}

                  <div className="relative z-10 w-full h-full flex flex-col justify-between">
                    <div className="absolute top-0 right-0 transform translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                      <TrendingUp className="w-10 h-10 text-[#A1F28B] dark:text-[#143D2C]" />
                    </div>

                    <div className={`p-3 rounded-xl w-fit transition-colors duration-500 ${ind.color} group-hover:bg-white/10`}>
                      {ind.icon}
                    </div>
                    
                    <div>
                      <h2 className="text-xl font-black text-[#143D2C] dark:text-white group-hover:text-white dark:group-hover:text-[#143D2C] transition-colors duration-500 tracking-tight leading-none mb-2">
                        {ind.name}
                      </h2>
                      <div className="flex items-center gap-2 group-hover:gap-4 transition-all duration-500 text-[10px] font-black uppercase tracking-widest text-[#A1F28B] group-hover:text-white/80 dark:group-hover:text-[#143D2C]/80">
                        View Insights <div className="w-6 h-[1px] bg-current" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Corporate Footer Callout */}
      <footer className="max-w-7xl mx-auto px-6 lg:px-8 py-20 text-center">
         <div className="h-px bg-slate-200 dark:bg-white/10 mb-20" />
         <div className="flex flex-col items-center gap-8">
            <span className="text-[10px] font-black text-slate-400 dark:text-white/30 uppercase tracking-[0.5em]">
              Vantage AI · Global Strategic Intelligence
            </span>
            <p className="text-[#143D2C] dark:text-white font-bold text-sm max-w-2xl opacity-60">
              Powered by Gemini 1.5 Flash Enterprise · 4-Model ML Ensemble · Proprietary RAG Vector Engine
            </p>
         </div>
      </footer>
    </main>
  );
}

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
    { id: "cosmetics",    name: "Cosmetics & Beauty",      icon: <Beaker strokeWidth={2.5} className="w-8 h-8" />,          color: "text-[#143D2C] group-hover:text-white" },
    { id: "pharma",       name: "Pharmaceuticals",         icon: <Activity strokeWidth={2.5} className="w-8 h-8" />,         color: "text-[#143D2C] group-hover:text-white" },
    { id: "tech",         name: "Technology & IT",         icon: <Cpu strokeWidth={2.5} className="w-8 h-8" />,              color: "text-[#143D2C] group-hover:text-white" },
    { id: "printing",     name: "Commercial Printing",     icon: <Printer strokeWidth={2.5} className="w-8 h-8" />,          color: "text-[#143D2C] group-hover:text-white" },
    { id: "oil",          name: "Oil & Gas",               icon: <Fuel strokeWidth={2.5} className="w-8 h-8" />,             color: "text-[#143D2C] group-hover:text-white" },
    { id: "coal",         name: "Coal & Mining",           icon: <Factory strokeWidth={2.5} className="w-8 h-8" />,          color: "text-[#143D2C] group-hover:text-white" },
    { id: "finance",      name: "Finance & Banking",       icon: <Landmark strokeWidth={2.5} className="w-8 h-8" />,         color: "text-[#143D2C] group-hover:text-white" },
    { id: "retail",       name: "Retail & E-commerce",     icon: <ShoppingCart strokeWidth={2.5} className="w-8 h-8" />,     color: "text-[#143D2C] group-hover:text-white" },
    { id: "real_estate",  name: "Real Estate",             icon: <Building2 strokeWidth={2.5} className="w-8 h-8" />,        color: "text-[#143D2C] group-hover:text-white" },
    { id: "energy",       name: "Renewable Energy",        icon: <Zap strokeWidth={2.5} className="w-8 h-8" />,              color: "text-[#143D2C] group-hover:text-white" },
    { id: "aviation",     name: "Aviation & Aerospace",    icon: <Plane strokeWidth={2.5} className="w-8 h-8" />,            color: "text-[#143D2C] group-hover:text-white" },
    { id: "logistics",    name: "Logistics & Supply Chain",icon: <Truck strokeWidth={2.5} className="w-8 h-8" />,            color: "text-[#143D2C] group-hover:text-white" },
    { id: "agriculture",  name: "Agriculture & Food",      icon: <Leaf strokeWidth={2.5} className="w-8 h-8" />,             color: "text-[#143D2C] group-hover:text-white" },
    { id: "media",        name: "Media & Entertainment",   icon: <Film strokeWidth={2.5} className="w-8 h-8" />,             color: "text-[#143D2C] group-hover:text-white" },
    { id: "healthcare",   name: "Healthcare Services",     icon: <HeartPulse strokeWidth={2.5} className="w-8 h-8" />,       color: "text-[#143D2C] group-hover:text-white" },
    { id: "insurance",    name: "Insurance & FinTech",     icon: <BadgeDollarSign strokeWidth={2.5} className="w-8 h-8" />,  color: "text-[#143D2C] group-hover:text-white" },
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
            className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] text-[#143D2C] dark:text-white"
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
            <button className="group flex items-center gap-4 bg-[#A1F28B] text-[#143D2C] px-8 py-4 rounded-full font-black uppercase tracking-widest text-sm transition-all hover:scale-105 hover:shadow-2xl">
              Explore Our Expertise
              <div className="w-8 h-8 bg-[#143D2C] text-[#A1F28B] rounded-full flex items-center justify-center transition-transform group-hover:translate-x-1">
                <TrendingUp className="w-4 h-4" />
              </div>
            </button>
          </motion.div>
        </div>

        {/* Hero Visual Column */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative h-[500px] lg:h-[700px] w-full bg-slate-100 dark:bg-slate-900 rounded-[48px] overflow-hidden group shadow-2xl"
        >
          {/* Abstract Pattern overlay */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,#A1F28B_0%,transparent_70%)] group-hover:opacity-40 transition-opacity duration-700" />
          <div className="absolute inset-0 flex items-center justify-center p-12">
            <div className="w-full h-full border-[24px] border-white/30 dark:border-white/5 rounded-[48px] flex items-center justify-center relative">
               <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#A1F28B] rounded-full blur-3xl opacity-20 animate-pulse" />
               <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-blue-500 rounded-full blur-3xl opacity-10 animate-pulse" />
               <Layers className="w-48 h-48 text-[#143D2C]/10 dark:text-white/10" />
               <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                  <span className="text-4xl font-black uppercase tracking-[0.2em] dark:text-white/20 text-[#143D2C]/20 leading-none">Vantage Intelligence</span>
               </div>
            </div>
          </div>
          
          {/* Floating Data Badge */}
          <div className="absolute bottom-12 left-12 bg-white/90 dark:bg-[#143D2C]/90 backdrop-blur-xl p-6 rounded-3xl border border-white/20 shadow-2xl">
            <div className="flex items-center gap-4">
               <div className="h-12 w-12 bg-[#A1F28B] rounded-2xl flex items-center justify-center">
                  <Activity className="w-6 h-6 text-[#143D2C]" />
               </div>
               <div>
                  <div className="text-xs font-black text-slate-400 uppercase tracking-widest">Real-time Signals</div>
                  <div className="text-2xl font-black text-[#143D2C] dark:text-white">12.8M <span className="text-xs text-[#A1F28B]">+24%</span></div>
               </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Select an Industry Section */}
      <section className="bg-[#FBF9F4] dark:bg-[#0a0f1e] py-32 mt-12">
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
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {industries.map((ind) => (
              <motion.div key={ind.id} variants={item}>
                <Link
                  href={`/dashboard/${ind.id}`}
                  className="group relative flex flex-col justify-between p-10 h-72 rounded-[32px] bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-white/5 hover:bg-[#143D2C] dark:hover:bg-[#A1F28B] transition-all duration-500 hover:scale-[1.02] cursor-pointer overflow-hidden shadow-sm hover:shadow-2xl"
                >
                  <div className="absolute top-0 right-0 p-8 transform translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                     <TrendingUp className="w-12 h-12 text-[#A1F28B] dark:text-[#143D2C]" />
                  </div>

                  <div className={`p-4 rounded-2xl w-fit transition-colors duration-500 ${ind.color} group-hover:bg-white/10`}>
                    {ind.icon}
                  </div>
                  
                  <div>
                    <h2 className="text-2xl font-black text-[#143D2C] dark:text-white group-hover:text-white dark:group-hover:text-[#143D2C] transition-colors duration-500 tracking-tight leading-none mb-2">
                      {ind.name}
                    </h2>
                    <div className="flex items-center gap-2 group-hover:gap-4 transition-all duration-500 text-xs font-black uppercase tracking-widest text-[#A1F28B] group-hover:text-white/80 dark:group-hover:text-[#143D2C]/80">
                      View Insights <div className="w-8 h-[2px] bg-current" />
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

import React from 'react';
import { Database, Search, Layers, Bot, Sparkles, ArrowRight, ShieldCheck, Key, Calendar } from 'lucide-react';
import { mongoDbJourney } from '../data/portfolioData';

const iconMap = {
  Database,
  Search,
  Layers,
  Bot,
  Sparkles
};

const MongoDbJourney = () => {
  return (
    <section id="mongodb" className="py-24 relative overflow-hidden">
      
      {/* Background Glow Accent */}
      <div className="apple-glow-pink w-96 h-96 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full apple-glass-pill text-pink-600 dark:text-pink-300 text-xs font-bold uppercase tracking-wider">
            <Database className="w-3.5 h-3.5" />
            <span>MongoDB Certified Modules (5 Verified Credentials)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            {mongoDbJourney.title}
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
            Mastering MongoDB NoSQL databases, high-dimensional vector search, retrieval-augmented generation (RAG), and autonomous AI agent architectures.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-pink-600 to-pink-400 mx-auto rounded-full" />
        </div>

        {/* Visual Progression Pipeline Banner */}
        <div className="mb-14 p-6 rounded-3xl bg-gradient-to-r from-pink-600 via-pink-500 to-pink-700 text-white shadow-xl shadow-pink-500/20">
          <div className="text-xs font-extrabold uppercase tracking-widest text-pink-100 mb-4 text-center">
            MongoDB AI Data Pipeline Architecture
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm font-bold">
            <span className="px-3 py-1.5 rounded-xl bg-white/20 backdrop-blur-md border border-white/30">
              Database
            </span>
            <ArrowRight className="w-4 h-4 text-pink-200" />
            <span className="px-3 py-1.5 rounded-xl bg-white/20 backdrop-blur-md border border-white/30">
              Vector Search
            </span>
            <ArrowRight className="w-4 h-4 text-pink-200" />
            <span className="px-3 py-1.5 rounded-xl bg-white/20 backdrop-blur-md border border-white/30">
              RAG Pipeline
            </span>
            <ArrowRight className="w-4 h-4 text-pink-200" />
            <span className="px-3 py-1.5 rounded-xl bg-white/20 backdrop-blur-md border border-white/30">
              AI Agents
            </span>
            <ArrowRight className="w-4 h-4 text-pink-200" />
            <span className="px-3.5 py-1.5 rounded-xl bg-white text-pink-700 font-extrabold shadow-md">
              Intelligent Apps
            </span>
          </div>
        </div>

        {/* Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 text-left">
          {mongoDbJourney.steps.map((stepItem) => {
            const StepIcon = iconMap[stepItem.icon] || Database;
            return (
              <div
                key={stepItem.step}
                className="apple-glass apple-glass-hover p-6 rounded-3xl shadow-xl flex flex-col justify-between group relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-8 h-8 rounded-full apple-glass-pill text-pink-600 dark:text-pink-300 font-extrabold text-xs flex items-center justify-center">
                      0{stepItem.step}
                    </span>
                    <div className="w-10 h-10 rounded-2xl bg-pink-100 dark:bg-pink-950 text-pink-600 dark:text-pink-400 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                      <StepIcon className="w-5 h-5" />
                    </div>
                  </div>

                  <span className="text-[10px] font-extrabold text-pink-600 dark:text-pink-400 uppercase tracking-wider block mb-1">
                    {stepItem.title}
                  </span>
                  
                  <h3 className="text-sm font-extrabold text-gray-900 dark:text-white mb-2 leading-snug">
                    {stepItem.certTitle || stepItem.desc}
                  </h3>

                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                    {stepItem.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-pink-100 dark:border-gray-800 space-y-2">
                  <div className="flex items-center justify-between text-[10px] font-bold text-gray-500 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-pink-500" />
                      <span>{stepItem.issued}</span>
                    </div>
                  </div>

                  {stepItem.credentialId && (
                    <div className="flex items-center gap-1 font-mono text-[10px] font-bold text-pink-600 dark:text-pink-400 bg-pink-50/60 dark:bg-gray-900/60 px-2.5 py-1 rounded-xl border border-pink-100 dark:border-gray-800">
                      <Key className="w-3 h-3 shrink-0" />
                      <span className="truncate">ID: {stepItem.credentialId}</span>
                    </div>
                  )}

                  <div className="flex items-center gap-1 text-[10px] font-extrabold text-emerald-600 dark:text-emerald-400 pt-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>MongoDB Certified</span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default MongoDbJourney;

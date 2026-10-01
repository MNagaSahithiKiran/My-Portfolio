import React, { useState } from 'react';
import { BookOpen, Cpu, Eye, Globe, Award, CheckCircle2, Star, Zap, Layers, Code, Terminal, Brain, Key } from 'lucide-react';
import { professionalLearning } from '../data/portfolioData';

const iconMap = {
  Cpu,
  Eye,
  Globe,
  Award,
  Zap,
  Layers,
  Code,
  Terminal,
  Brain,
  CheckCircle2
};

const learningCategories = ['All', 'Software Engineering', 'Web Development', 'Hardware & IoT', 'AI & Cloud', 'Innovation'];

const Learning = () => {
  const [activeTab, setActiveTab] = useState('All');

  const filteredItems = activeTab === 'All'
    ? professionalLearning
    : professionalLearning.filter(item => item.category === activeTab);

  return (
    <section id="learning" className="py-24 relative overflow-hidden">
      
      {/* Background Liquid Glow */}
      <div className="apple-glow-pink w-96 h-96 top-20 right-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full apple-glass-pill text-pink-600 dark:text-pink-300 text-xs font-bold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Accredited Courses & Workshops ({professionalLearning.length})</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Professional <span className="gradient-text-apple">Learning & Training</span>
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
            Accredited individual training courses from Infosys Springboard, NASSCOM Foundation / thingQbator, Microsoft, Coursera, Qualcomm, ECLearnix, and Vel Tech TBI.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-pink-600 to-pink-400 mx-auto rounded-full" />
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {learningCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 rounded-2xl text-xs font-extrabold transition-all duration-300 ${
                activeTab === cat
                  ? 'bg-gradient-to-r from-pink-600 to-pink-500 text-white shadow-lg shadow-pink-500/25 scale-105'
                  : 'apple-glass text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Individual Training Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {filteredItems.map((item, index) => {
            const Icon = iconMap[item.icon] || BookOpen;
            return (
              <div
                key={index}
                className="apple-glass apple-glass-hover p-6 rounded-3xl shadow-xl flex flex-col justify-between group relative overflow-hidden"
              >
                {item.scoreBadge && (
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-gradient-to-r from-pink-600 to-pink-500 text-white text-[10px] font-extrabold shadow-md flex items-center gap-1 animate-pulse">
                    <Star className="w-3 h-3 fill-white" />
                    <span>{item.scoreBadge}</span>
                  </div>
                )}

                <div>
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="w-10 h-10 rounded-2xl bg-pink-100 dark:bg-pink-950/80 text-pink-600 dark:text-pink-400 flex items-center justify-center border border-pink-200 dark:border-pink-800 shrink-0 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-extrabold text-pink-600 dark:text-pink-400 uppercase tracking-wider block">
                        {item.organization}
                      </span>
                      <h3 className="text-base font-extrabold text-gray-900 dark:text-white leading-snug line-clamp-2">
                        {item.title}
                      </h3>
                    </div>
                  </div>

                  {item.credentialId && (
                    <div className="mb-3 px-3 py-1 rounded-xl bg-white/60 dark:bg-gray-900/60 border border-pink-100 dark:border-gray-800 text-[10px] font-mono font-bold text-pink-600 dark:text-pink-400 flex items-center gap-1 w-fit">
                      <Key className="w-3 h-3" />
                      <span>ID: {item.credentialId}</span>
                    </div>
                  )}

                  <div className="space-y-2 pt-2">
                    {item.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-gray-700 dark:text-gray-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-pink-500 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-pink-100 dark:border-gray-800/80 text-[11px] font-extrabold text-gray-500 flex items-center justify-between">
                  <span>Verified Course</span>
                  <span className="text-pink-600 dark:text-pink-400">{item.organization.split('/')[0]}</span>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Learning;

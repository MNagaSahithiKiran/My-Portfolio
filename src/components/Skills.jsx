import React, { useState } from 'react';
import { 
  Code, Brain, Globe, Database, Cloud, Wrench, BookOpen, Users, 
  Sparkles, CheckCircle2, Terminal, Cpu
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

const categories = [
  { id: 'all', name: 'All Skills', icon: Sparkles },
  { id: 'programming', name: 'Programming Languages', icon: Code },
  { id: 'aiMl', name: 'AI & Machine Learning', icon: Brain },
  { id: 'webDev', name: 'Web Development', icon: Globe },
  { id: 'databases', name: 'Databases & Vector Search', icon: Database },
  { id: 'cloudAndTech', name: 'Cloud & Emerging Tech', icon: Cloud },
  { id: 'tools', name: 'Dev Tools & Platforms', icon: Wrench },
  { id: 'coreCs', name: 'Core Computer Science', icon: BookOpen },
  { id: 'softSkills', name: 'Soft Skills', icon: Users },
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <section id="skills" className="py-20 bg-pink-50/30 dark:bg-gray-900/50 relative overflow-hidden">
      
      {/* Decorative Radial Background */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-pink-300/15 dark:bg-pink-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-100 dark:bg-pink-950 border border-pink-200 dark:border-pink-800 text-pink-600 dark:text-pink-300 text-xs font-semibold uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
            Technical <span className="bg-gradient-to-r from-pink-600 to-pink-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            A comprehensive matrix of programming languages, AI/ML tools, databases, and software fundamentals.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-pink-600 to-pink-400 mx-auto rounded-full" />
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold flex items-center gap-2 transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-pink-600 to-pink-500 text-white shadow-md shadow-pink-500/25 scale-105'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-pink-100 dark:border-gray-700 hover:border-pink-300 hover:text-pink-600'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-pink-500'}`} />
                <span>{tab.name}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Display Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          
          {/* Programming Languages */}
          {(activeTab === 'all' || activeTab === 'programming') && (
            <div className="p-6 rounded-3xl bg-white dark:bg-gray-800 border border-pink-100 dark:border-gray-700 shadow-md hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-5 pb-3 border-b border-pink-100 dark:border-gray-700">
                <div className="w-10 h-10 rounded-2xl bg-pink-100 dark:bg-pink-950 text-pink-600 dark:text-pink-400 flex items-center justify-center font-bold">
                  <Code className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Programming Languages</h3>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {skillsData.programming.map((item, idx) => (
                  <div key={idx} className="p-3 rounded-2xl bg-pink-50/60 dark:bg-gray-900/60 border border-pink-100 dark:border-gray-700/80 hover:border-pink-300 transition-colors flex flex-col">
                    <span className="font-bold text-sm text-gray-800 dark:text-gray-100">{item.name}</span>
                    <span className="text-[10px] text-pink-600 dark:text-pink-400 font-medium">{item.category}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Artificial Intelligence & Machine Learning */}
          {(activeTab === 'all' || activeTab === 'aiMl') && (
            <div className="p-6 rounded-3xl bg-white dark:bg-gray-800 border border-pink-100 dark:border-gray-700 shadow-md hover:shadow-xl transition-all duration-300 md:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-3 mb-5 pb-3 border-b border-pink-100 dark:border-gray-700">
                <div className="w-10 h-10 rounded-2xl bg-pink-100 dark:bg-pink-950 text-pink-600 dark:text-pink-400 flex items-center justify-center font-bold">
                  <Brain className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">AI & Machine Learning</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillsData.aiMl.map((item, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-full bg-gradient-to-r from-pink-50 to-pink-100/70 dark:from-gray-900 dark:to-pink-950/40 border border-pink-200/80 dark:border-pink-800 text-xs font-semibold text-gray-800 dark:text-pink-200 flex items-center gap-1.5"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-pink-500" />
                    <span>{item.name}</span>
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Web Development */}
          {(activeTab === 'all' || activeTab === 'webDev') && (
            <div className="p-6 rounded-3xl bg-white dark:bg-gray-800 border border-pink-100 dark:border-gray-700 shadow-md hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-5 pb-3 border-b border-pink-100 dark:border-gray-700">
                <div className="w-10 h-10 rounded-2xl bg-pink-100 dark:bg-pink-950 text-pink-600 dark:text-pink-400 flex items-center justify-center font-bold">
                  <Globe className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Web Development</h3>
              </div>
              <div className="space-y-2.5">
                {skillsData.webDev.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-2.5 rounded-xl bg-pink-50/50 dark:bg-gray-900/50 border border-pink-100 dark:border-gray-800">
                    <span className="text-xs font-semibold text-gray-800 dark:text-gray-200">{item.name}</span>
                    <span className="px-2 py-0.5 rounded-md bg-white dark:bg-gray-800 text-[10px] font-bold text-pink-600 dark:text-pink-400 border border-pink-100 dark:border-gray-700">
                      {item.type}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Databases */}
          {(activeTab === 'all' || activeTab === 'databases') && (
            <div className="p-6 rounded-3xl bg-white dark:bg-gray-800 border border-pink-100 dark:border-gray-700 shadow-md hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-5 pb-3 border-b border-pink-100 dark:border-gray-700">
                <div className="w-10 h-10 rounded-2xl bg-pink-100 dark:bg-pink-950 text-pink-600 dark:text-pink-400 flex items-center justify-center font-bold">
                  <Database className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Databases & Vector Search</h3>
              </div>
              <div className="space-y-2.5">
                {skillsData.databases.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-2.5 rounded-xl bg-pink-50/50 dark:bg-gray-900/50 border border-pink-100 dark:border-gray-800">
                    <span className="text-xs font-semibold text-gray-800 dark:text-gray-200">{item.name}</span>
                    <span className="px-2 py-0.5 rounded-md bg-white dark:bg-gray-800 text-[10px] font-bold text-pink-600 dark:text-pink-400 border border-pink-100 dark:border-gray-700">
                      {item.type}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Cloud & Emerging */}
          {(activeTab === 'all' || activeTab === 'cloudAndTech') && (
            <div className="p-6 rounded-3xl bg-white dark:bg-gray-800 border border-pink-100 dark:border-gray-700 shadow-md hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-5 pb-3 border-b border-pink-100 dark:border-gray-700">
                <div className="w-10 h-10 rounded-2xl bg-pink-100 dark:bg-pink-950 text-pink-600 dark:text-pink-400 flex items-center justify-center font-bold">
                  <Cloud className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Cloud & Emerging Tech</h3>
              </div>
              <div className="space-y-2.5">
                {skillsData.cloudAndTech.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-2.5 rounded-xl bg-pink-50/50 dark:bg-gray-900/50 border border-pink-100 dark:border-gray-800">
                    <span className="text-xs font-semibold text-gray-800 dark:text-gray-200">{item.name}</span>
                    <span className="px-2 py-0.5 rounded-md bg-white dark:bg-gray-800 text-[10px] font-bold text-pink-600 dark:text-pink-400 border border-pink-100 dark:border-gray-700">
                      {item.focus}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Dev Tools */}
          {(activeTab === 'all' || activeTab === 'tools') && (
            <div className="p-6 rounded-3xl bg-white dark:bg-gray-800 border border-pink-100 dark:border-gray-700 shadow-md hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-5 pb-3 border-b border-pink-100 dark:border-gray-700">
                <div className="w-10 h-10 rounded-2xl bg-pink-100 dark:bg-pink-950 text-pink-600 dark:text-pink-400 flex items-center justify-center font-bold">
                  <Wrench className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Dev Tools & Platforms</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillsData.tools.map((item, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-xl bg-pink-50 dark:bg-gray-900 border border-pink-200 dark:border-pink-900 text-xs font-semibold text-gray-800 dark:text-gray-200"
                  >
                    {item.name}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Core Computer Science */}
          {(activeTab === 'all' || activeTab === 'coreCs') && (
            <div className="p-6 rounded-3xl bg-white dark:bg-gray-800 border border-pink-100 dark:border-gray-700 shadow-md hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-5 pb-3 border-b border-pink-100 dark:border-gray-700">
                <div className="w-10 h-10 rounded-2xl bg-pink-100 dark:bg-pink-950 text-pink-600 dark:text-pink-400 flex items-center justify-center font-bold">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Core Computer Science</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillsData.coreCs.map((item, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-full bg-pink-100/70 dark:bg-pink-950/80 text-pink-700 dark:text-pink-300 text-xs font-semibold"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Soft Skills */}
          {(activeTab === 'all' || activeTab === 'softSkills') && (
            <div className="p-6 rounded-3xl bg-white dark:bg-gray-800 border border-pink-100 dark:border-gray-700 shadow-md hover:shadow-xl transition-all duration-300">
              <div className="flex items-center gap-3 mb-5 pb-3 border-b border-pink-100 dark:border-gray-700">
                <div className="w-10 h-10 rounded-2xl bg-pink-100 dark:bg-pink-950 text-pink-600 dark:text-pink-400 flex items-center justify-center font-bold">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">Professional & Soft Skills</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillsData.softSkills.map((item, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-full bg-white dark:bg-gray-900 border border-pink-200 dark:border-pink-900 text-xs font-medium text-gray-700 dark:text-gray-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};

export default Skills;

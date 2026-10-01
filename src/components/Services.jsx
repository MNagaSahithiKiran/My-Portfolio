import React from 'react';
import { 
  Globe, Terminal, Brain, Eye, Database, Layout, Sparkles, CheckCircle2, Code 
} from 'lucide-react';
import { servicesData } from '../data/portfolioData';

const iconMap = {
  Code,
  Terminal,
  Brain,
  Eye,
  Database,
  Globe,
  Sparkles,
  CheckCircle2
};

const Services = () => {
  return (
    <section className="py-20 bg-pink-50/30 dark:bg-gray-900/50 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-100 dark:bg-pink-950 border border-pink-200 dark:border-pink-800 text-pink-600 dark:text-pink-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
            What I <span className="bg-gradient-to-r from-pink-600 to-pink-400 bg-clip-text text-transparent">Can Do</span>
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Practical skills, development capabilities, and technical solutions I deliver as a CSE student.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-pink-600 to-pink-400 mx-auto rounded-full" />
        </div>

        {/* 8 Capability Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {servicesData.map((service, idx) => {
            const Icon = iconMap[service.icon] || Code;
            return (
              <div
                key={idx}
                className="glass-card p-6 rounded-3xl border border-pink-200 dark:border-gray-800 shadow-sm hover:shadow-xl hover:border-pink-400 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-pink-100 dark:bg-pink-950 text-pink-600 dark:text-pink-400 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-pink-600 group-hover:text-white transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-pink-100 dark:border-gray-800 text-[11px] font-semibold text-pink-600 dark:text-pink-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Technical Competency</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Services;

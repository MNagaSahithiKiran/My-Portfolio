import React from 'react';
import { 
  Brain, Code2, Globe, Terminal, Database, Cloud, Cpu, Sparkles, 
  CheckCircle2, User, Target
} from 'lucide-react';
import { personalInfo, aboutHighlights } from '../data/portfolioData';

const iconMap = {
  Brain,
  Code2,
  Globe,
  Terminal,
  Database,
  Cloud,
  Cpu,
  Sparkles
};

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      
      {/* Background Liquid Glow */}
      <div className="apple-glow-pink w-96 h-96 top-10 right-0" />
      <div className="apple-glow-pink w-96 h-96 bottom-10 left-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full apple-glass-pill text-pink-600 dark:text-pink-300 text-xs font-bold uppercase tracking-wider">
            <User className="w-3.5 h-3.5" />
            <span>Get To Know Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            About <span className="gradient-text-apple">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-pink-600 to-pink-400 mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto space-y-8 mb-16 text-left">
          <div className="space-y-5">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2 tracking-tight">
              <span>Passionate Learner & Future Software Professional</span>
              <Sparkles className="w-5 h-5 text-pink-500" />
            </h3>

            {personalInfo.aboutParagraphs.map((para, index) => (
              <p 
                key={index} 
                className="text-gray-700 dark:text-gray-300 text-base leading-relaxed"
              >
                {para}
              </p>
            ))}

            {/* Quick Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-3xl apple-glass text-left">
                <div className="text-xs font-bold text-pink-600 dark:text-pink-400 uppercase tracking-wider mb-1">
                  Location
                </div>
                <div className="text-sm font-extrabold text-gray-900 dark:text-white">
                  Chennai, India
                </div>
              </div>

              <div className="p-4 rounded-3xl apple-glass text-left">
                <div className="text-xs font-bold text-pink-600 dark:text-pink-400 uppercase tracking-wider mb-1">
                  Education
                </div>
                <div className="text-sm font-extrabold text-gray-900 dark:text-white">
                  B.Tech CSE (2023–27)
                </div>
              </div>

              <div className="p-4 rounded-3xl apple-glass text-left">
                <div className="text-xs font-bold text-pink-600 dark:text-pink-400 uppercase tracking-wider mb-1">
                  Primary Focus
                </div>
                <div className="text-sm font-extrabold text-gray-900 dark:text-white">
                  AI / ML & Software
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 8 Highlight Cards Grid - Apple Glass Style */}
        <div className="pt-6">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-8 text-left flex items-center gap-2 tracking-tight">
            <Target className="w-5 h-5 text-pink-600" />
            <span>Technical Capabilities & Focus Areas</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {aboutHighlights.map((item, index) => {
              const IconComponent = iconMap[item.icon] || Sparkles;
              return (
                <div
                  key={index}
                  className="p-6 rounded-3xl apple-glass apple-glass-hover text-left group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-pink-100 dark:bg-pink-950 text-pink-600 dark:text-pink-400 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-gradient-to-tr group-hover:from-pink-600 group-hover:to-pink-400 group-hover:text-white transition-all duration-300 shadow-md">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;

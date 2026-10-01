import React from 'react';
import { Cpu, Brain, Globe, Database, Cloud, Wrench, Sparkles } from 'lucide-react';

const stackGroups = [
  {
    category: "AI / Machine Learning",
    icon: Brain,
    items: ["Python", "Artificial Intelligence", "Machine Learning", "NLP", "Computer Vision", "RAG Pipeline", "AI Agents"]
  },
  {
    category: "Web Development",
    icon: Globe,
    items: ["HTML5", "CSS3", "JavaScript (ES6+)", "WordPress", "Responsive UI"]
  },
  {
    category: "Databases & Storage",
    icon: Database,
    items: ["MongoDB", "MySQL", "Distributed Databases", "Vector Search"]
  },
  {
    category: "Cloud & Services",
    icon: Cloud,
    items: ["Microsoft Azure", "Azure Cognitive Services", "Cloud AI APIs"]
  },
  {
    category: "Development Tools",
    icon: Wrench,
    items: ["Git", "GitHub", "VS Code", "Figma", "MongoDB Compass"]
  }
];

const TechStack = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-950 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-100 dark:bg-pink-950 border border-pink-200 dark:border-pink-800 text-pink-600 dark:text-pink-300 text-xs font-semibold uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technology Ecosystem</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
            My Tech <span className="bg-gradient-to-r from-pink-600 to-pink-400 bg-clip-text text-transparent">Stack Cloud</span>
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Languages, frameworks, database engines, and AI platforms powering my work.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-pink-600 to-pink-400 mx-auto rounded-full" />
        </div>

        {/* Stack Cloud Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {stackGroups.map((group, idx) => {
            const GroupIcon = group.icon;
            return (
              <div
                key={idx}
                className="glass-card p-6 rounded-3xl border border-pink-200 dark:border-gray-800 shadow-sm hover:shadow-xl hover:border-pink-400 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-5 pb-3 border-b border-pink-100 dark:border-gray-800">
                  <div className="w-10 h-10 rounded-2xl bg-pink-100 dark:bg-pink-950 text-pink-600 dark:text-pink-400 flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
                    <GroupIcon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 dark:text-white">
                    {group.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.items.map((item, itemIdx) => (
                    <span
                      key={itemIdx}
                      className="px-3 py-1.5 rounded-2xl bg-pink-50/80 dark:bg-gray-900/80 border border-pink-200/70 dark:border-pink-900/60 text-xs font-semibold text-gray-800 dark:text-pink-200 hover:bg-gradient-to-r hover:from-pink-600 hover:to-pink-400 hover:text-white hover:border-transparent transition-all duration-200 shadow-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default TechStack;

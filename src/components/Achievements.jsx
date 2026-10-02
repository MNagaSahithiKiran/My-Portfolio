import React, { useState, useEffect, useRef } from 'react';
import { GitBranch, Award, BookOpen, Cpu, Sparkles } from 'lucide-react';
import { statsData } from '../data/portfolioData';

const iconMap = {
  GitBranch,
  Award,
  BookOpen,
  Cpu
};

const Achievements = () => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const [counts, setCounts] = useState(statsData.map(() => 0));
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          
          statsData.forEach((stat, idx) => {
            let start = 0;
            const end = stat.value;
            const duration = 1500;
            const increment = Math.max(1, Math.floor(end / 30));
            const stepTime = Math.abs(Math.floor(duration / (end / increment)));

            const timer = setInterval(() => {
              start += increment;
              if (start >= end) {
                start = end;
                clearInterval(timer);
              }
              setCounts((prev) => {
                const next = [...prev];
                next[idx] = start;
                return next;
              });
            }, stepTime);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section id="achievements" ref={sectionRef} className="py-20 bg-white dark:bg-gray-950 relative overflow-hidden">

      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-100 dark:bg-pink-950 border border-pink-200 dark:border-pink-800 text-pink-600 dark:text-pink-300 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Verified Metrics</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
            Key <span className="bg-gradient-to-r from-pink-600 to-pink-400 bg-clip-text text-transparent">Achievements & Statistics</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-pink-600 to-pink-400 mx-auto rounded-full" />
        </div>

        {/* Counter Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((stat, idx) => {
            const Icon = iconMap[stat.icon] || Sparkles;
            return (
              <div
                key={idx}
                className="glass-card p-6 sm:p-8 rounded-3xl border border-pink-200 dark:border-gray-800 shadow-md hover:shadow-2xl hover:border-pink-400 transition-all duration-300 text-center group"
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-pink-600 to-pink-400 text-white flex items-center justify-center mx-auto mb-4 shadow-md group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>

                <div className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-pink-600 via-pink-500 to-pink-400 bg-clip-text text-transparent mb-2">
                  {counts[idx]}
                  {stat.suffix}
                </div>

                <div className="text-xs sm:text-sm font-bold text-gray-800 dark:text-gray-200">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Achievements;

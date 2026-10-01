import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, CheckCircle } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-950 relative overflow-hidden">
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-pink-200/20 dark:bg-pink-900/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-100 dark:bg-pink-950 border border-pink-200 dark:border-pink-800 text-pink-600 dark:text-pink-300 text-xs font-semibold uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white">
            Education <span className="bg-gradient-to-r from-pink-600 to-pink-400 bg-clip-text text-transparent">Timeline</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-pink-600 to-pink-400 mx-auto rounded-full" />
        </div>

        {/* Education Timeline Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative pl-6 sm:pl-8 border-l-2 border-pink-300 dark:border-pink-800 space-y-12 text-left">
            
            {/* Timeline Node */}
            <div className="relative group">
              
              {/* Pink Glowing Node Bullet */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-white dark:bg-gray-900 border-4 border-pink-600 flex items-center justify-center group-hover:scale-125 transition-transform duration-300 shadow-md shadow-pink-500/30">
                <div className="w-2 h-2 rounded-full bg-pink-500" />
              </div>

              {/* Education Card */}
              <div className="glass-card p-6 sm:p-8 rounded-3xl border border-pink-200 dark:border-gray-800 shadow-lg hover:shadow-2xl hover:border-pink-400 transition-all duration-300">
                
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-pink-600 to-pink-400 text-white flex items-center justify-center shadow-md">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="px-3 py-1 rounded-full bg-pink-100 dark:bg-pink-950 text-pink-700 dark:text-pink-300 text-xs font-bold uppercase tracking-wide">
                        Undergraduate Degree
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mt-1">
                        {personalInfo.degree}
                      </h3>
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end text-xs font-semibold text-pink-600 dark:text-pink-400 bg-pink-50 dark:bg-gray-800 px-4 py-2 rounded-2xl border border-pink-100 dark:border-gray-700">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{personalInfo.yearRange}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400 mt-1 font-normal">
                      <MapPin className="w-3.5 h-3.5 text-pink-500" />
                      <span>{personalInfo.location}</span>
                    </div>
                  </div>
                </div>

                <div className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
                  {personalInfo.department}
                </div>

                <div className="text-sm font-medium text-pink-600 dark:text-pink-400 mb-6 flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  <span>{personalInfo.institution}</span>
                </div>

                {/* Relevant Coursework */}
                <div className="pt-4 border-t border-pink-100 dark:border-gray-800">
                  <h4 className="text-xs font-bold uppercase text-gray-500 dark:text-gray-400 tracking-wider mb-3">
                    Key Academic Foundation & Focus
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Data Structures & Algorithms',
                      'Artificial Intelligence & ML',
                      'Object-Oriented Programming',
                      'Database Management Systems (DBMS)',
                      'Web Technologies',
                      'Operating Systems',
                      'Computer Networks',
                      'Software Engineering'
                    ].map((subject, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 rounded-full bg-pink-50 dark:bg-gray-800/80 border border-pink-200/60 dark:border-pink-900/50 text-xs font-medium text-gray-700 dark:text-gray-300 flex items-center gap-1.5"
                      >
                        <CheckCircle className="w-3 h-3 text-pink-500" />
                        <span>{subject}</span>
                      </span>
                    ))}
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;

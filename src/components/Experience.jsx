import React from 'react';
import { Briefcase, Calendar, Building2, CheckCircle2, Clock, Cpu, Award } from 'lucide-react';
import { internshipExperiences } from '../data/portfolioData';

const Experience = () => {
  const now = new Date();

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      
      {/* Background Liquid Glow */}
      <div className="apple-glow-pink w-96 h-96 bottom-10 right-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full apple-glass-pill text-pink-600 dark:text-pink-300 text-xs font-bold uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Work & Professional Internships ({internshipExperiences.length})</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Internships & <span className="gradient-text-apple">Experience</span>
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
            Industry internship experience across Python Development, Prompt Engineering, Networking, and Web Development.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-pink-600 to-pink-400 mx-auto rounded-full" />
        </div>

        {/* Vertical Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative pl-6 sm:pl-8 border-l-2 border-pink-300 dark:border-pink-800 space-y-12 text-left">
            
            {internshipExperiences.map((exp) => {
              const isOngoing = exp.autoStatus && exp.endDate && now <= new Date(exp.endDate);

              return (
                <div key={exp.id} className="relative group">
                  
                  {/* Timeline Bullet Node */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-3 w-6 h-6 rounded-full bg-white dark:bg-gray-900 border-4 border-pink-600 flex items-center justify-center shadow-md shadow-pink-500/30 group-hover:scale-125 transition-transform">
                    <div className="w-2 h-2 rounded-full bg-pink-500" />
                  </div>

                  {/* Experience Apple Glass Card */}
                  <div className="apple-glass apple-glass-hover p-6 sm:p-8 rounded-3xl shadow-xl">
                    
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-2xl bg-pink-100 dark:bg-pink-950 text-pink-600 dark:text-pink-400 flex items-center justify-center font-bold shadow-md">
                          <Building2 className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
                            {exp.role}
                          </h3>
                          <div className="flex flex-wrap items-center gap-2 mt-1">
                            <span className="text-base font-bold text-pink-600 dark:text-pink-400">
                              {exp.company}
                            </span>
                            {exp.domainFocus && (
                              <span className="px-2.5 py-0.5 rounded-full bg-pink-100 dark:bg-pink-950/80 text-pink-700 dark:text-pink-300 text-[11px] font-extrabold border border-pink-200 dark:border-pink-800">
                                {exp.domainFocus}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Status Badge */}
                      <div className="flex items-center gap-2">
                        <span className={`px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider flex items-center gap-1.5 shadow-sm ${
                          isOngoing 
                            ? 'bg-pink-100 dark:bg-pink-950 text-pink-700 dark:text-pink-300 border border-pink-300 dark:border-pink-800 animate-pulse'
                            : 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800'
                        }`}>
                          {isOngoing ? (
                            <>
                              <Clock className="w-3.5 h-3.5 text-pink-600" />
                              <span>Ongoing Internship</span>
                            </>
                          ) : (
                            <>
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                              <span>{exp.statusText || 'Completed Experience'}</span>
                            </>
                          )}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 mb-5">
                      <div className="flex items-center gap-2 text-xs font-bold text-gray-600 dark:text-gray-400 bg-white/70 dark:bg-gray-900/70 px-3.5 py-1.5 rounded-xl border border-pink-100 dark:border-gray-800">
                        <Calendar className="w-3.5 h-3.5 text-pink-500" />
                        <span>{exp.startDateFormatted} {exp.endDateFormatted && exp.endDateFormatted !== exp.startDateFormatted ? `– ${exp.endDateFormatted}` : ''}</span>
                      </div>

                      {exp.credentialId && (
                        <a
                          href="#certifications"
                          className="flex items-center gap-1.5 text-xs font-bold text-pink-700 dark:text-pink-300 bg-pink-100/90 dark:bg-pink-950/90 hover:bg-pink-600 hover:text-white px-3.5 py-1.5 rounded-xl border border-pink-300 dark:border-pink-800 shadow-sm transition-all duration-300 hover:scale-105"
                        >
                          <Award className="w-3.5 h-3.5 text-pink-600 dark:text-pink-400" />
                          <span>{exp.certBadgeText || "SkillCraft Prompt Certificate"}</span>
                        </a>
                      )}
                    </div>

                    <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed bg-white/60 dark:bg-gray-900/60 p-4 rounded-2xl border border-pink-100/80 dark:border-gray-800 font-normal">
                      "{exp.description}"
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2 pt-2">
                      {exp.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-3 py-1 rounded-full apple-glass-pill text-xs font-bold text-gray-800 dark:text-pink-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                  </div>

                </div>
              );
            })}

          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;

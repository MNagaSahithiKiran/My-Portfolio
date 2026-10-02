import React, { useState } from 'react';
import { FileText, Download, Eye, ExternalLink, CheckCircle2, X } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const ResumeSection = () => {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <section id="resume" className="py-20 bg-pink-50/40 dark:bg-gray-900/60 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Large Pink Gradient Container */}
        <div className="relative rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-pink-600 via-pink-500 to-pink-700 text-white shadow-2xl overflow-hidden text-left">
          
          {/* Subtle background circles */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider border border-white/30">
                <FileText className="w-3.5 h-3.5" />
                <span>Curriculum Vitae</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                My Professional <span className="text-pink-200">Resume</span>
              </h2>

              <p className="text-sm sm:text-base text-pink-100 max-w-2xl leading-relaxed">
                Explore my verified academic background, technical skills, certifications, projects, internship experience at SkillNexis, QSkill, SkillCraft, and Cisco, and professional learning journey.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button
                  onClick={() => setShowPreview(true)}
                  className="px-6 py-3.5 rounded-full bg-white text-pink-700 font-extrabold text-xs sm:text-sm hover:bg-pink-50 shadow-lg hover:scale-105 transition-all duration-200 flex items-center gap-2"
                >
                  <Eye className="w-4 h-4 text-pink-600" />
                  <span>View Official Resume</span>
                </button>

                <a
                  href={personalInfo.resumePdf}
                  download="Meesaragandla_Naga_Sahithi_Kiran_Resume.pdf"
                  className="px-6 py-3.5 rounded-full bg-pink-900/40 backdrop-blur-md border border-white/40 text-white font-bold text-xs sm:text-sm hover:bg-white/20 transition-all duration-200 flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume (PDF)</span>
                </a>
              </div>

            </div>

            {/* Resume Document Card Thumbnail */}
            <div className="lg:col-span-5 flex justify-center">
              <div 
                onClick={() => setShowPreview(true)}
                className="w-64 sm:w-72 rounded-2xl bg-white shadow-2xl border-4 border-white/60 cursor-pointer hover:rotate-1 hover:scale-105 transition-all duration-300 relative group overflow-hidden"
              >
                <div className="p-2 bg-gray-50 border-b border-gray-200 flex items-center justify-between text-[11px] font-bold text-pink-700">
                  <span className="flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-pink-600" />
                    <span>Official Resume</span>
                  </span>
                  <span className="text-[10px] bg-pink-100 text-pink-700 px-2 py-0.5 rounded-full font-bold">PDF</span>
                </div>

                <div className="relative overflow-hidden bg-white">
                  <img
                    src={personalInfo.resumePages[0]}
                    alt="Resume Preview Page 1"
                    className="w-full h-auto object-cover object-top max-h-84 opacity-95 group-hover:opacity-100 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pink-900/80 via-transparent to-transparent flex items-end justify-center pb-4 opacity-90 group-hover:opacity-100 transition-opacity">
                    <span className="px-4 py-2 rounded-full bg-white text-pink-700 font-extrabold text-xs shadow-lg flex items-center gap-2 group-hover:scale-105 transition-transform">
                      <Eye className="w-3.5 h-3.5" />
                      <span>Click to View Full Document</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Full Document Viewer Modal */}
      {showPreview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
          <div className="bg-white dark:bg-gray-950 max-w-4xl w-full p-4 sm:p-6 rounded-3xl border-2 border-pink-300 dark:border-pink-900 shadow-2xl relative my-6 text-left animate-in fade-in zoom-in duration-200">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-gray-200 dark:border-gray-800">
              <div className="space-y-1">
                <span className="text-xs font-extrabold text-pink-600 dark:text-pink-400 uppercase tracking-wider block">
                  Official Document Viewer
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 dark:text-white">
                  {personalInfo.fullName} — Resume
                </h3>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.resumePdf}
                  download="Meesaragandla_Naga_Sahithi_Kiran_Resume.pdf"
                  className="px-4 py-2 rounded-xl bg-pink-100 dark:bg-pink-950 text-pink-700 dark:text-pink-300 text-xs font-bold hover:bg-pink-200 flex items-center gap-1.5 transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Download</span>
                </a>
                <button
                  onClick={() => setShowPreview(false)}
                  className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Multi-Page Resume Display */}
            <div className="space-y-6 max-h-[75vh] overflow-y-auto pr-2 rounded-2xl">
              {personalInfo.resumePages.map((pageSrc, idx) => (
                <div key={idx} className="rounded-2xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-800 bg-white">
                  <div className="px-4 py-2 bg-gray-100 dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 text-xs font-bold text-gray-600 dark:text-gray-400 flex items-center justify-between">
                    <span>Page {idx + 1} of {personalInfo.resumePages.length}</span>
                    <span className="text-pink-600 dark:text-pink-400 font-mono text-[11px]">Meesaragandla Naga Sahithi Kiran</span>
                  </div>
                  <img
                    src={pageSrc}
                    alt={`Resume Page ${idx + 1}`}
                    className="w-full h-auto object-contain"
                  />
                </div>
              ))}
            </div>

            {/* Modal Footer */}
            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-800 flex flex-wrap items-center justify-between gap-3 text-xs">
              <span className="text-gray-500 dark:text-gray-400 font-medium">
                Official Curriculum Vitae (B.Tech CSE, 2023–2027)
              </span>

              <button
                onClick={() => setShowPreview(false)}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-pink-600 to-pink-500 text-white font-extrabold shadow-md hover:from-pink-700 hover:to-pink-600 transition-all"
              >
                Close Preview
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

export default ResumeSection;


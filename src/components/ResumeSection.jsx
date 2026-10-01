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
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider border border-white/30">
                <FileText className="w-3.5 h-3.5" />
                <span>Curriculum Vitae</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                My Professional <span className="text-pink-200">Resume</span>
              </h2>

              <p className="text-sm sm:text-base text-pink-100 max-w-2xl leading-relaxed">
                Explore my academic background, technical skills, certifications, projects, internship experience at SkillNexis, and professional learning journey.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button
                  onClick={() => setShowPreview(true)}
                  className="px-6 py-3.5 rounded-full bg-white text-pink-700 font-extrabold text-xs sm:text-sm hover:bg-pink-50 shadow-lg hover:scale-105 transition-all duration-200 flex items-center gap-2"
                >
                  <Eye className="w-4 h-4 text-pink-600" />
                  <span>View Interactive Resume</span>
                </button>

                <a
                  href="/profile.jpg"
                  download="Meesaragandla_Naga_Sahithi_Kiran_Resume.jpg"
                  className="px-6 py-3.5 rounded-full bg-pink-900/40 backdrop-blur-md border border-white/40 text-white font-bold text-xs sm:text-sm hover:bg-white/20 transition-all duration-200 flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Profile Resume</span>
                </a>
              </div>
            </div>

            {/* Quick Preview Thumbnail */}
            <div className="lg:col-span-4 flex justify-center">
              <div 
                onClick={() => setShowPreview(true)}
                className="w-56 h-72 rounded-2xl bg-white text-gray-900 p-4 shadow-2xl border-4 border-white/50 cursor-pointer hover:rotate-2 hover:scale-105 transition-all duration-300 relative group overflow-hidden"
              >
                <div className="text-[10px] font-bold text-pink-600 uppercase border-b pb-1 mb-2">
                  RESUME PREVIEW
                </div>
                <div className="text-xs font-extrabold">{personalInfo.fullName}</div>
                <div className="text-[9px] text-gray-500 mb-3">{personalInfo.tagline}</div>
                
                <div className="space-y-2 text-[8px] text-gray-600">
                  <div className="h-1.5 bg-pink-100 rounded w-3/4" />
                  <div className="h-1.5 bg-gray-200 rounded w-full" />
                  <div className="h-1.5 bg-gray-200 rounded w-5/6" />
                  <div className="h-1.5 bg-pink-100 rounded w-2/3" />
                  <div className="h-1.5 bg-gray-200 rounded w-full" />
                  <div className="h-1.5 bg-gray-200 rounded w-4/5" />
                </div>

                <div className="absolute inset-0 bg-pink-600/80 text-white flex items-center justify-center font-bold text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                  Click to View Full
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Interactive Modal Drawer */}
      {showPreview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md animate-fade-in">
          <div className="bg-white dark:bg-gray-900 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 border border-pink-200 dark:border-pink-900 shadow-2xl relative text-left">
            
            <button
              onClick={() => setShowPreview(false)}
              className="absolute top-4 right-4 p-2 rounded-full text-gray-400 hover:text-gray-700 dark:hover:text-white hover:bg-pink-50 dark:hover:bg-gray-800 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="border-b border-pink-100 dark:border-gray-800 pb-4 mb-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                {personalInfo.fullName}
              </h3>
              <p className="text-xs font-semibold text-pink-600 dark:text-pink-400">
                {personalInfo.tagline}
              </p>
            </div>

            <div className="space-y-6 text-sm text-gray-700 dark:text-gray-300">
              
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white text-base mb-2 border-b border-pink-200 dark:border-pink-900 pb-1">
                  Education
                </h4>
                <div className="font-semibold">{personalInfo.degree} - {personalInfo.department}</div>
                <div className="text-xs text-pink-600 font-medium">{personalInfo.institution} ({personalInfo.yearRange})</div>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 dark:text-white text-base mb-2 border-b border-pink-200 dark:border-pink-900 pb-1">
                  Internship Experience
                </h4>
                <div className="font-semibold">Python Developer Intern @ SkillNexis</div>
                <div className="text-xs text-gray-500">August 19, 2026 – September 30, 2026</div>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 dark:text-white text-base mb-2 border-b border-pink-200 dark:border-pink-900 pb-1">
                  Core Skills
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {['Python', 'Java', 'C', 'JavaScript', 'AI/ML', 'MongoDB', 'RAG', 'Vector Search', 'Azure', 'Computer Vision'].map((s, idx) => (
                    <span key={idx} className="px-2.5 py-1 bg-pink-50 dark:bg-gray-800 rounded-lg text-xs font-medium text-pink-700 dark:text-pink-300">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 dark:text-white text-base mb-2 border-b border-pink-200 dark:border-pink-900 pb-1">
                  Certifications & Learning
                </h4>
                <ul className="list-disc list-inside space-y-1 text-xs text-gray-600 dark:text-gray-300">
                  <li>AI Data Strategy with MongoDB (ID: MDBu21699ew99)</li>
                  <li>Build a Free Website with WordPress (Coursera ID: T0GGXEB3DTM6)</li>
                  <li>Azure Cognitive Services Computer Vision (Microsoft)</li>
                  <li>Deep-Tech Entrepreneurship Foundations (Qualcomm - 100% Score)</li>
                </ul>
              </div>

            </div>

            <div className="mt-8 pt-4 border-t border-pink-100 dark:border-gray-800 flex justify-end gap-3">
              <button
                onClick={() => setShowPreview(false)}
                className="px-5 py-2.5 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 font-semibold text-xs hover:bg-gray-300 transition-colors"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

export default ResumeSection;

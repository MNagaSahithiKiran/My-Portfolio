import React, { useState } from 'react';
import { Award, ShieldCheck, Calendar, Key, CheckCircle, X, Database, Globe, Eye, Cpu, Terminal, Brain, FileText, QrCode } from 'lucide-react';
import { certifications } from '../data/portfolioData';

const iconMap = {
  Database,
  Globe,
  Eye,
  Award,
  Cpu,
  Terminal,
  Brain
};

const categories = ['All', 'Cisco', 'MongoDB', 'Infosys Springboard', 'Internships & Simulations', 'Cloud & Accredited', 'Innovation & Webinars'];

const Certifications = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedCert, setSelectedCert] = useState(null);

  const filteredCerts = activeCategory === 'All'
    ? certifications
    : certifications.filter(cert => cert.category === activeCategory);

  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="apple-glow-pink w-96 h-96 top-10 left-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full apple-glass-pill text-pink-600 dark:text-pink-300 text-xs font-bold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>Verified Credentials ({certifications.length})</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Professional <span className="gradient-text-apple">Certifications</span>
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
            Click "View Official Certificate" on any card below to view the official verified certificate document.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-pink-600 to-pink-400 mx-auto rounded-full" />
        </div>

        {/* Category Segmented Controls */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-2xl text-xs font-extrabold transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-pink-600 to-pink-500 text-white shadow-lg shadow-pink-500/25 scale-105'
                  : 'apple-glass text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400'
              }`}
            >
              {cat} {cat === 'All' ? `(${certifications.length})` : cat === 'Cisco' ? `(13)` : cat === 'MongoDB' ? `(5)` : ''}
            </button>
          ))}
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {filteredCerts.map((cert) => {
            const Icon = iconMap[cert.icon] || Award;
            return (
              <div
                key={cert.id}
                className="apple-glass apple-glass-hover p-6 rounded-3xl shadow-xl flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-2xl bg-pink-100 dark:bg-pink-950 text-pink-600 dark:text-pink-400 flex items-center justify-center font-bold shadow-md shrink-0 group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[11px] font-extrabold text-pink-600 dark:text-pink-400 uppercase tracking-wider block">
                          {cert.organization}
                        </span>
                        <h3 className="text-base font-extrabold text-gray-900 dark:text-white leading-snug line-clamp-2">
                          {cert.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 text-xs text-gray-600 dark:text-gray-400 my-3 bg-white/60 dark:bg-gray-900/60 p-3 rounded-2xl border border-pink-100 dark:border-gray-800">
                    <div className="flex items-center gap-1.5 font-bold">
                      <Calendar className="w-3.5 h-3.5 text-pink-500" />
                      <span>Issued: {cert.issued}</span>
                    </div>

                    {cert.credentialId && (
                      <div className="flex items-center gap-1 font-mono text-[10px] font-bold text-pink-600 dark:text-pink-400">
                        <Key className="w-3 h-3" />
                        <span className="truncate max-w-[140px]">ID: {cert.credentialId}</span>
                      </div>
                    )}
                  </div>

                  {/* Skills Badges */}
                  <div className="flex flex-wrap gap-1.5 my-3">
                    {cert.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-0.5 rounded-full apple-glass-pill text-[10px] font-bold text-gray-700 dark:text-pink-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-pink-100 dark:border-gray-800/80 flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 text-[10px] font-extrabold border border-emerald-300 dark:border-emerald-800 flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-emerald-600" />
                    <span>Verified</span>
                  </span>

                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="text-xs font-extrabold text-pink-600 dark:text-pink-400 hover:text-pink-700 dark:hover:text-pink-300 flex items-center gap-1.5 bg-pink-50 dark:bg-pink-950/60 px-3 py-1.5 rounded-xl border border-pink-200 dark:border-pink-800 hover:scale-105 transition-all"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>View Official Certificate</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Real Certificate Image Viewer Modal */}
      {selectedCert && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
          <div className="bg-white dark:bg-gray-950 max-w-4xl w-full p-4 sm:p-6 rounded-3xl border-2 border-pink-300 dark:border-pink-900 shadow-2xl relative my-6 text-left animate-in fade-in zoom-in duration-200">
            
            {/* Top Bar */}
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-gray-200 dark:border-gray-800">
              <div>
                <span className="text-xs font-extrabold text-pink-600 dark:text-pink-400 uppercase tracking-wider block">
                  {selectedCert.organization}
                </span>
                <h3 className="text-lg font-extrabold text-gray-900 dark:text-white">
                  {selectedCert.title}
                </h3>
              </div>

              <button
                onClick={() => setSelectedCert(null)}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Real Certificate Image Display */}
            <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-2 text-center">
              {selectedCert.imageUrl ? (
                <img
                  src={selectedCert.imageUrl}
                  alt={selectedCert.title}
                  className="w-full h-auto max-h-[75vh] object-contain rounded-xl mx-auto shadow-md"
                />
              ) : (
                <div className="p-8 text-center text-gray-500">
                  Official Verified Certificate Document ({selectedCert.credentialId})
                </div>
              )}
            </div>

            {/* Footer Info & Close */}
            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400 font-bold">
                <span>Issued: {selectedCert.issued}</span>
                {selectedCert.credentialId && (
                  <span className="font-mono text-pink-600 dark:text-pink-400">
                    ID: {selectedCert.credentialId}
                  </span>
                )}
              </div>

              <button
                onClick={() => setSelectedCert(null)}
                className="px-6 py-2 rounded-xl bg-gradient-to-r from-pink-600 to-pink-500 text-white font-extrabold shadow-md hover:from-pink-700 hover:to-pink-600 transition-all"
              >
                Close Certificate Preview
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

export default Certifications;

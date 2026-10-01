import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      className="relative text-white pt-16 pb-12 overflow-hidden shadow-2xl"
      style={{
        background: 'linear-gradient(135deg, #DB2777, #EC4899, #F9A8D4)',
      }}
    >
      
      {/* Back to Top Floating Button */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="w-12 h-12 rounded-full bg-white text-pink-600 shadow-xl border-2 border-pink-200 hover:scale-110 hover:bg-pink-50 transition-all duration-300 flex items-center justify-center group"
          title="Back to Top"
        >
          <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-12 border-b border-white/20">
          
          <div className="md:col-span-6 space-y-3">
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              {personalInfo.fullName}
            </h3>
            <p className="text-sm font-medium text-pink-100 max-w-md">
              Aspiring Software Engineer | AI/ML Enthusiast | CSE Student
            </p>
            <p className="text-xs text-pink-200">
              Vel Tech Rangarajan Dr. Sagunthala R & D Institute of Science & Technology, Chennai
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-pink-200 mb-3">
              Navigation
            </h4>
            <ul className="space-y-1.5 text-xs font-medium">
              <li><a href="#hero" className="hover:underline">Home</a></li>
              <li><a href="#about" className="hover:underline">About</a></li>
              <li><a href="#skills" className="hover:underline">Skills</a></li>
              <li><a href="#experience" className="hover:underline">Experience</a></li>
              <li><a href="#projects" className="hover:underline">Projects</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-pink-200 mb-2">
              Connect With Me
            </h4>
            <div className="flex items-center gap-3">
              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/20 hover:bg-white text-white hover:text-pink-600 backdrop-blur-md transition-all"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/20 hover:bg-white text-white hover:text-pink-600 backdrop-blur-md transition-all"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="p-3 rounded-full bg-white/20 hover:bg-white text-white hover:text-pink-600 backdrop-blur-md transition-all"
                title="Contact Form"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-pink-100">
          <div>
            © 2026 Meesaragandla Naga Sahithi Kiran. All Rights Reserved.
          </div>
          <div className="flex items-center gap-1">
            <span>Built with passion & AI engineering precision</span>
            <Sparkles className="w-3.5 h-3.5 text-white" />
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

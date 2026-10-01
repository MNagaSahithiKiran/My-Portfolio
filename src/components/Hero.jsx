import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, Download, Mail, Github, Linkedin, Code, Brain } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = personalInfo.roles[roleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === currentRole) {
        setTimeout(() => setIsDeleting(true), 1800);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setRoleIndex((prevIndex) => (prevIndex + 1) % personalInfo.roles.length);
      } else {
        setDisplayText(
          isDeleting
            ? currentRole.substring(0, displayText.length - 1)
            : currentRole.substring(0, displayText.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section 
      id="hero" 
      className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden futuristic-grid"
    >
      {/* Apple Ambient Liquid Spheres */}
      <div className="apple-glow-pink w-[500px] h-[500px] -top-20 -left-20 animate-pulse-glow" />
      <div className="apple-glow-pink w-[600px] h-[600px] -bottom-30 -right-20 animate-float" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Main Content (Left 7 Cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Status Pill Badge - Apple Glass Capsule */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full apple-glass-pill text-pink-700 dark:text-pink-300 text-xs font-semibold shadow-md">
              <span className="w-2.5 h-2.5 rounded-full bg-pink-500 animate-ping" />
              <Sparkles className="w-3.5 h-3.5 text-pink-500" />
              <span>Available for Software & AI/ML Opportunities</span>
            </div>

            {/* Name Heading */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white leading-[1.15]">
                Meesaragandla Naga{' '}
                <span className="gradient-text-apple">
                  Sahithi Kiran
                </span>
              </h1>

              {/* Dynamic Typing Title */}
              <div className="h-10 sm:h-12 flex items-center">
                <span className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-pink-200 tracking-tight">
                  I am a{' '}
                  <span className="gradient-text-apple underline decoration-pink-300 decoration-wavy underline-offset-4 typing-cursor">
                    {displayText}
                  </span>
                </span>
              </div>
            </div>

            {/* Professional Tagline */}
            <p className="text-base sm:text-lg font-semibold text-pink-600 dark:text-pink-400 tracking-wide">
              {personalInfo.tagline}
            </p>

            {/* Bio Introduction */}
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl font-normal">
              {personalInfo.bioIntro}
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3 w-full sm:w-auto">
              
              {/* Primary CTA */}
              <a
                href="#projects"
                className="px-7 py-4 rounded-full bg-gradient-to-r from-pink-600 via-pink-500 to-pink-400 hover:from-pink-700 hover:to-pink-500 text-white font-bold text-sm shadow-xl shadow-pink-500/30 hover:shadow-pink-500/50 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2.5 group border border-white/30"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Secondary CTA: Download Resume */}
              <a
                href="#resume"
                className="px-7 py-4 rounded-full apple-glass text-pink-600 dark:text-pink-300 font-bold text-sm hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2.5 shadow-md"
              >
                <Download className="w-4 h-4 text-pink-500" />
                <span>Download Resume</span>
              </a>

              {/* Contact Me Button */}
              <a
                href="#contact"
                className="px-6 py-4 rounded-full apple-glass-pill text-gray-800 dark:text-gray-200 font-semibold text-sm hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4 text-pink-600" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* Social & Professional Links */}
            <div className="flex items-center gap-4 pt-4 border-t border-pink-100 dark:border-gray-800 w-full">
              <span className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                Connect:
              </span>
              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full apple-glass-pill text-xs font-bold text-gray-800 dark:text-gray-200 hover:text-pink-600 transition-all hover:scale-105"
              >
                <Linkedin className="w-4 h-4 text-pink-600" />
                <span>LinkedIn</span>
              </a>
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-full apple-glass-pill text-xs font-bold text-gray-800 dark:text-gray-200 hover:text-pink-600 transition-all hover:scale-105"
              >
                <Github className="w-4 h-4 text-pink-600" />
                <span>GitHub</span>
              </a>
            </div>

          </div>

          {/* Profile Image & Apple Glass Floating Container (Right 5 Cols) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative group">
              
              {/* Outer Glowing Liquid Aura */}
              <div 
                className="absolute -inset-4 rounded-full opacity-80 blur-2xl transition-all duration-500 group-hover:opacity-100 group-hover:blur-3xl"
                style={{
                  background: 'linear-gradient(135deg, #EC4899, #F9A8D4, #DB2777)',
                }}
              />

              {/* Profile Circular Image Glass Container */}
              <div 
                className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-84 lg:h-84 rounded-full p-2 shadow-2xl transition-transform duration-500 group-hover:scale-105 animate-float"
                style={{
                  background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.9), rgba(249, 168, 212, 0.9))',
                }}
              >
                <div className="w-full h-full rounded-full border-4 border-white dark:border-gray-900 overflow-hidden bg-white dark:bg-gray-900 shadow-inner">
                  <img
                    src={personalInfo.profileImage}
                    alt={personalInfo.fullName}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;

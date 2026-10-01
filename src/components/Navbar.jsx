import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Sparkles } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { personalInfo } from '../data/portfolioData';

const navItems = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Education', href: '#education' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Learning', href: '#learning' },
  { name: 'MongoDB', href: '#mongodb' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Resume', href: '#resume' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = ({ isDark, setIsDark, activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Apple Specular Pink Scroll Progress Bar */}
      <div 
        className="h-1 bg-gradient-to-r from-pink-500 via-pink-400 to-pink-600 transition-all duration-150 ease-out shadow-sm shadow-pink-500/50" 
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      <nav className={`transition-all duration-500 ${
        scrolled 
          ? 'apple-glass py-3 shadow-xl' 
          : 'bg-white/40 dark:bg-gray-950/40 backdrop-blur-md py-4 border-b border-white/40 dark:border-white/5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo / Brand Name */}
          <a 
            href="#hero" 
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-pink-600 via-pink-500 to-pink-300 p-0.5 shadow-lg shadow-pink-500/20 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-white dark:bg-gray-900 rounded-[14px] flex items-center justify-center">
                <span className="font-extrabold text-base bg-gradient-to-r from-pink-600 to-pink-400 bg-clip-text text-transparent">
                  SK
                </span>
              </div>
            </div>
            <div className="flex flex-col text-left">
              <span className="font-bold text-base tracking-tight text-gray-900 dark:text-white group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
                {personalInfo.shortName}
              </span>
              <span className="text-[9px] font-semibold text-pink-600 dark:text-pink-400 tracking-widest uppercase -mt-0.5">
                Apple Glass Edition
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links - Apple Segmented Glass Pill */}
          <div className="hidden xl:flex items-center gap-1 apple-segment-control shadow-inner">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 ${
                    isActive
                      ? 'bg-gradient-to-r from-pink-600 to-pink-500 text-white shadow-md shadow-pink-500/30 scale-105'
                      : 'text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 hover:bg-white/60 dark:hover:bg-gray-800/60'
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </div>

          {/* Right Action Icons & Theme Toggle */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full apple-glass-pill text-gray-700 dark:text-gray-200 hover:text-pink-600 hover:scale-110 transition-all duration-300"
              title="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full apple-glass-pill text-gray-700 dark:text-gray-200 hover:text-pink-600 hover:scale-110 transition-all duration-300"
              title="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <ThemeToggle isDark={isDark} setIsDark={setIsDark} />

            <a
              href="#contact"
              className="ml-2 px-5 py-2.5 text-xs font-bold rounded-full bg-gradient-to-r from-pink-600 via-pink-500 to-pink-400 hover:from-pink-700 hover:to-pink-500 text-white shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40 hover:scale-105 transition-all duration-300 flex items-center gap-2 border border-white/30"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Contact</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex xl:hidden items-center gap-2">
            <ThemeToggle isDark={isDark} setIsDark={setIsDark} />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-2xl apple-glass text-gray-800 dark:text-gray-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6 text-pink-600" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu - Apple Frosted Glass Card */}
        {isOpen && (
          <div className="xl:hidden apple-glass mt-2 mx-4 rounded-3xl p-4 shadow-2xl transition-all border border-white/50 dark:border-white/10">
            <div className="grid grid-cols-2 gap-2 mb-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-3 py-2.5 rounded-2xl text-xs font-semibold text-center transition-all ${
                    activeSection === item.href.substring(1)
                      ? 'bg-gradient-to-r from-pink-600 to-pink-500 text-white shadow-md'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-white/60 dark:hover:bg-gray-800 hover:text-pink-600'
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>

            <div className="flex items-center justify-center gap-4 pt-3 border-t border-pink-100 dark:border-gray-800">
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 rounded-full apple-glass-pill text-xs font-semibold text-gray-800 dark:text-gray-200"
              >
                <Github className="w-4 h-4 text-pink-600" />
                <span>GitHub</span>
              </a>
              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 rounded-full apple-glass-pill text-xs font-semibold text-gray-800 dark:text-gray-200"
              >
                <Linkedin className="w-4 h-4 text-pink-600" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;

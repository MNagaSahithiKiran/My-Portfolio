import React from 'react';
import { Sun, Moon, Sparkles } from 'lucide-react';

const ThemeToggle = ({ isDark, setIsDark }) => {
  return (
    <button
      onClick={() => setIsDark(!isDark)}
      aria-label="Toggle visual theme mode"
      className="relative group p-2.5 rounded-full bg-pink-50 dark:bg-gray-800 border border-pink-200 dark:border-pink-900 text-pink-600 dark:text-pink-300 hover:bg-pink-100 dark:hover:bg-gray-700 transition-all duration-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
      title={isDark ? "Switch to Pink Light Theme" : "Switch to Soft Pink Enhanced Theme"}
    >
      <div className="relative w-5 h-5 flex items-center justify-center">
        {isDark ? (
          <Sun className="w-5 h-5 text-amber-400 transform rotate-0 transition-transform duration-500" />
        ) : (
          <Moon className="w-5 h-5 text-pink-600 transform rotate-0 transition-transform duration-500" />
        )}
      </div>
      <span className="absolute -bottom-9 left-1/2 -translate-x-1/2 px-2.5 py-1 text-[11px] font-medium text-white bg-gray-900 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
        {isDark ? "Pink Light Mode" : "Soft Pink Dark Mode"}
      </span>
    </button>
  );
};

export default ThemeToggle;

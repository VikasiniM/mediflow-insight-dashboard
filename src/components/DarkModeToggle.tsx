
import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const DarkModeToggle: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur-md
                 border border-gray-200/20 dark:border-gray-700/20 shadow-md
                 hover:shadow-lg transition-all duration-200
                 hover:scale-105 active:scale-95"
      aria-label="Toggle dark mode"
    >
      <div className="relative w-6 h-6">
        <span 
          className={`absolute inset-0 transition-all duration-300 text-lg
            ${isDark ? 'opacity-0 rotate-180 scale-50' : 'opacity-100 rotate-0 scale-100'}`}
        >
          ☀️
        </span>
        <span 
          className={`absolute inset-0 transition-all duration-300 text-lg
            ${isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-180 scale-50'}`}
        >
          🌙
        </span>
      </div>
    </button>
  );
};

export default DarkModeToggle;

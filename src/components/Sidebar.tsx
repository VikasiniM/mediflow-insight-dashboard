
import React from 'react';
import { navigationItems } from '../data/dashboardData';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <div className={`
        fixed top-0 left-0 h-full w-64 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md
        border-r border-gray-200/20 dark:border-gray-700/20
        transform transition-transform duration-300 ease-in-out z-50
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0 lg:static lg:z-0
        flex-shrink-0
      `}>
        <div className="flex flex-col h-full w-full">
          {/* Header */}
          <div className="p-6 border-b border-gray-200/20 dark:border-gray-700/20 flex-shrink-0">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">H</span>
                </div>
                <div className="min-w-0">
                  <h1 className="text-lg font-bold text-gray-900 dark:text-white truncate">
                    Hospital
                  </h1>
                  <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                    Management System
                  </p>
                </div>
              </div>
              
              {/* Close button for mobile */}
              <button
                onClick={onClose}
                className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 flex-shrink-0"
              >
                <span className="text-xl">✕</span>
              </button>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg
                         text-gray-700 dark:text-gray-300 hover:bg-teal-50 dark:hover:bg-teal-900/20
                         hover:text-teal-700 dark:hover:text-teal-300 transition-all duration-200
                         group text-left"
              >
                <span className="text-lg group-hover:scale-110 transition-transform duration-200 flex-shrink-0">
                  {item.icon}
                </span>
                <span className="font-medium truncate">{item.title}</span>
              </button>
            ))}
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-gray-200/20 dark:border-gray-700/20 flex-shrink-0">
            <div className="text-xs text-gray-500 dark:text-gray-400 text-center">
              AHC01 Assignment<br />
              Hospital Dashboard v1.0
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

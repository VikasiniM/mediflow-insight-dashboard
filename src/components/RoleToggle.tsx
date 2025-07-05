
import React from 'react';
import { UserRole } from '../types/dashboard';

interface RoleToggleProps {
  currentRole: UserRole;
  onRoleChange: (role: UserRole) => void;
}

const RoleToggle: React.FC<RoleToggleProps> = ({ currentRole, onRoleChange }) => {
  return (
    <div className="flex items-center space-x-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md 
                    rounded-lg p-2 border border-gray-200/20 dark:border-gray-700/20 shadow-md">
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
        View:
      </span>
      
      <div className="relative">
        <div className="flex bg-gray-100 dark:bg-gray-700 rounded-lg p-1">
          <button
            onClick={() => onRoleChange('doctor')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200
              ${currentRole === 'doctor' 
                ? 'bg-teal-500 text-white shadow-md' 
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
              }`}
          >
            👩‍⚕️ Doctor View
          </button>
          
          <button
            onClick={() => onRoleChange('admin')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200
              ${currentRole === 'admin' 
                ? 'bg-teal-500 text-white shadow-md' 
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200'
              }`}
          >
            🔧 Admin View
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoleToggle;

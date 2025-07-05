
import React from 'react';
import { DashboardCard as DashboardCardType } from '../types/dashboard';

interface DashboardCardProps {
  card: DashboardCardType;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ card }) => {
  const getStatusColor = (status?: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-300';
      case 'pending':
        return 'bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-300';
      case 'completed':
        return 'bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300';
      default:
        return 'bg-gray-100 dark:bg-gray-700/20 text-gray-800 dark:text-gray-300';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'documents':
        return 'from-blue-500 to-blue-600';
      case 'training':
        return 'from-green-500 to-green-600';
      case 'management':
        return 'from-purple-500 to-purple-600';
      case 'compliance':
        return 'from-teal-500 to-teal-600';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <div className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-xl p-6 
                    border border-gray-200/20 dark:border-gray-700/20 shadow-lg
                    hover:shadow-xl hover:scale-[1.02] hover:-translate-y-1 
                    transition-all duration-300 cursor-pointer">
      
      {/* Category indicator */}
      <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${getCategoryColor(card.category)} rounded-t-xl`} />
      
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className={`p-3 rounded-lg bg-gradient-to-br ${getCategoryColor(card.category)} 
                          shadow-md group-hover:shadow-lg transition-shadow duration-300`}>
            <span className="text-2xl">{card.icon}</span>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
              {card.title}
            </h3>
            {card.count !== undefined && (
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {card.count} items
              </p>
            )}
          </div>
        </div>
        
        {card.status && (
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(card.status)}`}>
            {card.status}
          </span>
        )}
      </div>

      {/* Description */}
      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
        {card.description}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <div className="flex space-x-1">
          {card.accessLevel.map((role) => (
            <span
              key={role}
              className="px-2 py-1 bg-teal-100 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 
                         text-xs rounded-full font-medium"
            >
              {role}
            </span>
          ))}
        </div>
        
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-teal-600 dark:text-teal-400 text-sm font-medium">
            View Details →
          </span>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;

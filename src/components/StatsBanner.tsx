
import React from 'react';
import { liveStats } from '../data/dashboardData';

const StatsBanner: React.FC = () => {
  const stats = [
    {
      label: 'Pending Tickets',
      value: liveStats.pendingTickets,
      icon: '🎫',
      color: 'bg-orange-100 dark:bg-orange-900/20 text-orange-800 dark:text-orange-300'
    },
    {
      label: 'Upcoming Trainings',
      value: liveStats.upcomingTrainings,
      icon: '🎓',
      color: 'bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300'
    },
    {
      label: 'Active Patients',
      value: liveStats.activePatients,
      icon: '👥',
      color: 'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-300'
    },
    {
      label: 'Completed Audits',
      value: liveStats.completedAudits,
      icon: '✅',
      color: 'bg-purple-100 dark:bg-purple-900/20 text-purple-800 dark:text-purple-300'
    }
  ];

  return (
    <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-md rounded-xl p-6 mb-6 
                    border border-gray-200/20 dark:border-gray-700/20 shadow-lg">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50/50 dark:bg-gray-700/30
                       hover:bg-gray-100/50 dark:hover:bg-gray-700/50 transition-all duration-200"
          >
            <div className={`p-2 rounded-lg ${stat.color}`}>
              <span className="text-lg">{stat.icon}</span>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {stat.value}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsBanner;

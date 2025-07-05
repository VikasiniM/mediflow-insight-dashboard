
import React, { useState, useMemo } from 'react';
import { UserRole } from '../types/dashboard';
import { dashboardCards } from '../data/dashboardData';
import Sidebar from './Sidebar';
import StatsBanner from './StatsBanner';
import KPIChart from './KPIChart';
import DashboardCard from './DashboardCard';
import RoleToggle from './RoleToggle';
import DarkModeToggle from './DarkModeToggle';

const Dashboard: React.FC = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentRole, setCurrentRole] = useState<UserRole>('doctor');

  const filteredCards = useMemo(() => {
    return dashboardCards.filter(card => 
      card.accessLevel.includes(currentRole)
    );
  }, [currentRole]);

  return (
    <div className="min-h-screen w-full flex overflow-x-hidden bg-gradient-to-br from-teal-50 via-white to-blue-50 
                    dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 
                    transition-colors duration-300">
      
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main Content Container */}
      <div className="flex-1 min-h-screen lg:ml-64">
        {/* Header */}
        <header className="w-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-md 
                         border-b border-gray-200/20 dark:border-gray-700/20 
                         sticky top-0 z-30">
          <div className="w-full max-w-none px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                {/* Mobile menu button */}
                <button
                  onClick={() => setSidebarOpen(true)}
                  className="lg:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-700 
                           hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                >
                  <span className="text-xl">☰</span>
                </button>
                
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Hospital Management Dashboard
                  </h1>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Welcome back, {currentRole === 'doctor' ? 'Dr. Smith' : 'Admin'}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <RoleToggle 
                  currentRole={currentRole}
                  onRoleChange={setCurrentRole}
                />
                <DarkModeToggle />
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="w-full">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
            {/* Stats Banner */}
            <StatsBanner />

            {/* KPI Chart */}
            <KPIChart />

            {/* Dashboard Cards */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {currentRole === 'doctor' ? 'Doctor Dashboard' : 'Admin Dashboard'}
                </h2>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {filteredCards.length} modules available
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCards.map((card) => (
                  <DashboardCard key={card.id} card={card} />
                ))}
              </div>
            </div>

            {/* Footer */}
            <footer className="text-center text-sm text-gray-500 dark:text-gray-400 py-8">
              <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 
                            border border-gray-200/20 dark:border-gray-700/20">
                <p>AHC01 Assignment - Hospital Management Dashboard</p>
                <p className="text-xs mt-1">Built with React, TypeScript, and Tailwind CSS</p>
              </div>
            </footer>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;

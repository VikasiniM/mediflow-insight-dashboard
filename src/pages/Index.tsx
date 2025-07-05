
import React from 'react';
import { ThemeProvider } from '../contexts/ThemeContext';
import Dashboard from '../components/Dashboard';

const Index = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen w-full overflow-x-hidden">
        <Dashboard />
      </div>
    </ThemeProvider>
  );
};

export default Index;


import React from 'react';
import { ThemeProvider } from '../contexts/ThemeContext';
import Dashboard from '../components/Dashboard';

const Index = () => {
  return (
    <ThemeProvider>
      <div className="h-screen w-full overflow-hidden">
        <Dashboard />
      </div>
    </ThemeProvider>
  );
};

export default Index;

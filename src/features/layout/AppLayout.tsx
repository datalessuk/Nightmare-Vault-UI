import React from 'react';
import Header from '../features/components/header/Header';

const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" text-white min-h-screen">
      <Header />
      <main className="max-w-6xl mx-auto px-4 py-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 mt-4">
        {children}
      </main>
    </div>
  );
};

export default AppLayout;

import React from 'react';

const FloatingShapes: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating circles - enhanced green theme */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-green-500/10 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute top-1/3 right-20 w-48 h-48 bg-green-400/8 rounded-full blur-3xl animate-float-delayed" />
      <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-green-600/10 rounded-full blur-3xl animate-float" />

      {/* Floating squares - green accents */}
      <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-green-400/5 rotate-45 blur-2xl animate-float-slow" />
      <div className="absolute bottom-1/3 right-10 w-36 h-36 bg-green-500/5 rotate-12 blur-3xl animate-float-delayed" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02] grid-pattern" />
    </div>
  );
};

export default FloatingShapes;
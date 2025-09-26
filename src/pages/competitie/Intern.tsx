const Intern = () => {
  return (
    <main className="relative overflow-hidden bg-gradient-to-br from-green-800 via-green-700 to-primary">
      {/* Unique Green Background with Pattern */}
      <div className="absolute inset-0">
        {/* Animated circles pattern */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-green-600/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-40 right-20 w-96 h-96 bg-green-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-green-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(white_1px,transparent_1px),linear-gradient(90deg,white_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-[60vh] flex items-center justify-center py-20">
        <div className="text-center">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-heading font-bold text-white mb-8 drop-shadow-2xl">
            Coming Soon
          </h1>
          <p className="text-2xl md:text-3xl text-white/80 drop-shadow-lg">
            Interne Wedstrijden
          </p>
        </div>
      </div>
    </main>
  );
};

export default Intern;
const Jeugd = () => {
  return (
    <main className="relative overflow-hidden bg-gradient-to-tr from-green-900 via-primary to-green-600 min-h-screen">
      {/* Unique Green Hexagon Background */}
      <div className="absolute inset-0">
        {/* Hexagon pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="hexagons" width="60" height="52" patternUnits="userSpaceOnUse">
                  <polygon points="30,0 45,15 45,37 30,52 15,37 15,15" fill="none" stroke="white" strokeWidth="1" opacity="0.3"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#hexagons)" />
            </svg>
          </div>
        </div>
        {/* Floating orbs */}
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-green-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-green-400/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center py-20">
        <div className="text-center">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-heading font-bold text-white mb-8 drop-shadow-2xl">
            Coming Soon
          </h1>
          <p className="text-2xl md:text-3xl text-white/80 drop-shadow-lg">
            Jeugd
          </p>
        </div>
      </div>
    </main>
  );
};

export default Jeugd;
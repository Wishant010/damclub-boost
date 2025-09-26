const Prijzen = () => {
  return (
    <main className="relative overflow-hidden bg-gradient-to-tl from-green-600 via-green-700 to-primary min-h-screen">
      {/* Unique Green Trophy Background */}
      <div className="absolute inset-0">
        {/* Trophy pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-10">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="trophies" width="80" height="80" patternUnits="userSpaceOnUse">
                  <path d="M40 20 L35 25 L35 35 L40 40 L45 35 L45 25 Z" fill="none" stroke="white" strokeWidth="1" opacity="0.3"/>
                  <circle cx="40" cy="15" r="3" fill="white" opacity="0.2"/>
                  <rect x="35" y="40" width="10" height="5" fill="white" opacity="0.2"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#trophies)" />
            </svg>
          </div>
        </div>
        {/* Animated stars */}
        <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-yellow-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/4 right-1/3 w-3 h-3 bg-yellow-300 rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-yellow-400 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-yellow-300 rounded-full animate-pulse delay-700"></div>
        {/* Floating glow orbs */}
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-green-400/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/4 w-80 h-80 bg-green-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center py-20">
        <div className="text-center">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-heading font-bold text-white mb-8 drop-shadow-2xl">
            Coming Soon
          </h1>
          <p className="text-2xl md:text-3xl text-white/80 drop-shadow-lg">
            Prijzen & Trofeeën
          </p>
        </div>
      </div>
    </main>
  );
};

export default Prijzen;
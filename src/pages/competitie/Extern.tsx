const Extern = () => {
  return (
    <main className="relative overflow-hidden bg-gradient-to-bl from-primary via-green-700 to-green-900 min-h-screen">
      {/* Unique Green Waves Background */}
      <div className="absolute inset-0">
        {/* Animated waves */}
        <div className="absolute inset-0">
          <svg className="absolute bottom-0 w-full h-full opacity-20" viewBox="0 0 1440 800" preserveAspectRatio="none">
            <path fill="rgba(134, 239, 172, 0.3)" d="M0,400 C320,200 420,500 720,400 C1020,300 1140,600 1440,400 L1440,800 L0,800 Z" className="animate-pulse"></path>
            <path fill="rgba(74, 222, 128, 0.3)" d="M0,500 C300,300 500,600 800,500 C1100,400 1300,700 1440,500 L1440,800 L0,800 Z" className="animate-pulse delay-500"></path>
          </svg>
        </div>
        {/* Diagonal lines pattern */}
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(45deg,white_1px,transparent_1px),linear-gradient(-45deg,white_1px,transparent_1px)] bg-[size:30px_30px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center py-20">
        <div className="text-center">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-heading font-bold text-white mb-8 drop-shadow-2xl">
            Coming Soon
          </h1>
          <p className="text-2xl md:text-3xl text-white/80 drop-shadow-lg">
            Externe Wedstrijden
          </p>
        </div>
      </div>
    </main>
  );
};

export default Extern;
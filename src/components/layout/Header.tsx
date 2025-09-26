import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Home, Info, Calendar, Users, Trophy, Phone, Clock, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/ui-components';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCompetitieOpen, setIsCompetitieOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setIsCompetitieOpen(false);
  }, [location]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Over Ons', path: '/over-ons', icon: Info },
    { name: 'Activiteiten', path: '/activiteiten', icon: Calendar },
    { name: 'Lid Worden', path: '/lid-worden', icon: Users },
    {
      name: 'Competitie',
      path: '/competitie',
      icon: Trophy,
      submenu: [
        { name: 'Interne Wedstrijden', path: '/competitie/intern' },
        { name: 'Externe Wedstrijden', path: '/competitie/extern' },
        { name: 'Jeugd', path: '/competitie/jeugd' },
        { name: 'Prijzen', path: '/competitie/prijzen' }
      ]
    },
    { name: 'Contact', path: '/contact', icon: Phone },
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/20 backdrop-blur-xl shadow-xl'
          : 'bg-black/10 backdrop-blur-lg'
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative w-12 h-12">
                <img
                  src="/src/assets/damclub_logo.jpg"
                  alt="DC PAR Logo"
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
              <div>
                <h1 className="text-xl lg:text-2xl font-heading font-bold text-white drop-shadow-lg">
                  DC PAR
                </h1>
                <p className="text-xs text-white/90 hidden lg:block font-medium drop-shadow">
                  Damclub Prins Alexander
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <div key={item.path} className="relative">
                  {item.submenu ? (
                    <div className="relative">
                      <button
                        onClick={() => setIsCompetitieOpen(!isCompetitieOpen)}
                        onMouseEnter={() => setIsCompetitieOpen(true)}
                        className={`nav-link text-sm font-semibold transition-colors duration-200 drop-shadow flex items-center gap-1 ${
                          location.pathname.startsWith(item.path)
                            ? 'text-yellow-300 active'
                            : 'text-white hover:text-yellow-200'
                        }`}
                      >
                        {item.name}
                        <ChevronDown size={16} className={`transition-transform ${isCompetitieOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isCompetitieOpen && (
                        <div
                          className="absolute top-full mt-2 left-0 bg-white/95 backdrop-blur-md rounded-lg shadow-xl py-2 min-w-[180px]"
                          onMouseLeave={() => setIsCompetitieOpen(false)}
                        >
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.path}
                              to={subItem.path}
                              onClick={() => setIsCompetitieOpen(false)}
                              className="block px-4 py-2 text-sm text-gray-800 hover:bg-primary/10 hover:text-primary transition-colors"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={item.path}
                      className={`nav-link text-sm font-semibold transition-colors duration-200 drop-shadow ${
                        location.pathname === item.path
                          ? 'text-yellow-300 active'
                          : 'text-white hover:text-yellow-200'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button asChild className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-2 shadow-lg">
                <Link to="/lid-worden">Lid Worden</Link>
              </Button>
            </div>

            {/* Mobile Menu Button - Hamburger */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={cn(
                "lg:hidden relative w-10 h-10 flex items-center justify-center rounded-lg transition-all duration-300",
                "bg-white/10 backdrop-blur-md hover:bg-white/20"
              )}
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-5 flex flex-col justify-between">
                <span className={cn(
                  "block h-0.5 bg-white transition-all duration-300 origin-left",
                  isMenuOpen ? "rotate-45 translate-x-[1px]" : ""
                )} />
                <span className={cn(
                  "block h-0.5 bg-white transition-all duration-300",
                  isMenuOpen ? "opacity-0 scale-x-0" : ""
                )} />
                <span className={cn(
                  "block h-0.5 bg-white transition-all duration-300 origin-left",
                  isMenuOpen ? "-rotate-45 translate-x-[1px]" : ""
                )} />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation - Side Glass Panel */}
      <div className={cn(
        "lg:hidden fixed inset-0 z-40 transition-opacity duration-300",
        isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      )}>
        {/* Backdrop - subtle */}
        <div
          className="absolute inset-0 bg-black/30 transition-opacity duration-300"
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Menu Panel - Glass morphism sliding from right with top margin */}
        <nav className={cn(
          "absolute right-0 top-16 bottom-0 w-[280px] bg-black/40 backdrop-blur-2xl transition-transform duration-500 ease-out",
          "border-l border-white/10 shadow-2xl rounded-tl-2xl",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}>
          {/* Header with more padding */}
          <div className="p-6 pb-4 border-b border-white/10">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src="/src/assets/damclub_logo.jpg"
                  alt="DC PAR"
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <h2 className="text-white font-bold text-lg">DC PAR</h2>
                  <p className="text-white/60 text-xs">Damclub Menu</p>
                </div>
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Menu sluiten"
              >
                <X size={20} className="text-white" />
              </button>
            </div>
          </div>

          {/* Navigation Items with scroll */}
          <div className="p-5 space-y-2 overflow-y-auto max-h-[calc(100vh-280px)]">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.path}>
                  {item.submenu ? (
                    <>
                      <button
                        onClick={() => setIsCompetitieOpen(!isCompetitieOpen)}
                        className={cn(
                          "w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200",
                          location.pathname.startsWith(item.path)
                            ? "bg-white/15 text-white"
                            : "text-white/80 hover:bg-white/10"
                        )}
                      >
                        <div className="flex items-center gap-3">
                          <Icon size={20} className={cn(
                            location.pathname.startsWith(item.path)
                              ? "text-yellow-300"
                              : "text-white/70"
                          )} />
                          <span className="text-base">{item.name}</span>
                        </div>
                        <ChevronDown
                          size={16}
                          className={cn(
                            "transition-transform duration-200 text-white/50",
                            isCompetitieOpen ? "rotate-180" : ""
                          )}
                        />
                      </button>

                      {isCompetitieOpen && (
                        <div className="ml-12 mt-2 space-y-1">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.path}
                              to={subItem.path}
                              onClick={() => {
                                setIsMenuOpen(false);
                                setIsCompetitieOpen(false);
                              }}
                              className={cn(
                                "block py-2.5 px-4 rounded-lg text-sm transition-all duration-200",
                                location.pathname === subItem.path
                                  ? "bg-white/10 text-white"
                                  : "text-white/60 hover:bg-white/5 hover:text-white/80"
                              )}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={item.path}
                      onClick={() => setIsMenuOpen(false)}
                      className={cn(
                        "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200",
                        location.pathname === item.path
                          ? "bg-white/15 text-white"
                          : "text-white/80 hover:bg-white/10"
                      )}
                    >
                      <Icon size={20} className={cn(
                        location.pathname === item.path
                          ? "text-yellow-300"
                          : "text-white/70"
                      )} />
                      <span className="text-base">{item.name}</span>
                    </Link>
                  )}
                </div>
              );
            })}
          </div>

          {/* Bottom Section - Fixed with more padding */}
          <div className="absolute bottom-0 left-0 right-0 p-5 border-t border-white/10 bg-black/30 backdrop-blur-xl">
            <Button asChild className="w-full bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-bold py-3.5 rounded-xl shadow-lg transition-all duration-300">
              <Link to="/lid-worden" onClick={() => setIsMenuOpen(false)}>
                Word Lid van DC PAR
              </Link>
            </Button>

            {/* Quick Info */}
            <div className="flex items-center justify-center gap-5 mt-4 text-white/70 text-sm">
              <div className="flex items-center gap-1.5">
                <Clock size={14} />
                <span>Vrij 19:00</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin size={14} />
                <span>Rotterdam</span>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
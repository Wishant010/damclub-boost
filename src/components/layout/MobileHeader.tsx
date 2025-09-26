import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Home, Info, Calendar, Users, Trophy, Phone } from 'lucide-react';
import { Button } from '@/components/ui/ui-components';
import { cn } from '@/lib/utils';

const MobileHeader = () => {
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

  // Close menu when route changes
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
      {/* Mobile Header Bar */}
      <header className={cn(
        "lg:hidden fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-white/80 backdrop-blur-sm"
      )}>
        <div className="flex items-center justify-between h-16 px-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="relative w-10 h-10">
              <img
                src="/src/assets/damclub_logo.jpg"
                alt="DC PAR Logo"
                className="w-full h-full object-contain rounded-full"
              />
            </div>
            <div>
              <h1 className="text-xl font-heading font-bold text-gray-900">
                DC PAR
              </h1>
            </div>
          </Link>

          {/* Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={cn(
              "relative w-10 h-10 flex items-center justify-center rounded-lg transition-all",
              isMenuOpen
                ? "bg-primary text-white"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            )}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-6">
              <span className={cn(
                "absolute inset-0 flex items-center justify-center transition-all duration-300",
                isMenuOpen ? "rotate-180 opacity-0" : "rotate-0 opacity-100"
              )}>
                <Menu size={20} />
              </span>
              <span className={cn(
                "absolute inset-0 flex items-center justify-center transition-all duration-300",
                isMenuOpen ? "rotate-0 opacity-100" : "-rotate-180 opacity-0"
              )}>
                <X size={20} />
              </span>
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={cn(
        "lg:hidden fixed inset-0 z-40 transition-all duration-300",
        isMenuOpen
          ? "visible opacity-100"
          : "invisible opacity-0"
      )}>
        {/* Background overlay */}
        <div
          className={cn(
            "absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300",
            isMenuOpen ? "opacity-100" : "opacity-0"
          )}
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Menu Panel */}
        <div className={cn(
          "absolute right-0 top-16 bottom-0 w-full sm:w-80 bg-white shadow-2xl transition-transform duration-300 overflow-y-auto",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}>
          <nav className="p-6">
            <div className="space-y-2">
              {navItems.map((item) => (
                <div key={item.path}>
                  {item.submenu ? (
                    <>
                      <button
                        onClick={() => setIsCompetitieOpen(!isCompetitieOpen)}
                        className={cn(
                          "w-full flex items-center justify-between p-3 rounded-lg transition-all",
                          location.pathname.startsWith(item.path)
                            ? "bg-primary/10 text-primary font-semibold"
                            : "text-gray-700 hover:bg-gray-100"
                        )}
                      >
                        <div className="flex items-center gap-3">
                          <item.icon size={20} />
                          <span className="text-base">{item.name}</span>
                        </div>
                        <ChevronDown
                          size={18}
                          className={cn(
                            "transition-transform duration-200",
                            isCompetitieOpen ? "rotate-180" : ""
                          )}
                        />
                      </button>

                      <div className={cn(
                        "overflow-hidden transition-all duration-300",
                        isCompetitieOpen ? "max-h-60" : "max-h-0"
                      )}>
                        <div className="pl-11 pr-3 py-2 space-y-1">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.path}
                              to={subItem.path}
                              className={cn(
                                "block p-2 rounded-lg text-sm transition-colors",
                                location.pathname === subItem.path
                                  ? "bg-primary/10 text-primary font-medium"
                                  : "text-gray-600 hover:bg-gray-50"
                              )}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      to={item.path}
                      className={cn(
                        "flex items-center gap-3 p-3 rounded-lg transition-all",
                        location.pathname === item.path
                          ? "bg-primary/10 text-primary font-semibold"
                          : "text-gray-700 hover:bg-gray-100"
                      )}
                    >
                      <item.icon size={20} />
                      <span className="text-base">{item.name}</span>
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white shadow-lg">
                <Link to="/lid-worden">
                  Word Lid van DC PAR
                </Link>
              </Button>

              {/* Quick Info */}
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm font-semibold text-gray-900 mb-2">
                  Openingstijden
                </p>
                <p className="text-sm text-gray-600">
                  Elke vrijdag 19:00 - 22:00
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  Sigrid Undsetweg 300, Rotterdam
                </p>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default MobileHeader;
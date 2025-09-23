import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Over Ons', path: '/over-ons' },
    { name: 'Activiteiten', path: '/activiteiten' },
    { name: 'Lid Worden', path: '/lid-worden' },
    { name: 'Competitie', path: '/competitie' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-card' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="dam-piece-red animate-float"></div>
              <div className="dam-piece-white absolute -top-1 -right-1 animate-float-delayed"></div>
            </div>
            <div>
              <h1 className="text-xl lg:text-2xl font-heading font-bold text-primary">
                DC PAR
              </h1>
              <p className="text-xs text-muted-foreground hidden lg:block">
                Damclub Prins Alexander
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link text-sm font-medium ${
                  location.pathname === item.path
                    ? 'text-accent active'
                    : 'text-foreground hover:text-accent'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button asChild className="btn-dam bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link to="/lid-worden">Lid Worden</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-accent transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border/50 bg-background/95 backdrop-blur-sm">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-base font-medium transition-colors ${
                    location.pathname === item.path
                      ? 'text-accent'
                      : 'text-foreground hover:text-accent'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <Button asChild className="btn-dam bg-accent hover:bg-accent/90 text-accent-foreground mt-4">
                <Link to="/lid-worden" onClick={() => setIsMenuOpen(false)}>
                  Lid Worden
                </Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
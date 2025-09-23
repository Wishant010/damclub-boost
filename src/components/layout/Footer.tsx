import { Link } from 'react-router-dom';
import { MapPin, Clock, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Club Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative">
                <div className="dam-piece-white w-6 h-6"></div>
                <div className="dam-piece-red absolute -top-0.5 -right-0.5 w-4 h-4"></div>
              </div>
              <h3 className="text-xl font-heading font-bold">DC PAR</h3>
            </div>
            <p className="text-primary-foreground/80 mb-4">
              Damclub Denk Centraal Prins Alexander Rotterdam. 
              "Schuif een schijf voor plezierige tijdverdrijf"
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm">
                <MapPin size={16} className="text-accent" />
                <span>Sigrid Undsetweg 300, Rotterdam</span>
              </div>
              <div className="flex items-center space-x-2 text-sm">
                <Clock size={16} className="text-accent" />
                <span>Elke vrijdag vanaf 19:00</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Navigatie</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-primary-foreground/80 hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/over-ons" className="text-primary-foreground/80 hover:text-accent transition-colors">Over Ons</Link></li>
              <li><Link to="/activiteiten" className="text-primary-foreground/80 hover:text-accent transition-colors">Activiteiten</Link></li>
              <li><Link to="/lid-worden" className="text-primary-foreground/80 hover:text-accent transition-colors">Lid Worden</Link></li>
              <li><Link to="/competitie" className="text-primary-foreground/80 hover:text-accent transition-colors">Competitie</Link></li>
              <li><Link to="/contact" className="text-primary-foreground/80 hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Activities */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Activiteiten</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Clubavonden</li>
              <li>Competitie dammen</li>
              <li>Toernooien</li>
              <li>Jeugddammen</li>
              <li>Lessen voor beginners</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-accent" />
                <a href="mailto:info@dcpar.nl" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  info@dcpar.nl
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-accent" />
                <a href="tel:+31104567890" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  010 - 456 78 90
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
          <p>&copy; {currentYear} DC PAR - Damclub Prins Alexander Rotterdam. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
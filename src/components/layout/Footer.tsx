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
              <div className="relative w-8 h-8">
                <img
                  src="/src/assets/damclub_logo.jpg"
                  alt="DC PAR Logo"
                  className="w-full h-full object-contain rounded-full"
                />
              </div>
              <h3 className="text-xl font-heading font-bold">DC PAR</h3>
            </div>
            <p className="text-primary-foreground/80 mb-4">
              Damclub Denk Centraal Prins Alexander Rotterdam
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
              <li><a href="https://www.google.com/maps/dir/?api=1&destination=Sigrid+Undsetweg+300,+3069+BV+Rotterdam" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-accent transition-colors">Contact & Route</a></li>
            </ul>
          </div>

          {/* Activities */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Wanneer</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li className="flex items-start">
                <span className="font-semibold mr-2">Vrijdag:</span>
                <span>19:00 - 22:00 uur</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-2">Jeugd:</span>
                <span>18:45 uur</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold mr-2">Competitie:</span>
                <span>Sept - April</span>
              </li>
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

        <div className="border-t border-primary-foreground/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-center md:text-left text-primary-foreground/60">
              &copy; {currentYear} DC PAR - Damclub Prins Alexander Rotterdam. Alle rechten voorbehouden.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <Link to="/privacy-beleid" className="text-primary-foreground/60 hover:text-accent transition-colors">
                Privacy Beleid
              </Link>
              <span className="text-primary-foreground/40">|</span>
              <Link to="/algemene-voorwaarden" className="text-primary-foreground/60 hover:text-accent transition-colors">
                Algemene Voorwaarden
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
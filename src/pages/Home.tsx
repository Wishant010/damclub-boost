import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button, InfoCard } from '@/components/ui/ui-components';
import DamboardHero from '@/components/animations/DamboardHero';
import SimpleSlideshow from '@/components/SimpleSlideshow';
import CTA from '@/components/CTA';
import { getAssetUrl } from '@/lib/assets';
import { MapPin, Clock, Users, Trophy, Calendar, Phone } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero section animation
      gsap.fromTo(
        '.hero-content',
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          delay: 0.3,
        }
      );


      // About section animation
      gsap.fromTo(
        '.about-content',
        {
          x: -100,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.about-section',
            start: 'top 70%',
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="min-h-screen diagonal-stripes">
      {/* Hero Section */}
      <section className="relative min-h-screen h-screen flex items-center justify-center bg-gradient-to-br from-primary via-primary/95 to-accent/90 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 damboard-pattern opacity-10"></div>

        <div className="relative z-10 container mx-auto px-4 text-center pt-12 md:pt-16">
          <div className="hero-content max-w-7xl mx-auto">
            <div className="mb-8 md:mb-12 flex justify-center">
              <DamboardHero />
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-white mb-3 md:mb-4 mt-4 sm:mt-8 md:mt-12 lg:mt-16 drop-shadow-2xl relative z-20">
              Welkom bij{' '}
              <span className="bg-gradient-to-r from-yellow-300 to-yellow-100 bg-clip-text text-transparent">
                DC PAR
              </span>
            </h1>
            
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-white/95 mb-2 drop-shadow-lg px-2">
              Damclub Denk Centraal Prins Alexander Rotterdam
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-white/90 mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed font-light px-4">
              "Schuif een schijf voor plezierige tijdverdrijf" <br/>
              <span className="text-sm sm:text-base md:text-lg">Ontdek de passie voor dammen in Rotterdam Ommoord.
              Voor jong en oud, van beginner tot gevorderde.</span>
            </p>
            
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Quick Info Section with Slideshow */}
      <section className="info-section py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
              Kom Kennismaken
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Elke vrijdagavond openen wij onze deuren voor alle damliefhebbers.
              Nieuw in de damwereld? Geen probleem, wij helpen je graag op weg!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left side - Map */}
            <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-gray-200 h-[632px]">
              <div className="p-6 border-b">
                <div className="flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-primary" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Onze Locatie</h3>
                    <p className="text-gray-600">Sigrid Undsetweg 300, 3069 BV Rotterdam</p>
                  </div>
                </div>
              </div>
              <div className="w-full h-[calc(100%-88px)]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d616.0993349065159!2d4.5547064!3d51.9526706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5cd3e2f25259f%3A0x3ef5b1e5f5a5b0a5!2sSigrid%20Undsetweg%20300%2C%203069%20BV%20Rotterdam!5e1!3m2!1snl!2snl!4v1234567890"
                  width="100%"
                  height="100%"
                  className="border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="DC PAR Locatie"
                ></iframe>
              </div>
            </div>

            {/* Right side - Slideshow with time info */}
            <div className="space-y-6">
              <SimpleSlideshow
                images={[
                  getAssetUrl('/Dam-momenten/41.jpg'),
                  getAssetUrl('/Dam-momenten/42.jpg'),
                  getAssetUrl('/Dam-momenten/44.jpg'),
                  getAssetUrl('/Dam-momenten/46.jpg'),
                  getAssetUrl('/Dam-momenten/49.jpg'),
                  getAssetUrl('/Dam-momenten/5.jpg'),
                  getAssetUrl('/Dam-momenten/50.jpg'),
                  getAssetUrl('/Dam-momenten/9.jpg'),
                  getAssetUrl('/prijzen/16.jpg'),
                  getAssetUrl('/prijzen/17.jpg'),
                  getAssetUrl('/prijzen/18.jpg'),
                  getAssetUrl('/prijzen/20.jpg'),
                  getAssetUrl('/prijzen/21.jpg'),
                  getAssetUrl('/prijzen/47.jpg'),
                  getAssetUrl('/prijzen/11.jpg'),
                  getAssetUrl('/prijzen/11 (1).jpg'),
                ]}
                interval={5000}
              />

              {/* Time info under slideshow */}
              <div className="bg-white rounded-xl shadow-xl p-6 border border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Clock className="w-6 h-6 text-primary" />
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">Speeltijden</h3>
                      <p className="text-gray-600">Elke vrijdagavond vanaf 19:00 uur</p>
                      <p className="text-sm text-gray-500">Leerlingen kunnen vanaf 18:45 binnenlopen</p>
                    </div>
                  </div>
                  <Button asChild className="btn-dam border border-gray-300 hover:bg-gray-50">
                    <Link to="/activiteiten">Meer Info</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="about-content">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-8">
                Meer Dan Alleen Dammen
              </h2>
              <div className="space-y-5 text-gray-700 text-lg leading-relaxed">
                <p>
                  DC PAR staat voor gezelligheid, sportiviteit en passie voor het damspel. 
                  Onze club biedt een warme, inclusieve omgeving waar zowel beginners als 
                  gevorderde spelers zich thuis voelen.
                </p>
                <p>
                  Met wekelijkse clubavonden, regelmatige toernooien en speciale aandacht 
                  voor jeugddammen, zorgen wij ervoor dat het damspel levendig blijft in 
                  Rotterdam Ommoord.
                </p>
                <p>
                  Kom langs op een vrijdagavond en ervaar zelf de unieke sfeer van onze club. 
                  Een kopje koffie of thee staat altijd klaar!
                </p>
              </div>
              <div className="mt-8">
                <Button asChild className="btn-dam bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Link to="/over-ons">Ontdek Onze Geschiedenis</Link>
                </Button>
              </div>
            </div>
            
            <div className="flex items-center justify-center">
              <div className="grid grid-cols-2 gap-6 max-w-lg">
                <div className="space-y-6">
                  <div className="transform hover:scale-105 transition-transform">
                    <div className="bg-white rounded-xl shadow-lg border-l-4 border-green-600 overflow-hidden">
                      <div className="p-6">
                        <div className="flex items-center mb-3">
                          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                            <Trophy className="w-6 h-6 text-green-600" />
                          </div>
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-2">Competitie</h3>
                        <p className="text-sm text-gray-600">Doe mee aan onze interne competitie</p>
                      </div>
                    </div>
                  </div>
                  <div className="transform hover:scale-105 transition-transform">
                    <div className="bg-white rounded-xl shadow-lg border-l-4 border-green-600 overflow-hidden">
                      <div className="p-6">
                        <div className="flex items-center mb-3">
                          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                            <Calendar className="w-6 h-6 text-green-600" />
                          </div>
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-2">Toernooien</h3>
                        <p className="text-sm text-gray-600">Regelmatige toernooien voor alle niveaus</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="transform hover:scale-105 transition-transform">
                    <div className="bg-white rounded-xl shadow-lg border-l-4 border-green-600 overflow-hidden">
                      <div className="p-6">
                        <div className="flex items-center mb-3">
                          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                            <Users className="w-6 h-6 text-green-600" />
                          </div>
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-2">Jeugd</h3>
                        <p className="text-sm text-gray-600">Speciale aandacht voor jonge dammers</p>
                      </div>
                    </div>
                  </div>
                  <div className="transform hover:scale-105 transition-transform">
                    <div className="bg-white rounded-xl shadow-lg border-l-4 border-green-600 overflow-hidden">
                      <div className="p-6">
                        <div className="flex items-center mb-3">
                          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                            <Phone className="w-6 h-6 text-green-600" />
                          </div>
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-2">Contact</h3>
                        <p className="text-sm text-gray-600">Altijd bereikbaar voor vragen</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simple CTA */}
      <CTA />
    </main>
  );
};

export default Home;
import { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Users, Heart, Target, Award, ChevronLeft, ChevronRight } from 'lucide-react';
import { InfoCard } from '@/components/ui/ui-components';
import SquareRipple from '@/components/ui/SquareRipple';
import CTA from '@/components/CTA';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const aboutImages = [
    '/Over-ons/2.jpg',
    '/Over-ons/3.jpg',
    '/Over-ons/7.jpg',
    '/Over-ons/40.jpg'
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % aboutImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + aboutImages.length) % aboutImages.length);
  };

  // Auto-advance slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [currentSlide]);
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero section animation
      gsap.fromTo(
        '.page-header',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' }
      );

      // Scale down effect on scroll instead of parallax
      gsap.to('.hero-content', {
        scale: 0.8,
        opacity: 0.3,
        ease: 'power1.inOut',
        scrollTrigger: {
          trigger: '.page-header',
          start: 'top top',
          end: 'bottom top',
          scrub: 1
        }
      });

      // Ripple effect grows and fades
      gsap.to('.ripple-container', {
        scale: 1.5,
        opacity: 0,
        rotate: 45,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: '.page-header',
          start: 'top top',
          end: 'bottom top',
          scrub: 1.5
        }
      });

      // Add blur effect on scroll
      gsap.to('.page-header', {
        filter: 'blur(3px)',
        ease: 'none',
        scrollTrigger: {
          trigger: '.page-header',
          start: 'top top',
          end: 'center top',
          scrub: true
        }
      });

      // Content sections with smoother entrance
      gsap.fromTo(
        '.content-section',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.content-container',
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          },
        }
      );

    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="min-h-screen diagonal-stripes">
      {/* Enhanced Hero Section with Ripple Effect */}
      <section className="page-header relative min-h-[500px] lg:min-h-[550px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary/95 to-accent/90 mb-0">
        <div className="hero-content container relative z-10 mx-auto px-4 text-center pt-24">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-primary-foreground mb-6 animate-fade-in">
            Over DC PAR
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto mb-8">
            Samen dammen, samen denken
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3 border-2 border-white/40">
              <span className="text-primary-foreground font-semibold">Opgericht in Rotterdam</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3 border-2 border-white/40">
              <span className="text-primary-foreground font-semibold">Voor alle leeftijden</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3 border-2 border-white/40">
              <span className="text-primary-foreground font-semibold">Elke week actief</span>
            </div>
          </div>
        </div>

        {/* Square Ripple Effect - More visible */}
        <div className="ripple-container absolute inset-0 w-full h-full overflow-hidden">
          <SquareRipple
            baseSquareSize={250}
            baseSquareOpacity={0.25}
            spaceBetweenSquare={120}
            squareOpacityDowngradeRatio={0.03}
            numberOfSquares={6}
            waveSpeed={150}
            squareClass="border-2 border-white/40 bg-white/8 rounded-3xl shadow-2xl"
            className="scale-150"
          />
        </div>
      </section>

      {/* Content Container */}
      <div className="content-container">
        {/* How DCPAR Started */}
        <section className="content-section py-20 bg-gradient-to-b from-primary/20 via-primary/10 to-primary/5">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
                  Ons Verhaal
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    In de wijk Ommoord is een prachtig initiatief ontstaan, geïnspireerd door de bekende
                    neuropsycholoog professor Erik Scherder. Enkele betrokken bewoners wilden iets doen
                    om het brein van ouderen fitter te houden – en zo werd het project Brein Fit geboren.
                    Dankzij steun van de lokale overheid kon het initiatief snel van start gaan en werd
                    het met veel enthousiasme ontvangen.
                  </p>
                  <p>
                    Wat begon als een breinversterkend project, groeide al snel uit tot iets groters.
                    Deelnemers kwamen wekelijks bij elkaar om samen een potje te dammen. De positieve
                    effecten en het plezier dat het dammen met zich meebracht, zorgden ervoor dat steeds
                    meer mensen zich aansloten. Zo ontstond het idee om een officiële damvereniging op te richten.
                  </p>
                  <p>
                    De nieuwe club kreeg de naam Denk Centraal Prins Alexander Rotterdam, kortweg DCPAR.
                    Hoewel de vereniging nog geformaliseerd moet worden, is er al een voorlopig bestuur
                    en een stevige basis van enthousiaste spelers.
                  </p>
                  <p className="font-semibold text-foreground">
                    Waarom dammen? Omdat het leuk is, sociaal verbindend werkt, en vooral – het houdt
                    het brein scherp. Professor Scherder benadrukt in zijn onderzoeken de waarde van
                    dammen als mentale stimulans. Zijn advies is helder: iedereen zou moeten dammen
                    om de hersenen fit te houden.
                  </p>
                  <p className="text-accent font-semibold">
                    DCPAR is er voor iedereen – jong en oud, beginner of gevorderde. We heten je van
                    harte welkom om mee te denken, mee te doen en samen te dammen!
                  </p>
                </div>
              </div>

              {/* Image Slideshow */}
              <div className="relative h-[500px] rounded-xl overflow-hidden shadow-2xl">
                <div className="relative h-full w-full">
                  {aboutImages.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`DC PAR moment ${index + 1}`}
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                        index === currentSlide ? 'opacity-100' : 'opacity-0'
                      }`}
                    />
                  ))}
                </div>

                {/* Navigation Buttons */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight size={24} />
                </button>

                {/* Slide Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                  {aboutImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentSlide
                          ? 'bg-white w-8'
                          : 'bg-white/50 hover:bg-white/70'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="content-section py-16 bg-gradient-to-b from-primary/5 to-accent/10">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Onze Missie & Waarden
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Wat ons drijft en waar wij voor staan als damclub
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <InfoCard
                icon={Heart}
                title="Gezelligheid"
                description="Een warme, vriendelijke sfeer waarin iedereen zich welkom voelt en plezier heeft."
              />
              <InfoCard
                icon={Users}
                title="Inclusiviteit"
                description="Een open gemeenschap waar iedereen welkom is. Of je nu beginner bent of expert, jong of oud, bij DCPAR vind je altijd een plek."
              />
              <InfoCard
                icon={Target}
                title="Ontwikkeling"
                description="Elkaar helpen groeien in het damspel door begeleiding en gedeelde kennis."
              />
              <InfoCard
                icon={Award}
                title="Sportiviteit"
                description="Fair play en respect staan centraal in al onze activiteiten en competities."
              />
            </div>
          </div>
        </section>

        {/* Club Motto */}
        <section className="content-section py-16 accent-gradient">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-accent-foreground mb-6">
              "Schuif een schijf voor plezierige tijdverdrijf"
            </h2>
            <p className="text-lg text-accent-foreground/90 max-w-2xl mx-auto">
              Dit motto vat perfect samen waar wij voor staan: dammen is meer dan een spel, 
              het is een bron van plezier, ontspanning en sociale verbinding.
            </p>
          </div>
        </section>


        {/* Board Members */}
        <section className="content-section py-16 bg-gradient-to-b from-primary/10 via-primary/5 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Het Bestuur
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Maak kennis met de mensen die onze club leiden
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Eduard - Voorzitter */}
              <div className="bg-white rounded-xl shadow-lg border-l-4 border-green-600 overflow-hidden transform hover:scale-105 transition-transform">
                <div className="p-6">
                  <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden border-4 border-green-100">
                    <img
                      src="/bestuur/Eduard Autar.jpg"
                      alt="Eduard Autar"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 text-center mb-1">Eduard Autar</h3>
                  <p className="text-green-600 font-medium text-center mb-3">Voorzitter</p>
                  <div className="text-center">
                    <a href="mailto:info@dcpar.nl" className="text-sm text-gray-600 hover:text-green-600 transition-colors">
                      info@dcpar.nl
                    </a>
                  </div>
                </div>
              </div>

              {/* Ashok - Vice Voorzitter */}
              <div className="bg-white rounded-xl shadow-lg border-l-4 border-green-600 overflow-hidden transform hover:scale-105 transition-transform">
                <div className="p-6">
                  <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden border-4 border-green-100">
                    <img
                      src="/bestuur/Ashok-Bhajan.jpg"
                      alt="Ashok Bhajan"
                      className="w-full h-full object-cover"
                      style={{ objectPosition: '50% 15%' }}
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 text-center mb-1">Ashok Bhajan</h3>
                  <p className="text-green-600 font-medium text-center mb-3">Vice Voorzitter</p>
                  <div className="text-center">
                    <span className="text-sm text-gray-500 italic">Email coming soon</span>
                  </div>
                </div>
              </div>

              {/* Ratan - Secretaris */}
              <div className="bg-white rounded-xl shadow-lg border-l-4 border-green-600 overflow-hidden transform hover:scale-105 transition-transform">
                <div className="p-6">
                  <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden border-4 border-green-100">
                    <img
                      src="/bestuur/Ratan-Ganeshi.jpg"
                      alt="Ratan Ganeshi"
                      className="w-full h-full object-cover"
                      style={{ objectPosition: '50% 20%' }}
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 text-center mb-1">Ratan Ganeshi</h3>
                  <p className="text-green-600 font-medium text-center mb-3">Secretaris</p>
                  <div className="text-center">
                    <a href="mailto:secretaris@dcpar.nl" className="text-sm text-gray-600 hover:text-green-600 transition-colors">
                      secretaris@dcpar.nl
                    </a>
                  </div>
                </div>
              </div>

              {/* Somdath - Penningmeester */}
              <div className="bg-white rounded-xl shadow-lg border-l-4 border-green-600 overflow-hidden transform hover:scale-105 transition-transform">
                <div className="p-6">
                  <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden border-4 border-green-100">
                    <img
                      src="/bestuur/Somdath.jpg"
                      alt="Somdath"
                      className="w-full h-full object-cover"
                      style={{ objectPosition: '50% 30%' }}
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 text-center mb-1">Somdath</h3>
                  <p className="text-green-600 font-medium text-center mb-3">Penningmeester</p>
                  <div className="text-center">
                    <span className="text-sm text-gray-500 italic">Email coming soon</span>
                  </div>
                </div>
              </div>

              {/* Ramdew - Jeugdcoördinator */}
              <div className="bg-white rounded-xl shadow-lg border-l-4 border-green-600 overflow-hidden transform hover:scale-105 transition-transform">
                <div className="p-6">
                  <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden border-4 border-green-100">
                    <img
                      src="/bestuur/Ramdew-Jahani.jpg"
                      alt="Ramdew Jahani"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 text-center mb-1">Ramdew Jahani</h3>
                  <p className="text-green-600 font-medium text-center mb-3">Jeugdcoördinator</p>
                  <div className="text-center">
                    <span className="text-sm text-gray-500 italic">Email coming soon</span>
                  </div>
                </div>
              </div>

              {/* Arthur - Algemeen lid */}
              <div className="bg-white rounded-xl shadow-lg border-l-4 border-green-600 overflow-hidden transform hover:scale-105 transition-transform">
                <div className="p-6">
                  <div className="w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden border-4 border-green-100">
                    <img
                      src="/bestuur/Arthur.jpg"
                      alt="Arthur"
                      className="w-full h-full object-cover"
                      style={{ objectPosition: '50% 20%' }}
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 text-center mb-1">Arthur</h3>
                  <p className="text-green-600 font-medium text-center mb-3">&nbsp;</p>
                  <div className="text-center">
                    <span className="text-sm text-gray-500 italic">Email coming soon</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CTA
          title="Word lid van onze club"
          description="Sluit je aan bij DC PAR en ontdek de passie voor dammen"
          buttonText="Lid Worden"
          buttonLink="/lid-worden"
        />
      </div>
    </main>
  );
};

export default About;
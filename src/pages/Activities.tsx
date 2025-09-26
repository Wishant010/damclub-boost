import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, Clock, Trophy, GraduationCap, Users, Star } from 'lucide-react';
import { InfoCard, Button } from '@/components/ui/ui-components';
import { Link } from 'react-router-dom';
import Silk from '@/components/ui/Silk';
import FloatingShapes from '@/components/ui/FloatingShapes';
import CTA from '@/components/CTA';

gsap.registerPlugin(ScrollTrigger);

const Activities = () => {
  useEffect(() => {
    // Wait for DOM to be ready
    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
        // Hero section animation
        const pageHeader = document.querySelector('.page-header');
        if (pageHeader) {
          gsap.fromTo(
            pageHeader,
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' }
          );
        }

        // Parallax and rotation effect on scroll
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
          gsap.to(heroContent, {
            y: -100,
            scale: 0.9,
            opacity: 0.2,
            rotateX: 10,
            ease: 'none',
            scrollTrigger: {
              trigger: '.page-header',
              start: 'top top',
              end: 'bottom top',
              scrub: 1.5
            }
          });
        }

        // Activity cards animation
        const activityCards = document.querySelectorAll('.activity-card');
        if (activityCards.length > 0) {
          gsap.fromTo(
            activityCards,
            { y: 40, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.6,
              stagger: 0.15,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: '.activities-grid',
                start: 'top 80%',
              },
            }
          );
        }

        // Section animations
        const contentSections = document.querySelectorAll('.content-section');
        if (contentSections.length > 0) {
          gsap.fromTo(
            contentSections,
            { y: 60, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              stagger: 0.15,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: '.content-sections',
                start: 'top 85%',
                toggleActions: 'play none none reverse'
              },
            }
          );
        }
      });

      return () => ctx.revert();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen">
      {/* Enhanced Hero Section with Silk Background */}
      <section className="page-header relative min-h-[550px] lg:min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Silk Background - Darker and animated */}
        <div className="silk-background absolute inset-0 z-0 w-full h-full">
          <Silk
            speed={1}
            scale={1.4}
            color="#177b19"
            noiseIntensity={1.5}
            rotation={0.1}
          />
        </div>

        {/* Lighter overlay for less dark/dull look */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-primary/40 z-10"></div>

        {/* Content */}
        <div className="hero-content container relative z-20 mx-auto px-4 text-center pt-24">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 animate-fade-in drop-shadow-2xl">
            Onze Activiteiten
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8 drop-shadow-lg">
            Ontdek alle manieren waarop je kunt deelnemen aan ons rijke clubsleven
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="bg-white/20 backdrop-blur-md rounded-lg px-6 py-3 border-2 border-white/40">
              <span className="text-white font-semibold">Wekelijks programma</span>
            </div>
            <div className="bg-white/20 backdrop-blur-md rounded-lg px-6 py-3 border-2 border-white/40">
              <span className="text-white font-semibold">Toernooien</span>
            </div>
            <div className="bg-white/20 backdrop-blur-md rounded-lg px-6 py-3 border-2 border-white/40">
              <span className="text-white font-semibold">Jeugdactiviteiten</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections with consistent green theme */}
      <div className="content-sections relative bg-gradient-to-b from-primary/15 via-primary/5 to-transparent">
        <FloatingShapes />

        {/* Main Activities */}
        <section className="content-section py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Wekelijkse Activiteiten
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Elke week staat er wel wat leuks op het programma
            </p>
          </div>

          <div className="activities-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="activity-card">
              <InfoCard
                icon={Clock}
                title="Clubavonden"
                description="Elke vrijdag vanaf 19:00 uur. Vrij spel, oefenpartijen en gezellig samenzijn."
              >
                <div className="mt-4 p-3 bg-muted rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Vrijdag 19:00-22:00</strong><br />
                    Leerlingen vanaf 18:45
                  </p>
                </div>
              </InfoCard>
            </div>

            <div className="activity-card">
              <InfoCard
                icon={GraduationCap}
                title="Lessen & Training"
                description="Begeleiding voor nieuwe spelers en trainingen voor gevorderden."
              >
                <div className="mt-4 p-3 bg-muted rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Tijdens clubavonden</strong><br />
                    Individuele begeleiding
                  </p>
                </div>
              </InfoCard>
            </div>

            <div className="activity-card">
              <InfoCard
                icon={Users}
                title="Jeugddammen"
                description="Speciale aandacht voor jonge dammers met leuke activiteiten."
              >
                <div className="mt-4 p-3 bg-muted rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Vrijdagavond</strong><br />
                    Alle leeftijden welkom
                  </p>
                </div>
              </InfoCard>
            </div>
          </div>
        </div>
      </section>

        {/* Special Events */}
        <section className="content-section py-16 relative bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Bijzondere Evenementen
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hoogtepunten van ons clubjaar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="activity-card">
              <div className="card-elegant p-8 bg-gradient-to-br from-white/95 to-primary/5 border-primary/20">
                <div className="flex items-center mb-6">
                  <Trophy className="w-8 h-8 text-accent mr-3" />
                  <h3 className="text-2xl font-heading font-semibold">Clubcompetitie</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  Onze jaarlijkse interne competitie waar alle leden aan kunnen deelnemen. 
                  Verschillende klassen zorgen voor spannende en eerlijke wedstrijden.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Verschillende speelklassen</li>
                  <li>• Seizoen van september tot mei</li>
                  <li>• Prijsuitreiking aan het einde</li>
                  <li>• Voor alle niveaus toegankelijk</li>
                </ul>
              </div>
            </div>

            <div className="activity-card">
              <div className="card-elegant p-8 bg-gradient-to-br from-white/95 to-primary/5 border-primary/20">
                <div className="flex items-center mb-6">
                  <Star className="w-8 h-8 text-accent mr-3" />
                  <h3 className="text-2xl font-heading font-semibold">Toernooien</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  Regelmatig organiseren wij toernooien voor verschillende groepen. 
                  Van beginnertoernooien tot sterke open toernooien.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li>• Maandelijkse clubtoernooien</li>
                  <li>• Jeugdtoernooien</li>
                  <li>• Simultaanvoorstellingen</li>
                  <li>• Deelname externe toernooien</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* Schedule */}
        <section className="content-section py-16 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Agenda & Planning
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Blijf op de hoogte van komende evenementen
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="card-elegant p-8 bg-gradient-to-br from-white/95 to-primary/5 border-primary/20 shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-heading font-semibold mb-4 flex items-center">
                    <Calendar className="w-5 h-5 text-accent mr-2" />
                    Komende Evenementen
                  </h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-accent pl-4">
                      <h4 className="font-semibold">Clubcompetitie Ronde 8</h4>
                      <p className="text-sm text-muted-foreground">Vrijdag 29 maart, 19:00</p>
                    </div>
                    <div className="border-l-4 border-accent pl-4">
                      <h4 className="font-semibold">Jeugdtoernooi</h4>
                      <p className="text-sm text-muted-foreground">Zaterdag 6 april, 14:00</p>
                    </div>
                    <div className="border-l-4 border-accent pl-4">
                      <h4 className="font-semibold">Open Clubtoernooi</h4>
                      <p className="text-sm text-muted-foreground">Zaterdag 20 april, 10:00</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-heading font-semibold mb-4">
                    Praktische Informatie
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Clubavonden:</span>
                      <span className="font-medium">Elke vrijdag 19:00-22:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Leerlingen:</span>
                      <span className="font-medium">Vanaf 18:45 welkom</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Kosten:</span>
                      <span className="font-medium">€2,- per avond</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Jeugd:</span>
                      <span className="font-medium">Gratis tot 18 jaar</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>

      {/* CTA */}
      <CTA
        title="Kom Eens Langs!"
        description="Nieuwsgierig geworden? Elke vrijdagavond vanaf 19:00 uur"
        buttonText="Direct Aanmelden"
        buttonLink="/lid-worden"
      />
    </main>
  );
};

export default Activities;
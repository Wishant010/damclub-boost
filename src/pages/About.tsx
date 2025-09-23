import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Users, Heart, Target, Award } from 'lucide-react';
import InfoCard from '@/components/ui/InfoCard';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.page-header',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' }
      );

      gsap.fromTo(
        '.content-section',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.content-container',
            start: 'top 80%',
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="min-h-screen pt-20">
      {/* Page Header */}
      <section className="page-header py-16 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">
            Over DC PAR
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Ontdek de rijke geschiedenis en warme gemeenschap van onze damclub
          </p>
        </div>
      </section>

      {/* Content Container */}
      <div className="content-container">
        {/* Club Story */}
        <section className="content-section py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
                  Onze Geschiedenis
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    DC PAR (Denk Centraal Prins Alexander Rotterdam) is een begrip in 
                    de Rotterdamse damwereld. Al jarenlang bieden wij een thuis aan 
                    damliefhebbers uit Rotterdam en omgeving.
                  </p>
                  <p>
                    Onze club ontstond uit de passie voor het damspel en de behoefte 
                    aan een gezellige, toegankelijke plek waar mensen samen kunnen 
                    spelen, leren en genieten van dit prachtige bordspel.
                  </p>
                  <p>
                    Met onze locatie in de wijk Ommoord zijn wij goed bereikbaar 
                    vanuit heel Rotterdam en omstreken. Onze clubavonden staan 
                    bekend om hun gezellige, informele sfeer.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="dam-piece-red w-16 h-16 animate-float mx-auto"></div>
                <div className="dam-piece-white w-16 h-16 animate-float-delayed mx-auto"></div>
                <div className="dam-piece-white w-16 h-16 animate-float-delayed mx-auto"></div>
                <div className="dam-piece-red w-16 h-16 animate-float mx-auto"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="content-section py-16 bg-gradient-subtle">
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
                description="Voor alle leeftijden en niveaus. Van 8 tot 88 jaar, van beginner tot expert."
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

        {/* Organization */}
        <section className="content-section py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Organisatie
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Onze club wordt gerund door toegewijde vrijwilligers die zich inzetten 
                voor de gemeenschap
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card-elegant p-6 text-center">
                <div className="dam-piece-red w-16 h-16 mx-auto mb-4"></div>
                <h3 className="text-xl font-heading font-semibold mb-2">Bestuur</h3>
                <p className="text-muted-foreground">
                  Een enthousiast bestuur dat zorgt voor de dagelijkse organisatie 
                  en het verenigingsleven.
                </p>
              </div>
              
              <div className="card-elegant p-6 text-center">
                <div className="dam-piece-white w-16 h-16 mx-auto mb-4"></div>
                <h3 className="text-xl font-heading font-semibold mb-2">Trainers</h3>
                <p className="text-muted-foreground">
                  Ervaren dammers die hun kennis en ervaring graag delen 
                  met nieuwe en jonge spelers.
                </p>
              </div>
              
              <div className="card-elegant p-6 text-center">
                <div className="dam-piece-red w-16 h-16 mx-auto mb-4"></div>
                <h3 className="text-xl font-heading font-semibold mb-2">Vrijwilligers</h3>
                <p className="text-muted-foreground">
                  Actieve leden die helpen bij evenementen, competities 
                  en de algemene clubactiviteiten.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;
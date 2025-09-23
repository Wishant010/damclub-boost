import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import DamboardHero from '@/components/animations/DamboardHero';
import InfoCard from '@/components/ui/InfoCard';
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

      // Info cards scroll animation
      gsap.fromTo(
        '.info-card',
        {
          y: 60,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.info-section',
            start: 'top 80%',
            end: 'bottom 20%',
          },
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
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 damboard-pattern opacity-5"></div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="hero-content max-w-4xl mx-auto">
            <div className="mb-8">
              <DamboardHero />
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-primary-foreground mb-6">
              Welkom bij{' '}
              <span className="accent-gradient bg-clip-text text-transparent">
                DC PAR
              </span>
            </h1>
            
            <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-primary-foreground/90 mb-6">
              Damclub Denk Centraal Prins Alexander Rotterdam
            </h2>
            
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              "Schuif een schijf voor plezierige tijdverdrijf" - 
              Ontdek de passie voor dammen in Rotterdam Ommoord. 
              Voor jong en oud, van beginner tot gevorderde.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="btn-dam bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-3">
                <Link to="/lid-worden">Wordt Lid</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10 text-lg px-8 py-3">
                <Link to="/activiteiten">Onze Activiteiten</Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary-foreground/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="info-section py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Kom Kennismaken
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Elke vrijdagavond openen wij onze deuren voor alle damliefhebbers. 
              Nieuw in de damwereld? Geen probleem, wij helpen je graag op weg!
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="info-card">
              <InfoCard
                icon={MapPin}
                title="Onze Locatie"
                description="Sigrid Undsetweg 300, 3069 BV Rotterdam (Wijk Ommoord)"
              >
                <Button asChild variant="outline" className="btn-dam">
                  <Link to="/contact">Routebeschrijving</Link>
                </Button>
              </InfoCard>
            </div>
            
            <div className="info-card">
              <InfoCard
                icon={Clock}
                title="Speeltijden"
                description="Elke vrijdagavond vanaf 19:00 uur. Leerlingen kunnen vanaf 18:45 binnenlopen."
              >
                <Button asChild variant="outline" className="btn-dam">
                  <Link to="/activiteiten">Meer Info</Link>
                </Button>
              </InfoCard>
            </div>
            
            <div className="info-card">
              <InfoCard
                icon={Users}
                title="Voor Iedereen"
                description="Jong en oud, beginners tot doorgewinterde dammers. Iedereen is welkom!"
              >
                <Button asChild variant="outline" className="btn-dam">
                  <Link to="/lid-worden">Lid Worden</Link>
                </Button>
              </InfoCard>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="about-content">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                Meer Dan Alleen Dammen
              </h2>
              <div className="space-y-4 text-muted-foreground">
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
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <InfoCard
                  icon={Trophy}
                  title="Competitie"
                  description="Doe mee aan onze interne competitie"
                />
                <InfoCard
                  icon={Calendar}
                  title="Toernooien"
                  description="Regelmatige toernooien voor alle niveaus"
                />
              </div>
              <div className="space-y-4 mt-8">
                <InfoCard
                  icon={Users}
                  title="Jeugd"
                  description="Speciale aandacht voor jonge dammers"
                />
                <InfoCard
                  icon={Phone}
                  title="Contact"
                  description="Altijd bereikbaar voor vragen"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 accent-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-accent-foreground mb-6">
            Klaar om te Beginnen?
          </h2>
          <p className="text-lg text-accent-foreground/90 mb-8 max-w-2xl mx-auto">
            Sluit je aan bij onze gezellige damclub en ontdek waarom dammen zo verslavend is. 
            De eerste les is altijd gratis!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="outline" className="border-accent-foreground/30 text-accent-foreground hover:bg-accent-foreground/10 text-lg px-8 py-3">
              <Link to="/lid-worden">Meld Je Aan</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-accent-foreground/30 text-accent-foreground hover:bg-accent-foreground/10 text-lg px-8 py-3">
              <Link to="/contact">Neem Contact Op</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
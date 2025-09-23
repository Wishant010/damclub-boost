import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, Clock, Trophy, GraduationCap, Users, Star } from 'lucide-react';
import InfoCard from '@/components/ui/InfoCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const Activities = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.page-header',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' }
      );

      gsap.fromTo(
        '.activity-card',
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
    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="min-h-screen pt-20">
      {/* Page Header */}
      <section className="page-header py-16 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">
            Onze Activiteiten
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Ontdek alle manieren waarop je kunt deelnemen aan ons rijke clubsleven
          </p>
        </div>
      </section>

      {/* Main Activities */}
      <section className="py-16 bg-background">
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
                    Vanaf 8 jaar welkom
                  </p>
                </div>
              </InfoCard>
            </div>
          </div>
        </div>
      </section>

      {/* Special Events */}
      <section className="py-16 bg-gradient-subtle">
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
              <div className="card-elegant p-8">
                <div className="flex items-center mb-6">
                  <Trophy className="w-8 h-8 text-accent mr-3" />
                  <h3 className="text-2xl font-heading font-semibold">Clubcompetitie</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  Onze jaarlijkse interne competitie waar alle leden aan kunnen deelnemen. 
                  Verschillende klassen zorgen voor spannende en eerlijke wedstrijden.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li>• Verschillende speelklassen</li>
                  <li>• Seizoen van september tot mei</li>
                  <li>• Prijsuitreiking aan het einde</li>
                  <li>• Voor alle niveaus toegankelijk</li>
                </ul>
                <Button asChild className="btn-dam bg-accent hover:bg-accent/90">
                  <Link to="/competitie">Bekijk Standen</Link>
                </Button>
              </div>
            </div>

            <div className="activity-card">
              <div className="card-elegant p-8">
                <div className="flex items-center mb-6">
                  <Star className="w-8 h-8 text-accent mr-3" />
                  <h3 className="text-2xl font-heading font-semibold">Toernooien</h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  Regelmatig organiseren wij toernooien voor verschillende groepen. 
                  Van beginnertoernooien tot sterke open toernooien.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li>• Maandelijkse clubtoernooien</li>
                  <li>• Jeugdtoernooien</li>
                  <li>• Simultaanvoorstellingen</li>
                  <li>• Deelname externe toernooien</li>
                </ul>
                <Button asChild variant="outline" className="btn-dam">
                  <Link to="/contact">Vraag Info</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="py-16 bg-background">
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
            <div className="card-elegant p-8">
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

      {/* CTA */}
      <section className="py-16 accent-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-accent-foreground mb-6">
            Kom Eens Langs!
          </h2>
          <p className="text-lg text-accent-foreground/90 mb-8 max-w-2xl mx-auto">
            Nieuwsgierig geworden? Kom gewoon een keer langs op een vrijdagavond. 
            Je bent van harte welkom voor een kennismakingsavond.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="outline" className="border-accent-foreground/30 text-accent-foreground hover:bg-accent-foreground/10">
              <Link to="/contact">Contact Opnemen</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-accent-foreground/30 text-accent-foreground hover:bg-accent-foreground/10">
              <Link to="/lid-worden">Direct Aanmelden</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Activities;
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Trophy, Calendar, Users, Medal, Star, Award } from 'lucide-react';
import { InfoCard, Button } from '@/components/ui/ui-components';
import { Link } from 'react-router-dom';
import CTA from '@/components/CTA';

gsap.registerPlugin(ScrollTrigger);

const Competition = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.page-header',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' }
      );

      gsap.fromTo(
        '.competition-section',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.competitions-grid',
            start: 'top 80%',
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="min-h-screen pt-20 diagonal-stripes">
      {/* Page Header - Green Hero Section */}
      <section className="page-header py-16 bg-gradient-to-br from-primary via-primary/95 to-accent/90">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">
            Competitie
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Doe mee aan onze spannende interne competities en meet je krachten met andere dammers
          </p>
        </div>
      </section>

      {/* Current Competition */}
      <section className="competition-section py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Seizoen 2024-2025
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Ons huidige competitieseizoen is in volle gang. Kom elke vrijdagavond langs om mee te doen!
            </p>
          </div>

          <div className="competitions-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="competition-card">
              <InfoCard
                icon={Trophy}
                title="Clubkampioenschap"
                description="Strijd om de titel van clubkampioen in onze jaarlijkse competitie"
              >
                <div className="mt-4 text-sm text-muted-foreground">
                  <p>• Elke vrijdagavond</p>
                  <p>• September - Maart</p>
                  <p>• Voor alle niveaus</p>
                </div>
              </InfoCard>
            </div>

            <div className="competition-card">
              <InfoCard
                icon={Calendar}
                title="Sneldamtoernooi"
                description="Snelle partijen voor wie van tempo houdt"
              >
                <div className="mt-4 text-sm text-muted-foreground">
                  <p>• Maandelijks</p>
                  <p>• 10 minuten per partij</p>
                  <p>• Eerste vrijdag van de maand</p>
                </div>
              </InfoCard>
            </div>

            <div className="competition-card">
              <InfoCard
                icon={Users}
                title="Teamcompetitie"
                description="Speel samen met clubgenoten tegen andere clubs"
              >
                <div className="mt-4 text-sm text-muted-foreground">
                  <p>• Regionale competitie</p>
                  <p>• Teams van 4 spelers</p>
                  <p>• Oktober - April</p>
                </div>
              </InfoCard>
            </div>
          </div>
        </div>
      </section>

      {/* Standings */}
      <section className="competition-section py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Huidige Stand
            </h2>
            <p className="text-lg text-muted-foreground">
              De top 5 van onze clubcompetitie
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-card rounded-xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-4 gap-4 p-6 bg-accent text-accent-foreground font-semibold">
                <div>Positie</div>
                <div>Speler</div>
                <div>Punten</div>
                <div>Partijen</div>
              </div>
              {[
                { pos: 1, name: "Jan van Dijk", points: 18, games: 12 },
                { pos: 2, name: "Maria Jansen", points: 16, games: 11 },
                { pos: 3, name: "Piet Bakker", points: 15, games: 12 },
                { pos: 4, name: "Anna de Vries", points: 14, games: 10 },
                { pos: 5, name: "Klaas Mulder", points: 13, games: 11 },
              ].map((player) => (
                <div key={player.pos} className="grid grid-cols-4 gap-4 p-4 border-b border-border/50 hover:bg-accent/5">
                  <div className="flex items-center">
                    {player.pos === 1 && <Medal className="w-5 h-5 text-yellow-500 mr-2" />}
                    {player.pos === 2 && <Medal className="w-5 h-5 text-gray-400 mr-2" />}
                    {player.pos === 3 && <Medal className="w-5 h-5 text-amber-600 mr-2" />}
                    {player.pos > 3 && <span className="mr-2">{player.pos}.</span>}
                  </div>
                  <div className="font-medium">{player.name}</div>
                  <div>{player.points}</div>
                  <div>{player.games}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How to Join */}
      <section className="competition-section py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Meedoen aan de Competitie
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Nieuw bij de club? Geen probleem! Iedereen kan meedoen aan onze competities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <InfoCard
              icon={Star}
              title="Stap 1: Word Lid"
              description="Meld je aan als lid van DC PAR"
            >
              <Button asChild className="mt-4" variant="outline">
                <Link to="/lid-worden">Lid Worden</Link>
              </Button>
            </InfoCard>

            <InfoCard
              icon={Calendar}
              title="Stap 2: Kom Langs"
              description="Bezoek ons op vrijdagavond vanaf 19:00"
            >
              <Button asChild className="mt-4" variant="outline">
                <Link to="/contact">Locatie Bekijken</Link>
              </Button>
            </InfoCard>

            <InfoCard
              icon={Award}
              title="Stap 3: Speel Mee"
              description="Schrijf je in voor de competitie"
            >
              <p className="mt-4 text-sm text-muted-foreground">
                Vraag aan de competitieleider hoe je kunt deelnemen
              </p>
            </InfoCard>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA
        title="Doe mee aan de competitie!"
        description="Sluit je aan bij onze interne competitie en meet je krachten"
        buttonText="Word Lid"
        buttonLink="/lid-worden"
      />
    </main>
  );
};

export default Competition;
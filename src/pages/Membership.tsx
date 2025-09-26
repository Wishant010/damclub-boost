import { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useForm } from 'react-hook-form';
import { Check, Users, Euro, Gift, HelpCircle, Heart, Trophy, Star } from 'lucide-react';
import { Button, Input, Label, Textarea, Card, CardContent, Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/ui-components';
import { useToast } from '@/hooks/use-toast';
import SilkShader from '@/components/ui/SilkShader';
import FloatingShapes from '@/components/ui/FloatingShapes';
import CTA from '@/components/CTA';

gsap.registerPlugin(ScrollTrigger);

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  birthDate: string;
  experience: string;
  message: string;
}

const Membership = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  useEffect(() => {
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

        // Hero content parallax
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
          gsap.to(heroContent, {
            y: -80,
            scale: 0.95,
            opacity: 0.3,
            ease: 'none',
            scrollTrigger: {
              trigger: '.page-header',
              start: 'top top',
              end: 'bottom top',
              scrub: 1.5
            }
          });
        }

        // Membership sections animation
        const membershipSections = document.querySelectorAll('.membership-section');
        if (membershipSections.length > 0) {
          gsap.fromTo(
            membershipSections,
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
              }
            }
          );
        }
      });

      return () => ctx.revert();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Aanmelding ontvangen!",
        description: "We nemen zo snel mogelijk contact met je op.",
      });
      reset();
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <main className="min-h-screen">
      {/* Enhanced Hero Section with Silk Shader */}
      <section className="page-header relative min-h-[550px] lg:min-h-[600px] flex items-center justify-center overflow-hidden">
        {/* Silk Shader Background */}
        <div className="absolute inset-0 z-0">
          <SilkShader
            hue={130} // Light green hue
            saturation={0.5}
            brightness={1.5}
            speed={0.3}
          />
        </div>

        {/* Balanced gradient overlay for better contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-primary/40 z-10"></div>

        {/* Content */}
        <div className="hero-content container relative z-20 mx-auto px-4 text-center pt-24">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 animate-fade-in drop-shadow-2xl">
            Lid Worden
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8 drop-shadow-lg">
            Sluit je aan bij onze gezellige damclub en ontdek de passie voor dammen
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="bg-white/20 backdrop-blur-md rounded-lg px-6 py-3 border-2 border-white/40">
              <span className="text-white font-semibold">Voor alle leeftijden</span>
            </div>
            <div className="bg-white/20 backdrop-blur-md rounded-lg px-6 py-3 border-2 border-white/40">
              <span className="text-white font-semibold">Jeugd gratis</span>
            </div>
            <div className="bg-white/20 backdrop-blur-md rounded-lg px-6 py-3 border-2 border-white/40">
              <span className="text-white font-semibold">€100 per jaar</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Container */}
      <div className="content-container relative bg-gradient-to-b from-primary/15 via-primary/5 to-transparent">
        <FloatingShapes />

        {/* Benefits Section */}
        <section className="membership-section py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Voordelen van Lidmaatschap
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Als lid van DC PAR geniet je van vele voordelen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="card-hover bg-gradient-to-br from-white/95 to-primary/5 border-primary/20">
              <CardContent className="p-6 text-center">
                <Users className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-lg font-heading font-semibold mb-2">Gezellige Gemeenschap</h3>
                <p className="text-muted-foreground text-sm">
                  Ontmoet gelijkgestemde damliefhebbers in een warme, vriendelijke sfeer
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover bg-gradient-to-br from-white/95 to-primary/5 border-primary/20">
              <CardContent className="p-6 text-center">
                <Gift className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-lg font-heading font-semibold mb-2">Training & Begeleiding</h3>
                <p className="text-muted-foreground text-sm">
                  Persoonlijke coaching voor verbetering van je spel
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover bg-gradient-to-br from-white/95 to-primary/5 border-primary/20">
              <CardContent className="p-6 text-center">
                <Check className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-lg font-heading font-semibold mb-2">Competitie Deelname</h3>
                <p className="text-muted-foreground text-sm">
                  Doe mee aan onze interne competitie en externe toernooien
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover bg-gradient-to-br from-white/95 to-primary/5 border-primary/20">
              <CardContent className="p-6 text-center">
                <Euro className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-lg font-heading font-semibold mb-2">Voordelige Tarieven</h3>
                <p className="text-muted-foreground text-sm">
                  Korting op toernooien en speciale evenementen
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="membership-section py-16 relative bg-white/5 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Contributie & Kosten
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transparante en eerlijke prijzen voor iedereen
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="card-elegant card-hover bg-gradient-to-br from-white/95 to-primary/5 border-primary/20 overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-accent to-primary"></div>
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-heading font-semibold mb-2">Jeugd</h3>
                <p className="text-3xl font-bold text-accent mb-4">€75<span className="text-lg text-muted-foreground">/jaar</span></p>
                <p className="text-muted-foreground mb-6">Voor spelers tot 18 jaar</p>
                <ul className="text-sm space-y-2 text-left">
                  <li className="flex items-center"><Check className="w-4 h-4 text-accent mr-2" />Alle clubavonden</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-accent mr-2" />Training & coaching</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-accent mr-2" />Jeugdtoernooien</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-accent mr-2" />Competitie deelname</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-elegant card-hover bg-gradient-to-br from-white/95 to-primary/5 border-primary/20 overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-primary to-accent"></div>
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-heading font-semibold mb-2">Volwassenen</h3>
                <p className="text-3xl font-bold text-accent mb-4">€100<span className="text-lg text-muted-foreground">/jaar</span></p>
                <p className="text-muted-foreground mb-6">Jaarcontributie</p>
                <ul className="text-sm space-y-2 text-left">
                  <li className="flex items-center"><Check className="w-4 h-4 text-accent mr-2" />Alle clubavonden</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-accent mr-2" />Training & lessen</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-accent mr-2" />Competitie deelname</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-accent mr-2" />Toernooi korting</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-elegant card-hover bg-gradient-to-br from-white/95 to-primary/5 border-primary/20 overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-accent to-primary"></div>
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-heading font-semibold mb-2">Per Avond</h3>
                <p className="text-3xl font-bold text-accent mb-4">€4</p>
                <p className="text-muted-foreground mb-6">Voor niet-leden</p>
                <ul className="text-sm space-y-2 text-left">
                  <li className="flex items-center"><Check className="w-4 h-4 text-accent mr-2" />Kennismakingsavond</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-accent mr-2" />Vrij spel</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-accent mr-2" />Basis begeleiding</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-accent mr-2" />Koffie/thee</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="membership-section py-16 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8" id="aanmelden">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Aanmelden
              </h2>
              <p className="text-lg text-muted-foreground">
                Vul het formulier in en we nemen contact met je op
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                Velden met * zijn verplicht
              </p>
            </div>

            <Card className="card-elegant bg-gradient-to-br from-white/95 to-primary/5 border-primary/20 shadow-xl">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">Voornaam *</Label>
                      <Input
                        id="firstName"
                        placeholder="Vul hier je voornaam in"
                        {...register('firstName', { required: 'Voornaam is verplicht' })}
                        className={errors.firstName ? 'border-destructive' : ''}
                      />
                      {errors.firstName && (
                        <p className="text-destructive text-sm mt-1">{errors.firstName.message}</p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="lastName">Achternaam *</Label>
                      <Input
                        id="lastName"
                        placeholder="Vul hier je achternaam in"
                        {...register('lastName', { required: 'Achternaam is verplicht' })}
                        className={errors.lastName ? 'border-destructive' : ''}
                      />
                      {errors.lastName && (
                        <p className="text-destructive text-sm mt-1">{errors.lastName.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">E-mailadres *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Vul hier je e-mailadres in (bijv. naam@voorbeeld.nl)"
                      {...register('email', {
                        required: 'E-mailadres is verplicht',
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: 'Ongeldig e-mailadres'
                        }
                      })}
                      className={errors.email ? 'border-destructive' : ''}
                    />
                    {errors.email && (
                      <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Telefoonnummer</Label>
                      <Input
                        id="phone"
                        placeholder="Vul hier je telefoonnummer in"
                        {...register('phone')}
                      />
                    </div>
                    <div>
                      <Label htmlFor="birthDate">Geboortedatum</Label>
                      <Input
                        id="birthDate"
                        type="date"
                        placeholder="Selecteer je geboortedatum"
                        {...register('birthDate')}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="experience">Damervaring</Label>
                    <Input
                      id="experience"
                      placeholder="Bijv. beginner, gevorderd, aantal jaren ervaring..."
                      {...register('experience')}
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Aanvullende informatie</Label>
                    <Textarea
                      id="message"
                      placeholder="Vertel ons iets over jezelf of stel een vraag..."
                      {...register('message')}
                      rows={4}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full btn-dam bg-accent hover:bg-accent/90 text-accent-foreground"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Versturen...' : 'Aanmelding Versturen'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="membership-section py-16 bg-gradient-to-b from-transparent to-primary/5 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Veelgestelde Vragen
              </h2>
              <p className="text-lg text-muted-foreground">
                Antwoorden op de meest gestelde vragen over lidmaatschap
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="card-elegant px-6">
                <AccordionTrigger className="text-left">
                  <span className="flex items-center">
                    <HelpCircle className="w-5 h-5 text-accent mr-2" />
                    Kan ik eerst een keer komen kijken?
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  Natuurlijk! Je bent altijd welkom voor een kennismakingsavond.
                  Kom gewoon langs op een vrijdagavond tussen 19:00 en 22:00.
                  De eerste keer kost slechts €4,- en je krijgt alle uitleg die je nodig hebt.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="card-elegant px-6">
                <AccordionTrigger className="text-left">
                  Moet ik al kunnen dammen om lid te worden?
                </AccordionTrigger>
                <AccordionContent>
                  Helemaal niet! We verwelkomen spelers van alle niveaus, van complete beginners 
                  tot ervaren dammers. Onze ervaren leden helpen je graag om de basis te leren 
                  en je spel te verbeteren.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="card-elegant px-6">
                <AccordionTrigger className="text-left">
                  Wat moet ik meebrengen?
                </AccordionTrigger>
                <AccordionContent>
                  Alleen jezelf! Wij zorgen voor alle damspellen, koffie, thee en een gezellige sfeer.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="card-elegant px-6">
                <AccordionTrigger className="text-left">
                  Zijn er ook activiteiten voor kinderen?
                </AccordionTrigger>
                <AccordionContent>
                  Ja! We hebben speciale aandacht voor jeugddammen. Kinderen vanaf 8 jaar zijn welkom 
                  en spelen gratis. We organiseren regelmatig jeugdtoernooien en geven speciale begeleiding 
                  aan jonge dammers.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="card-elegant px-6">
                <AccordionTrigger className="text-left">
                  Kan ik op elk moment stoppen met het lidmaatschap?
                </AccordionTrigger>
                <AccordionContent>
                  Het lidmaatschap loopt per kalenderjaar. Je kunt ten alle tijden opzeggen voor het 
                  einde van het jaar. Er zijn geen lange contracten of verplichtingen. 
                  We willen dat iedereen met plezier bij onze club is!
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
      </div>

      {/* CTA Section */}
      <CTA
        title="Kom Dammen Bij DC PAR!"
        description="De eerste avond is gratis voor nieuwe leden!"
        buttonText="Direct Aanmelden"
        buttonLink="#aanmelden"
      />
    </main>
  );
};

export default Membership;
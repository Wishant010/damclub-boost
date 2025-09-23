import { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { useForm } from 'react-hook-form';
import { Check, Users, Euro, Gift, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useToast } from '@/hooks/use-toast';

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
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.page-header',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' }
      );

      gsap.fromTo(
        '.membership-section',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.2,
          ease: 'power2.out',
          delay: 0.2,
        }
      );
    });

    return () => ctx.revert();
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
    <main className="min-h-screen pt-20">
      {/* Page Header */}
      <section className="page-header py-16 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">
            Lid Worden
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto">
            Sluit je aan bij onze gezellige damclub en ontdek de passie voor dammen
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="membership-section py-16 bg-background">
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
            <Card className="card-hover">
              <CardContent className="p-6 text-center">
                <Users className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-lg font-heading font-semibold mb-2">Gezellige Gemeenschap</h3>
                <p className="text-muted-foreground text-sm">
                  Ontmoet gelijkgestemde damliefhebbers in een warme, vriendelijke sfeer
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="p-6 text-center">
                <Gift className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-lg font-heading font-semibold mb-2">Gratis Lessen</h3>
                <p className="text-muted-foreground text-sm">
                  Professionele begeleiding en training voor alle niveaus
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="p-6 text-center">
                <Check className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-lg font-heading font-semibold mb-2">Competitie Deelname</h3>
                <p className="text-muted-foreground text-sm">
                  Doe mee aan onze interne competitie en externe toernooien
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover">
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
      <section className="membership-section py-16 bg-gradient-subtle">
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
            <Card className="card-elegant card-hover">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-heading font-semibold mb-2">Jeugd</h3>
                <p className="text-3xl font-bold text-accent mb-4">Gratis</p>
                <p className="text-muted-foreground mb-6">Voor spelers tot 18 jaar</p>
                <ul className="text-sm space-y-2 text-left">
                  <li className="flex items-center"><Check className="w-4 h-4 text-accent mr-2" />Alle clubavonden</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-accent mr-2" />Gratis lessen</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-accent mr-2" />Jeugdtoernooien</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-accent mr-2" />Begeleiding</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-elegant card-hover border-accent">
              <CardContent className="p-8 text-center">
                <div className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium mb-4">
                  Populair
                </div>
                <h3 className="text-xl font-heading font-semibold mb-2">Volwassenen</h3>
                <p className="text-3xl font-bold text-accent mb-4">€50<span className="text-lg text-muted-foreground">/jaar</span></p>
                <p className="text-muted-foreground mb-6">Jaarcontributie</p>
                <ul className="text-sm space-y-2 text-left">
                  <li className="flex items-center"><Check className="w-4 h-4 text-accent mr-2" />Alle clubavonden</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-accent mr-2" />Training & lessen</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-accent mr-2" />Competitie deelname</li>
                  <li className="flex items-center"><Check className="w-4 h-4 text-accent mr-2" />Toernooi korting</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="card-elegant card-hover">
              <CardContent className="p-8 text-center">
                <h3 className="text-xl font-heading font-semibold mb-2">Per Avond</h3>
                <p className="text-3xl font-bold text-accent mb-4">€2</p>
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
      <section className="membership-section py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Aanmelden
              </h2>
              <p className="text-lg text-muted-foreground">
                Vul het formulier in en we nemen contact met je op
              </p>
            </div>

            <Card className="card-elegant">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">Voornaam</Label>
                      <Input
                        id="firstName"
                        {...register('firstName', { required: 'Voornaam is verplicht' })}
                        className={errors.firstName ? 'border-destructive' : ''}
                      />
                      {errors.firstName && (
                        <p className="text-destructive text-sm mt-1">{errors.firstName.message}</p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="lastName">Achternaam</Label>
                      <Input
                        id="lastName"
                        {...register('lastName', { required: 'Achternaam is verplicht' })}
                        className={errors.lastName ? 'border-destructive' : ''}
                      />
                      {errors.lastName && (
                        <p className="text-destructive text-sm mt-1">{errors.lastName.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="email">E-mailadres</Label>
                    <Input
                      id="email"
                      type="email"
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
                        {...register('phone')}
                      />
                    </div>
                    <div>
                      <Label htmlFor="birthDate">Geboortedatum</Label>
                      <Input
                        id="birthDate"
                        type="date"
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
      <section className="membership-section py-16 bg-gradient-subtle">
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
                  De eerste keer kost slechts €2,- en je krijgt alle uitleg die je nodig hebt.
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
                  Als je een eigen damspel hebt, mag je dat natuurlijk meebrengen.
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
    </main>
  );
};

export default Membership;
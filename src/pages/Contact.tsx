import { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useForm } from 'react-hook-form';
import { MapPin, Clock, Phone, Mail, Calendar, Car, Navigation, Users } from 'lucide-react';
import { InfoCard, Button, Input, Label, Textarea, Card, CardContent, CardHeader, CardTitle } from '@/components/ui/ui-components';
import { useToast } from '@/hooks/use-toast';
import SquareRipple from '@/components/ui/RippleSquare';
import FloatingShapes from '@/components/ui/FloatingShapes';
import CTA from '@/components/CTA';

gsap.registerPlugin(ScrollTrigger);

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>();

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

        // Parallax effect on scroll
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

        // Contact cards animation
        const contactCards = document.querySelectorAll('.contact-card');
        if (contactCards.length > 0) {
          gsap.fromTo(
            contactCards,
            { y: 40, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.6,
              stagger: 0.15,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: '.contact-grid',
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

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Bericht verzonden!",
        description: "We nemen zo snel mogelijk contact met je op.",
      });
      reset();
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <main className="min-h-screen">
      {/* Dark Green Gradient Hero Section */}
      <section className="page-header relative min-h-[550px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-900 via-green-800 to-emerald-700">
        {/* Dark overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50"></div>

        {/* Pattern overlay for texture */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-diagonal-stripes"></div>
        </div>

        {/* Main Content - Clean and Modern */}
        <div className="hero-content container relative z-20 mx-auto px-4 text-center pt-20">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 drop-shadow-2xl">
            Contact
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-10 drop-shadow-lg">
            Neem contact met ons op voor vragen of informatie
          </p>

          <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/20 backdrop-blur-md rounded-xl p-6 border border-white/30 hover:bg-white/25 transition-colors">
              <MapPin className="w-8 h-8 text-white mx-auto mb-3" />
              <p className="text-white font-semibold">Locatie</p>
              <p className="text-white/80 text-sm mt-1">Sigrid Undsetweg 300</p>
            </div>

            <div className="bg-white/20 backdrop-blur-md rounded-xl p-6 border border-white/30 hover:bg-white/25 transition-colors">
              <Clock className="w-8 h-8 text-white mx-auto mb-3" />
              <p className="text-white font-semibold">Vrijdag</p>
              <p className="text-white/80 text-sm mt-1">19:00 - 22:00</p>
            </div>

            <div className="bg-white/20 backdrop-blur-md rounded-xl p-6 border border-white/30 hover:bg-white/25 transition-colors">
              <Phone className="w-8 h-8 text-white mx-auto mb-3" />
              <p className="text-white font-semibold">Telefoon</p>
              <p className="text-white/80 text-sm mt-1">010 456 78 90</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <div className="content-sections relative bg-gradient-to-b from-primary/15 via-primary/5 to-transparent">
        <FloatingShapes />

        {/* Contact Info Cards */}
        <section className="content-section py-20 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Bereikbaarheid
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Alle manieren om met ons in contact te komen
              </p>
            </div>

            <div className="contact-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="contact-card">
                <InfoCard
                  icon={MapPin}
                  title="Onze Locatie"
                  description="Sigrid Undsetweg 300, 3069 BV Rotterdam"
                >
                  <div className="mt-4 p-3 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      <strong>Gemeenschapshuis De Brug</strong><br />
                      Wijk Ommoord<br />
                      Gratis parkeren
                    </p>
                  </div>
                </InfoCard>
              </div>

              <div className="contact-card">
                <InfoCard
                  icon={Clock}
                  title="Speeltijden"
                  description="Elke vrijdagavond vanaf 19:00 uur"
                >
                  <div className="mt-4 p-3 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      <strong>Vrijdag 19:00-22:30</strong><br />
                      Leerlingen vanaf 18:45<br />
                      Zaal tot 23:00
                    </p>
                  </div>
                </InfoCard>
              </div>

              <div className="contact-card">
                <InfoCard
                  icon={Phone}
                  title="Direct Contact"
                  description="Bel of mail ons voor informatie"
                >
                  <div className="mt-4 p-3 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      <strong>📞 010 - 456 78 90</strong><br />
                      <strong>✉️ info@dcpar.nl</strong><br />
                      Reactie binnen 24 uur
                    </p>
                  </div>
                </InfoCard>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form & Map Section */}
        <section className="content-section py-16 relative bg-white/5 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <Card className="card-elegant bg-gradient-to-br from-white/95 to-primary/5 border-primary/20 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-2xl font-heading flex items-center">
                      <Mail className="w-6 h-6 text-accent mr-2" />
                      Stuur ons een bericht
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name">Naam *</Label>
                          <Input
                            id="name"
                            placeholder="Typ hier je volledige naam"
                            {...register('name', { required: 'Naam is verplicht' })}
                            className="mt-1"
                          />
                          {errors.name && (
                            <p className="text-sm text-red-600 mt-1">{errors.name.message}</p>
                          )}
                        </div>
                        <div>
                          <Label htmlFor="email">E-mail *</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="Typ hier je e-mailadres (bijv. naam@voorbeeld.nl)"
                            {...register('email', {
                              required: 'E-mail is verplicht',
                              pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Ongeldig e-mailadres'
                              }
                            })}
                            className="mt-1"
                          />
                          {errors.email && (
                            <p className="text-sm text-red-600 mt-1">{errors.email.message}</p>
                          )}
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="phone">Telefoon</Label>
                        <Input
                          id="phone"
                          placeholder="Typ hier je telefoonnummer (optioneel)"
                          {...register('phone')}
                          className="mt-1"
                        />
                      </div>

                      <div>
                        <Label htmlFor="subject">Onderwerp *</Label>
                        <Input
                          id="subject"
                          placeholder="Typ hier het onderwerp van je bericht"
                          {...register('subject', { required: 'Onderwerp is verplicht' })}
                          className="mt-1"
                        />
                        {errors.subject && (
                          <p className="text-sm text-red-600 mt-1">{errors.subject.message}</p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="message">Bericht *</Label>
                        <Textarea
                          id="message"
                          rows={5}
                          placeholder="Typ hier je vraag of bericht aan ons..."
                          {...register('message', { required: 'Bericht is verplicht' })}
                          className="mt-1"
                        />
                        {errors.message && (
                          <p className="text-sm text-red-600 mt-1">{errors.message.message}</p>
                        )}
                      </div>

                      <Button
                        type="submit"
                        size="lg"
                        disabled={isSubmitting}
                        className="w-full btn-dam bg-accent hover:bg-accent/90"
                      >
                        {isSubmitting ? 'Verzenden...' : 'Bericht Verzenden'}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Location Card */}
              <div className="space-y-8">
                <Card className="card-elegant bg-gradient-to-br from-white/95 to-primary/5 border-primary/20 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-2xl font-heading flex items-center">
                      <MapPin className="w-6 h-6 text-accent mr-2" />
                      Onze Locatie
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-6 text-center">
                      <h4 className="font-semibold mb-2">Gemeenschapshuis De Brug</h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        Sigrid Undsetweg 300<br />
                        3069 BV Rotterdam (Ommoord)
                      </p>
                      <Button asChild variant="outline" className="btn-dam">
                        <a
                          href="https://www.google.com/maps/dir/?api=1&destination=Sigrid+Undsetweg+300,+3069+BV+Rotterdam"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <MapPin className="w-4 h-4 mr-2" />
                          Open in Google Maps
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Visit Info Section */}
        <section className="content-section py-16 relative">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                Praktische Informatie
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Alles wat je moet weten voor je eerste bezoek
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="card-elegant p-6 bg-gradient-to-br from-white/95 to-primary/5 border-primary/20">
                  <h3 className="text-xl font-heading font-semibold mb-4 flex items-center">
                    <Clock className="w-5 h-5 text-accent mr-2" />
                    Speelschema
                  </h3>
                  <div className="space-y-3">
                    <div className="border-l-4 border-accent pl-4">
                      <h4 className="font-semibold">Clubavond</h4>
                      <p className="text-sm text-muted-foreground">Vrijdag 19:00-22:30</p>
                    </div>
                    <div className="border-l-4 border-accent pl-4">
                      <h4 className="font-semibold">Leerlingen & Jeugd</h4>
                      <p className="text-sm text-muted-foreground">Vanaf 18:45 welkom</p>
                    </div>
                    <div className="border-l-4 border-accent pl-4">
                      <h4 className="font-semibold">Competitie</h4>
                      <p className="text-sm text-muted-foreground">September t/m April</p>
                    </div>
                  </div>
                </div>

                <div className="card-elegant p-6 bg-gradient-to-br from-white/95 to-primary/5 border-primary/20">
                  <h3 className="text-xl font-heading font-semibold mb-4 flex items-center">
                    <MapPin className="w-5 h-5 text-accent mr-2" />
                    Faciliteiten
                  </h3>
                  <div className="space-y-3">
                    <div className="border-l-4 border-accent pl-4">
                      <h4 className="font-semibold">Locatie</h4>
                      <p className="text-sm text-muted-foreground">Gemeenschapshuis De Brug</p>
                    </div>
                    <div className="border-l-4 border-accent pl-4">
                      <h4 className="font-semibold">Parkeren</h4>
                      <p className="text-sm text-muted-foreground">Gratis voor de deur</p>
                    </div>
                    <div className="border-l-4 border-accent pl-4">
                      <h4 className="font-semibold">Voorzieningen</h4>
                      <p className="text-sm text-muted-foreground">Bar & kantine aanwezig</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* CTA Section */}
      <CTA
        title="Kom Vrijblijvend Kennismaken!"
        description="Elke vrijdagavond vanaf 19:00 uur ben je welkom"
        buttonText="Direct Lid Worden"
        buttonLink="/lid-worden"
      />
    </main>
  );
};

export default Contact;
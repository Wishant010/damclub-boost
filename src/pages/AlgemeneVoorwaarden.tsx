import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FileText, Users, Euro, Calendar, AlertTriangle, CheckCircle, XCircle, Info } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/ui-components';
import CTA from '@/components/CTA';

gsap.registerPlugin(ScrollTrigger);

const AlgemeneVoorwaarden = () => {
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
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="page-header relative min-h-[400px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-900 via-green-800 to-emerald-700">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-diagonal-stripes"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-20 pt-20">
          <FileText className="w-16 h-16 text-white mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 drop-shadow-2xl">
            Algemene Voorwaarden
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto drop-shadow-lg">
            Voorwaarden voor lidmaatschap en deelname aan activiteiten
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="content-container py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-4xl">

          {/* Artikel 1: Definities */}
          <div className="content-section mb-12">
            <Card>
              <CardHeader className="bg-green-50">
                <CardTitle className="text-2xl">Artikel 1: Definities</CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-3">
                <div className="border-l-4 border-green-500 pl-4">
                  <p className="text-gray-700"><strong>1.1 De vereniging:</strong> DC PAR (Damclub Denk Centraal Prins Alexander Rotterdam), gevestigd te Rotterdam.</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <p className="text-gray-700"><strong>1.2 Lid:</strong> Een natuurlijk persoon die zich heeft aangemeld en is toegelaten als lid van de vereniging.</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <p className="text-gray-700"><strong>1.3 Bestuur:</strong> Het dagelijks bestuur van de vereniging zoals benoemd in de statuten.</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <p className="text-gray-700"><strong>1.4 Contributie:</strong> De jaarlijkse bijdrage die leden verschuldigd zijn.</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <p className="text-gray-700"><strong>1.5 Clubavond:</strong> De wekelijkse bijeenkomst op vrijdagavond waar damactiviteiten plaatsvinden.</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Artikel 2: Lidmaatschap */}
          <div className="content-section mb-12">
            <Card>
              <CardHeader className="bg-blue-50">
                <CardTitle className="text-2xl flex items-center">
                  <Users className="w-6 h-6 text-blue-600 mr-3" />
                  Artikel 2: Lidmaatschap
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">2.1 Aanmelding</h3>
                  <ul className="space-y-2 text-gray-700 ml-4">
                    <li>• Aanmelding geschiedt via het aanmeldformulier op de website of schriftelijk bij het bestuur</li>
                    <li>• Bij minderjarigen is toestemming van ouders/verzorgers vereist</li>
                    <li>• Het bestuur beslist over toelating binnen 14 dagen</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">2.2 Soorten lidmaatschap</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-green-700">Gewoon lid</h4>
                      <p className="text-sm text-gray-600 mt-1">Volwassenen vanaf 18 jaar</p>
                      <p className="text-sm font-semibold mt-2">€100 per jaar</p>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-green-700">Jeugdlid</h4>
                      <p className="text-sm text-gray-600 mt-1">Tot en met 17 jaar</p>
                      <p className="text-sm font-semibold mt-2">€75 per jaar</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">2.3 Duur en beëindiging</h3>
                  <ul className="space-y-2 text-gray-700 ml-4">
                    <li>• Het lidmaatschap loopt per kalenderjaar (januari t/m december)</li>
                    <li>• Opzegging dient schriftelijk te gebeuren vóór 1 december</li>
                    <li>• Bij opzegging na 1 december is contributie voor het volgende jaar verschuldigd</li>
                    <li>• Bij tussentijdse aanmelding wordt contributie naar rato berekend</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Artikel 3: Contributie en betaling */}
          <div className="content-section mb-12">
            <Card>
              <CardHeader className="bg-emerald-50">
                <CardTitle className="text-2xl flex items-center">
                  <Euro className="w-6 h-6 text-emerald-600 mr-3" />
                  Artikel 3: Contributie en betaling
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                  <p className="text-sm text-gray-700">
                    <strong>Let op:</strong> Contributie dient vóór 31 januari van het lopende jaar te zijn voldaan.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">3.1 Betalingswijze</h3>
                  <ul className="space-y-2 text-gray-700 ml-4">
                    <li>• Betaling via automatische incasso (voorkeur)</li>
                    <li>• Betaling via bankoverschrijving</li>
                    <li>• Contante betaling bij de penningmeester</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">3.2 Betalingstermijnen</h3>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <table className="w-full text-sm">
                      <tbody className="text-gray-700">
                        <tr className="border-b">
                          <td className="py-2">Eerste herinnering:</td>
                          <td className="py-2 font-semibold">Na 30 dagen</td>
                        </tr>
                        <tr className="border-b">
                          <td className="py-2">Tweede herinnering:</td>
                          <td className="py-2 font-semibold">Na 60 dagen</td>
                        </tr>
                        <tr>
                          <td className="py-2">Schorsing lidmaatschap:</td>
                          <td className="py-2 font-semibold">Na 90 dagen</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">3.3 Restitutie</h3>
                  <p className="text-gray-700">
                    Bij beëindiging van het lidmaatschap gedurende het jaar vindt geen restitutie plaats van de reeds betaalde contributie.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Artikel 4: Rechten en plichten leden */}
          <div className="content-section mb-12">
            <Card>
              <CardHeader className="bg-indigo-50">
                <CardTitle className="text-2xl flex items-center">
                  <CheckCircle className="w-6 h-6 text-indigo-600 mr-3" />
                  Artikel 4: Rechten en plichten leden
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">4.1 Rechten van leden</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <p className="text-gray-700 text-sm">Deelname aan alle clubavonden</p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <p className="text-gray-700 text-sm">Deelname aan interne competities</p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <p className="text-gray-700 text-sm">Gebruik van clubmateriaal</p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <p className="text-gray-700 text-sm">Stemrecht in ledenvergadering (18+)</p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <p className="text-gray-700 text-sm">Gratis koffie/thee tijdens clubavonden</p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                      <p className="text-gray-700 text-sm">Korting op toernooien</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">4.2 Plichten van leden</h3>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <XCircle className="w-5 h-5 text-red-500 mr-2 mt-0.5" />
                      <p className="text-gray-700 text-sm">Tijdige betaling van contributie</p>
                    </div>
                    <div className="flex items-start">
                      <XCircle className="w-5 h-5 text-red-500 mr-2 mt-0.5" />
                      <p className="text-gray-700 text-sm">Respectvol gedrag naar andere leden</p>
                    </div>
                    <div className="flex items-start">
                      <XCircle className="w-5 h-5 text-red-500 mr-2 mt-0.5" />
                      <p className="text-gray-700 text-sm">Zorgvuldig omgaan met clubmateriaal</p>
                    </div>
                    <div className="flex items-start">
                      <XCircle className="w-5 h-5 text-red-500 mr-2 mt-0.5" />
                      <p className="text-gray-700 text-sm">Naleven van huisregels en besluiten bestuur</p>
                    </div>
                    <div className="flex items-start">
                      <XCircle className="w-5 h-5 text-red-500 mr-2 mt-0.5" />
                      <p className="text-gray-700 text-sm">Melden van adreswijzigingen aan secretariaat</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Artikel 5: Clubavonden en activiteiten */}
          <div className="content-section mb-12">
            <Card>
              <CardHeader className="bg-purple-50">
                <CardTitle className="text-2xl flex items-center">
                  <Calendar className="w-6 h-6 text-purple-600 mr-3" />
                  Artikel 5: Clubavonden en activiteiten
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">5.1 Clubavonden</h3>
                  <div className="bg-purple-50 rounded-lg p-4">
                    <ul className="space-y-2 text-gray-700">
                      <li>• <strong>Wanneer:</strong> Elke vrijdagavond (behalve feestdagen)</li>
                      <li>• <strong>Tijd:</strong> 19:00 - 22:30 uur</li>
                      <li>• <strong>Jeugd:</strong> Vanaf 18:45 uur</li>
                      <li>• <strong>Locatie:</strong> Gemeenschapshuis De Brug, Sigrid Undsetweg 300</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">5.2 Competities</h3>
                  <ul className="space-y-2 text-gray-700 ml-4">
                    <li>• Interne competitie loopt van september tot mei</li>
                    <li>• Indeling gebeurt op basis van speelsterkte</li>
                    <li>• Deelname is gratis voor leden</li>
                    <li>• Externe competities via KNDB (aparte inschrijving)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">5.3 Toernooien</h3>
                  <ul className="space-y-2 text-gray-700 ml-4">
                    <li>• Maandelijkse clubtoernooien</li>
                    <li>• Jaarlijks kampioenschap</li>
                    <li>• Jeugdtoernooien in schoolvakanties</li>
                    <li>• Leden krijgen korting op inschrijfgeld</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Artikel 6: Gedragsregels */}
          <div className="content-section mb-12">
            <Card className="border-2 border-orange-400">
              <CardHeader className="bg-orange-50">
                <CardTitle className="text-2xl flex items-center">
                  <AlertTriangle className="w-6 h-6 text-orange-600 mr-3" />
                  Artikel 6: Gedragsregels
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <p className="text-gray-700 font-semibold">
                  Van alle leden en bezoekers wordt verwacht dat zij:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-green-50 rounded-lg p-4">
                    <h4 className="font-semibold text-green-700 mb-2">✓ WEL doen:</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• Respectvol omgaan met elkaar</li>
                      <li>• Sportief gedrag tonen</li>
                      <li>• Op tijd komen bij competitiewedstrijden</li>
                      <li>• Opruimen na gebruik materiaal</li>
                      <li>• Mobiel op stil tijdens partijen</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 rounded-lg p-4">
                    <h4 className="font-semibold text-red-700 mb-2">✗ NIET doen:</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• Discriminatie of intimidatie</li>
                      <li>• Alcohol/drugs tijdens jeugdactiviteiten</li>
                      <li>• Roken in het gebouw</li>
                      <li>• Hinderlijk gedrag tijdens partijen</li>
                      <li>• Beschadigen van materiaal</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                  <p className="text-sm text-gray-700">
                    <strong>Sancties:</strong> Bij overtreding kan het bestuur waarschuwen, schorsen of het lidmaatschap beëindigen.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Artikel 7: Aansprakelijkheid */}
          <div className="content-section mb-12">
            <Card>
              <CardHeader className="bg-red-50">
                <CardTitle className="text-2xl flex items-center">
                  <Info className="w-6 h-6 text-red-600 mr-3" />
                  Artikel 7: Aansprakelijkheid
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <div className="space-y-3 text-gray-700">
                  <p>
                    <strong>7.1</strong> De vereniging is niet aansprakelijk voor verlies, diefstal of beschadiging van persoonlijke eigendommen.
                  </p>
                  <p>
                    <strong>7.2</strong> Leden nemen deel aan activiteiten op eigen risico.
                  </p>
                  <p>
                    <strong>7.3</strong> De vereniging heeft een WA-verzekering voor schade aan derden tijdens verenigingsactiviteiten.
                  </p>
                  <p>
                    <strong>7.4</strong> Leden zijn aansprakelijk voor door hen veroorzaakte schade aan eigendommen van de vereniging of derden.
                  </p>
                  <p>
                    <strong>7.5</strong> Ouders/verzorgers zijn aansprakelijk voor schade veroorzaakt door hun minderjarige kinderen.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Artikel 8: Privacy */}
          <div className="content-section mb-12">
            <Card>
              <CardHeader className="bg-gray-50">
                <CardTitle className="text-2xl">Artikel 8: Privacy</CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <p className="text-gray-700">
                  De vereniging gaat zorgvuldig om met persoonsgegevens van leden conform de AVG (Algemene Verordening Gegevensbescherming).
                </p>
                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-sm text-gray-700">
                    Voor details zie ons separate{' '}
                    <a href="/privacy-beleid" className="text-blue-600 hover:underline font-semibold">
                      Privacy Beleid
                    </a>.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Artikel 9: Wijzigingen */}
          <div className="content-section mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Artikel 9: Wijzigingen</CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <div className="space-y-3 text-gray-700">
                  <p>
                    <strong>9.1</strong> Het bestuur kan deze algemene voorwaarden wijzigen na goedkeuring door de ledenvergadering.
                  </p>
                  <p>
                    <strong>9.2</strong> Wijzigingen worden minimaal 30 dagen voor inwerkingtreding bekendgemaakt via e-mail en de website.
                  </p>
                  <p>
                    <strong>9.3</strong> Leden die niet akkoord gaan met wijzigingen kunnen hun lidmaatschap opzeggen.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Artikel 10: Slotbepalingen */}
          <div className="content-section">
            <Card className="border-2 border-green-500">
              <CardHeader className="bg-gradient-to-r from-green-50 to-emerald-50">
                <CardTitle className="text-2xl">Artikel 10: Slotbepalingen</CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4">
                <div className="space-y-3 text-gray-700">
                  <p>
                    <strong>10.1</strong> In gevallen waarin deze voorwaarden niet voorzien, beslist het bestuur.
                  </p>
                  <p>
                    <strong>10.2</strong> Op deze voorwaarden is Nederlands recht van toepassing.
                  </p>
                  <p>
                    <strong>10.3</strong> Geschillen worden voorgelegd aan de ledenvergadering of, indien nodig, aan de bevoegde rechter te Rotterdam.
                  </p>
                </div>

                <div className="bg-green-50 rounded-lg p-6 mt-6">
                  <p className="text-sm text-gray-600 mb-2">Deze algemene voorwaarden zijn vastgesteld door de ledenvergadering op:</p>
                  <p className="font-semibold text-gray-900">1 januari 2024</p>
                  <p className="text-sm text-gray-600 mt-4">
                    Voor vragen over deze voorwaarden kunt u contact opnemen met het bestuur via{' '}
                    <a href="mailto:info@dcpar.nl" className="text-green-600 hover:underline">
                      info@dcpar.nl
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>

      {/* CTA */}
      <CTA
        title="Nog vragen?"
        description="Neem contact met ons op voor meer informatie"
        buttonText="Contact"
        buttonLink="/contact"
      />
    </main>
  );
};

export default AlgemeneVoorwaarden;
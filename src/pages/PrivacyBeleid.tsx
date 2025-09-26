import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Shield, Lock, Eye, UserCheck, Database, Mail, FileText, AlertCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/ui-components';
import CTA from '@/components/CTA';

gsap.registerPlugin(ScrollTrigger);

const PrivacyBeleid = () => {
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
          <Shield className="w-16 h-16 text-white mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 drop-shadow-2xl">
            Privacy Beleid
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto drop-shadow-lg">
            Hoe wij omgaan met jouw persoonsgegevens
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="content-container py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 max-w-4xl">

          {/* Introductie */}
          <div className="content-section mb-12">
            <Card className="border-l-4 border-green-600">
              <CardContent className="pt-6">
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  DC PAR (Damclub Denk Centraal Prins Alexander Rotterdam) hecht grote waarde aan de bescherming van uw persoonsgegevens.
                  In dit privacy beleid leggen wij uit hoe wij omgaan met persoonsgegevens die wij van u ontvangen.
                </p>
                <p className="text-sm text-gray-600 italic">
                  Laatst bijgewerkt: Januari 2024
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Welke gegevens verzamelen wij */}
          <div className="content-section mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Database className="w-6 h-6 text-green-600 mr-3" />
                  Welke gegevens verzamelen wij?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-green-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Voor leden:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span>Naam en contactgegevens (adres, telefoonnummer, e-mailadres)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span>Geboortedatum (voor jeugdleden en competitie-indeling)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span>KNDB-lidmaatschapsnummer (indien van toepassing)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span>Speelsterkte en competitieresultaten</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span>Bankgegevens (voor contributie-incasso)</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">Voor bezoekers website:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Naam en e-mailadres (bij contactformulier)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>Telefoonnummer (optioneel bij contactformulier)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">•</span>
                      <span>IP-adres en browsergegevens (voor website statistieken)</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Waarvoor gebruiken wij uw gegevens */}
          <div className="content-section mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <UserCheck className="w-6 h-6 text-green-600 mr-3" />
                  Waarvoor gebruiken wij uw gegevens?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-l-4 border-green-500 pl-4">
                    <h3 className="font-semibold text-gray-900 mb-1">Ledenadministratie</h3>
                    <p className="text-gray-700">Voor het bijhouden van ons ledenbestand en communicatie met leden</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <h3 className="font-semibold text-gray-900 mb-1">Competitie organisatie</h3>
                    <p className="text-gray-700">Voor het indelen en organiseren van interne en externe competities</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <h3 className="font-semibold text-gray-900 mb-1">Financiële administratie</h3>
                    <p className="text-gray-700">Voor het innen van contributie en bijhouden van de boekhouding</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <h3 className="font-semibold text-gray-900 mb-1">Communicatie</h3>
                    <p className="text-gray-700">Voor het versturen van nieuwsbrieven, uitnodigingen en belangrijke mededelingen</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <h3 className="font-semibold text-gray-900 mb-1">Wettelijke verplichtingen</h3>
                    <p className="text-gray-700">Om te voldoen aan wettelijke verplichtingen, zoals belastingaangifte</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Hoe beveiligen wij uw gegevens */}
          <div className="content-section mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Lock className="w-6 h-6 text-green-600 mr-3" />
                  Hoe beveiligen wij uw gegevens?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Wij nemen de bescherming van uw gegevens serieus en hebben passende maatregelen genomen:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Technische maatregelen</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• Beveiligde website met SSL-certificaat</li>
                      <li>• Wachtwoordbeveiliging op systemen</li>
                      <li>• Regelmatige software-updates</li>
                      <li>• Beperkte toegang tot gegevens</li>
                    </ul>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Organisatorische maatregelen</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li>• Alleen bestuursleden hebben toegang</li>
                      <li>• Geheimhoudingsverklaring bestuur</li>
                      <li>• Minimale gegevensopslag</li>
                      <li>• Regelmatige controle op toegang</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Met wie delen wij gegevens */}
          <div className="content-section mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Eye className="w-6 h-6 text-green-600 mr-3" />
                  Met wie delen wij gegevens?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Wij delen uw persoonsgegevens alleen met derden als dit noodzakelijk is:
                </p>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <span className="text-green-600 font-bold mr-3">1.</span>
                    <div>
                      <span className="font-semibold">KNDB (Koninklijke Nederlandse Dambond)</span>
                      <p className="text-sm text-gray-600 mt-1">Voor aanmelding competities en rating-administratie</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-600 font-bold mr-3">2.</span>
                    <div>
                      <span className="font-semibold">Gemeente Rotterdam</span>
                      <p className="text-sm text-gray-600 mt-1">Voor subsidieaanvragen (alleen aantallen, geen namen)</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <span className="text-green-600 font-bold mr-3">3.</span>
                    <div>
                      <span className="font-semibold">Accountant</span>
                      <p className="text-sm text-gray-600 mt-1">Voor financiële controle (onder geheimhouding)</p>
                    </div>
                  </div>
                </div>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-6">
                  <p className="text-sm text-gray-700">
                    <strong>Let op:</strong> Wij verkopen of verhuren uw gegevens nooit aan commerciële partijen.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Hoe lang bewaren wij gegevens */}
          <div className="content-section mb-12">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <FileText className="w-6 h-6 text-green-600 mr-3" />
                  Hoe lang bewaren wij gegevens?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-2 font-semibold">Type gegeven</th>
                        <th className="text-left py-2 font-semibold">Bewaartermijn</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-700">
                      <tr className="border-b">
                        <td className="py-3">Ledengegevens</td>
                        <td className="py-3">Tot 2 jaar na beëindiging lidmaatschap</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3">Financiële gegevens</td>
                        <td className="py-3">7 jaar (wettelijke bewaarplicht)</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3">Competitieresultaten</td>
                        <td className="py-3">Onbeperkt (historisch archief)</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3">Contactformulier berichten</td>
                        <td className="py-3">Maximaal 1 jaar</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-3">Nieuwsbrief aanmeldingen</td>
                        <td className="py-3">Tot uitschrijving</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Uw rechten */}
          <div className="content-section mb-12">
            <Card className="border-2 border-green-500">
              <CardHeader className="bg-green-50">
                <CardTitle className="flex items-center text-2xl">
                  <AlertCircle className="w-6 h-6 text-green-600 mr-3" />
                  Uw rechten
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-gray-700 mb-4">
                  Onder de AVG (Algemene Verordening Gegevensbescherming) heeft u de volgende rechten:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <div>
                        <strong>Recht op inzage</strong>
                        <p className="text-sm text-gray-600">U mag opvragen welke gegevens wij van u hebben</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <div>
                        <strong>Recht op rectificatie</strong>
                        <p className="text-sm text-gray-600">U kunt onjuiste gegevens laten corrigeren</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <div>
                        <strong>Recht op verwijdering</strong>
                        <p className="text-sm text-gray-600">U kunt verzoeken om verwijdering van uw gegevens</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <div>
                        <strong>Recht op dataportabiliteit</strong>
                        <p className="text-sm text-gray-600">U kunt uw gegevens meenemen naar een andere organisatie</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <div>
                        <strong>Recht op bezwaar</strong>
                        <p className="text-sm text-gray-600">U kunt bezwaar maken tegen verwerking van uw gegevens</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <span className="text-green-600 mr-2">✓</span>
                      <div>
                        <strong>Recht op beperking</strong>
                        <p className="text-sm text-gray-600">U kunt de verwerking (tijdelijk) laten stopzetten</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-green-50 rounded-lg p-4 mt-6">
                  <p className="text-sm text-gray-700">
                    <strong>Uitoefenen van uw rechten?</strong> Stuur een e-mail naar{' '}
                    <a href="mailto:privacy@dcpar.nl" className="text-green-600 hover:underline">
                      privacy@dcpar.nl
                    </a>{' '}
                    met een kopie van uw identiteitsbewijs (met pasfoto afgeschermd).
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact */}
          <div className="content-section">
            <Card className="bg-gradient-to-br from-green-50 to-emerald-50">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Mail className="w-6 h-6 text-green-600 mr-3" />
                  Contact
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">
                  Heeft u vragen over ons privacy beleid of over hoe wij met uw gegevens omgaan?
                  Neem dan contact met ons op:
                </p>
                <div className="bg-white rounded-lg p-6 space-y-3">
                  <div>
                    <span className="font-semibold text-gray-900">DC PAR</span>
                  </div>
                  <div className="text-gray-700">
                    <p>Sigrid Undsetweg 300</p>
                    <p>3069 BV Rotterdam</p>
                  </div>
                  <div className="text-gray-700">
                    <p>E-mail: <a href="mailto:info@dcpar.nl" className="text-green-600 hover:underline">info@dcpar.nl</a></p>
                    <p>Telefoon: 010 - 456 78 90</p>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-gray-700">
                    <strong>Klacht?</strong> U heeft ook het recht om een klacht in te dienen bij de{' '}
                    <a href="https://autoriteitpersoonsgegevens.nl" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      Autoriteit Persoonsgegevens
                    </a>.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>

      {/* CTA */}
      <CTA
        title="Vragen over privacy?"
        description="Wij helpen u graag met al uw privacy-gerelateerde vragen"
        buttonText="Contact Opnemen"
        buttonLink="/contact"
      />
    </main>
  );
};

export default PrivacyBeleid;
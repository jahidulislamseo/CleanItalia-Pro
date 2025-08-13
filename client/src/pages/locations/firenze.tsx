import SEOHead from "@/components/seo/seo-head";
import QuoteForm from "@/components/forms/quote-form";
import { MapPin, Check, Building2, Star, Phone, Mail, Clock } from "lucide-react";

export default function Firenze() {
  const services = [
    "Car cleaning self service per il turismo",
    "Cleaning services maid service per strutture ricettive",
    "Pulizie commerciali per hotel e ristoranti",
    "Servizi domestici per residenze storiche",
    "Sanificazione per musei e siti culturali",
    "Pulizie specializzate per il settore wedding"
  ];

  const areas = [
    "Firenze Centro", "Oltrarno", "Santa Croce", "San Lorenzo", "Santo Spirito",
    "Pisa", "Siena", "Arezzo", "Grosseto", "Livorno", "Prato", "Lucca"
  ];

  const stats = [
    { value: "200+", label: "Clienti Attivi", icon: Building2 },
    { value: "18", label: "Stazioni Car Wash", icon: MapPin },
    { value: "4.9/5", label: "Rating Medio", icon: Star }
  ];

  return (
    <>
      <SEOHead
        title="Servizi di Pulizia a Firenze e Toscana | CleanItalia Pro"
        description="Car cleaning self service e pulizie per il settore turistico toscano. Cleaning services maid service per strutture ricettive a Firenze e in tutta la Toscana."
        keywords="pulizie Firenze, car cleaning self service Firenze, cleaning services maid service Toscana, pulizie turistiche Firenze, servizi pulizia hotel Toscana"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-italian-gold to-yellow-800 text-white py-20">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div 
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
          className="absolute inset-0"
        ></div>
        
        <div className="relative container mx-auto px-4 text-center">
          <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <MapPin className="text-white text-3xl" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6" data-testid="text-hero-title">
            Cleaning Services a <span className="text-white">Firenze</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90" data-testid="text-hero-subtitle">
            Car cleaning self service e cleaning services maid service per il settore turistico toscano
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6" data-testid="text-services-title">
                Cleaning Services Maid Service per la Toscana
              </h2>
              <p className="text-xl text-gray-600 mb-8" data-testid="text-services-description">
                CleanItalia Pro in Toscana si specializza nel cleaning services maid service per 
                strutture ricettive e nel car cleaning self service per il dinamico settore turistico. 
                Offriamo soluzioni su misura per hotel, ville, agriturismi e residenze storiche.
              </p>
              
              <div className="space-y-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3" data-testid={`service-item-${index}`}>
                    <Check className="h-5 w-5 text-italian-green flex-shrink-0" />
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Duomo di Firenze e centro storico" 
                className="rounded-xl shadow-2xl w-full"
                data-testid="img-firenze-duomo"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Areas */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" data-testid="text-coverage-title">
              Copertura in Toscana
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="text-coverage-subtitle">
              I nostri servizi coprono Firenze e tutta la regione Toscana con focus sul turismo
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 lg:grid-cols-6 gap-4">
            {areas.map((area, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg p-4 text-center hover:shadow-lg transition-shadow"
                data-testid={`area-card-${index}`}
              >
                <MapPin className="w-6 h-6 text-italian-gold mx-auto mb-2" />
                <h3 className="font-semibold text-gray-900" data-testid={`text-area-name-${index}`}>
                  {area}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Stats */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" data-testid="text-stats-title">
              CleanItalia Pro a Firenze in Numeri
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div 
                  key={index}
                  className="text-center"
                  data-testid={`stat-card-${index}`}
                >
                  <div className="w-16 h-16 bg-italian-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="text-white text-2xl" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2" data-testid={`text-stat-value-${index}`}>
                    {stat.value}
                  </div>
                  <div className="text-lg text-gray-600" data-testid={`text-stat-label-${index}`}>
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Local Specializations */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" data-testid="text-specializations-title">
              Specializzazioni per il Mercato Toscano
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 text-center hover:shadow-lg transition-shadow" data-testid="specialization-hospitality">
              <div className="w-16 h-16 bg-italian-red rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Ospitalità di Lusso</h3>
              <p className="text-gray-600">
                Cleaning services maid service per hotel 5 stelle, resort di lusso e ville 
                storiche con standard internazionali di eccellenza.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 text-center hover:shadow-lg transition-shadow" data-testid="specialization-culture">
              <div className="w-16 h-16 bg-italian-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Patrimonio Culturale</h3>
              <p className="text-gray-600">
                Pulizie specializzate per musei, gallerie d'arte e siti UNESCO 
                con protocolli di conservazione dedicati.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 text-center hover:shadow-lg transition-shadow" data-testid="specialization-wine">
              <div className="w-16 h-16 bg-italian-green rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Settore Enogastronomico</h3>
              <p className="text-gray-600">
                Car cleaning self service per cantine vinicole e servizi di pulizia 
                per ristoranti gourmet e agriturismi di prestigio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tourist Season Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" data-testid="text-seasonal-title">
              Servizi Stagionali per il Turismo
            </h2>
            <p className="text-xl text-gray-600" data-testid="text-seasonal-subtitle">
              Soluzioni flessibili per gestire i picchi turistici toscani
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-8" data-testid="season-high">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Alta Stagione (Maggio-Settembre)</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-italian-green mr-2" />
                  Cleaning services maid service intensificati
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-italian-green mr-2" />
                  Car cleaning self service 24/7
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-italian-green mr-2" />
                  Pulizie post-evento matrimoni
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-italian-green mr-2" />
                  Servizi di emergenza rapidi
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8" data-testid="season-low">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Bassa Stagione (Ottobre-Aprile)</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-italian-green mr-2" />
                  Pulizie approfondite di manutenzione
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-italian-green mr-2" />
                  Ristrutturazione e restyling
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-italian-green mr-2" />
                  Formazione staff strutture ricettive
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-italian-green mr-2" />
                  Prezzi vantaggiosi contratti annuali
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Local Contact */}
      <section className="py-20 bg-italian-gold text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6" data-testid="text-contact-title">
                Contatti Firenze e Toscana
              </h2>
              <p className="text-xl mb-8 opacity-90" data-testid="text-contact-subtitle">
                Il nostro team fiorentino è specializzato nel settore turistico e culturale
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4" data-testid="contact-info-phone">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <Phone className="text-white h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Telefono Firenze</div>
                    <div className="opacity-90">+39 055 1234 567</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4" data-testid="contact-info-email">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <Mail className="text-white h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="opacity-90">firenze@cleanitaliapro.it</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4" data-testid="contact-info-hours">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <Clock className="text-white h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Orari Ufficio Firenze</div>
                    <div className="opacity-90">Lun-Ven: 8:00-18:00 | Sab: 9:00-13:00</div>
                  </div>
                </div>
              </div>
            </div>
            
            <QuoteForm defaultCity="firenze" />
          </div>
        </div>
      </section>
    </>
  );
}

import SEOHead from "@/components/seo/seo-head";
import QuoteForm from "@/components/forms/quote-form";
import { MapPin, Check, Building2, Star, Phone, Mail, Clock } from "lucide-react";

export default function Napoli() {
  const services = [
    "Clean service per il settore turistico",
    "Cleaning services services per aziende",
    "Pulizie commerciali specializzate",
    "Servizi domestici per residenze",
    "Sanificazione strutture ricettive",
    "Pulizie post-evento e manifestazioni"
  ];

  const areas = [
    "Napoli Centro", "Vomero", "Posillipo", "Chiaia", "Bagnoli",
    "Salerno", "Caserta", "Avellino", "Benevento", "Ischia", "Capri", "Sorrento"
  ];

  const stats = [
    { value: "300+", label: "Clienti Attivi", icon: Building2 },
    { value: "25", label: "Stazioni Car Wash", icon: MapPin },
    { value: "4.8/5", label: "Rating Medio", icon: Star }
  ];

  return (
    <>
      <SEOHead
        title="Servizi di Pulizia a Napoli e Campania | CleanItalia Pro"
        description="Clean service professionale nel Sud Italia. Cleaning services services completi per aziende e privati in Campania con focus sul settore turistico."
        keywords="pulizie Napoli, clean service Napoli, cleaning services Napoli, pulizie commerciali Napoli, cleaning services services Napoli, servizi pulizia Campania"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-italian-blue to-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div 
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1544644181-1484b3fdfc62?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')",
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
            Clean Service a <span className="text-italian-gold">Napoli</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90" data-testid="text-hero-subtitle">
            Clean service professionale nel Sud Italia con cleaning services services completi per Campania
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6" data-testid="text-services-title">
                Cleaning Services Services per la Campania
              </h2>
              <p className="text-xl text-gray-600 mb-8" data-testid="text-services-description">
                CleanItalia Pro porta il suo clean service di eccellenza nel Sud Italia, con cleaning 
                services services specializzati per il dinamico mercato campano. Focus particolare 
                sul settore turistico e delle strutture ricettive.
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
                src="https://images.unsplash.com/photo-1544644181-1484b3fdfc62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Golfo di Napoli con Vesuvio" 
                className="rounded-xl shadow-2xl w-full"
                data-testid="img-napoli-gulf"
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
              Copertura in Campania
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="text-coverage-subtitle">
              I nostri cleaning services services coprono Napoli e tutta la regione Campania
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 lg:grid-cols-6 gap-4">
            {areas.map((area, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg p-4 text-center hover:shadow-lg transition-shadow"
                data-testid={`area-card-${index}`}
              >
                <MapPin className="w-6 h-6 text-italian-blue mx-auto mb-2" />
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
              CleanItalia Pro a Napoli in Numeri
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
                  <div className="w-16 h-16 bg-italian-blue rounded-full flex items-center justify-center mx-auto mb-4">
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
              Specializzazioni per il Mercato Campano
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 text-center hover:shadow-lg transition-shadow" data-testid="specialization-tourism">
              <div className="w-16 h-16 bg-italian-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Turismo e Ospitalità</h3>
              <p className="text-gray-600">
                Clean service specializzato per hotel, B&B e strutture ricettive della costiera 
                amalfitana e delle isole del golfo.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 text-center hover:shadow-lg transition-shadow" data-testid="specialization-food">
              <div className="w-16 h-16 bg-italian-green rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Settore Alimentare</h3>
              <p className="text-gray-600">
                Cleaning services services per ristoranti, pizzerie e industrie alimentari 
                con protocolli HACCP rigorosi.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 text-center hover:shadow-lg transition-shadow" data-testid="specialization-port">
              <div className="w-16 h-16 bg-italian-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Settore Portuale</h3>
              <p className="text-gray-600">
                Servizi di pulizia per terminal crociere, porti turistici e strutture 
                logistiche del porto di Napoli.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Contact */}
      <section className="py-20 bg-italian-blue text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6" data-testid="text-contact-title">
                Contatti Napoli e Campania
              </h2>
              <p className="text-xl mb-8 opacity-90" data-testid="text-contact-subtitle">
                Il nostro team napoletano è a disposizione per ogni esigenza di clean service
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4" data-testid="contact-info-phone">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <Phone className="text-white h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Telefono Napoli</div>
                    <div className="opacity-90">+39 081 1234 567</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4" data-testid="contact-info-email">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <Mail className="text-white h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="opacity-90">napoli@cleanitaliapro.it</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4" data-testid="contact-info-hours">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <Clock className="text-white h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Orari Ufficio Napoli</div>
                    <div className="opacity-90">Lun-Ven: 8:00-18:00 | Sab: 9:00-13:00</div>
                  </div>
                </div>
              </div>
            </div>
            
            <QuoteForm defaultCity="napoli" />
          </div>
        </div>
      </section>
    </>
  );
}

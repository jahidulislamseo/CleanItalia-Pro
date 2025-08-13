import SEOHead from "@/components/seo/seo-head";
import QuoteForm from "@/components/forms/quote-form";
import { MapPin, Check, Building2, Star, Phone, Mail, Clock } from "lucide-react";

export default function Bologna() {
  const services = [
    "Self service car cleaning per hub logistici",
    "Cleaning services per industrie alimentari",
    "Pulizie commerciali per università e ricerca",
    "Servizi domestici per residenze urbane",
    "Sanificazione centri di distribuzione",
    "Pulizie specializzate per fiere ed eventi"
  ];

  const areas = [
    "Bologna Centro", "Borgo Panigale", "San Donato", "Navile", "Porto",
    "Modena", "Parma", "Reggio Emilia", "Ferrara", "Ravenna", "Rimini", "Forlì"
  ];

  const stats = [
    { value: "180+", label: "Clienti Attivi", icon: Building2 },
    { value: "15", label: "Stazioni Car Wash", icon: MapPin },
    { value: "4.8/5", label: "Rating Medio", icon: Star }
  ];

  return (
    <>
      <SEOHead
        title="Servizi di Pulizia a Bologna e Emilia-Romagna | CleanItalia Pro"
        description="Self service car cleaning e cleaning services per l'industria emiliana. Soluzioni innovative per il territorio più dinamico d'Italia con hub logistici e centri ricerca."
        keywords="pulizie Bologna, self service car cleaning Bologna, cleaning services Emilia-Romagna, pulizie industriali Bologna, servizi pulizia università Bologna"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-italian-red to-red-800 text-white py-20">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div 
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')",
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
            Cleaning Services a <span className="text-italian-gold">Bologna</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90" data-testid="text-hero-subtitle">
            Self service car cleaning e cleaning services per l'industria emiliana più innovativa d'Italia
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6" data-testid="text-services-title">
                Self Service Car Cleaning per l'Emilia-Romagna
              </h2>
              <p className="text-xl text-gray-600 mb-8" data-testid="text-services-description">
                CleanItalia Pro in Emilia-Romagna offre self service car cleaning e cleaning services 
                all'avanguardia per il territorio più dinamico e industrializzato d'Italia. Specializzati 
                in logistica, alimentare, università e centri di ricerca.
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
                src="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Torri medievali di Bologna" 
                className="rounded-xl shadow-2xl w-full"
                data-testid="img-bologna-towers"
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
              Copertura in Emilia-Romagna
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="text-coverage-subtitle">
              I nostri servizi coprono Bologna e tutta la regione Emilia-Romagna, hub industriale d'Italia
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 lg:grid-cols-6 gap-4">
            {areas.map((area, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg p-4 text-center hover:shadow-lg transition-shadow"
                data-testid={`area-card-${index}`}
              >
                <MapPin className="w-6 h-6 text-italian-red mx-auto mb-2" />
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
              CleanItalia Pro a Bologna in Numeri
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
                  <div className="w-16 h-16 bg-italian-red rounded-full flex items-center justify-center mx-auto mb-4">
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
              Specializzazioni per l'Hub Emiliano
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 text-center hover:shadow-lg transition-shadow" data-testid="specialization-logistics">
              <div className="w-16 h-16 bg-italian-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Logistica e Distribuzione</h3>
              <p className="text-gray-600">
                Self service car cleaning per hub logistici e cleaning services per 
                centri di distribuzione automatizzati dell'interporto bolognese.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 text-center hover:shadow-lg transition-shadow" data-testid="specialization-food">
              <div className="w-16 h-16 bg-italian-green rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Food Valley</h3>
              <p className="text-gray-600">
                Cleaning services specializzati per l'industria alimentare emiliana 
                con protocolli HACCP e certificazioni internazionali.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 text-center hover:shadow-lg transition-shadow" data-testid="specialization-research">
              <div className="w-16 h-16 bg-italian-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Università e Ricerca</h3>
              <p className="text-gray-600">
                Pulizie per campus universitari, laboratori di ricerca e tecnopoli 
                della Motor Valley con standard di sicurezza elevati.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Innovation Hub Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" data-testid="text-innovation-title">
              Servizi per l'Innovazione Emiliana
            </h2>
            <p className="text-xl text-gray-600" data-testid="text-innovation-subtitle">
              Soluzioni all'avanguardia per il territorio più innovativo d'Italia
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-50 rounded-xl p-8" data-testid="innovation-tech">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Tecnologie 4.0</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-italian-green mr-2" />
                  Self service car cleaning IoT-enabled
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-italian-green mr-2" />
                  Sistemi di pulizia robotizzati
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-italian-green mr-2" />
                  Monitoraggio qualità real-time
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-italian-green mr-2" />
                  Dashboards analytics avanzate
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-8" data-testid="innovation-sustainability">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Sostenibilità Avanzata</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-italian-green mr-2" />
                  Prodotti 100% biodegradabili
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-italian-green mr-2" />
                  Sistemi di riciclo acqua chiusa
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-italian-green mr-2" />
                  Carbon footprint tracking
                </li>
                <li className="flex items-center">
                  <Check className="h-4 w-4 text-italian-green mr-2" />
                  Certificazioni ambientali ISO
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Local Contact */}
      <section className="py-20 bg-italian-red text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6" data-testid="text-contact-title">
                Contatti Bologna e Emilia-Romagna
              </h2>
              <p className="text-xl mb-8 opacity-90" data-testid="text-contact-subtitle">
                Il nostro team bolognese è specializzato nel settore industriale e logistico
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4" data-testid="contact-info-phone">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <Phone className="text-white h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Telefono Bologna</div>
                    <div className="opacity-90">+39 051 1234 567</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4" data-testid="contact-info-email">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <Mail className="text-white h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="opacity-90">bologna@cleanitaliapro.it</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4" data-testid="contact-info-hours">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <Clock className="text-white h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Orari Ufficio Bologna</div>
                    <div className="opacity-90">Lun-Ven: 8:00-18:00 | Sab: 9:00-13:00</div>
                  </div>
                </div>
              </div>
            </div>
            
            <QuoteForm defaultCity="bologna" />
          </div>
        </div>
      </section>
    </>
  );
}

import SEOHead from "@/components/seo/seo-head";
import QuoteForm from "@/components/forms/quote-form";
import { MapPin, Check, Building2, Star, Phone, Mail, Clock } from "lucide-react";

export default function Torino() {
  const services = [
    "Cleaning services cleaning services industriali",
    "Car clean self service automotive",
    "Pulizie commerciali per il settore manifatturiero",
    "Servizi domestici residenziali",
    "Sanificazione ambienti industriali",
    "Pulizie specializzate per automotive"
  ];

  const areas = [
    "Torino Centro", "Mirafiori", "Lingotto", "Aurora", "San Salvario",
    "Cuneo", "Asti", "Alessandria", "Novara", "Biella", "Verbania"
  ];

  const stats = [
    { value: "250+", label: "Clienti Attivi", icon: Building2 },
    { value: "22", label: "Stazioni Car Wash", icon: MapPin },
    { value: "4.9/5", label: "Rating Medio", icon: Star }
  ];

  return (
    <>
      <SEOHead
        title="Servizi di Pulizia a Torino e Piemonte | CleanItalia Pro"
        description="Cleaning services cleaning services nel cuore del Piemonte. Car clean self service e pulizie industriali di alta qualità per il settore automotive e manifatturiero."
        keywords="pulizie Torino, cleaning services Torino, car clean Torino, pulizie industriali Torino, cleaning services cleaning services Piemonte, car clean self service Torino"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-italian-green to-green-800 text-white py-20">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div 
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1534008897995-27a3c7e0b7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')",
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
            Cleaning Services a <span className="text-italian-gold">Torino</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90" data-testid="text-hero-subtitle">
            Cleaning services cleaning services nel cuore del Piemonte con car clean self service specializzato
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6" data-testid="text-services-title">
                Car Clean Self Service e Pulizie Industriali
              </h2>
              <p className="text-xl text-gray-600 mb-8" data-testid="text-services-description">
                CleanItalia Pro in Piemonte offre cleaning services cleaning services specializzati 
                per il settore industriale e automotive. Il nostro car clean self service è progettato 
                per le esigenze del territorio torinese e della sua vocazione manifatturiera.
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
                src="https://images.unsplash.com/photo-1534008897995-27a3c7e0b7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Torino con le Alpi sullo sfondo" 
                className="rounded-xl shadow-2xl w-full"
                data-testid="img-torino-alps"
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
              Copertura in Piemonte
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="text-coverage-subtitle">
              I nostri cleaning services coprono Torino e tutta la regione Piemonte
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 lg:grid-cols-6 gap-4">
            {areas.map((area, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg p-4 text-center hover:shadow-lg transition-shadow"
                data-testid={`area-card-${index}`}
              >
                <MapPin className="w-6 h-6 text-italian-green mx-auto mb-2" />
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
              CleanItalia Pro a Torino in Numeri
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
                  <div className="w-16 h-16 bg-italian-green rounded-full flex items-center justify-center mx-auto mb-4">
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
              Specializzazioni per il Territorio Piemontese
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 text-center hover:shadow-lg transition-shadow" data-testid="specialization-automotive">
              <div className="w-16 h-16 bg-italian-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Settore Automotive</h3>
              <p className="text-gray-600">
                Car clean self service e cleaning services cleaning services specializzati 
                per concessionarie, officine e stabilimenti automotive.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 text-center hover:shadow-lg transition-shadow" data-testid="specialization-manufacturing">
              <div className="w-16 h-16 bg-italian-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Industria Manifatturiera</h3>
              <p className="text-gray-600">
                Pulizie industriali specializzate per il comparto manifatturiero piemontese 
                con protocolli di sicurezza avanzati.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 text-center hover:shadow-lg transition-shadow" data-testid="specialization-logistics">
              <div className="w-16 h-16 bg-italian-green rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Logistica e Trasporti</h3>
              <p className="text-gray-600">
                Servizi di pulizia per hub logistici, magazzini automatizzati 
                e centri di distribuzione della regione.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Local Contact */}
      <section className="py-20 bg-italian-green text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6" data-testid="text-contact-title">
                Contatti Torino e Piemonte
              </h2>
              <p className="text-xl mb-8 opacity-90" data-testid="text-contact-subtitle">
                Il nostro team torinese è a disposizione per ogni esigenza di cleaning services
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4" data-testid="contact-info-phone">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <Phone className="text-white h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Telefono Torino</div>
                    <div className="opacity-90">+39 011 1234 567</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4" data-testid="contact-info-email">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <Mail className="text-white h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="opacity-90">torino@cleanitaliapro.it</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4" data-testid="contact-info-hours">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <Clock className="text-white h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Orari Ufficio Torino</div>
                    <div className="opacity-90">Lun-Ven: 8:00-18:00 | Sab: 9:00-13:00</div>
                  </div>
                </div>
              </div>
            </div>
            
            <QuoteForm defaultCity="torino" />
          </div>
        </div>
      </section>
    </>
  );
}

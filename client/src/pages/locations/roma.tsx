import SEOHead from "@/components/seo/seo-head";
import QuoteForm from "@/components/forms/quote-form";
import { MapPin, Check, Building2, Star, Phone, Mail, Clock } from "lucide-react";

export default function Roma() {
  const services = [
    "A cleaning service per uffici governativi e PA",
    "Self service car cleaning in tutto il Lazio",
    "Pulizie commerciali per il settore turistico",
    "Servizi domestici per residenze storiche",
    "Sanificazione per strutture sanitarie",
    "Pulizie specializzate per musei e cultura"
  ];

  const areas = [
    "Roma Centro", "EUR", "Parioli", "Trastevere", "Testaccio",
    "Frosinone", "Latina", "Rieti", "Viterbo", "Civitavecchia", "Anzio"
  ];

  const stats = [
    { value: "400+", label: "Clienti Attivi", icon: Building2 },
    { value: "38", label: "Stazioni Car Wash", icon: MapPin },
    { value: "4.8/5", label: "Rating Medio", icon: Star }
  ];

  return (
    <>
      <SEOHead
        title="Servizi di Pulizia a Roma e Lazio | CleanItalia Pro"
        description="A cleaning service professionale nella Capitale. Self service car cleaning e pulizie commerciali in tutto il territorio laziale con personale qualificato."
        keywords="pulizie Roma, cleaning service Roma, car wash Roma, pulizie commerciali Roma, self service car cleaning Roma, servizi pulizia Lazio"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-italian-red to-red-800 text-white py-20">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div 
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')",
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
            A Cleaning Service a <span className="text-italian-gold">Roma</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90" data-testid="text-hero-subtitle">
            A cleaning service professionale nella Capitale con self service car cleaning in tutto il Lazio
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6" data-testid="text-services-title">
                A Cleaning Service per Roma e Lazio
              </h2>
              <p className="text-xl text-gray-600 mb-8" data-testid="text-services-description">
                CleanItalia Pro offre a cleaning service di eccellenza per la Capitale, specializzandosi 
                nelle esigenze del settore pubblico, turistico e culturale romano. Il nostro self service 
                car cleaning copre tutto il territorio laziale.
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
                src="https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Colosseo e Roma antica" 
                className="rounded-xl shadow-2xl w-full"
                data-testid="img-roma-colosseum"
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
              Copertura nel Lazio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="text-coverage-subtitle">
              I nostri servizi di pulizia coprono Roma e tutta la regione Lazio
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
              CleanItalia Pro a Roma in Numeri
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
              Specializzazioni per Roma Capitale
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 text-center hover:shadow-lg transition-shadow" data-testid="specialization-government">
              <div className="w-16 h-16 bg-italian-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Settore Pubblico</h3>
              <p className="text-gray-600">
                A cleaning service specializzato per ministeri, enti pubblici e uffici governativi 
                con protocolli di sicurezza elevati.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 text-center hover:shadow-lg transition-shadow" data-testid="specialization-tourism">
              <div className="w-16 h-16 bg-italian-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Turismo e Cultura</h3>
              <p className="text-gray-600">
                Servizi di pulizia per hotel, musei, siti archeologici e strutture ricettive 
                del patrimonio romano.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-8 text-center hover:shadow-lg transition-shadow" data-testid="specialization-healthcare">
              <div className="w-16 h-16 bg-italian-green rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Settore Sanitario</h3>
              <p className="text-gray-600">
                Self service car cleaning e pulizie specializzate per ospedali, cliniche 
                e strutture sanitarie della Capitale.
              </p>
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
                Contatti Roma e Lazio
              </h2>
              <p className="text-xl mb-8 opacity-90" data-testid="text-contact-subtitle">
                Il nostro team romano è a disposizione per ogni esigenza di a cleaning service
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4" data-testid="contact-info-phone">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <Phone className="text-white h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Telefono Roma</div>
                    <div className="opacity-90">+39 06 1234 5678</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4" data-testid="contact-info-email">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <Mail className="text-white h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="opacity-90">roma@cleanitaliapro.it</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4" data-testid="contact-info-hours">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <Clock className="text-white h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Orari Ufficio Roma</div>
                    <div className="opacity-90">Lun-Ven: 8:00-19:00 | Sab: 9:00-13:00</div>
                  </div>
                </div>
              </div>
            </div>
            
            <QuoteForm defaultCity="roma" />
          </div>
        </div>
      </section>
    </>
  );
}

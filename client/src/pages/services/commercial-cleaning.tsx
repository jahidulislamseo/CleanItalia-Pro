import SEOHead from "@/components/seo/seo-head";
import QuoteForm from "@/components/forms/quote-form";
import { Building2, Check, Clock, Users, Award, Shield } from "lucide-react";

export default function CommercialCleaning() {
  const services = [
    "Pulizia uffici quotidiana e periodica",
    "Sanificazione ambienti di lavoro",
    "Pulizia vetri e superfici",
    "Gestione rifiuti e raccolta differenziata",
    "Pulizia bagni e aree comuni",
    "Manutenzione aree esterne",
    "Servizi di igienizzazione professionale",
    "Pulizia post-evento"
  ];

  const sectors = [
    { name: "Uffici e Sedi Aziendali", icon: Building2 },
    { name: "Centri Commerciali", icon: Building2 },
    { name: "Strutture Sanitarie", icon: Shield },
    { name: "Hotel e Strutture Ricettive", icon: Building2 },
    { name: "Scuole e Università", icon: Building2 },
    { name: "Industrie e Magazzini", icon: Building2 }
  ];

  return (
    <>
      <SEOHead
        title="Pulizie Commerciali Professionali in Italia | CleanItalia Pro"
        description="Servizi di pulizia commerciale per uffici, negozi, centri commerciali e strutture industriali. Cleaning services professionali con personale qualificato in tutta Italia."
        keywords="pulizie commerciali, cleaning services, pulizia uffici, cleaning services cleaners, sanificazione ambienti, pulizie industriali"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-italian-blue to-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div 
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
          className="absolute inset-0"
        ></div>
        
        <div className="relative container mx-auto px-4 text-center">
          <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Building2 className="text-white text-3xl" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6" data-testid="text-hero-title">
            Pulizie <span className="text-italian-gold">Commerciali</span> Professionali
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90" data-testid="text-hero-subtitle">
            Cleaning services specializzati per uffici, negozi, centri commerciali e strutture industriali in tutta Italia
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6" data-testid="text-services-title">
                Cleaning Services per Aziende
              </h2>
              <p className="text-xl text-gray-600 mb-8" data-testid="text-services-description">
                I nostri cleaning services cleaners specializzati offrono soluzioni complete per la pulizia 
                commerciale, garantendo ambienti di lavoro puliti, sicuri e professionali per la tua azienda.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
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
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Team di pulizie commerciali al lavoro" 
                className="rounded-xl shadow-2xl w-full"
                data-testid="img-commercial-team"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sectors We Serve */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" data-testid="text-sectors-title">
              Settori che Serviamo
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="text-sectors-subtitle">
              I nostri cleaning services sono specializzati per diverse tipologie di strutture commerciali
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sectors.map((sector, index) => {
              const IconComponent = sector.icon;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-8 text-center hover:shadow-lg transition-shadow"
                  data-testid={`sector-card-${index}`}
                >
                  <div className="w-16 h-16 bg-italian-blue rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="text-white text-2xl" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900" data-testid={`text-sector-name-${index}`}>
                    {sector.name}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" data-testid="text-features-title">
              Perché Scegliere i Nostri Cleaning Services
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center" data-testid="feature-professional">
              <div className="w-16 h-16 bg-italian-green rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Personale Qualificato</h3>
              <p className="text-gray-600">Cleaning services cleaners certificati e formati professionalmente</p>
            </div>
            
            <div className="text-center" data-testid="feature-availability">
              <div className="w-16 h-16 bg-italian-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Disponibilità Flessibile</h3>
              <p className="text-gray-600">Servizi disponibili 24/7 secondo le tue esigenze</p>
            </div>
            
            <div className="text-center" data-testid="feature-quality">
              <div className="w-16 h-16 bg-italian-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Qualità Garantita</h3>
              <p className="text-gray-600">Standard di qualità elevati con garanzia di soddisfazione</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4" data-testid="text-quote-title">
                Richiedi un Preventivo per Pulizie Commerciali
              </h2>
              <p className="text-xl text-gray-600" data-testid="text-quote-subtitle">
                Ricevi un preventivo personalizzato per i nostri cleaning services commerciali
              </p>
            </div>
            
            <QuoteForm defaultService="commercial" />
          </div>
        </div>
      </section>
    </>
  );
}

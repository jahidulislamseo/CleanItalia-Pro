import SEOHead from "@/components/seo/seo-head";
import QuoteForm from "@/components/forms/quote-form";
import { Home, Check, Clock, Users, Award, Shield } from "lucide-react";

export default function DomesticServices() {
  const services = [
    "Pulizie settimanali e quindicinali",
    "Pulizie mensili approfondite",
    "Pulizie post-trasloco e fine locazione",
    "Stiratura e servizi di riordino",
    "Pulizia vetri interni ed esterni",
    "Sanificazione ambienti domestici",
    "Pulizia elettrodomestici",
    "Servizi stagionali e occasionali"
  ];

  const serviceTypes = [
    { name: "Appartamenti e Case", icon: Home },
    { name: "Ville e Residenze", icon: Home },
    { name: "Uffici Domestici", icon: Home },
    { name: "Bed & Breakfast", icon: Home },
    { name: "Case Vacanza", icon: Home },
    { name: "Condomini", icon: Home }
  ];

  return (
    <>
      <SEOHead
        title="Servizi Domestici di Pulizia in Italia | CleanItalia Pro"
        description="Cleaning services maid service per abitazioni private. Servizi di pulizia domestica professionale con personale qualificato e prodotti ecologici in tutta Italia."
        keywords="servizi domestici, cleaning services maid service, pulizie domestiche, pulizia casa, servizi di pulizia, maid service Italia"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-italian-gold to-yellow-800 text-white py-20">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div 
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
          className="absolute inset-0"
        ></div>
        
        <div className="relative container mx-auto px-4 text-center">
          <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Home className="text-white text-3xl" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6" data-testid="text-hero-title">
            Servizi <span className="text-white">Domestici</span> Professionali
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90" data-testid="text-hero-subtitle">
            Cleaning services maid service per abitazioni private con personale qualificato e prodotti ecologici
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6" data-testid="text-services-title">
                Cleaning Services Maid Service di Qualità
              </h2>
              <p className="text-xl text-gray-600 mb-8" data-testid="text-services-description">
                I nostri servizi domestici combinano professionalità e attenzione ai dettagli per offrirti 
                una casa sempre pulita e accogliente. Cleaning services maid service con prodotti eco-friendly 
                e personale qualificato.
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
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Operatrice pulizie domestiche al lavoro" 
                className="rounded-xl shadow-2xl w-full"
                data-testid="img-domestic-worker"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Types */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" data-testid="text-types-title">
              Tipologie di Abitazioni che Serviamo
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="text-types-subtitle">
              I nostri servizi domestici sono adatti a ogni tipo di abitazione e esigenza
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceTypes.map((type, index) => {
              const IconComponent = type.icon;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-8 text-center hover:shadow-lg transition-shadow"
                  data-testid={`type-card-${index}`}
                >
                  <div className="w-16 h-16 bg-italian-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="text-white text-2xl" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900" data-testid={`text-type-name-${index}`}>
                    {type.name}
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
              Vantaggi dei Nostri Servizi Domestici
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center" data-testid="feature-professional">
              <div className="w-16 h-16 bg-italian-green rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Personale Fidato</h3>
              <p className="text-gray-600">Operatori selezionati, referenziati e coperti da assicurazione</p>
            </div>
            
            <div className="text-center" data-testid="feature-flexibility">
              <div className="w-16 h-16 bg-italian-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Orari Flessibili</h3>
              <p className="text-gray-600">Servizi programmabili secondo le tue esigenze e disponibilità</p>
            </div>
            
            <div className="text-center" data-testid="feature-eco">
              <div className="w-16 h-16 bg-italian-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Prodotti Eco-Friendly</h3>
              <p className="text-gray-600">Solo detergenti ecologici sicuri per famiglia e ambiente</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" data-testid="text-pricing-title">
              Pacchetti Servizi Domestici
            </h2>
            <p className="text-xl text-gray-600" data-testid="text-pricing-subtitle">
              Soluzioni personalizzate per ogni esigenza di pulizia domestica
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-8 shadow-lg" data-testid="package-basic">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Pulizia Base</h3>
              <div className="text-3xl font-bold text-italian-gold mb-6">Da €25/h</div>
              <ul className="space-y-3 text-gray-600 mb-8">
                <li className="flex items-center"><Check className="h-4 w-4 text-italian-green mr-2" />Aspirapolvere e spazzatura</li>
                <li className="flex items-center"><Check className="h-4 w-4 text-italian-green mr-2" />Pulizia bagni</li>
                <li className="flex items-center"><Check className="h-4 w-4 text-italian-green mr-2" />Cucina base</li>
                <li className="flex items-center"><Check className="h-4 w-4 text-italian-green mr-2" />Spolveratura superfici</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-italian-gold" data-testid="package-standard">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Pulizia Standard</h3>
              <div className="text-3xl font-bold text-italian-gold mb-6">Da €35/h</div>
              <ul className="space-y-3 text-gray-600 mb-8">
                <li className="flex items-center"><Check className="h-4 w-4 text-italian-green mr-2" />Tutto del pacchetto Base</li>
                <li className="flex items-center"><Check className="h-4 w-4 text-italian-green mr-2" />Pulizia elettrodomestici</li>
                <li className="flex items-center"><Check className="h-4 w-4 text-italian-green mr-2" />Cambi biancheria letto</li>
                <li className="flex items-center"><Check className="h-4 w-4 text-italian-green mr-2" />Pulizia vetri interni</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg" data-testid="package-premium">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Pulizia Premium</h3>
              <div className="text-3xl font-bold text-italian-gold mb-6">Da €45/h</div>
              <ul className="space-y-3 text-gray-600 mb-8">
                <li className="flex items-center"><Check className="h-4 w-4 text-italian-green mr-2" />Tutto del pacchetto Standard</li>
                <li className="flex items-center"><Check className="h-4 w-4 text-italian-green mr-2" />Stiratura inclusa</li>
                <li className="flex items-center"><Check className="h-4 w-4 text-italian-green mr-2" />Pulizia frigorifero e forno</li>
                <li className="flex items-center"><Check className="h-4 w-4 text-italian-green mr-2" />Riordino completo</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4" data-testid="text-quote-title">
                Richiedi Preventivo per Servizi Domestici
              </h2>
              <p className="text-xl text-gray-600" data-testid="text-quote-subtitle">
                Ricevi un preventivo personalizzato per i nostri cleaning services maid service
              </p>
            </div>
            
            <QuoteForm defaultService="domestic" />
          </div>
        </div>
      </section>
    </>
  );
}

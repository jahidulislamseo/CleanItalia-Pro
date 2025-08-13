import SEOHead from "@/components/seo/seo-head";
import QuoteForm from "@/components/forms/quote-form";
import { ShieldCheck, Check, Zap, Users, Award, Clock } from "lucide-react";

export default function Sanitization() {
  const services = [
    "Sanificazione con ozono e vapore",
    "Disinfezione superfici e ambienti",
    "Trattamenti anti-batterici e virali",
    "Certificazioni sanitarie post-intervento",
    "Protocolli COVID-19 autorizzati",
    "Sanificazione condizionatori e impianti",
    "Trattamenti anti-allergeni",
    "Nebulizzazione disinfettante"
  ];

  const environments = [
    { name: "Uffici e Aziende", icon: ShieldCheck },
    { name: "Strutture Sanitarie", icon: ShieldCheck },
    { name: "Scuole e Università", icon: ShieldCheck },
    { name: "Hotel e Ristoranti", icon: ShieldCheck },
    { name: "Palestre e Centri Benessere", icon: ShieldCheck },
    { name: "Abitazioni Private", icon: ShieldCheck }
  ];

  const protocols = [
    {
      name: "Protocollo Base",
      description: "Sanificazione standard con prodotti certificati",
      features: ["Nebulizzazione disinfettante", "Sanificazione superfici", "Certificazione base"],
      price: "Da €2/mq"
    },
    {
      name: "Protocollo Avanzato", 
      description: "Sanificazione completa con ozono e UV",
      features: ["Trattamento ozono", "Disinfezione UV-C", "Sanificazione impianti", "Certificazione completa"],
      price: "Da €4/mq"
    },
    {
      name: "Protocollo COVID-19",
      description: "Protocollo specifico anti-COVID autorizzato",
      features: ["Protocollo ministeriale", "Prodotti virucidi", "Monitoraggio qualità", "Certificazione sanitaria"],
      price: "Da €5/mq"
    }
  ];

  return (
    <>
      <SEOHead
        title="Servizi di Sanificazione Professionale in Italia | CleanItalia Pro"
        description="Servizi di sanificazione professionale per ambienti commerciali e domestici. Cleaning services specializzati in igienizzazione e disinfezione con certificazioni sanitarie."
        keywords="sanificazione, disinfezione, cleaning services sanificazione, igienizzazione, protocolli COVID-19, sanificazione ambienti, certificazioni sanitarie"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-600 to-purple-800 text-white py-20">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div 
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1584744982491-665216d95f8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
          className="absolute inset-0"
        ></div>
        
        <div className="relative container mx-auto px-4 text-center">
          <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShieldCheck className="text-white text-3xl" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6" data-testid="text-hero-title">
            Servizi di <span className="text-italian-gold">Sanificazione</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90" data-testid="text-hero-subtitle">
            Cleaning services specializzati in sanificazione e disinfezione professionale con certificazioni sanitarie
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6" data-testid="text-services-title">
                Sanificazione Professionale Certificata
              </h2>
              <p className="text-xl text-gray-600 mb-8" data-testid="text-services-description">
                I nostri cleaning services di sanificazione utilizzano tecnologie avanzate e prodotti certificati 
                per garantire ambienti sicuri e igienizzati. Protocolli autorizzati dal Ministero della Salute 
                e certificazioni post-intervento incluse.
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
                src="https://images.unsplash.com/photo-1603398938679-907c94dc5921?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Operatore sanificazione con attrezzature professionali" 
                className="rounded-xl shadow-2xl w-full"
                data-testid="img-sanitization-worker"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Environments */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" data-testid="text-environments-title">
              Ambienti che Sanifichiamo
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="text-environments-subtitle">
              I nostri servizi di sanificazione coprono ogni tipologia di ambiente e struttura
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {environments.map((environment, index) => {
              const IconComponent = environment.icon;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-8 text-center hover:shadow-lg transition-shadow"
                  data-testid={`environment-card-${index}`}
                >
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="text-white text-2xl" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900" data-testid={`text-environment-name-${index}`}>
                    {environment.name}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Protocols */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" data-testid="text-protocols-title">
              I Nostri Protocolli di Sanificazione
            </h2>
            <p className="text-xl text-gray-600" data-testid="text-protocols-subtitle">
              Protocolli differenziati per ogni esigenza di sanificazione e sicurezza
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {protocols.map((protocol, index) => (
              <div 
                key={index}
                className={`bg-white rounded-xl p-8 shadow-lg ${index === 1 ? 'border-2 border-purple-600' : ''}`}
                data-testid={`protocol-card-${index}`}
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4" data-testid={`text-protocol-name-${index}`}>
                  {protocol.name}
                </h3>
                <p className="text-gray-600 mb-4" data-testid={`text-protocol-description-${index}`}>
                  {protocol.description}
                </p>
                <div className="text-2xl font-bold text-purple-600 mb-6" data-testid={`text-protocol-price-${index}`}>
                  {protocol.price}
                </div>
                <ul className="space-y-3 text-gray-600">
                  {protocol.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-4 w-4 text-italian-green mr-2" />
                      <span data-testid={`text-protocol-feature-${index}-${featureIndex}`}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" data-testid="text-technologies-title">
              Tecnologie e Metodologie Avanzate
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center" data-testid="technology-ozone">
              <div className="w-16 h-16 bg-italian-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Generatori di Ozono</h3>
              <p className="text-gray-600">Sanificazione completa dell'aria e delle superfici con ozono certificato</p>
            </div>
            
            <div className="text-center" data-testid="technology-uv">
              <div className="w-16 h-16 bg-italian-green rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Lampade UV-C</h3>
              <p className="text-gray-600">Disinfezione ad alta efficacia con raggi ultravioletti germicidi</p>
            </div>
            
            <div className="text-center" data-testid="technology-nebulization">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Nebulizzazione</h3>
              <p className="text-gray-600">Sistemi di nebulizzazione per copertura uniforme degli ambienti</p>
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
                Richiedi Preventivo per Sanificazione
              </h2>
              <p className="text-xl text-gray-600" data-testid="text-quote-subtitle">
                Ricevi un preventivo personalizzato per i nostri servizi di sanificazione professionale
              </p>
            </div>
            
            <QuoteForm defaultService="sanitization" />
          </div>
        </div>
      </section>
    </>
  );
}

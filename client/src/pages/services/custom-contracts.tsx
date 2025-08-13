import SEOHead from "@/components/seo/seo-head";
import QuoteForm from "@/components/forms/quote-form";
import { Handshake, Check, Users, Clock, Award, TrendingUp } from "lucide-react";

export default function CustomContracts() {
  const services = [
    "Contratti di pulizia personalizzati",
    "Servizi combinati multi-sede",
    "Pianificazione flessibile degli interventi",
    "Pacchetti integrati cleaning services",
    "Supporto clienti dedicato H24",
    "Reportistica dettagliata e KPI",
    "Scalabilità dei servizi",
    "Prezzi vantaggiosi per contratti pluriennali"
  ];

  const contractTypes = [
    { 
      name: "Contratto Aziendale", 
      description: "Soluzioni complete per grandi aziende con multiple sedi",
      icon: Users,
      features: ["Multi-sede", "Servizi integrati", "Gestione centralizzata", "Prezzi dedicati"]
    },
    { 
      name: "Contratto Stagionale", 
      description: "Servizi modulari per attività stagionali e turistiche",
      icon: Clock,
      features: ["Flessibilità stagionale", "Scalabilità rapida", "Prezzi variabili", "Servizi on-demand"]
    },
    { 
      name: "Contratto Premium", 
      description: "Servizi esclusivi per clienti che richiedono massima qualità",
      icon: Award,
      features: ["Servizi esclusivi", "Priorità assoluta", "Account manager", "SLA garantiti"]
    }
  ];

  const benefits = [
    "Risparmio fino al 30% sui listini standard",
    "Servizi prioritari e tempi di risposta garantiti",
    "Flessibilità nella pianificazione degli interventi",
    "Possibilità di combinare diversi cleaning services",
    "Fatturazione semplificata e centralizzata",
    "Monitoraggio qualità con reportistica dedicata"
  ];

  return (
    <>
      <SEOHead
        title="Contratti Personalizzati Cleaning Services | CleanItalia Pro"
        description="Soluzioni su misura per esigenze specifiche. Cleaning services services con contratti flessibili per aziende e privati in tutta Italia con prezzi vantaggiosi."
        keywords="contratti personalizzati, cleaning services services, contratti pulizia, servizi su misura, cleaning services aziende, contratti flessibili"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-600 to-teal-800 text-white py-20">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div 
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
          className="absolute inset-0"
        ></div>
        
        <div className="relative container mx-auto px-4 text-center">
          <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Handshake className="text-white text-3xl" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6" data-testid="text-hero-title">
            Contratti <span className="text-italian-gold">Personalizzati</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90" data-testid="text-hero-subtitle">
            Cleaning services services su misura con contratti flessibili per aziende e privati in tutta Italia
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6" data-testid="text-services-title">
                Cleaning Services Services su Misura
              </h2>
              <p className="text-xl text-gray-600 mb-8" data-testid="text-services-description">
                I nostri cleaning services services offrono soluzioni completamente personalizzabili per 
                soddisfare le esigenze specifiche di ogni cliente. Contratti flessibili, prezzi competitivi 
                e servizi integrati per la massima efficienza operativa.
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
                alt="Meeting per contratti personalizzati" 
                className="rounded-xl shadow-2xl w-full"
                data-testid="img-contract-meeting"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contract Types */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" data-testid="text-contracts-title">
              Tipologie di Contratti Disponibili
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="text-contracts-subtitle">
              Soluzioni contrattuali flessibili per ogni tipo di esigenza e dimensione aziendale
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {contractTypes.map((contract, index) => {
              const IconComponent = contract.icon;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow"
                  data-testid={`contract-card-${index}`}
                >
                  <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mb-6">
                    <IconComponent className="text-white text-2xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4" data-testid={`text-contract-name-${index}`}>
                    {contract.name}
                  </h3>
                  <p className="text-gray-600 mb-6" data-testid={`text-contract-description-${index}`}>
                    {contract.description}
                  </p>
                  <ul className="space-y-2">
                    {contract.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="h-4 w-4 text-italian-green mr-2" />
                        <span className="text-gray-700" data-testid={`text-contract-feature-${index}-${featureIndex}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" data-testid="text-benefits-title">
              Vantaggi dei Contratti Personalizzati
            </h2>
            <p className="text-xl text-gray-600" data-testid="text-benefits-subtitle">
              Scopri tutti i benefici di scegliere un contratto su misura per i tuoi cleaning services
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-4" data-testid={`benefit-item-${index}`}>
                <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <Check className="h-5 w-5 text-white" />
                </div>
                <span className="text-lg text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" data-testid="text-process-title">
              Come Funziona il Processo
            </h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center" data-testid="process-step-1">
              <div className="w-16 h-16 bg-italian-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Analisi Esigenze</h3>
              <p className="text-gray-600">Valutiamo insieme le tue specifiche necessità e obiettivi</p>
            </div>
            
            <div className="text-center" data-testid="process-step-2">
              <div className="w-16 h-16 bg-italian-green rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Proposta Personalizzata</h3>
              <p className="text-gray-600">Creiamo una soluzione su misura con prezzi dedicati</p>
            </div>
            
            <div className="text-center" data-testid="process-step-3">
              <div className="w-16 h-16 bg-italian-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Definizione Contratto</h3>
              <p className="text-gray-600">Stabiliamo insieme termini, SLA e modalità operative</p>
            </div>
            
            <div className="text-center" data-testid="process-step-4">
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Attivazione Servizi</h3>
              <p className="text-gray-600">Avviamo i servizi con monitoraggio continuo della qualità</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" data-testid="text-success-title">
              Risultati dei Nostri Clienti
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center" data-testid="success-saving">
              <div className="w-16 h-16 bg-italian-green rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-white text-2xl" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">-30%</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Riduzione Costi</div>
              <p className="text-gray-600">Risparmio medio sui costi di pulizia con contratti personalizzati</p>
            </div>
            
            <div className="text-center" data-testid="success-efficiency">
              <div className="w-16 h-16 bg-italian-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-white text-2xl" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">+40%</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Efficienza Operativa</div>
              <p className="text-gray-600">Miglioramento dell'efficienza grazie alla pianificazione ottimizzata</p>
            </div>
            
            <div className="text-center" data-testid="success-satisfaction">
              <div className="w-16 h-16 bg-italian-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-white text-2xl" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">98%</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">Soddisfazione Clienti</div>
              <p className="text-gray-600">Livello di soddisfazione dei clienti con contratti personalizzati</p>
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
                Richiedi Contratto Personalizzato
              </h2>
              <p className="text-xl text-gray-600" data-testid="text-quote-subtitle">
                Contattaci per creare insieme la soluzione di cleaning services perfetta per te
              </p>
            </div>
            
            <QuoteForm defaultService="custom" />
          </div>
        </div>
      </section>
    </>
  );
}

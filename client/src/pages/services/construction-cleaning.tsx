import SEOHead from "@/components/seo/seo-head";
import QuoteForm from "@/components/forms/quote-form";
import { HardHat, Check, Trash2, Sparkles, Award, Shield } from "lucide-react";

export default function ConstructionCleaning() {
  const services = [
    "Rimozione detriti e macerie",
    "Pulizia profonda post-costruzione",
    "Aspirazione polveri e residui",
    "Pulizia vetri e serramenti",
    "Lucidatura pavimenti e superfici",
    "Sanificazione ambienti",
    "Pulizia impianti e sistemi",
    "Consegna 'chiavi in mano'"
  ];

  const projectTypes = [
    { name: "Nuove Costruzioni", icon: HardHat },
    { name: "Ristrutturazioni Complete", icon: HardHat },
    { name: "Ristrutturazioni Parziali", icon: HardHat },
    { name: "Cantieri Industriali", icon: HardHat },
    { name: "Edifici Commerciali", icon: HardHat },
    { name: "Residenze Private", icon: HardHat }
  ];

  return (
    <>
      <SEOHead
        title="Pulizie Post-Costruzione Professionali | CleanItalia Pro"
        description="Servizi specializzati per la pulizia dopo lavori di costruzione e ristrutturazione. Clean service professionale per cantieri e nuove costruzioni in tutta Italia."
        keywords="pulizie post costruzione, clean service, pulizie cantiere, pulizie ristrutturazione, cleaning services costruzione, pulizie edili"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-italian-red to-red-800 text-white py-20">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div 
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
          className="absolute inset-0"
        ></div>
        
        <div className="relative container mx-auto px-4 text-center">
          <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <HardHat className="text-white text-3xl" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6" data-testid="text-hero-title">
            Pulizie <span className="text-italian-gold">Post-Costruzione</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90" data-testid="text-hero-subtitle">
            Clean service professionale specializzato per cantieri, ristrutturazioni e nuove costruzioni
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6" data-testid="text-services-title">
                Clean Service Specializzato Post-Lavori
              </h2>
              <p className="text-xl text-gray-600 mb-8" data-testid="text-services-description">
                Il nostro clean service per pulizie post-costruzione garantisce la rimozione completa di 
                detriti, polveri e residui, consegnando spazi perfettamente puliti e pronti all'uso. 
                Esperienza decennale nel settore edile e della ristrutturazione.
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
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Squadra pulizie post-costruzione" 
                className="rounded-xl shadow-2xl w-full"
                data-testid="img-construction-cleaning"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Types */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" data-testid="text-projects-title">
              Tipologie di Progetti che Gestiamo
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="text-projects-subtitle">
              Il nostro clean service è specializzato in diverse tipologie di cantieri e progetti edilizi
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectTypes.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-8 text-center hover:shadow-lg transition-shadow"
                  data-testid={`project-card-${index}`}
                >
                  <div className="w-16 h-16 bg-italian-red rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="text-white text-2xl" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900" data-testid={`text-project-name-${index}`}>
                    {project.name}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" data-testid="text-process-title">
              Il Nostro Processo di Pulizia Post-Costruzione
            </h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center" data-testid="process-step-1">
              <div className="w-16 h-16 bg-italian-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sopralluogo</h3>
              <p className="text-gray-600">Valutazione dettagliata del cantiere e pianificazione intervento</p>
            </div>
            
            <div className="text-center" data-testid="process-step-2">
              <div className="w-16 h-16 bg-italian-green rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Rimozione Detriti</h3>
              <p className="text-gray-600">Eliminazione di macerie, residui e materiali di scarto</p>
            </div>
            
            <div className="text-center" data-testid="process-step-3">
              <div className="w-16 h-16 bg-italian-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Pulizia Profonda</h3>
              <p className="text-gray-600">Aspirazione polveri e pulizia accurata di tutte le superfici</p>
            </div>
            
            <div className="text-center" data-testid="process-step-4">
              <div className="w-16 h-16 bg-italian-red rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Finitura</h3>
              <p className="text-gray-600">Lucidatura, sanificazione e consegna chiavi in mano</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" data-testid="text-features-title">
              Perché Scegliere il Nostro Clean Service
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center" data-testid="feature-specialized">
              <div className="w-16 h-16 bg-italian-green rounded-full flex items-center justify-center mx-auto mb-4">
                <Trash2 className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Attrezzature Specializzate</h3>
              <p className="text-gray-600">Macchinari professionali per rimozione detriti e aspirazione industriale</p>
            </div>
            
            <div className="text-center" data-testid="feature-experience">
              <div className="w-16 h-16 bg-italian-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Esperienza Consolidata</h3>
              <p className="text-gray-600">Oltre 15 anni di esperienza nel settore delle pulizie post-costruzione</p>
            </div>
            
            <div className="text-center" data-testid="feature-safety">
              <div className="w-16 h-16 bg-italian-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sicurezza Garantita</h3>
              <p className="text-gray-600">Personale formato per lavorare in sicurezza in ambienti di cantiere</p>
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
                Richiedi Preventivo Pulizie Post-Costruzione
              </h2>
              <p className="text-xl text-gray-600" data-testid="text-quote-subtitle">
                Ricevi un preventivo dettagliato per il nostro clean service specializzato
              </p>
            </div>
            
            <QuoteForm defaultService="construction" />
          </div>
        </div>
      </section>
    </>
  );
}

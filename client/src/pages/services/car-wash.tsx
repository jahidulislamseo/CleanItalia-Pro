import SEOHead from "@/components/seo/seo-head";
import QuoteForm from "@/components/forms/quote-form";
import { Car, Check, MapPin, Clock, Droplets, Leaf } from "lucide-react";

export default function CarWash() {
  const services = [
    "Stazioni self-service operative 24/7",
    "Lavaggio eco-sostenibile con prodotti biodegradabili",
    "Aspirapolvere professionali ad alta potenza",
    "Sistemi di pagamento contactless",
    "Prodotti per cerchioni e pneumatici",
    "Shampoo e cera di alta qualità",
    "Asciugatura ad aria compressa",
    "Manutenzione continua delle attrezzature"
  ];

  const locations = [
    "Milano e Provincia - 45 stazioni attive",
    "Roma e Lazio - 38 stazioni attive", 
    "Napoli e Campania - 25 stazioni attive",
    "Torino e Piemonte - 22 stazioni attive",
    "Firenze e Toscana - 18 stazioni attive",
    "Bologna e Emilia-Romagna - 15 stazioni attive"
  ];

  return (
    <>
      <SEOHead
        title="Car Wash Self Service in Italia | CleanItalia Pro"
        description="Stazioni di car clean self service moderne e tecnologiche in tutta Italia. Self service car cleaning eco-sostenibile 24/7 con prodotti di qualità professionale."
        keywords="car wash self service, car clean self service, self service car cleaning, lavaggio auto, car cleaning self service, stazioni lavaggio"
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-italian-green to-green-800 text-white py-20">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div 
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1558536848-9af2a4b7b7d0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
          className="absolute inset-0"
        ></div>
        
        <div className="relative container mx-auto px-4 text-center">
          <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Car className="text-white text-3xl" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6" data-testid="text-hero-title">
            Car Wash <span className="text-italian-gold">Self Service</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90" data-testid="text-hero-subtitle">
            Stazioni di car clean self service moderne e tecnologiche. Self service car cleaning 24/7 in tutta Italia
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6" data-testid="text-services-title">
                Self Service Car Cleaning Innovativo
              </h2>
              <p className="text-xl text-gray-600 mb-8" data-testid="text-services-description">
                Le nostre stazioni di car cleaning self service combinano tecnologia avanzata e sostenibilità 
                ambientale per offrirti un'esperienza di lavaggio superiore, disponibile 24 ore su 24.
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
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Stazione car wash self service moderna" 
                className="rounded-xl shadow-2xl w-full"
                data-testid="img-car-wash-station"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Network Coverage */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" data-testid="text-network-title">
              Rete Nazionale Car Clean Self Service
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="text-network-subtitle">
              Oltre 160 stazioni attive in tutta Italia per il tuo self service car cleaning
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((location, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
                data-testid={`location-card-${index}`}
              >
                <MapPin className="w-12 h-12 text-italian-green mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900" data-testid={`text-location-${index}`}>
                  {location}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" data-testid="text-features-title">
              Caratteristiche del Nostro Car Cleaning Self Service
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center" data-testid="feature-availability">
              <div className="w-16 h-16 bg-italian-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Disponibilità 24/7</h3>
              <p className="text-gray-600">Self service car cleaning sempre accessibile, anche nei giorni festivi</p>
            </div>
            
            <div className="text-center" data-testid="feature-quality">
              <div className="w-16 h-16 bg-italian-green rounded-full flex items-center justify-center mx-auto mb-4">
                <Droplets className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Prodotti di Qualità</h3>
              <p className="text-gray-600">Shampoo, cere e detergenti professionali per risultati impeccabili</p>
            </div>
            
            <div className="text-center" data-testid="feature-eco">
              <div className="w-16 h-16 bg-italian-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Eco-Sostenibile</h3>
              <p className="text-gray-600">Sistema di riciclo dell'acqua e prodotti biodegradabili</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" data-testid="text-pricing-title">
              Prezzi Trasparenti e Competitivi
            </h2>
            <p className="text-xl text-gray-600" data-testid="text-pricing-subtitle">
              Tariffe chiare per tutti i nostri servizi di car wash self service
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-xl p-8 text-center shadow-lg" data-testid="pricing-basic">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Lavaggio Base</h3>
              <div className="text-4xl font-bold text-italian-green mb-6">€5</div>
              <ul className="space-y-2 text-gray-600 mb-8">
                <li>Prelavaggio</li>
                <li>Shampoo</li>
                <li>Risciacquo</li>
                <li>5 minuti</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-8 text-center shadow-lg border-2 border-italian-green" data-testid="pricing-premium">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Lavaggio Premium</h3>
              <div className="text-4xl font-bold text-italian-green mb-6">€8</div>
              <ul className="space-y-2 text-gray-600 mb-8">
                <li>Prelavaggio</li>
                <li>Shampoo Premium</li>
                <li>Cera protettiva</li>
                <li>Risciacquo</li>
                <li>8 minuti</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-8 text-center shadow-lg" data-testid="pricing-deluxe">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Lavaggio Deluxe</h3>
              <div className="text-4xl font-bold text-italian-green mb-6">€12</div>
              <ul className="space-y-2 text-gray-600 mb-8">
                <li>Prelavaggio</li>
                <li>Shampoo Premium</li>
                <li>Cera protettiva</li>
                <li>Trattamento cerchioni</li>
                <li>Risciacquo e asciugatura</li>
                <li>12 minuti</li>
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
                Richiedi Informazioni su Car Wash Self Service
              </h2>
              <p className="text-xl text-gray-600" data-testid="text-quote-subtitle">
                Contattaci per aprire una stazione o per servizi dedicati alla tua attività
              </p>
            </div>
            
            <QuoteForm defaultService="car-wash" />
          </div>
        </div>
      </section>
    </>
  );
}

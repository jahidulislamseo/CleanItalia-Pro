import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Building2, Car, Home, HardHat, ShieldCheck, Handshake, Check } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Pulizie Commerciali",
    description: "Servizi di pulizia professionale per uffici, negozi, centri commerciali e strutture industriali. Cleaning services per aziende con personale qualificato e attrezzature moderne.",
    features: [
      "Pulizia uffici quotidiana",
      "Sanificazione ambienti", 
      "Pulizia vetri e superfici",
      "Gestione rifiuti"
    ],
    buttonText: "Scopri di Più",
    buttonColor: "bg-italian-blue hover:bg-blue-700",
    href: "/servizi/pulizie-commerciali"
  },
  {
    icon: Car,
    title: "Lavaggio Auto Self-Service", 
    description: "Stazioni di car wash self service moderne e tecnologiche. Self service car cleaning con sistemi automatizzati per un lavaggio efficace e sostenibile.",
    features: [
      "Stazioni self-service 24/7",
      "Lavaggio eco-sostenibile",
      "Aspirapolvere professionali", 
      "Prodotti di qualità"
    ],
    buttonText: "Trova Stazione",
    buttonColor: "bg-italian-green hover:bg-green-700",
    href: "/servizi/lavaggio-auto"
  },
  {
    icon: Home,
    title: "Servizi Domestici",
    description: "Cleaning services maid service per abitazioni private. Servizi di pulizia domestica professionale con personale qualificato e prodotti ecologici.",
    features: [
      "Pulizie settimanali/mensili",
      "Pulizie post-trasloco",
      "Stiratura e riordino",
      "Prodotti eco-friendly"
    ],
    buttonText: "Prenota Servizio", 
    buttonColor: "bg-italian-gold hover:bg-yellow-600",
    href: "/servizi/servizi-domestici"
  },
  {
    icon: HardHat,
    title: "Pulizie Post-Costruzione",
    description: "Servizi specializzati per la pulizia dopo lavori di costruzione e ristrutturazione. Clean service professionale per cantieri e nuove costruzioni.",
    features: [
      "Rimozione detriti",
      "Pulizia profonda", 
      "Lucidatura superfici",
      "Consegna \"chiavi in mano\""
    ],
    buttonText: "Richiedi Preventivo",
    buttonColor: "bg-italian-red hover:bg-red-700",
    href: "/servizi/pulizie-costruzione"
  },
  {
    icon: ShieldCheck,
    title: "Sanificazione",
    description: "Servizi di sanificazione professionale per ambienti commerciali e domestici. Cleaning services specializzati in igienizzazione e disinfezione.",
    features: [
      "Sanificazione ambienti",
      "Disinfezione superfici",
      "Certificazioni sanitarie",
      "Protocolli COVID-19"
    ],
    buttonText: "Sanifica Ora",
    buttonColor: "bg-purple-600 hover:bg-purple-700", 
    href: "/servizi/sanificazione"
  },
  {
    icon: Handshake,
    title: "Contratti Personalizzati",
    description: "Soluzioni su misura per esigenze specifiche. Cleaning services services con contratti flessibili per aziende e privati in tutta Italia.",
    features: [
      "Contratti su misura",
      "Prezzi competitivi",
      "Servizi combinati", 
      "Supporto dedicato"
    ],
    buttonText: "Contattaci",
    buttonColor: "bg-teal-600 hover:bg-teal-700",
    href: "/servizi/contratti-personalizzati"
  }
];

export default function ServicesGrid() {
  return (
    <section id="servizi" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4" data-testid="text-services-title">
            I Nostri Servizi Professionali
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="text-services-subtitle">
            Offriamo una gamma completa di servizi di pulizia per soddisfare ogni esigenza commerciale e domestica
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={index}
                className="bg-gray-50 rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                data-testid={`card-service-${index}`}
              >
                <div className={`w-16 h-16 ${service.buttonColor.split(' ')[0]} rounded-full flex items-center justify-center mb-6`}>
                  <IconComponent className="text-white text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4" data-testid={`text-service-title-${index}`}>
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6" data-testid={`text-service-description-${index}`}>
                  {service.description}
                </p>
                <ul className="text-sm text-gray-600 mb-6 space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-4 w-4 text-italian-green mr-2" />
                      <span data-testid={`text-service-feature-${index}-${featureIndex}`}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  asChild
                  className={`w-full ${service.buttonColor} text-white py-3`}
                  data-testid={`button-service-${index}`}
                >
                  <Link href={service.href}>
                    {service.buttonText}
                  </Link>
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { Tag, Clock, Leaf, ShieldCheck, Star } from "lucide-react";

const features = [
  {
    icon: Tag,
    title: "Certificazioni Professionali",
    description: "Personale certificato e formato secondo gli standard europei più elevati per ogni tipo di cleaning service.",
    color: "bg-italian-green"
  },
  {
    icon: Clock,
    title: "Disponibilità 24/7", 
    description: "Servizi disponibili 24 ore su 24, 7 giorni su 7, per emergenze e cleaning services urgenti.",
    color: "bg-italian-blue"
  },
  {
    icon: Leaf,
    title: "Prodotti Eco-Sostenibili",
    description: "Utilizziamo solo prodotti ecologici e sostenibili per proteggere l'ambiente e la salute.",
    color: "bg-italian-gold"
  },
  {
    icon: ShieldCheck,
    title: "Garanzia di Qualità",
    description: "Offriamo garanzia totale su tutti i cleaning services services con possibilità di ritrattamento gratuito.",
    color: "bg-italian-red"
  }
];

export default function WhyChooseUs() {
  return (
    <section id="chi-siamo" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6" data-testid="text-why-choose-title">
              Perché Scegliere CleanItalia Pro
            </h2>
            <p className="text-xl text-gray-600 mb-8" data-testid="text-why-choose-subtitle">
              Siamo leader nei servizi di pulizia professionali in Italia, con oltre 15 anni di esperienza 
              e migliaia di clienti soddisfatti in tutto il paese.
            </p>
            
            <div className="space-y-6">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div 
                    key={index}
                    className="flex items-start space-x-4"
                    data-testid={`feature-${index}`}
                  >
                    <div className={`w-12 h-12 ${feature.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                      <IconComponent className="text-white h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2" data-testid={`text-feature-title-${index}`}>
                        {feature.title}
                      </h3>
                      <p className="text-gray-600" data-testid={`text-feature-description-${index}`}>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Team professionale CleanItalia Pro" 
              className="rounded-xl shadow-2xl w-full"
              data-testid="img-team-professional"
            />
            
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 max-w-xs" data-testid="card-rating">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-italian-green rounded-full flex items-center justify-center">
                  <Star className="text-white h-6 w-6" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900" data-testid="text-rating-score">4.9/5</div>
                  <div className="text-sm text-gray-600" data-testid="text-rating-label">Valutazione Media</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

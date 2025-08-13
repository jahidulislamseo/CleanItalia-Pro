import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Marco Rossi",
    company: "CEO, TechItalia SpA", 
    content: "Utilizziamo CleanItalia Pro per le pulizie commerciali del nostro ufficio a Milano da oltre 3 anni. Servizio impeccabile, personale professionale e prezzi competitivi. Cleaning services di altissima qualità!",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
  },
  {
    name: "Giulia Bianchi",
    company: "Cliente Privato, Roma",
    content: "Il car clean self service di CleanItalia Pro è fantastico! Stazioni moderne, prodotti di qualità e sempre pulite. Self service car cleaning economico e efficiente in tutta Roma.",
    image: "https://images.unsplash.com/photo-1494790108755-2616c056367c?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
  },
  {
    name: "Andrea Conti", 
    company: "Direttore, Hotel Toscana",
    content: "Cleaning services cleaning services eccezionali per il nostro hotel a Firenze. Sanificazione impeccabile, personale discreto e sempre puntuale. Altamente raccomandati!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150"
  }
];

export default function Testimonials() {
  return (
    <section id="testimonianze" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4" data-testid="text-testimonials-title">
            Cosa Dicono i Nostri Clienti
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="text-testimonials-subtitle">
            La soddisfazione dei nostri clienti è la nostra priorità. Leggi le testimonianze di chi ha scelto i nostri cleaning services.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg"
              data-testid={`card-testimonial-${index}`}
            >
              <div className="flex items-center mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star 
                    key={star}
                    className="w-5 h-5 fill-current text-italian-gold"
                    data-testid={`star-testimonial-${index}-${star}`}
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic" data-testid={`text-testimonial-content-${index}`}>
                "{testimonial.content}"
              </p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full mr-4"
                  data-testid={`img-testimonial-${index}`}
                />
                <div>
                  <div className="font-semibold text-gray-900" data-testid={`text-testimonial-name-${index}`}>
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500" data-testid={`text-testimonial-company-${index}`}>
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

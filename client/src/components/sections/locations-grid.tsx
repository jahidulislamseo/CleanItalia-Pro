import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

const cities = [
  {
    name: "Milano e Provincia",
    description: "Servizi di pulizia commerciali e domestici nella capitale economica d'Italia. Cleaning services cleaners specializzati per il business milanese.",
    region: "Lombardia - Copertura completa provincia",
    image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    href: "/citta/milano"
  },
  {
    name: "Roma e Lazio", 
    description: "A cleaning service professionale nella Capitale. Self service car cleaning e pulizie commerciali in tutto il territorio laziale.",
    region: "Lazio - Servizi regionali estesi",
    image: "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    href: "/citta/roma"
  },
  {
    name: "Napoli e Campania",
    description: "Clean service professionale nel Sud Italia. Cleaning services services completi per aziende e privati in Campania.", 
    region: "Campania - Copertura regionale",
    image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    href: "/citta/napoli"
  },
  {
    name: "Torino e Piemonte",
    description: "Cleaning services cleaning services nel cuore del Piemonte. Car clean self service e pulizie industriali di alta qualità.",
    region: "Piemonte - Servizi completi", 
    image: "https://images.unsplash.com/photo-1534008897995-27a3c7e0b7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    href: "/citta/torino"
  },
  {
    name: "Firenze e Toscana",
    description: "Car cleaning self service e pulizie per il settore turistico toscano. Cleaning services maid service per strutture ricettive.",
    region: "Toscana - Focus turistico",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300", 
    href: "/citta/firenze"
  },
  {
    name: "Bologna e Emilia-Romagna",
    description: "Self service car cleaning e cleaning services per l'industria emiliana. Soluzioni innovative per il territorio più dinamico d'Italia.",
    region: "Emilia-Romagna - Hub industriale",
    image: "https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    href: "/citta/bologna"
  }
];

export default function LocationsGrid() {
  return (
    <section id="citta" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4" data-testid="text-locations-title">
            Le Nostre Città
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-testid="text-locations-subtitle">
            Presenti nelle principali città italiane con servizi di pulizia professionali per ogni esigenza
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cities.map((city, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              data-testid={`card-location-${index}`}
            >
              <img 
                src={city.image} 
                alt={`${city.name} skyline`} 
                className="w-full h-48 object-cover"
                data-testid={`img-location-${index}`}
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2" data-testid={`text-location-name-${index}`}>
                  {city.name}
                </h3>
                <p className="text-gray-600 mb-4" data-testid={`text-location-description-${index}`}>
                  {city.description}
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-4" data-testid={`text-location-region-${index}`}>
                  <MapPin className="mr-2 h-4 w-4" />
                  {city.region}
                </div>
                <Button 
                  asChild
                  className="w-full bg-italian-blue hover:bg-blue-700 text-white py-3"
                  data-testid={`button-location-${index}`}
                >
                  <Link href={city.href}>
                    Servizi a {city.name.split(' ')[0]}
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Calculator, List } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-italian-blue to-blue-800 text-white py-20">
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div 
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
        className="absolute inset-0"
      ></div>
      
      <div className="relative container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6" data-testid="text-hero-title">
          Servizi di Pulizia <span className="italian-gold">Professionali</span> in Italia
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90" data-testid="text-hero-subtitle">
          Pulizie commerciali, lavaggio auto self-service, servizi domestici e sanificazione professionale in tutta Italia
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            asChild
            size="lg"
            className="bg-italian-green hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold"
            data-testid="button-hero-quote"
          >
            <Link href="/#contatti">
              <Calculator className="mr-2 h-5 w-5" />
              Richiedi Preventivo
            </Link>
          </Button>
          <Button 
            asChild
            size="lg"
            variant="secondary"
            className="bg-white text-italian-blue hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
            data-testid="button-hero-services"
          >
            <Link href="/#servizi">
              <List className="mr-2 h-5 w-5" />
              Vedi Tutti i Servizi
            </Link>
          </Button>
        </div>
        
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center" data-testid="stat-experience">
            <div className="text-3xl font-bold italian-gold">15+</div>
            <div className="text-sm opacity-80">Anni di Esperienza</div>
          </div>
          <div className="text-center" data-testid="stat-clients">
            <div className="text-3xl font-bold italian-gold">10,000+</div>
            <div className="text-sm opacity-80">Clienti Soddisfatti</div>
          </div>
          <div className="text-center" data-testid="stat-regions">
            <div className="text-3xl font-bold italian-gold">6</div>
            <div className="text-sm opacity-80">Regioni Servite</div>
          </div>
          <div className="text-center" data-testid="stat-support">
            <div className="text-3xl font-bold italian-gold">24/7</div>
            <div className="text-sm opacity-80">Assistenza</div>
          </div>
        </div>
      </div>
    </section>
  );
}

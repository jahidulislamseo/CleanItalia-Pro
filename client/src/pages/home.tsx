import SEOHead from "@/components/seo/seo-head";
import HeroSection from "@/components/sections/hero-section";
import ServicesGrid from "@/components/sections/services-grid";
import LocationsGrid from "@/components/sections/locations-grid";
import WhyChooseUs from "@/components/sections/why-choose-us";
import Testimonials from "@/components/sections/testimonials";
import ContactForm from "@/components/forms/contact-form";
import { Phone, Mail, Clock } from "lucide-react";

export default function Home() {
  return (
    <>
      <SEOHead
        title="Servizi di Pulizia Professionali in Italia | CleanItalia Pro"
        description="Servizi di pulizia commerciali, lavaggio auto self-service, pulizie domestiche e sanificazione in tutta Italia. Milano, Roma, Napoli, Torino, Firenze, Bologna."
        keywords="cleaning services, pulizie commerciali, car clean self service, servizi domestici, sanificazione, cleaning services cleaners, self service car cleaning, pulizie Italia"
      />

      <HeroSection />
      <ServicesGrid />
      <LocationsGrid />
      <WhyChooseUs />
      <Testimonials />

      {/* Contact Section */}
      <section id="contatti" className="py-20 bg-italian-blue text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6" data-testid="text-contact-title">
                Richiedi un Preventivo Gratuito
              </h2>
              <p className="text-xl mb-8 opacity-90" data-testid="text-contact-subtitle">
                Contattaci per ricevere un preventivo personalizzato per i nostri cleaning services. 
                Risposta garantita entro 24 ore.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4" data-testid="contact-info-phone">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <Phone className="text-white h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Telefono</div>
                    <div className="opacity-90">+39 800 123 456</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4" data-testid="contact-info-email">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <Mail className="text-white h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="opacity-90">info@cleanitaliapro.it</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4" data-testid="contact-info-hours">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <Clock className="text-white h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Orari</div>
                    <div className="opacity-90">Lun-Ven: 8:00-18:00 | Sab: 9:00-13:00</div>
                  </div>
                </div>
              </div>
            </div>
            
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}

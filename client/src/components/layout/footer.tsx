import { Link } from "wouter";
import { Sparkles, Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  const serviceLinks = [
    { label: "Pulizie Commerciali", href: "/servizi/pulizie-commerciali" },
    { label: "Car Clean Self Service", href: "/servizi/lavaggio-auto" },
    { label: "Servizi Domestici", href: "/servizi/servizi-domestici" },
    { label: "Pulizie Post-Costruzione", href: "/servizi/pulizie-costruzione" },
    { label: "Sanificazione", href: "/servizi/sanificazione" },
    { label: "Contratti Personalizzati", href: "/servizi/contratti-personalizzati" },
  ];

  const cityLinks = [
    { label: "Milano e Provincia", href: "/citta/milano" },
    { label: "Roma e Lazio", href: "/citta/roma" },
    { label: "Napoli e Campania", href: "/citta/napoli" },
    { label: "Torino e Piemonte", href: "/citta/torino" },
    { label: "Firenze e Toscana", href: "/citta/firenze" },
    { label: "Bologna e Emilia-Romagna", href: "/citta/bologna" },
  ];

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-italian-blue rounded-full flex items-center justify-center">
                <Sparkles className="text-white text-xl" />
              </div>
              <div>
                <div className="text-xl font-bold">CleanItalia Pro</div>
                <div className="text-sm text-gray-400">Servizi di Pulizia</div>
              </div>
            </div>
            <p className="text-gray-400 mb-6" data-testid="text-company-description">
              Leader nei cleaning services professionali in Italia. 
              Qualità, affidabilità e sostenibilità dal 2008.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                data-testid="link-facebook"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                data-testid="link-instagram"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                data-testid="link-linkedin"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors"
                data-testid="link-youtube"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">I Nostri Servizi</h3>
            <ul className="space-y-3 text-gray-400">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="hover:text-white transition-colors"
                    data-testid={`link-service-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Cities */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Le Nostre Città</h3>
            <ul className="space-y-3 text-gray-400">
              {cityLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href} 
                    className="hover:text-white transition-colors"
                    data-testid={`link-city-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contatti</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center space-x-3" data-testid="contact-phone">
                <Phone className="w-4 h-4" />
                <span>+39 800 123 456</span>
              </div>
              <div className="flex items-center space-x-3" data-testid="contact-email">
                <Mail className="w-4 h-4" />
                <span>info@cleanitaliapro.it</span>
              </div>
              <div className="flex items-center space-x-3" data-testid="contact-address">
                <MapPin className="w-4 h-4" />
                <span>Via Roma 123, Milano, IT</span>
              </div>
              <div className="flex items-center space-x-3" data-testid="contact-hours">
                <Clock className="w-4 h-4" />
                <span>Lun-Ven: 8:00-18:00</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 CleanItalia Pro. Tutti i diritti riservati. | Privacy Policy | Termini di Servizio</p>
          <p className="mt-2 text-sm" data-testid="text-keywords">
            Cleaning services professionali • Car clean self service • Servizi domestici • 
            Sanificazione • Pulizie commerciali in Italia
          </p>
        </div>
      </div>
    </footer>
  );
}

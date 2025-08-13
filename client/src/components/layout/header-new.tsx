import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { 
  Sparkles, 
  Menu, 
  Phone, 
  User, 
  Calendar, 
  BarChart, 
  Globe, 
  LogOut,
  Settings
} from "lucide-react";
import { useAuth } from "@/App";
import { useLanguage } from "@/hooks/use-language";
import AuthModal from "@/components/auth-modal";

export default function Header() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const { user, logout, isAuthenticated } = useAuth();
  const { language, setLanguage, t } = useLanguage();

  const isActive = (path: string) => location === path;

  const navigationLinks = [
    {
      label: "Servizi",
      href: "#",
      submenu: [
        { label: "Pulizie Commerciali", href: "/servizi/pulizie-commerciali" },
        { label: "Lavaggio Auto Self-Service", href: "/servizi/lavaggio-auto" },
        { label: "Servizi Domestici", href: "/servizi/servizi-domestici" },
        { label: "Pulizie Post-Costruzione", href: "/servizi/pulizie-costruzione" },
        { label: "Sanificazione", href: "/servizi/sanificazione" },
        { label: "Contratti Personalizzati", href: "/servizi/contratti-personalizzati" },
      ]
    },
    {
      label: "Città",
      href: "#",
      submenu: [
        { label: "Milano e Provincia", href: "/citta/milano" },
        { label: "Roma e Lazio", href: "/citta/roma" },
        { label: "Napoli e Campania", href: "/citta/napoli" },
        { label: "Torino e Piemonte", href: "/citta/torino" },
        { label: "Firenze e Toscana", href: "/citta/firenze" },
        { label: "Bologna e Emilia-Romagna", href: "/citta/bologna" },
      ]
    }
  ];

  const advancedFeatures = [
    { label: "Prenota Servizio", href: "/prenota", icon: Calendar },
    { label: "Area Cliente", href: "/area-cliente", icon: User, requiresAuth: true },
    { label: "Analytics SEO", href: "/analytics", icon: BarChart },
  ];

  return (
    <>
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3" data-testid="link-home">
              <div className="w-12 h-12 bg-italian-blue rounded-full flex items-center justify-center">
                <Sparkles className="text-white text-xl" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-italian-blue">CleanItalia Pro</h1>
                <p className="text-sm text-gray-600">Servizi di Pulizia Professionali</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6">
              {/* Main Navigation */}
              <div className="flex items-center space-x-4">
                {navigationLinks.map((item) => (
                  <div key={item.label} className="relative group">
                    <button 
                      className="text-gray-700 hover:text-italian-blue transition-colors py-2 px-2"
                      data-testid={`button-nav-${item.label.toLowerCase()}`}
                    >
                      {item.label}
                    </button>
                    <div className="absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 min-w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-50 hover:text-italian-blue transition-colors"
                          data-testid={`link-${subItem.label.toLowerCase().replace(/\s+/g, '-')}`}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}

                {/* Advanced Features */}
                {advancedFeatures.map((feature) => {
                  const Icon = feature.icon;
                  if (feature.requiresAuth && !isAuthenticated) return null;
                  
                  return (
                    <Link
                      key={feature.href}
                      href={feature.href}
                      className={`flex items-center space-x-1 px-3 py-2 rounded-md transition-colors ${
                        isActive(feature.href)
                          ? 'bg-italian-blue text-white'
                          : 'text-gray-700 hover:text-italian-blue hover:bg-gray-50'
                      }`}
                      data-testid={`link-${feature.label.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="text-sm">{feature.label}</span>
                    </Link>
                  );
                })}
              </div>
              
              {/* Language Switcher */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="flex items-center space-x-1">
                    <Globe className="w-4 h-4" />
                    <span>{language.toUpperCase()}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={() => setLanguage('it')}>
                    🇮🇹 Italiano
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setLanguage('en')}>
                    🇬🇧 English
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* User Authentication */}
              {isAuthenticated ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span>{user?.firstName}</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem asChild>
                      <Link href="/area-cliente" className="flex items-center space-x-2 w-full">
                        <Settings className="w-4 h-4" />
                        <span>Area Cliente</span>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem 
                      onClick={logout}
                      className="flex items-center space-x-2 text-red-600"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Esci</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Button 
                  onClick={() => setAuthModalOpen(true)}
                  className="bg-italian-blue hover:bg-blue-700 text-white"
                  data-testid="button-login"
                >
                  Accedi
                </Button>
              )}

              {/* Contact Info */}
              <div className="flex items-center space-x-4">
                <a 
                  href="tel:+39800123456"
                  className="flex items-center space-x-2 text-gray-700 hover:text-italian-blue transition-colors"
                  data-testid="link-phone"
                >
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">+39 800 123 456</span>
                </a>

                <Button 
                  asChild 
                  className="bg-italian-green hover:bg-green-700 text-white"
                  data-testid="button-contact"
                >
                  <Link href="/#contatti">Contatti</Link>
                </Button>
              </div>
            </div>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden" data-testid="button-mobile-menu">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-6 mt-8">
                  {/* User Info */}
                  {isAuthenticated ? (
                    <div className="border-b pb-4">
                      <p className="font-medium">Ciao, {user?.firstName}!</p>
                      <div className="mt-2 space-y-2">
                        <Link
                          href="/area-cliente"
                          className="block text-sm text-blue-600"
                          onClick={() => setIsOpen(false)}
                        >
                          Area Cliente
                        </Link>
                        <button
                          onClick={() => {
                            logout();
                            setIsOpen(false);
                          }}
                          className="block text-sm text-red-600"
                        >
                          Esci
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="border-b pb-4">
                      <Button
                        onClick={() => {
                          setAuthModalOpen(true);
                          setIsOpen(false);
                        }}
                        className="w-full"
                      >
                        Accedi / Registrati
                      </Button>
                    </div>
                  )}

                  {/* Advanced Features */}
                  <div className="space-y-3">
                    <h3 className="font-semibold text-gray-900">Servizi Avanzati</h3>
                    {advancedFeatures.map((feature) => {
                      const Icon = feature.icon;
                      if (feature.requiresAuth && !isAuthenticated) return null;
                      
                      return (
                        <Link
                          key={feature.href}
                          href={feature.href}
                          className="flex items-center space-x-2 text-gray-700"
                          onClick={() => setIsOpen(false)}
                        >
                          <Icon className="w-4 h-4" />
                          <span>{feature.label}</span>
                        </Link>
                      );
                    })}
                  </div>

                  {/* Main Navigation */}
                  {navigationLinks.map((item) => (
                    <div key={item.label} className="space-y-2">
                      <h3 className="text-lg font-semibold text-gray-900">{item.label}</h3>
                      <div className="ml-4 space-y-2">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            className="block text-gray-700 hover:text-italian-blue transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}

                  {/* Contact */}
                  <div className="pt-4 border-t">
                    <a 
                      href="tel:+39800123456"
                      className="flex items-center space-x-2 text-gray-700 mb-4"
                    >
                      <Phone className="w-4 h-4" />
                      <span>+39 800 123 456</span>
                    </a>
                    
                    <Button 
                      asChild 
                      className="w-full bg-italian-green hover:bg-green-700 text-white"
                    >
                      <Link href="/#contatti" onClick={() => setIsOpen(false)}>
                        Contatti
                      </Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </header>

      <AuthModal open={authModalOpen} onOpenChange={setAuthModalOpen} />
    </>
  );
}
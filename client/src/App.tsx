import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/hooks/use-language";
import { AuthProvider, useAuth } from "@/contexts/auth-context";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Home from "@/pages/home";
import CommercialCleaning from "@/pages/services/commercial-cleaning";
import CarWash from "@/pages/services/car-wash";
import DomesticServices from "@/pages/services/domestic-services";
import ConstructionCleaning from "@/pages/services/construction-cleaning";
import Sanitization from "@/pages/services/sanitization";
import CustomContracts from "@/pages/services/custom-contracts";
import Milano from "@/pages/locations/milano";
import Roma from "@/pages/locations/roma";
import Napoli from "@/pages/locations/napoli";
import Torino from "@/pages/locations/torino";
import Firenze from "@/pages/locations/firenze";
import Bologna from "@/pages/locations/bologna";
import BookingForm from "@/pages/booking";
import CustomerPortal from "@/pages/customer-portal";
import SeoAnalyticsDashboard from "@/pages/seo-analytics";
import NotFound from "@/pages/not-found";

function Router() {
  const { user } = useAuth();

  return (
    <Switch>
      <Route path="/" component={Home} />
      
      {/* Service pages */}
      <Route path="/servizi/pulizie-commerciali" component={CommercialCleaning} />
      <Route path="/servizi/lavaggio-auto" component={CarWash} />
      <Route path="/servizi/servizi-domestici" component={DomesticServices} />
      <Route path="/servizi/pulizie-costruzione" component={ConstructionCleaning} />
      <Route path="/servizi/sanificazione" component={Sanitization} />
      <Route path="/servizi/contratti-personalizzati" component={CustomContracts} />
      
      {/* Location pages */}
      <Route path="/citta/milano" component={Milano} />
      <Route path="/citta/roma" component={Roma} />
      <Route path="/citta/napoli" component={Napoli} />
      <Route path="/citta/torino" component={Torino} />
      <Route path="/citta/firenze" component={Firenze} />
      <Route path="/citta/bologna" component={Bologna} />
      
      {/* Advanced features */}
      <Route path="/prenota">
        {() => <BookingForm userId={user?.id} />}
      </Route>
      
      <Route path="/area-cliente">
        {() => user ? <CustomerPortal userId={user.id} /> : <div className="p-8 text-center">Accesso richiesto</div>}
      </Route>
      
      <Route path="/analytics">
        {() => <SeoAnalyticsDashboard />}
      </Route>
      
      {/* Fallback to 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <LanguageProvider>
          <TooltipProvider>
            <div className="min-h-screen flex flex-col">
              <Header />
              <main className="flex-1">
                <Router />
              </main>
              <Footer />
            </div>
            <Toaster />
          </TooltipProvider>
        </LanguageProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;

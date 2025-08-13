import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useMutation } from "@tanstack/react-query";
import { useAuth } from "@/contexts/auth-context";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import type { User, InsertUser } from "@shared/schema";

interface AuthModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function AuthModal({ open, onOpenChange }: AuthModalProps) {
  const [loginEmail, setLoginEmail] = useState("");
  const [signupData, setSignupData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
  });
  
  const { login } = useAuth();
  const { toast } = useToast();

  const loginMutation = useMutation({
    mutationFn: async (email: string) => {
      return apiRequest('POST', '/api/users/login', { email });
    },
    onSuccess: (response) => {
      if (response.success) {
        login(response.user);
        onOpenChange(false);
        toast({
          title: "Accesso effettuato!",
          description: `Benvenuto, ${response.user.firstName}!`,
        });
      }
    },
    onError: (error: any) => {
      toast({
        title: "Errore di accesso",
        description: error.message || "Email non trovata. Prova a registrarti.",
        variant: "destructive",
      });
    },
  });

  const signupMutation = useMutation({
    mutationFn: async (userData: InsertUser) => {
      return apiRequest('POST', '/api/users', userData);
    },
    onSuccess: (response) => {
      if (response.success) {
        login(response.user);
        onOpenChange(false);
        toast({
          title: "Registrazione completata!",
          description: "Il tuo account è stato creato con successo.",
        });
      }
    },
    onError: (error: any) => {
      toast({
        title: "Errore di registrazione",
        description: error.message || "Si è verificato un errore durante la registrazione.",
        variant: "destructive",
      });
    },
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginEmail) {
      loginMutation.mutate(loginEmail);
    }
  };

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (signupData.firstName && signupData.lastName && signupData.email) {
      signupMutation.mutate(signupData);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Accedi o Registrati</DialogTitle>
          <DialogDescription>
            Accedi al tuo account per prenotare servizi e gestire le tue richieste
          </DialogDescription>
        </DialogHeader>
        
        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Accedi</TabsTrigger>
            <TabsTrigger value="signup">Registrati</TabsTrigger>
          </TabsList>
          
          <TabsContent value="login" className="space-y-4">
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Label htmlFor="login-email">Email</Label>
                <Input
                  id="login-email"
                  type="email"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  placeholder="la.tua.email@esempio.com"
                  required
                  data-testid="input-login-email"
                />
              </div>
              <Button
                type="submit"
                className="w-full"
                disabled={loginMutation.isPending}
                data-testid="button-login"
              >
                {loginMutation.isPending ? "Accesso..." : "Accedi"}
              </Button>
            </form>
          </TabsContent>
          
          <TabsContent value="signup" className="space-y-4">
            <form onSubmit={handleSignup} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="signup-firstName">Nome</Label>
                  <Input
                    id="signup-firstName"
                    value={signupData.firstName}
                    onChange={(e) => setSignupData({ ...signupData, firstName: e.target.value })}
                    placeholder="Mario"
                    required
                    data-testid="input-signup-firstname"
                  />
                </div>
                <div>
                  <Label htmlFor="signup-lastName">Cognome</Label>
                  <Input
                    id="signup-lastName"
                    value={signupData.lastName}
                    onChange={(e) => setSignupData({ ...signupData, lastName: e.target.value })}
                    placeholder="Rossi"
                    required
                    data-testid="input-signup-lastname"
                  />
                </div>
              </div>
              
              <div>
                <Label htmlFor="signup-email">Email</Label>
                <Input
                  id="signup-email"
                  type="email"
                  value={signupData.email}
                  onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
                  placeholder="mario.rossi@esempio.com"
                  required
                  data-testid="input-signup-email"
                />
              </div>
              
              <div>
                <Label htmlFor="signup-phone">Telefono</Label>
                <Input
                  id="signup-phone"
                  type="tel"
                  value={signupData.phone}
                  onChange={(e) => setSignupData({ ...signupData, phone: e.target.value })}
                  placeholder="+39 123 456 7890"
                  data-testid="input-signup-phone"
                />
              </div>
              
              <div>
                <Label htmlFor="signup-city">Città</Label>
                <Input
                  id="signup-city"
                  value={signupData.city}
                  onChange={(e) => setSignupData({ ...signupData, city: e.target.value })}
                  placeholder="Milano"
                  data-testid="input-signup-city"
                />
              </div>
              
              <Button
                type="submit"
                className="w-full"
                disabled={signupMutation.isPending}
                data-testid="button-signup"
              >
                {signupMutation.isPending ? "Registrazione..." : "Registrati"}
              </Button>
            </form>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
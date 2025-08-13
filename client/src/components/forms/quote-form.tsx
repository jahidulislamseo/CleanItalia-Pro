import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { insertQuoteRequestSchema, type InsertQuoteRequest } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Loader2, Calculator } from "lucide-react";

interface QuoteFormProps {
  defaultService?: string;
  defaultCity?: string;
}

export default function QuoteForm({ defaultService, defaultCity }: QuoteFormProps) {
  const { toast } = useToast();

  const form = useForm<InsertQuoteRequest>({
    resolver: zodResolver(insertQuoteRequestSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      serviceType: defaultService || "",
      city: defaultCity || "",
      propertyType: "",
      propertySize: "",
      frequency: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertQuoteRequest) => {
      const response = await apiRequest("POST", "/api/quote", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Richiesta preventivo inviata!",
        description: "Riceverai il tuo preventivo personalizzato entro 24 ore.",
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Errore nell'invio",
        description: error.message || "Si è verificato un errore. Riprova più tardi.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertQuoteRequest) => {
    mutation.mutate(data);
  };

  return (
    <div className="bg-white rounded-xl p-8 shadow-xl">
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Richiedi Preventivo Personalizzato</h3>
        <p className="text-gray-600">Compila il form per ricevere un preventivo gratuito entro 24 ore</p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome *</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Il tuo nome" 
                      {...field} 
                      data-testid="input-quote-firstName"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Cognome *</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Il tuo cognome" 
                      {...field} 
                      data-testid="input-quote-lastName"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email *</FormLabel>
                  <FormControl>
                    <Input 
                      type="email" 
                      placeholder="la.tua.email@esempio.it" 
                      {...field} 
                      data-testid="input-quote-email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Telefono</FormLabel>
                  <FormControl>
                    <Input 
                      type="tel" 
                      placeholder="+39 123 456 7890" 
                      {...field} 
                      data-testid="input-quote-phone"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="serviceType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tipo di Servizio *</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger data-testid="select-quote-serviceType">
                        <SelectValue placeholder="Seleziona un servizio" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="commercial">Pulizie Commerciali</SelectItem>
                      <SelectItem value="car-wash">Car Clean Self Service</SelectItem>
                      <SelectItem value="domestic">Servizi Domestici</SelectItem>
                      <SelectItem value="construction">Pulizie Post-Costruzione</SelectItem>
                      <SelectItem value="sanitization">Sanificazione</SelectItem>
                      <SelectItem value="custom">Contratto Personalizzato</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Città *</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger data-testid="select-quote-city">
                        <SelectValue placeholder="Seleziona la tua città" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="milano">Milano e Provincia</SelectItem>
                      <SelectItem value="roma">Roma e Lazio</SelectItem>
                      <SelectItem value="napoli">Napoli e Campania</SelectItem>
                      <SelectItem value="torino">Torino e Piemonte</SelectItem>
                      <SelectItem value="firenze">Firenze e Toscana</SelectItem>
                      <SelectItem value="bologna">Bologna e Emilia-Romagna</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <FormField
              control={form.control}
              name="propertyType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tipo di Immobile</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger data-testid="select-quote-propertyType">
                        <SelectValue placeholder="Seleziona tipo" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="apartment">Appartamento</SelectItem>
                      <SelectItem value="house">Casa</SelectItem>
                      <SelectItem value="office">Ufficio</SelectItem>
                      <SelectItem value="shop">Negozio</SelectItem>
                      <SelectItem value="warehouse">Magazzino</SelectItem>
                      <SelectItem value="industrial">Industriale</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="propertySize"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Dimensione</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger data-testid="select-quote-propertySize">
                        <SelectValue placeholder="Seleziona mq" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="small">Fino a 50 mq</SelectItem>
                      <SelectItem value="medium">50-100 mq</SelectItem>
                      <SelectItem value="large">100-200 mq</SelectItem>
                      <SelectItem value="xlarge">200-500 mq</SelectItem>
                      <SelectItem value="xxlarge">Oltre 500 mq</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="frequency"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Frequenza</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger data-testid="select-quote-frequency">
                        <SelectValue placeholder="Seleziona frequenza" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="once">Una tantum</SelectItem>
                      <SelectItem value="weekly">Settimanale</SelectItem>
                      <SelectItem value="biweekly">Quindicinale</SelectItem>
                      <SelectItem value="monthly">Mensile</SelectItem>
                      <SelectItem value="quarterly">Trimestrale</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Note Aggiuntive</FormLabel>
                <FormControl>
                  <Textarea 
                    rows={4} 
                    placeholder="Descrivi eventuali esigenze specifiche o richieste particolari..." 
                    {...field} 
                    data-testid="textarea-quote-message"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button 
            type="submit" 
            disabled={mutation.isPending}
            className="w-full bg-italian-blue hover:bg-blue-700 text-white py-4"
            data-testid="button-submit-quote"
          >
            {mutation.isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Invio in corso...
              </>
            ) : (
              <>
                <Calculator className="mr-2 h-4 w-4" />
                Richiedi Preventivo Gratuito
              </>
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}

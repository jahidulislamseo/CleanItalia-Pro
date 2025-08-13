import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { insertContactRequestSchema, type InsertContactRequest } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Loader2, Send } from "lucide-react";

export default function ContactForm() {
  const { toast } = useToast();

  const form = useForm<InsertContactRequest>({
    resolver: zodResolver(insertContactRequestSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      serviceType: "",
      city: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertContactRequest) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Richiesta inviata con successo!",
        description: "Ti ricontatteremo entro 24 ore.",
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

  const onSubmit = (data: InsertContactRequest) => {
    mutation.mutate(data);
  };

  return (
    <div className="bg-white rounded-xl p-8">
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
                      data-testid="input-firstName"
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
                      data-testid="input-lastName"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

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
                    data-testid="input-email"
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
                    data-testid="input-phone"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="serviceType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Tipo di Servizio *</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger data-testid="select-serviceType">
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
                    <SelectTrigger data-testid="select-city">
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

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Messaggio</FormLabel>
                <FormControl>
                  <Textarea 
                    rows={4} 
                    placeholder="Descrivi le tue esigenze di cleaning services..." 
                    {...field} 
                    data-testid="textarea-message"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button 
            type="submit" 
            disabled={mutation.isPending}
            className="w-full bg-italian-green hover:bg-green-700 text-white py-4"
            data-testid="button-submit-contact"
          >
            {mutation.isPending ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Invio in corso...
              </>
            ) : (
              <>
                <Send className="mr-2 h-4 w-4" />
                Richiedi Preventivo Gratuito
              </>
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
}

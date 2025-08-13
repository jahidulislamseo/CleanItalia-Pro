import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon, Clock, MapPin, Euro } from 'lucide-react';
import { format } from 'date-fns';
import { it } from 'date-fns/locale';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';
import { useLanguage } from '@/hooks/use-language';
import { apiRequest } from '@/lib/queryClient';
import { insertBookingSchema, type InsertBooking, type AvailableSlot } from '@shared/schema';

const serviceTypes = [
  'Pulizia Commerciale',
  'Autolavaggio Self-Service',
  'Pulizia Domestica',
  'Pulizia Cantieri',
  'Sanificazione',
  'Contratti Personalizzati'
];

const cities = [
  'Milano',
  'Roma', 
  'Napoli',
  'Torino',
  'Palermo',
  'Genova'
];

const propertySizes = [
  'Piccolo (< 50 mq)',
  'Medio (50-100 mq)',
  'Grande (100-200 mq)',
  'Molto Grande (> 200 mq)'
];

const frequencies = [
  'Una tantum',
  'Settimanale',
  'Bisettimanale', 
  'Mensile',
  'Trimestrale'
];

interface BookingFormProps {
  userId?: string;
  onSuccess?: (bookingId: string) => void;
}

export default function BookingForm({ userId, onSuccess }: BookingFormProps) {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedCity, setSelectedCity] = useState<string>('');
  const { toast } = useToast();
  const { t } = useLanguage();
  const queryClient = useQueryClient();

  const form = useForm<InsertBooking>({
    resolver: zodResolver(insertBookingSchema),
    defaultValues: {
      serviceType: '',
      city: '',
      address: '',
      scheduledDate: '',
      scheduledTime: '',
      duration: 120, // 2 hours default
      propertySize: '',
      frequency: '',
      specialRequests: '',
    },
  });

  // Fetch available slots when city and date are selected
  const { data: availableSlots = [], isLoading: slotsLoading } = useQuery<AvailableSlot[]>({
    queryKey: ['/api/available-slots', selectedCity, selectedDate?.toISOString()],
    queryFn: async () => {
      if (!selectedCity || !selectedDate) return [];
      const response = await fetch(
        `/api/available-slots/${selectedCity}?date=${selectedDate.toISOString()}`
      );
      return response.json();
    },
    enabled: !!selectedCity && !!selectedDate,
  });

  const bookingMutation = useMutation({
    mutationFn: async (data: InsertBooking & { userId: string }) => {
      return apiRequest('POST', '/api/bookings', data);
    },
    onSuccess: (response) => {
      toast({
        title: "Prenotazione Confermata!",
        description: "La tua prenotazione è stata creata con successo. Riceverai una conferma via email.",
      });
      form.reset();
      setSelectedDate(undefined);
      setSelectedCity('');
      queryClient.invalidateQueries({ queryKey: ['/api/bookings'] });
      onSuccess?.(response.booking.id);
    },
    onError: (error: any) => {
      toast({
        title: "Errore nella Prenotazione",
        description: error.message || "Si è verificato un errore durante la creazione della prenotazione.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertBooking) => {
    if (!userId) {
      toast({
        title: "Accesso Richiesto",
        description: "Devi essere registrato per effettuare una prenotazione.",
        variant: "destructive",
      });
      return;
    }

    if (!selectedDate) {
      toast({
        title: "Data Richiesta",
        description: "Seleziona una data per la prenotazione.",
        variant: "destructive",
      });
      return;
    }

    bookingMutation.mutate({
      ...data,
      userId,
      scheduledDate: selectedDate.toISOString(),
    });
  };

  const calculatePrice = (serviceType: string, duration: number, propertySize: string): number => {
    const baseRates: { [key: string]: number } = {
      'Pulizia Commerciale': 35,
      'Autolavaggio Self-Service': 25,
      'Pulizia Domestica': 30,
      'Pulizia Cantieri': 40,
      'Sanificazione': 45,
      'Contratti Personalizzati': 35,
    };

    const sizeMultipliers: { [key: string]: number } = {
      'Piccolo (< 50 mq)': 1.0,
      'Medio (50-100 mq)': 1.5,
      'Grande (100-200 mq)': 2.0,
      'Molto Grande (> 200 mq)': 2.5,
    };

    const baseRate = baseRates[serviceType] || 30;
    const sizeMultiplier = sizeMultipliers[propertySize] || 1.0;
    const hourlyRate = baseRate * sizeMultiplier;
    
    return Math.round((hourlyRate * (duration / 60)) * 100) / 100;
  };

  const estimatedPrice = calculatePrice(
    form.watch('serviceType'),
    form.watch('duration'),
    form.watch('propertySize')
  );

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900" data-testid="booking-title">
            Prenota un Servizio
          </h1>
          <p className="text-gray-600 mt-2">
            Seleziona il servizio desiderato e scegli la data più comoda per te
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Dettagli Prenotazione</CardTitle>
                <CardDescription>
                  Compila i dettagli per la tua prenotazione di servizio
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="serviceType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Tipo di Servizio</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger data-testid="select-service-type">
                                  <SelectValue placeholder="Seleziona servizio" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {serviceTypes.map((service) => (
                                  <SelectItem key={service} value={service}>
                                    {service}
                                  </SelectItem>
                                ))}
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
                            <FormLabel>Città</FormLabel>
                            <Select 
                              onValueChange={(value) => {
                                field.onChange(value);
                                setSelectedCity(value);
                              }} 
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger data-testid="select-city">
                                  <SelectValue placeholder="Seleziona città" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {cities.map((city) => (
                                  <SelectItem key={city} value={city}>
                                    {city}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="address"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Indirizzo</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Via, numero civico, scala, interno" 
                              {...field}
                              data-testid="input-address"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label>Data Prenotazione</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className={cn(
                                "w-full justify-start text-left font-normal",
                                !selectedDate && "text-muted-foreground"
                              )}
                              data-testid="select-date"
                            >
                              <CalendarIcon className="mr-2 h-4 w-4" />
                              {selectedDate ? (
                                format(selectedDate, "PPP", { locale: it })
                              ) : (
                                "Seleziona data"
                              )}
                            </Button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={selectedDate}
                              onSelect={setSelectedDate}
                              disabled={(date) => date < new Date()}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                      </div>

                      <FormField
                        control={form.control}
                        name="scheduledTime"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Orario</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger data-testid="select-time">
                                  <SelectValue placeholder="Seleziona orario" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {slotsLoading ? (
                                  <SelectItem value="loading" disabled>
                                    Caricamento orari...
                                  </SelectItem>
                                ) : availableSlots.length === 0 ? (
                                  <SelectItem value="no-slots" disabled>
                                    Nessun orario disponibile
                                  </SelectItem>
                                ) : (
                                  availableSlots.map((slot) => (
                                    <SelectItem key={slot.id} value={slot.timeSlot}>
                                      {slot.timeSlot}
                                    </SelectItem>
                                  ))
                                )}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <FormField
                        control={form.control}
                        name="duration"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Durata (minuti)</FormLabel>
                            <Select 
                              onValueChange={(value) => field.onChange(Number(value))} 
                              defaultValue={field.value?.toString()}
                            >
                              <FormControl>
                                <SelectTrigger data-testid="select-duration">
                                  <SelectValue placeholder="Durata" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="60">1 ora</SelectItem>
                                <SelectItem value="120">2 ore</SelectItem>
                                <SelectItem value="180">3 ore</SelectItem>
                                <SelectItem value="240">4 ore</SelectItem>
                                <SelectItem value="480">8 ore</SelectItem>
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
                            <FormLabel>Dimensione Proprietà</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger data-testid="select-property-size">
                                  <SelectValue placeholder="Dimensione" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {propertySizes.map((size) => (
                                  <SelectItem key={size} value={size}>
                                    {size}
                                  </SelectItem>
                                ))}
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
                                <SelectTrigger data-testid="select-frequency">
                                  <SelectValue placeholder="Frequenza" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {frequencies.map((freq) => (
                                  <SelectItem key={freq} value={freq}>
                                    {freq}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="specialRequests"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Richieste Speciali</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Descrivi eventuali richieste particolari o note per il nostro team..."
                              className="resize-none"
                              {...field}
                              data-testid="textarea-special-requests"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      className="w-full"
                      disabled={bookingMutation.isPending}
                      data-testid="button-submit-booking"
                    >
                      {bookingMutation.isPending ? "Creazione in corso..." : "Conferma Prenotazione"}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="sticky top-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Euro className="h-5 w-5" />
                  Riepilogo Prezzo
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-sm text-gray-600">Servizio</span>
                  <span className="font-medium">{form.watch('serviceType') || 'Non selezionato'}</span>
                </div>
                
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-sm text-gray-600">Durata</span>
                  <span className="font-medium">{form.watch('duration') || 0} min</span>
                </div>
                
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-sm text-gray-600">Dimensione</span>
                  <span className="font-medium">{form.watch('propertySize') || 'Non selezionata'}</span>
                </div>
                
                <div className="flex justify-between items-center py-3 text-lg font-bold">
                  <span>Totale Stimato</span>
                  <span className="text-green-600" data-testid="estimated-price">
                    €{estimatedPrice.toFixed(2)}
                  </span>
                </div>
                
                <div className="text-xs text-gray-500 space-y-1">
                  <p>• Prezzo finale calcolato dopo valutazione</p>
                  <p>• Possibili variazioni per servizi speciali</p>
                  <p>• Pagamento sicuro al completamento</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
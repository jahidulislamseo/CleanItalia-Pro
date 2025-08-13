import { useState, useEffect } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CalendarDays, MapPin, Clock, Star, CreditCard, User } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';
import { apiRequest } from '@/lib/queryClient';
import type { Booking, ServiceHistory, User as UserType } from '@shared/schema';

interface CustomerPortalProps {
  userId: string;
}

export default function CustomerPortal({ userId }: CustomerPortalProps) {
  const { t } = useLanguage();
  const queryClient = useQueryClient();

  const { data: user } = useQuery<UserType>({
    queryKey: ['/api/users', userId],
    queryFn: async () => {
      const response = await fetch(`/api/users/${userId}`);
      return response.json();
    },
  });

  const { data: bookings = [], isLoading: bookingsLoading } = useQuery<Booking[]>({
    queryKey: ['/api/bookings/user', userId],
    queryFn: async () => {
      const response = await fetch(`/api/bookings/user/${userId}`);
      return response.json();
    },
  });

  const { data: serviceHistory = [], isLoading: historyLoading } = useQuery<ServiceHistory[]>({
    queryKey: ['/api/service-history/user', userId],
    queryFn: async () => {
      const response = await fetch(`/api/service-history/user/${userId}`);
      return response.json();
    },
  });

  const ratingMutation = useMutation({
    mutationFn: async ({ id, rating, feedback }: { id: string; rating: number; feedback?: string }) => {
      return apiRequest('PATCH', `/api/service-history/${id}/rating`, { rating, feedback });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/service-history/user', userId] });
    },
  });

  const getStatusBadge = (status: string) => {
    const statusMap = {
      pending: { label: 'In Attesa', variant: 'secondary' as const },
      confirmed: { label: 'Confermato', variant: 'default' as const },
      in_progress: { label: 'In Corso', variant: 'default' as const },
      completed: { label: 'Completato', variant: 'default' as const },
      cancelled: { label: 'Annullato', variant: 'destructive' as const },
    };
    
    const config = statusMap[status as keyof typeof statusMap] || statusMap.pending;
    return <Badge variant={config.variant}>{config.label}</Badge>;
  };

  const getPaymentStatusBadge = (status: string) => {
    const statusMap = {
      pending: { label: 'In Attesa', variant: 'secondary' as const },
      paid: { label: 'Pagato', variant: 'default' as const },
      failed: { label: 'Fallito', variant: 'destructive' as const },
      refunded: { label: 'Rimborsato', variant: 'outline' as const },
    };
    
    const config = statusMap[status as keyof typeof statusMap] || statusMap.pending;
    return <Badge variant={config.variant}>{config.label}</Badge>;
  };

  const StarRating = ({ rating, onRatingChange, readOnly = false }: { 
    rating: number; 
    onRatingChange?: (rating: number) => void; 
    readOnly?: boolean;
  }) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-4 w-4 ${
              star <= rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
            } ${!readOnly ? 'cursor-pointer hover:text-yellow-400' : ''}`}
            onClick={() => !readOnly && onRatingChange?.(star)}
            data-testid={`star-${star}`}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900" data-testid="portal-title">
            Area Cliente - {user?.firstName} {user?.lastName}
          </h1>
          <p className="text-gray-600 mt-2">
            Gestisci le tue prenotazioni e visualizza la cronologia dei servizi
          </p>
        </div>

        <Tabs defaultValue="bookings" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="bookings" data-testid="tab-bookings">
              Prenotazioni Attive
            </TabsTrigger>
            <TabsTrigger value="history" data-testid="tab-history">
              Cronologia Servizi
            </TabsTrigger>
            <TabsTrigger value="profile" data-testid="tab-profile">
              Profilo
            </TabsTrigger>
          </TabsList>

          <TabsContent value="bookings">
            <div className="grid gap-6">
              <h2 className="text-2xl font-semibold">Le Tue Prenotazioni</h2>
              
              {bookingsLoading ? (
                <div className="grid gap-4">
                  {[1, 2, 3].map((i) => (
                    <Card key={i} className="animate-pulse">
                      <CardContent className="p-6">
                        <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                        <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : bookings.length === 0 ? (
                <Card>
                  <CardContent className="p-8 text-center">
                    <CalendarDays className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                    <p className="text-gray-500">Non hai prenotazioni attive al momento</p>
                  </CardContent>
                </Card>
              ) : (
                <div className="grid gap-4">
                  {bookings.map((booking) => (
                    <Card key={booking.id} data-testid={`booking-${booking.id}`}>
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-lg">{booking.serviceType}</CardTitle>
                            <CardDescription className="flex items-center gap-2 mt-1">
                              <MapPin className="h-4 w-4" />
                              {booking.city} - {booking.address}
                            </CardDescription>
                          </div>
                          <div className="flex gap-2">
                            {getStatusBadge(booking.status || 'pending')}
                            {getPaymentStatusBadge(booking.paymentStatus || 'pending')}
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="flex items-center gap-2">
                            <CalendarDays className="h-4 w-4 text-gray-500" />
                            <span>{new Date(booking.scheduledDate).toLocaleDateString('it-IT')}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4 text-gray-500" />
                            <span>{booking.scheduledTime}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CreditCard className="h-4 w-4 text-gray-500" />
                            <span>€{booking.price}</span>
                          </div>
                        </div>
                        
                        {booking.specialRequests && (
                          <div className="mt-4 p-3 bg-gray-50 rounded-md">
                            <p className="text-sm font-medium text-gray-700">Richieste Speciali:</p>
                            <p className="text-sm text-gray-600 mt-1">{booking.specialRequests}</p>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="history">
            <div className="grid gap-6">
              <h2 className="text-2xl font-semibold">Cronologia Servizi</h2>
              
              {historyLoading ? (
                <div className="grid gap-4">
                  {[1, 2, 3].map((i) => (
                    <Card key={i} className="animate-pulse">
                      <CardContent className="p-6">
                        <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                        <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : serviceHistory.length === 0 ? (
                <Card>
                  <CardContent className="p-8 text-center">
                    <Star className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                    <p className="text-gray-500">Nessun servizio completato ancora</p>
                  </CardContent>
                </Card>
              ) : (
                <div className="grid gap-4">
                  {serviceHistory.map((history) => (
                    <Card key={history.id} data-testid={`history-${history.id}`}>
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-lg">{history.serviceType}</CardTitle>
                            <CardDescription>
                              Completato il {new Date(history.completedDate).toLocaleDateString('it-IT')}
                            </CardDescription>
                          </div>
                          <div>
                            {history.rating ? (
                              <StarRating rating={history.rating} readOnly />
                            ) : (
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => {
                                  const rating = prompt('Inserisci una valutazione da 1 a 5 stelle:');
                                  if (rating && !isNaN(Number(rating))) {
                                    ratingMutation.mutate({
                                      id: history.id,
                                      rating: Number(rating),
                                    });
                                  }
                                }}
                                data-testid={`rate-service-${history.id}`}
                              >
                                Valuta Servizio
                              </Button>
                            )}
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        {history.feedback && (
                          <div className="mb-4 p-3 bg-gray-50 rounded-md">
                            <p className="text-sm font-medium text-gray-700">Il Tuo Feedback:</p>
                            <p className="text-sm text-gray-600 mt-1">{history.feedback}</p>
                          </div>
                        )}
                        
                        {history.teamNotes && (
                          <div className="p-3 bg-blue-50 rounded-md">
                            <p className="text-sm font-medium text-blue-700">Note del Team:</p>
                            <p className="text-sm text-blue-600 mt-1">{history.teamNotes}</p>
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </TabsContent>

          <TabsContent value="profile">
            <div className="grid gap-6">
              <h2 className="text-2xl font-semibold">Informazioni Profilo</h2>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <User className="h-5 w-5" />
                    Dati Personali
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-700">Nome</label>
                      <p className="text-gray-900">{user?.firstName}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700">Cognome</label>
                      <p className="text-gray-900">{user?.lastName}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700">Email</label>
                      <p className="text-gray-900">{user?.email}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700">Telefono</label>
                      <p className="text-gray-900">{user?.phone || 'Non fornito'}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700">Città</label>
                      <p className="text-gray-900">{user?.city || 'Non specificata'}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700">Lingua Preferita</label>
                      <p className="text-gray-900">{user?.preferredLanguage === 'it' ? 'Italiano' : 'Inglese'}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { DatePickerWithRange } from '@/components/ui/date-range-picker';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, Eye, MousePointer, Target, BarChart3 } from 'lucide-react';
import { addDays, subDays, format } from 'date-fns';
import { it } from 'date-fns/locale';
import type { DateRange } from 'react-day-picker';
import type { SeoAnalytics } from '@shared/schema';

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff7300', '#0088fe', '#00c49f'];

const cities = ['Milano', 'Roma', 'Napoli', 'Torino', 'Palermo', 'Genova'];

const pages = [
  'Home',
  'Pulizia Commerciale',
  'Autolavaggio Self-Service', 
  'Pulizia Domestica',
  'Pulizia Cantieri',
  'Sanificazione',
  'Contratti Personalizzati',
  'Milano',
  'Roma',
  'Napoli',
  'Torino',
  'Palermo',
  'Genova'
];

export default function SeoAnalyticsDashboard() {
  const [selectedCity, setSelectedCity] = useState<string>('');
  const [selectedPage, setSelectedPage] = useState<string>('');
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: subDays(new Date(), 30),
    to: new Date(),
  });

  const { data: analytics = [], isLoading } = useQuery<SeoAnalytics[]>({
    queryKey: [
      '/api/seo-analytics',
      selectedPage,
      selectedCity,
      dateRange?.from?.toISOString(),
      dateRange?.to?.toISOString()
    ],
    queryFn: async () => {
      const params = new URLSearchParams();
      if (selectedPage) params.append('page', selectedPage);
      if (selectedCity) params.append('city', selectedCity);
      if (dateRange?.from) params.append('startDate', dateRange.from.toISOString());
      if (dateRange?.to) params.append('endDate', dateRange.to.toISOString());
      
      const response = await fetch(`/api/seo-analytics?${params}`);
      return response.json();
    },
  });

  // Process data for charts
  const processedData = analytics.reduce((acc, item) => {
    const dateKey = format(new Date(item.date), 'dd/MM', { locale: it });
    const existing = acc.find(d => d.date === dateKey);
    
    if (existing) {
      existing.impressions += item.impressions;
      existing.clicks += item.clicks;
    } else {
      acc.push({
        date: dateKey,
        impressions: item.impressions,
        clicks: item.clicks,
        ctr: item.clicks > 0 ? ((item.clicks / item.impressions) * 100) : 0,
      });
    }
    
    return acc;
  }, [] as any[]);

  const pagePerformance = analytics.reduce((acc, item) => {
    const existing = acc.find(d => d.page === item.page);
    
    if (existing) {
      existing.impressions += item.impressions;
      existing.clicks += item.clicks;
    } else {
      acc.push({
        page: item.page,
        impressions: item.impressions,
        clicks: item.clicks,
        ctr: item.clicks > 0 ? ((item.clicks / item.impressions) * 100) : 0,
      });
    }
    
    return acc;
  }, [] as any[]);

  const cityPerformance = analytics.reduce((acc, item) => {
    if (!item.city) return acc;
    
    const existing = acc.find(d => d.city === item.city);
    
    if (existing) {
      existing.impressions += item.impressions;
      existing.clicks += item.clicks;
    } else {
      acc.push({
        city: item.city,
        impressions: item.impressions,
        clicks: item.clicks,
        ctr: item.clicks > 0 ? ((item.clicks / item.impressions) * 100) : 0,
      });
    }
    
    return acc;
  }, [] as any[]);

  const totalImpressions = analytics.reduce((sum, item) => sum + item.impressions, 0);
  const totalClicks = analytics.reduce((sum, item) => sum + item.clicks, 0);
  const averageCTR = totalImpressions > 0 ? (totalClicks / totalImpressions) * 100 : 0;
  const averagePosition = analytics.length > 0 
    ? analytics.reduce((sum, item) => sum + Number(item.position || 0), 0) / analytics.length 
    : 0;

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900" data-testid="analytics-title">
            Dashboard Analytics SEO
          </h1>
          <p className="text-gray-600 mt-2">
            Monitora le performance SEO delle pagine del sito CleanItalia Pro
          </p>
        </div>

        {/* Filters */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Filtri</CardTitle>
            <CardDescription>Personalizza la vista dei dati analytics</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Periodo</label>
                <DatePickerWithRange 
                  date={dateRange} 
                  onDateChange={setDateRange}
                  className="w-full"
                />
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Pagina</label>
                <Select value={selectedPage} onValueChange={setSelectedPage}>
                  <SelectTrigger data-testid="select-page">
                    <SelectValue placeholder="Tutte le pagine" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">Tutte le pagine</SelectItem>
                    {pages.map((page) => (
                      <SelectItem key={page} value={page}>
                        {page}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Città</label>
                <Select value={selectedCity} onValueChange={setSelectedCity}>
                  <SelectTrigger data-testid="select-city">
                    <SelectValue placeholder="Tutte le città" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">Tutte le città</SelectItem>
                    {cities.map((city) => (
                      <SelectItem key={city} value={city}>
                        {city}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex items-end">
                <Button 
                  onClick={() => {
                    setSelectedPage('');
                    setSelectedCity('');
                    setDateRange({
                      from: subDays(new Date(), 30),
                      to: new Date(),
                    });
                  }}
                  variant="outline"
                  className="w-full"
                  data-testid="reset-filters"
                >
                  Reset Filtri
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Impressioni Totali</CardTitle>
              <Eye className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold" data-testid="total-impressions">
                {totalImpressions.toLocaleString('it-IT')}
              </div>
              <p className="text-xs text-muted-foreground">
                Visualizzazioni nei risultati di ricerca
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Click Totali</CardTitle>
              <MousePointer className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold" data-testid="total-clicks">
                {totalClicks.toLocaleString('it-IT')}
              </div>
              <p className="text-xs text-muted-foreground">
                Click dai risultati di ricerca
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">CTR Medio</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold" data-testid="average-ctr">
                {averageCTR.toFixed(2)}%
              </div>
              <p className="text-xs text-muted-foreground">
                Tasso di click-through medio
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Posizione Media</CardTitle>
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold" data-testid="average-position">
                {averagePosition.toFixed(1)}
              </div>
              <p className="text-xs text-muted-foreground">
                Posizione media nei risultati
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Impressions and Clicks Over Time */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                Andamento Impressioni e Click
              </CardTitle>
              <CardDescription>Performance giornaliera negli ultimi 30 giorni</CardDescription>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <div className="h-64 flex items-center justify-center">
                  <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full" />
                </div>
              ) : (
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={processedData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip 
                      formatter={(value, name) => [
                        name === 'impressions' ? `${value} impressioni` : `${value} click`,
                        name === 'impressions' ? 'Impressioni' : 'Click'
                      ]}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="impressions" 
                      stroke="#8884d8" 
                      strokeWidth={2}
                      name="impressions"
                    />
                    <Line 
                      type="monotone" 
                      dataKey="clicks" 
                      stroke="#82ca9d" 
                      strokeWidth={2}
                      name="clicks"
                    />
                  </LineChart>
                </ResponsiveContainer>
              )}
            </CardContent>
          </Card>

          {/* Page Performance */}
          <Card>
            <CardHeader>
              <CardTitle>Performance per Pagina</CardTitle>
              <CardDescription>Click e impressioni per pagina</CardDescription>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <div className="h-64 flex items-center justify-center">
                  <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full" />
                </div>
              ) : (
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={pagePerformance.slice(0, 8)}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis 
                      dataKey="page" 
                      angle={-45}
                      textAnchor="end"
                      height={100}
                    />
                    <YAxis />
                    <Tooltip 
                      formatter={(value, name) => [
                        name === 'impressions' ? `${value} impressioni` : `${value} click`,
                        name === 'impressions' ? 'Impressioni' : 'Click'
                      ]}
                    />
                    <Bar dataKey="impressions" fill="#8884d8" name="impressions" />
                    <Bar dataKey="clicks" fill="#82ca9d" name="clicks" />
                  </BarChart>
                </ResponsiveContainer>
              )}
            </CardContent>
          </Card>
        </div>

        {/* City Performance and CTR */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Performance per Città</CardTitle>
              <CardDescription>Distribuzione delle impressioni per città</CardDescription>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <div className="h-64 flex items-center justify-center">
                  <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full" />
                </div>
              ) : (
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={cityPerformance}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ city, percent }) => `${city} ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="impressions"
                    >
                      {cityPerformance.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip 
                      formatter={(value) => [`${value} impressioni`, 'Impressioni']}
                    />
                  </PieChart>
                </ResponsiveContainer>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>CTR per Pagina</CardTitle>
              <CardDescription>Tasso di click-through per pagina</CardDescription>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <div className="h-64 flex items-center justify-center">
                  <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full" />
                </div>
              ) : (
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={pagePerformance.slice(0, 6)}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis 
                      dataKey="page" 
                      angle={-45}
                      textAnchor="end"
                      height={100}
                    />
                    <YAxis />
                    <Tooltip 
                      formatter={(value) => [`${value.toFixed(2)}%`, 'CTR']}
                    />
                    <Bar dataKey="ctr" fill="#ffc658" />
                  </BarChart>
                </ResponsiveContainer>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Analytics Table */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Dettaglio Analytics</CardTitle>
            <CardDescription>
              Dati dettagliati delle performance SEO per il periodo selezionato
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2">Pagina</th>
                    <th className="text-left p-2">Città</th>
                    <th className="text-left p-2">Parola Chiave</th>
                    <th className="text-right p-2">Impressioni</th>
                    <th className="text-right p-2">Click</th>
                    <th className="text-right p-2">CTR</th>
                    <th className="text-right p-2">Posizione</th>
                  </tr>
                </thead>
                <tbody>
                  {analytics.slice(0, 20).map((item, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50" data-testid={`analytics-row-${index}`}>
                      <td className="p-2 font-medium">{item.page}</td>
                      <td className="p-2">{item.city || '-'}</td>
                      <td className="p-2">{item.keyword || '-'}</td>
                      <td className="p-2 text-right">{item.impressions.toLocaleString('it-IT')}</td>
                      <td className="p-2 text-right">{item.clicks.toLocaleString('it-IT')}</td>
                      <td className="p-2 text-right">
                        {item.impressions > 0 ? ((item.clicks / item.impressions) * 100).toFixed(2) : '0.00'}%
                      </td>
                      <td className="p-2 text-right">{Number(item.position || 0).toFixed(1)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              
              {analytics.length === 0 && !isLoading && (
                <div className="text-center py-8 text-gray-500">
                  Nessun dato analytics disponibile per il periodo selezionato
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
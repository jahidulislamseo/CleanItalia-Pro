import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { 
  insertContactRequestSchema, 
  insertQuoteRequestSchema,
  insertUserSchema,
  insertBookingSchema
} from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Existing endpoints
  app.post("/api/contact", async (req, res) => {
    try {
      const contactData = insertContactRequestSchema.parse(req.body);
      const contact = await storage.createContactRequest(contactData);
      res.json({ success: true, contact });
    } catch (error: any) {
      res.status(400).json({ 
        success: false, 
        message: error.message || "Errore nella richiesta di contatto" 
      });
    }
  });

  app.post("/api/quote", async (req, res) => {
    try {
      const quoteData = insertQuoteRequestSchema.parse(req.body);
      const quote = await storage.createQuoteRequest(quoteData);
      res.json({ success: true, quote });
    } catch (error: any) {
      res.status(400).json({ 
        success: false, 
        message: error.message || "Errore nella richiesta di preventivo" 
      });
    }
  });

  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContactRequests();
      res.json(contacts);
    } catch (error) {
      res.status(500).json({ message: "Errore nel recupero dei contatti" });
    }
  });

  app.get("/api/quotes", async (req, res) => {
    try {
      const quotes = await storage.getQuoteRequests();
      res.json(quotes);
    } catch (error) {
      res.status(500).json({ message: "Errore nel recupero dei preventivi" });
    }
  });

  // User management endpoints
  app.post("/api/users", async (req, res) => {
    try {
      const userData = insertUserSchema.parse(req.body);
      
      // Check if user already exists
      const existingUser = await storage.getUserByEmail(userData.email);
      if (existingUser) {
        return res.status(400).json({ 
          success: false, 
          message: "Un utente con questa email esiste già" 
        });
      }
      
      const user = await storage.createUser(userData);
      res.json({ success: true, user });
    } catch (error: any) {
      res.status(400).json({ 
        success: false, 
        message: error.message || "Errore nella creazione dell'utente" 
      });
    }
  });

  app.get("/api/users/:id", async (req, res) => {
    try {
      const user = await storage.getUserById(req.params.id);
      if (!user) {
        return res.status(404).json({ message: "Utente non trovato" });
      }
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: "Errore nel recupero dell'utente" });
    }
  });

  app.post("/api/users/login", async (req, res) => {
    try {
      const { email } = req.body;
      const user = await storage.getUserByEmail(email);
      
      if (!user) {
        return res.status(404).json({ 
          success: false, 
          message: "Utente non trovato" 
        });
      }
      
      res.json({ success: true, user });
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Errore nel login" 
      });
    }
  });

  // Booking system endpoints
  app.post("/api/bookings", async (req, res) => {
    try {
      const bookingData = insertBookingSchema.parse(req.body);
      const { userId } = req.body;
      
      if (!userId) {
        return res.status(400).json({ 
          success: false, 
          message: "ID utente richiesto" 
        });
      }
      
      // Convert string date to Date object
      const scheduledDate = new Date(bookingData.scheduledDate);
      
      const booking = await storage.createBooking({
        ...bookingData,
        scheduledDate,
        userId
      });
      
      res.json({ success: true, booking });
    } catch (error: any) {
      res.status(400).json({ 
        success: false, 
        message: error.message || "Errore nella creazione della prenotazione" 
      });
    }
  });

  app.get("/api/bookings/user/:userId", async (req, res) => {
    try {
      const bookings = await storage.getBookingsByUser(req.params.userId);
      res.json(bookings);
    } catch (error) {
      res.status(500).json({ message: "Errore nel recupero delle prenotazioni" });
    }
  });

  app.get("/api/bookings/:id", async (req, res) => {
    try {
      const booking = await storage.getBookingById(req.params.id);
      if (!booking) {
        return res.status(404).json({ message: "Prenotazione non trovata" });
      }
      res.json(booking);
    } catch (error) {
      res.status(500).json({ message: "Errore nel recupero della prenotazione" });
    }
  });

  app.patch("/api/bookings/:id/status", async (req, res) => {
    try {
      const { status, paymentIntentId } = req.body;
      const booking = await storage.updateBookingStatus(req.params.id, status, paymentIntentId);
      res.json({ success: true, booking });
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Errore nell'aggiornamento dello stato della prenotazione" 
      });
    }
  });

  // Available slots endpoints
  app.get("/api/available-slots/:city", async (req, res) => {
    try {
      const { city } = req.params;
      const { date } = req.query;
      
      if (!date) {
        return res.status(400).json({ message: "Data richiesta" });
      }
      
      const slots = await storage.getAvailableSlots(city, new Date(date as string));
      res.json(slots);
    } catch (error) {
      res.status(500).json({ message: "Errore nel recupero degli slot disponibili" });
    }
  });

  // Service history endpoints
  app.get("/api/service-history/user/:userId", async (req, res) => {
    try {
      const history = await storage.getServiceHistoryByUser(req.params.userId);
      res.json(history);
    } catch (error) {
      res.status(500).json({ message: "Errore nel recupero della cronologia servizi" });
    }
  });

  app.patch("/api/service-history/:id/rating", async (req, res) => {
    try {
      const { rating, feedback } = req.body;
      const history = await storage.updateServiceRating(req.params.id, rating, feedback);
      res.json({ success: true, history });
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Errore nell'aggiornamento della valutazione" 
      });
    }
  });

  // SEO Analytics endpoints
  app.get("/api/seo-analytics", async (req, res) => {
    try {
      const { page, city, startDate, endDate } = req.query;
      
      const start = startDate ? new Date(startDate as string) : undefined;
      const end = endDate ? new Date(endDate as string) : undefined;
      
      const analytics = await storage.getSeoAnalytics(
        page as string, 
        city as string, 
        start, 
        end
      );
      
      res.json(analytics);
    } catch (error) {
      res.status(500).json({ message: "Errore nel recupero delle analytics SEO" });
    }
  });

  // Language endpoint for multi-language support
  app.get("/api/translations/:lang", async (req, res) => {
    const { lang } = req.params;
    
    // Basic translation endpoint - in a real app this would come from a database
    const translations = {
      it: {
        welcome: "Benvenuto",
        services: "Servizi",
        booking: "Prenotazione",
        contact: "Contatto",
        about: "Chi Siamo",
        phone: "Telefono",
        email: "Email",
        submit: "Invia",
        cancel: "Annulla",
        confirm: "Conferma"
      },
      en: {
        welcome: "Welcome",
        services: "Services", 
        booking: "Booking",
        contact: "Contact",
        about: "About Us",
        phone: "Phone",
        email: "Email",
        submit: "Submit",
        cancel: "Cancel",
        confirm: "Confirm"
      }
    };
    
    res.json(translations[lang as keyof typeof translations] || translations.it);
  });

  const httpServer = createServer(app);
  return httpServer;
}

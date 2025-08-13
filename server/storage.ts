import {
  type ContactRequest,
  type InsertContactRequest,
  type QuoteRequest,
  type InsertQuoteRequest,
  type User,
  type InsertUser,
  type Booking,
  type InsertBooking,
  type ServiceHistory,
  type InsertServiceHistory,
  type AvailableSlot,
  type InsertAvailableSlot,
  type SeoAnalytics,
  type InsertSeoAnalytics,
  contactRequests,
  quoteRequests,
  users,
  bookings,
  serviceHistory,
  availableSlots,
  seoAnalytics,
} from "@shared/schema";
import { db } from "./db";
import { eq, desc, and, gte, lte } from "drizzle-orm";

export interface IStorage {
  // Existing methods
  createContactRequest(request: InsertContactRequest): Promise<ContactRequest>;
  createQuoteRequest(request: InsertQuoteRequest): Promise<QuoteRequest>;
  getContactRequests(): Promise<ContactRequest[]>;
  getQuoteRequests(): Promise<QuoteRequest[]>;
  
  // User management
  createUser(user: InsertUser): Promise<User>;
  getUserByEmail(email: string): Promise<User | undefined>;
  getUserById(id: string): Promise<User | undefined>;
  updateUser(id: string, updates: Partial<InsertUser>): Promise<User>;
  
  // Booking system
  createBooking(booking: Omit<InsertBooking, 'scheduledDate'> & { scheduledDate: Date, userId: string }): Promise<Booking>;
  getBookingsByUser(userId: string): Promise<Booking[]>;
  getBookingById(id: string): Promise<Booking | undefined>;
  updateBookingStatus(id: string, status: string, paymentIntentId?: string): Promise<Booking>;
  getBookingsByCity(city: string, date?: Date): Promise<Booking[]>;
  
  // Service history
  createServiceHistory(history: InsertServiceHistory): Promise<ServiceHistory>;
  getServiceHistoryByUser(userId: string): Promise<ServiceHistory[]>;
  updateServiceRating(id: string, rating: number, feedback?: string): Promise<ServiceHistory>;
  
  // Available slots
  getAvailableSlots(city: string, date: Date): Promise<AvailableSlot[]>;
  createAvailableSlot(slot: InsertAvailableSlot): Promise<AvailableSlot>;
  updateSlotBookings(slotId: string, increment: boolean): Promise<void>;
  
  // SEO Analytics
  createSeoAnalytics(analytics: InsertSeoAnalytics): Promise<SeoAnalytics>;
  getSeoAnalytics(page?: string, city?: string, startDate?: Date, endDate?: Date): Promise<SeoAnalytics[]>;
}

export class DatabaseStorage implements IStorage {
  // Existing methods
  async createContactRequest(request: InsertContactRequest): Promise<ContactRequest> {
    const [result] = await db.insert(contactRequests).values(request).returning();
    return result;
  }

  async createQuoteRequest(request: InsertQuoteRequest): Promise<QuoteRequest> {
    const [result] = await db.insert(quoteRequests).values(request).returning();
    return result;
  }

  async getContactRequests(): Promise<ContactRequest[]> {
    return await db.select().from(contactRequests).orderBy(desc(contactRequests.createdAt));
  }

  async getQuoteRequests(): Promise<QuoteRequest[]> {
    return await db.select().from(quoteRequests).orderBy(desc(quoteRequests.createdAt));
  }

  // User management
  async createUser(user: InsertUser): Promise<User> {
    const [result] = await db.insert(users).values(user).returning();
    return result;
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    const [result] = await db.select().from(users).where(eq(users.email, email));
    return result;
  }

  async getUserById(id: string): Promise<User | undefined> {
    const [result] = await db.select().from(users).where(eq(users.id, id));
    return result;
  }

  async updateUser(id: string, updates: Partial<InsertUser>): Promise<User> {
    const [result] = await db
      .update(users)
      .set({ ...updates, updatedAt: new Date() })
      .where(eq(users.id, id))
      .returning();
    return result;
  }

  // Booking system
  async createBooking(bookingData: Omit<InsertBooking, 'scheduledDate'> & { scheduledDate: Date, userId: string }): Promise<Booking> {
    const { scheduledDate, userId, ...rest } = bookingData;
    const [result] = await db.insert(bookings).values({
      ...rest,
      userId,
      scheduledDate,
    }).returning();
    return result;
  }

  async getBookingsByUser(userId: string): Promise<Booking[]> {
    return await db
      .select()
      .from(bookings)
      .where(eq(bookings.userId, userId))
      .orderBy(desc(bookings.scheduledDate));
  }

  async getBookingById(id: string): Promise<Booking | undefined> {
    const [result] = await db.select().from(bookings).where(eq(bookings.id, id));
    return result;
  }

  async updateBookingStatus(id: string, status: string, paymentIntentId?: string): Promise<Booking> {
    const updates: any = { status, updatedAt: new Date() };
    if (paymentIntentId) {
      updates.paymentIntentId = paymentIntentId;
      updates.paymentStatus = 'paid';
    }
    
    const [result] = await db
      .update(bookings)
      .set(updates)
      .where(eq(bookings.id, id))
      .returning();
    return result;
  }

  async getBookingsByCity(city: string, date?: Date): Promise<Booking[]> {
    if (date) {
      const startOfDay = new Date(date);
      startOfDay.setHours(0, 0, 0, 0);
      const endOfDay = new Date(date);
      endOfDay.setHours(23, 59, 59, 999);
      
      return await db
        .select()
        .from(bookings)
        .where(
          and(
            eq(bookings.city, city),
            gte(bookings.scheduledDate, startOfDay),
            lte(bookings.scheduledDate, endOfDay)
          )
        )
        .orderBy(desc(bookings.scheduledDate));
    }
    
    return await db
      .select()
      .from(bookings)
      .where(eq(bookings.city, city))
      .orderBy(desc(bookings.scheduledDate));
  }

  // Service history
  async createServiceHistory(history: InsertServiceHistory): Promise<ServiceHistory> {
    const [result] = await db.insert(serviceHistory).values(history).returning();
    return result;
  }

  async getServiceHistoryByUser(userId: string): Promise<ServiceHistory[]> {
    return await db
      .select()
      .from(serviceHistory)
      .where(eq(serviceHistory.userId, userId))
      .orderBy(desc(serviceHistory.completedDate));
  }

  async updateServiceRating(id: string, rating: number, feedback?: string): Promise<ServiceHistory> {
    const [result] = await db
      .update(serviceHistory)
      .set({ rating, feedback })
      .where(eq(serviceHistory.id, id))
      .returning();
    return result;
  }

  // Available slots
  async getAvailableSlots(city: string, date: Date): Promise<AvailableSlot[]> {
    const startOfDay = new Date(date);
    startOfDay.setHours(0, 0, 0, 0);
    const endOfDay = new Date(date);
    endOfDay.setHours(23, 59, 59, 999);
    
    return await db
      .select()
      .from(availableSlots)
      .where(
        and(
          eq(availableSlots.city, city),
          gte(availableSlots.date, startOfDay),
          lte(availableSlots.date, endOfDay),
          eq(availableSlots.isAvailable, true)
        )
      );
  }

  async createAvailableSlot(slot: InsertAvailableSlot): Promise<AvailableSlot> {
    const [result] = await db.insert(availableSlots).values(slot).returning();
    return result;
  }

  async updateSlotBookings(slotId: string, increment: boolean): Promise<void> {
    // Get current booking count first
    const [slot] = await db.select().from(availableSlots).where(eq(availableSlots.id, slotId));
    if (!slot) return;
    
    const newCount = increment ? (slot.currentBookings || 0) + 1 : Math.max((slot.currentBookings || 0) - 1, 0);
    
    await db
      .update(availableSlots)
      .set({ currentBookings: newCount })
      .where(eq(availableSlots.id, slotId));
  }

  // SEO Analytics
  async createSeoAnalytics(analytics: InsertSeoAnalytics): Promise<SeoAnalytics> {
    const [result] = await db.insert(seoAnalytics).values(analytics).returning();
    return result;
  }

  async getSeoAnalytics(
    page?: string,
    city?: string,
    startDate?: Date,
    endDate?: Date
  ): Promise<SeoAnalytics[]> {
    const conditions = [];

    if (page) conditions.push(eq(seoAnalytics.page, page));
    if (city) conditions.push(eq(seoAnalytics.city, city));
    if (startDate) conditions.push(gte(seoAnalytics.date, startDate));
    if (endDate) conditions.push(lte(seoAnalytics.date, endDate));

    if (conditions.length > 0) {
      return await db
        .select()
        .from(seoAnalytics)
        .where(and(...conditions))
        .orderBy(desc(seoAnalytics.date));
    }

    return await db
      .select()
      .from(seoAnalytics)
      .orderBy(desc(seoAnalytics.date));
  }
}

export const storage = new DatabaseStorage();

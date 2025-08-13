import { sql } from "drizzle-orm";
import { relations } from "drizzle-orm";
import {
  pgTable,
  text,
  varchar,
  timestamp,
  decimal,
  boolean,
  integer,
} from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Users table for customer portal and authentication
export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  email: varchar("email").unique().notNull(),
  firstName: varchar("first_name").notNull(),
  lastName: varchar("last_name").notNull(),
  phone: varchar("phone"),
  preferredLanguage: varchar("preferred_language").default("it"),
  city: varchar("city"),
  isActive: boolean("is_active").default(true),
  stripeCustomerId: varchar("stripe_customer_id"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Bookings table for online booking system
export const bookings = pgTable("bookings", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  userId: varchar("user_id").references(() => users.id),
  serviceType: varchar("service_type").notNull(),
  city: varchar("city").notNull(),
  address: text("address").notNull(),
  scheduledDate: timestamp("scheduled_date").notNull(),
  scheduledTime: varchar("scheduled_time").notNull(),
  duration: integer("duration").notNull(), // in minutes
  status: varchar("status").default("pending"), // pending, confirmed, in_progress, completed, cancelled
  price: decimal("price", { precision: 10, scale: 2 }),
  specialRequests: text("special_requests"),
  propertySize: varchar("property_size"),
  frequency: varchar("frequency"),
  assignedTeam: varchar("assigned_team"),
  paymentStatus: varchar("payment_status").default("pending"), // pending, paid, failed, refunded
  paymentIntentId: varchar("payment_intent_id"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Service history for customer portal
export const serviceHistory = pgTable("service_history", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  bookingId: varchar("booking_id").references(() => bookings.id),
  userId: varchar("user_id").references(() => users.id),
  serviceType: varchar("service_type").notNull(),
  completedDate: timestamp("completed_date").notNull(),
  rating: integer("rating"), // 1-5 stars
  feedback: text("feedback"),
  beforePhotos: text("before_photos").array(),
  afterPhotos: text("after_photos").array(),
  teamNotes: text("team_notes"),
  createdAt: timestamp("created_at").defaultNow(),
});

// Available time slots for scheduling
export const availableSlots = pgTable("available_slots", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  city: varchar("city").notNull(),
  date: timestamp("date").notNull(),
  timeSlot: varchar("time_slot").notNull(), // e.g., "09:00-11:00"
  isAvailable: boolean("is_available").default(true),
  maxBookings: integer("max_bookings").default(1),
  currentBookings: integer("current_bookings").default(0),
  serviceTypes: text("service_types").array(), // which services can be booked in this slot
  createdAt: timestamp("created_at").defaultNow(),
});

// SEO analytics data
export const seoAnalytics = pgTable("seo_analytics", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  page: varchar("page").notNull(),
  city: varchar("city"),
  keyword: varchar("keyword"),
  impressions: integer("impressions").default(0),
  clicks: integer("clicks").default(0),
  position: decimal("position", { precision: 5, scale: 2 }),
  date: timestamp("date").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

// Keep existing tables
export const contactRequests = pgTable("contact_requests", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  serviceType: text("service_type").notNull(),
  city: text("city").notNull(),
  message: text("message"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const quoteRequests = pgTable("quote_requests", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  firstName: text("first_name").notNull(),
  lastName: text("last_name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  serviceType: text("service_type").notNull(),
  city: text("city").notNull(),
  propertyType: text("property_type"),
  propertySize: text("property_size"),
  frequency: text("frequency"),
  message: text("message"),
  createdAt: timestamp("created_at").defaultNow(),
});

// Relations
export const userRelations = relations(users, ({ many }) => ({
  bookings: many(bookings),
  serviceHistory: many(serviceHistory),
}));

export const bookingRelations = relations(bookings, ({ one }) => ({
  user: one(users, {
    fields: [bookings.userId],
    references: [users.id],
  }),
  serviceHistory: one(serviceHistory, {
    fields: [bookings.id],
    references: [serviceHistory.bookingId],
  }),
}));

export const serviceHistoryRelations = relations(serviceHistory, ({ one }) => ({
  booking: one(bookings, {
    fields: [serviceHistory.bookingId],
    references: [bookings.id],
  }),
  user: one(users, {
    fields: [serviceHistory.userId],
    references: [users.id],
  }),
}));

// Schema validation for forms
export const insertContactRequestSchema = createInsertSchema(contactRequests).omit({
  id: true,
  createdAt: true,
});

export const insertQuoteRequestSchema = createInsertSchema(quoteRequests).omit({
  id: true,
  createdAt: true,
});

export const insertUserSchema = createInsertSchema(users).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const insertBookingSchema = createInsertSchema(bookings).omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  userId: true, // will be set from session
}).extend({
  scheduledDate: z.string(),
  scheduledTime: z.string(),
});

export const insertServiceHistorySchema = createInsertSchema(serviceHistory).omit({
  id: true,
  createdAt: true,
});

// Types
export type User = typeof users.$inferSelect;
export type InsertUser = z.infer<typeof insertUserSchema>;
export type Booking = typeof bookings.$inferSelect;
export type InsertBooking = z.infer<typeof insertBookingSchema>;
export type ServiceHistory = typeof serviceHistory.$inferSelect;
export type InsertServiceHistory = z.infer<typeof insertServiceHistorySchema>;
export type AvailableSlot = typeof availableSlots.$inferSelect;
export type InsertAvailableSlot = typeof availableSlots.$inferInsert;
export type SeoAnalytics = typeof seoAnalytics.$inferSelect;
export type InsertSeoAnalytics = typeof seoAnalytics.$inferInsert;
export type ContactRequest = typeof contactRequests.$inferSelect;
export type InsertContactRequest = z.infer<typeof insertContactRequestSchema>;
export type QuoteRequest = typeof quoteRequests.$inferSelect;
export type InsertQuoteRequest = z.infer<typeof insertQuoteRequestSchema>;

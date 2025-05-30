import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      
      // Basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(validatedData.email)) {
        return res.status(400).json({ message: "Invalid email address" });
      }
      
      // Store the contact message
      const contact = await storage.createContact(validatedData);
      
      // In a real application, you would send an email here
      // For now, we'll just log it and return success
      console.log(`New contact message from ${contact.name} (${contact.email}): ${contact.subject}`);
      
      res.json({ message: "Message sent successfully!" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          message: "Validation error", 
          errors: error.errors 
        });
      }
      
      console.error("Contact form error:", error);
      res.status(500).json({ message: "Failed to send message" });
    }
  });

  // Serve resume file (placeholder endpoint)
  app.get("/resume.pdf", (req, res) => {
    // In a real application, this would serve the actual resume file
    res.status(404).json({ message: "Resume file not found. Please upload your resume to the server." });
  });

  const httpServer = createServer(app);
  return httpServer;
}

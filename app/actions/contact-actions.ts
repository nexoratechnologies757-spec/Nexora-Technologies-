"use server"

import { createClient } from "@/lib/supabase/server"
import { generateText } from "ai"

export interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  company?: string
  service: string
  message: string
}

export interface ContactFormResponse {
  success: boolean
  message: string
  error?: string
}

export async function submitContactForm(data: ContactFormData): Promise<ContactFormResponse> {
  try {
    // Validate input
    if (!data.firstName || !data.lastName || !data.email || !data.phone || !data.service || !data.message) {
      return {
        success: false,
        message: "Please fill in all required fields",
      }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      return {
        success: false,
        message: "Please enter a valid email address",
      }
    }

    // Validate phone format
    const phoneRegex = /^\+?[0-9]{10,15}$/
    const cleanPhone = data.phone.replace(/\s/g, "")
    if (!phoneRegex.test(cleanPhone)) {
      return {
        success: false,
        message: "Please enter a valid phone number",
      }
    }

    // Create Supabase client
    const supabase = await createClient()

    // Insert contact into database
    const { error } = await supabase.from("contacts").insert([
      {
        first_name: data.firstName,
        last_name: data.lastName,
        email: data.email,
        phone: cleanPhone,
        company: data.company || null,
        service: data.service,
        message: data.message,
      },
    ])

    if (error) {
      console.error("Supabase error:", error)
      return {
        success: false,
        message: "Failed to submit contact form. Please try again.",
        error: error.message,
      }
    }

    // Generate AI notification summary (optional - can be used for email notifications)
    try {
      const { text: summary } = await generateText({
        model: "openai/gpt-5-mini",
        prompt: `Summarize this contact form submission in 2 sentences:
        Name: ${data.firstName} ${data.lastName}
        Email: ${data.email}
        Service: ${data.service}
        Message: ${data.message}`,
        maxOutputTokens: 150,
      })
      console.log("[v0] AI Summary generated:", summary)
    } catch (aiError) {
      console.error("[v0] AI summary generation failed:", aiError)
      // Don't fail the form submission if AI fails
    }

    // Generate AI email notification content
    try {
      // List of emails to receive notifications
      const recipientEmails = ["techtalent247@gmail.com"] // You can add more emails to this array

      const { text: emailContent } = await generateText({
        model: "openai/gpt-5-mini",
        prompt: `You are a professional assistant for Nexora Technologies. 
        Create a professional email notification for a new contact form submission.
        
        Details:
        Name: ${data.firstName} ${data.lastName}
        Email: ${data.email}
        Phone: ${data.phone}
        Company: ${data.company || "N/A"}
        Service: ${data.service}
        Message: ${data.message}
        
        The email should have a clear subject line and a structured summary.`,
        maxOutputTokens: 500,
      })

      console.log("[v0] Sending notification to:", recipientEmails.join(", "))
      console.log("[v0] AI Email Content Generated:", emailContent)

      // In a real production environment, you would use an email service provider like Resend or SendGrid here.
      // For now, we are generating the professional content and logging the intent to send.
    } catch (aiError) {
      console.error("[v0] AI email content generation failed:", aiError)
      // Don't fail the form submission if AI fails
    }

    return {
      success: true,
      message: "Thank you for contacting Nexora Technologies. We will get back to you within 24 hours.",
    }
  } catch (error) {
    console.error("Contact form error:", error)
    return {
      success: false,
      message: "An unexpected error occurred. Please try again.",
      error: error instanceof Error ? error.message : "Unknown error",
    }
  }
}

"use server"

import { createClient } from "@/lib/supabase/server"
import { generateText } from "ai"

export interface AcademyFormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  course: string
  experience: string
  message?: string
}

export interface AcademyFormResponse {
  success: boolean
  message: string
  error?: string
}

export async function submitAcademyForm(data: AcademyFormData): Promise<AcademyFormResponse> {
  try {
    // Validate input
    if (!data.firstName || !data.lastName || !data.email || !data.phone || !data.course || !data.experience) {
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

    // Insert registration into database
    const { error } = await supabase.from("academy_registrations").insert([
      {
        first_name: data.firstName,
        last_name: data.lastName,
        email: data.email,
        phone: cleanPhone,
        course: data.course,
        experience: data.experience,
        message: data.message || null,
      },
    ])

    if (error) {
      console.error("Supabase error:", error)
      return {
        success: false,
        message: "Failed to submit registration. Please try again.",
        error: error.message,
      }
    }

    // Generate AI notification summary (optional - can be used for email notifications)
    try {
      const { text: summary } = await generateText({
        model: "openai/gpt-5-mini",
        prompt: `Summarize this academy registration in 2 sentences:
        Name: ${data.firstName} ${data.lastName}
        Email: ${data.email}
        Course: ${data.course}
        Experience: ${data.experience}`,
        maxOutputTokens: 150,
      })
      console.log("[v0] AI Summary generated:", summary)
    } catch (aiError) {
      console.error("[v0] AI summary generation failed:", aiError)
      // Don't fail the form submission if AI fails
    }

    return {
      success: true,
      message: "Thank you for registering with Nexora Academy. We will contact you within 24 hours.",
    }
  } catch (error) {
    console.error("Academy form error:", error)
    return {
      success: false,
      message: "An unexpected error occurred. Please try again.",
      error: error instanceof Error ? error.message : "Unknown error",
    }
  }
}

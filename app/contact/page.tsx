"use client"

import type React from "react"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MapPin, Phone, Clock, MessageCircle } from "lucide-react"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"
import { submitContactForm, type ContactFormData } from "@/app/actions/contact-actions"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const { toast } = useToast()

  const whatsappNumber = "+2349011906415"
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\+/g, "")}`

  const contactInfo = [
    {
      icon: MapPin,
      title: "Location",
      details: ["Kano State, Nigeria"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@nexoratechnologies.com"],
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["+234 901 190 6415"],
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday: 9AM - 6PM", "Saturday: 10AM - 4PM"],
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      details: ["+234 901 190 6415"],
      link: whatsappLink,
    },
  ]

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const newErrors: Record<string, string> = {}

    // Client-side validation
    const firstName = formData.get("firstName") as string
    const lastName = formData.get("lastName") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const service = formData.get("service") as string
    const message = formData.get("message") as string

    if (!firstName) {
      newErrors.firstName = "First name cannot be empty"
    } else if (firstName.length < 2) {
      newErrors.firstName = "First name must be at least 2 characters long"
    }

    if (!lastName) {
      newErrors.lastName = "Last name cannot be empty"
    } else if (lastName.length < 2) {
      newErrors.lastName = "Last name must be at least 2 characters long"
    }

    if (!email) {
      newErrors.email = "Email address cannot be empty"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address (e.g., name@example.com)"
    }

    const cleanPhone = phone.replace(/\s+/g, "")
    if (!phone) {
      newErrors.phone = "Phone number cannot be empty"
    } else if (!/^\+?[0-9]{10,15}$/.test(cleanPhone)) {
      newErrors.phone = "Please enter a valid number (10-15 digits). Use +countrycode if necessary"
    }

    if (!service) {
      newErrors.service = "Please select a service you are interested in"
    }

    if (!message) {
      newErrors.message = "Message field cannot be empty"
    } else if (message.length < 10) {
      newErrors.message = "Please provide more detail (at least 10 characters)"
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setErrors({})
    setIsSubmitting(true)

    try {
      const contactData: ContactFormData = {
        firstName,
        lastName,
        email,
        phone,
        company: formData.get("company") as string,
        service,
        message,
      }

      const response = await submitContactForm(contactData)

      if (response.success) {
        toast({
          title: "Message Sent!",
          description: response.message,
        })
        ;(e.target as HTMLFormElement).reset()
      } else {
        toast({
          title: "Error",
          description: response.message,
          variant: "destructive",
        })
        if (response.error) {
          console.error("Form submission error:", response.error)
        }
      }
    } catch (error) {
      console.error("Unexpected error:", error)
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-border/40">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
          <div className="container relative mx-auto px-4 py-24">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-6 flex justify-center">
                <img
                  src="/nexora-logo.png"
                  alt="Nexora Technologies"
                  className="h-20 w-auto object-contain opacity-40"
                />
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl md:text-6xl">
                Get in{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Touch</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed text-pretty">
                Have a project in mind or questions about our services? We'd love to hear from you.
              </p>
            </div>
          </div>
        </section>
        {/* Contact Content Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <div className="grid gap-12 lg:grid-cols-2">
                {/* Contact Information */}
                <div>
                  <h2 className="text-2xl font-bold tracking-tight">Contact Information</h2>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    Reach out to us through any of these channels. We're here to help you succeed.
                  </p>

                  <div className="mt-8 space-y-6">
                    {contactInfo.map((info) => (
                      <Card key={info.title}>
                        <CardHeader className="pb-3">
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                              <info.icon className="h-5 w-5" />
                            </div>
                            <CardTitle className="text-base">{info.title}</CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-1">
                            {info.details.map((detail, index) => (
                              <p key={index} className="text-sm text-muted-foreground">
                                {info.link ? (
                                  <a
                                    href={info.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="transition-colors hover:text-foreground inline-flex items-center gap-1"
                                  >
                                    {detail}
                                  </a>
                                ) : (
                                  detail
                                )}
                              </p>
                            ))}
                          </div>
                          {info.link && (
                            <a
                              href={info.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="mt-3 inline-flex items-center gap-2 text-xs font-medium text-primary hover:underline"
                            >
                              <MessageCircle className="h-3 w-3" />
                              Chat on WhatsApp
                            </a>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Map Section */}
                <div className="flex flex-col gap-6">
                  <h2 className="text-2xl font-bold tracking-tight">Our Location</h2>
                  <p className="mt-4 text-muted-foreground leading-relaxed">
                    Visit our office in Kano State. We're located in the heart of the tech hub.
                  </p>
                  <Card className="overflow-hidden flex-1">
                    <div className="h-full min-h-[400px] bg-muted">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124976.0125744383!2d8.451996526130138!3d11.99309071060965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x11ae813ed008b8b9%3A0x6b772c9e7a27534b!2sKano%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1711100000000!5m2!1sen!2sus"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Nexora Technologies Location"
                      ></iframe>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* FAQ or Additional Info Section */}
        <section className="border-t border-border/40 bg-card/50 py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">What Happens Next?</h2>
              <div className="mt-12 grid gap-8 text-left sm:grid-cols-3">
                <div>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary text-xl font-bold">
                    1
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">We Review</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Our team reviews your inquiry and assesses your project requirements.
                  </p>
                </div>
                <div>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary text-xl font-bold">
                    2
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">We Connect</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We'll reach out within 24 hours to discuss your project in detail.
                  </p>
                </div>
                <div>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary text-xl font-bold">
                    3
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">We Deliver</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Once aligned, we create a tailored solution that exceeds your expectations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

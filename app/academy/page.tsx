"use client"

import type React from "react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { GraduationCap, Code, Rocket, Brain, Sparkles, ArrowRight } from "lucide-react"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"

export default function AcademyPage() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const upcomingFeatures = [
    {
      icon: Code,
      title: "Interactive Coding Labs",
      description: "Learn by doing with real-time feedback in our cloud-based IDE environment.",
    },
    {
      icon: Brain,
      title: "AI-Powered Mentorship",
      description: "Get 24/7 assistance and personalized learning paths tailored to your progress.",
    },
    {
      icon: Rocket,
      title: "Career Accelerator",
      description: "Direct pipelines to industry partners and portfolio-building projects.",
    },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      title: "You're on the list!",
      description: "We'll notify you as soon as Nexora Academy launches.",
    })
    setEmail("")
    setIsSubmitting(false)
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black text-white selection:bg-primary/30">
        <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />

          <div className="container relative z-10 mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-primary text-xs font-medium mb-8 animate-pulse">
                <Sparkles className="w-3 h-3" />
                <span>Nexora Academy</span>
              </div>

              <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent">
                Coming <span className="text-primary">Soon</span>
              </h1>

              <p className="text-xl md:text-2xl text-zinc-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                We're building a world-class technical education platform. Master the web with Nexora Academy.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="h-12 bg-white/5 border-white/10 focus:border-primary transition-all"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <Button type="submit" size="lg" disabled={isSubmitting} className="h-12 px-8">
                  {isSubmitting ? "Joining..." : "Join Waitlist"}
                </Button>
              </form>
            </div>
          </div>
        </section>

        {/* What We're Building Section */}
        <section className="py-24 border-t border-white/5">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div className="max-w-xl">
                <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">What We're Building.</h2>
                <p className="text-zinc-500 text-lg">
                  Innovative tools for teams and individuals to share feedback and iterate faster.
                </p>
              </div>
              <div className="flex gap-8 text-sm font-medium">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">98%</div>
                  <div className="text-zinc-500">Student Success</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">20+</div>
                  <div className="text-zinc-500">Cloud Labs</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {upcomingFeatures.map((feature, idx) => (
                <Card
                  key={idx}
                  className="bg-zinc-900/50 border-white/5 hover:border-primary/50 transition-all duration-500 group"
                >
                  <CardContent className="p-8">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                    <p className="text-zinc-500 leading-relaxed mb-6">{feature.description}</p>
                    <div className="flex items-center gap-2 text-primary text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                      Learn more <ArrowRight className="w-4 h-4" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Footer Link */}
        <section className="py-20 text-center border-t border-white/5 bg-zinc-900/20">
          <div className="container mx-auto px-4">
            <GraduationCap className="w-12 h-12 text-primary/40 mx-auto mb-6" />
            <h3 className="text-2xl font-bold mb-4 italic">Creation Without Limitation</h3>
            <p className="text-zinc-500 mb-8">
              Nexora Academy will live at <span className="text-primary">academy.nexoratechnologies.com</span>
            </p>
            <Button variant="ghost" asChild className="text-zinc-400 hover:text-white">
              <Link href="/">Explore the Main Platform</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, ShoppingCart, BookOpen } from "lucide-react"

export default function ProjectsPage() {
  const projects = [
    {
      title: "Arewa Market",
      description:
        "A digital marketplace focused on empowering local businesses and vendors across Northern Nigeria through modern e-commerce solutions.",
      status: "In Development",
      category: "E-Commerce",
      features: ["Vendor onboarding", "Product listings", "Secure payments"],
      icon: <ShoppingCart className="h-10 w-10 text-primary" />,
    },
    {
      title: "Deen Verse",
      description:
        "A faith-focused digital platform designed to provide Islamic learning resources, reflections, and community engagement in a modern, accessible way.",
      status: "In Development",
      category: "Education & Faith",
      features: ["Learning Resources", "Community Engagement", "Daily Reflections"],
      icon: <BookOpen className="h-10 w-10 text-primary" />,
    },
  ]

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
                  className="h-20 w-auto object-contain opacity-50"
                />
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl md:text-6xl">
                What We're{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Building</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed text-pretty">
                At Nexora Technologies, we are actively building innovative digital products designed to solve real
                problems. Below are some of the solutions currently in development.
              </p>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
              {projects.map((project) => (
                <Card
                  key={project.title}
                  className="group overflow-hidden transition-all hover:border-primary/50 bg-card/50 backdrop-blur-sm"
                >
                  <div className="h-32 flex items-center justify-center border-b border-border/40 bg-muted/30">
                    {project.icon}
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                        {project.category}
                      </Badge>
                      <Badge variant="outline" className="border-accent text-accent animate-pulse">
                        {project.status}
                      </Badge>
                    </div>
                    <CardTitle className="text-2xl text-balance">{project.title}</CardTitle>
                    <CardDescription className="leading-relaxed text-base">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                          Key Features
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {project.features.map((feature) => (
                            <span
                              key={feature}
                              className="rounded-full bg-muted px-3 py-1 text-xs font-medium border border-border"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t border-border/40 bg-card py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl rounded-lg border border-primary/20 bg-gradient-to-br from-primary/5 via-background to-accent/5 p-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">Have a Project in Mind?</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Let's collaborate to turn your vision into reality with cutting-edge technology solutions
              </p>
              <div className="mt-8">
                <Button asChild size="lg">
                  <Link href="/contact">
                    Start Your Project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

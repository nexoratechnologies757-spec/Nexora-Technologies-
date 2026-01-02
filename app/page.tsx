import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import {
  Code2,
  Globe,
  Smartphone,
  Cloud,
  Headphones,
  CheckCircle2,
  Zap,
  Shield,
  Target,
  GraduationCap,
  ArrowRight,
} from "lucide-react"

export default function HomePage() {
  const services = [
    {
      icon: Globe,
      title: "Website Development",
      description: "Professional business websites and landing pages built for performance, SEO, and user engagement.",
    },
    {
      icon: Code2,
      title: "Web Applications",
      description: "Scalable web-based software and SaaS platforms designed to solve complex business challenges.",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "High-quality mobile applications for Android and iOS with seamless, native user experiences.",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Cloud architecture, migration, and optimization services to scale your business infrastructure.",
    },
    {
      icon: Headphones,
      title: "IT Consulting & Support",
      description: "Expert IT consulting and reliable technical support to keep your systems running smoothly.",
    },
  ]

  const reasons = [
    {
      icon: Zap,
      title: "Engineering Mindset",
      description: "We approach every project with precision, creativity, and technical excellence.",
    },
    {
      icon: Code2,
      title: "Modern Technologies",
      description: "Utilizing the latest tools and frameworks to build future-proof solutions.",
    },
    {
      icon: Shield,
      title: "Secure & Scalable",
      description: "Security-first approach with architecture designed to grow with your business.",
    },
    {
      icon: Target,
      title: "Client-Focused",
      description: "Your success is our priority. We deliver solutions that drive real results.",
    },
  ]

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-border/40">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] pointer-events-none select-none">
            <img src="/nexora-logo.png" alt="" className="w-[600px] h-[600px] object-contain" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
          <div className="container relative mx-auto px-4 py-24 md:py-32">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl md:text-6xl lg:text-7xl">
                Engineering the Future Through{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Software</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed text-pretty md:text-xl">
                Professional IT & Software solutions for modern businesses. We build secure, scalable, and innovative
                software that drives your digital transformation.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button asChild size="lg" className="w-full sm:w-auto">
                  <Link href="/contact">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
                  <Link href="/services">View Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="border-b border-border/40 py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">Our Services</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Comprehensive IT solutions to power your business growth
              </p>
            </div>
            <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <Card key={service.title} className="group transition-all hover:border-primary/50">
                  <CardHeader>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                      <service.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="leading-relaxed">{service.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Button asChild size="lg" variant="outline">
                <Link href="/services">
                  View All Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="border-b border-border/40 bg-card/50 py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">Why Choose Nexora</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Experience the difference of working with a dedicated technology partner
              </p>
            </div>
            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {reasons.map((reason) => (
                <div key={reason.title} className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <reason.icon className="h-8 w-8" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">{reason.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{reason.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Nexora Academy CTA Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <Card className="relative overflow-hidden border-primary/20 bg-gradient-to-br from-primary/5 via-background to-accent/5">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <GraduationCap className="h-8 w-8" />
                </div>
                <CardTitle className="text-3xl font-bold text-balance sm:text-4xl">Nexora Academy</CardTitle>
                <CardDescription className="mt-4 text-base leading-relaxed md:text-lg">
                  Launch your tech career with professional training in Web Development, Software Engineering, and IT
                  Fundamentals
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center pb-8">
                <div className="mx-auto max-w-2xl">
                  <ul className="mb-8 grid gap-4 text-left sm:grid-cols-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                      <span className="text-sm text-muted-foreground">Industry-relevant curriculum</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                      <span className="text-sm text-muted-foreground">Hands-on projects</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                      <span className="text-sm text-muted-foreground">Expert instructors</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                      <span className="text-sm text-muted-foreground">Career support</span>
                    </li>
                  </ul>
                  <Button asChild size="lg">
                    <Link href="/academy">
                      Explore Academy
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="border-t border-border/40 bg-card py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">Ready to Get Started?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground leading-relaxed">
              Let's discuss how Nexora Technologies can help transform your business with cutting-edge software
              solutions
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/projects">View Projects</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

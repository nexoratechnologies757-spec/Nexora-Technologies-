import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Code2,
  Globe,
  Smartphone,
  Cloud,
  Headphones,
  CheckCircle2,
  Database,
  Layers,
  Zap,
  Lock,
  RefreshCw,
} from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      icon: Globe,
      title: "Website Development",
      description: "Beautiful, high-performance websites designed to showcase your brand and engage your audience.",
      features: [
        "Business and corporate websites",
        "Landing pages and portfolios",
        "Content Management Systems (CMS)",
        "SEO optimization and performance",
      ],
      technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Sanity"],
    },
    {
      icon: Code2,
      title: "Web Application Development",
      description: "Powerful, scalable web-based software solutions built to handle complex business processes.",
      features: ["Custom SaaS platforms", "E-commerce solutions", "Internal business tools", "Real-time applications"],
      technologies: ["Next.js", "Node.js", "Supabase", "PostgreSQL", "Prisma"],
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for both Android and iOS platforms.",
      features: [
        "iOS and Android development",
        "Cross-platform solutions (React Native)",
        "Mobile UI/UX design",
        "App Store & Play Store deployment",
      ],
      technologies: ["React Native", "Expo", "Swift", "Kotlin", "Firebase"],
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services for modern businesses.",
      features: [
        "Cloud architecture design",
        "Migration and deployment",
        "DevOps and CI/CD pipelines",
        "Cloud cost optimization",
      ],
      technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes"],
    },
    {
      icon: Database,
      title: "Database Solutions",
      description: "Robust database design, optimization, and management for your data needs.",
      features: [
        "Database design and modeling",
        "Performance optimization",
        "Data migration services",
        "Backup and recovery solutions",
      ],
      technologies: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Firebase"],
    },
    {
      icon: Headphones,
      title: "IT Consulting & Support",
      description: "Expert guidance and reliable technical support to keep your systems running optimally.",
      features: [
        "Technology strategy consulting",
        "System architecture review",
        "Technical training",
        "24/7 support services",
      ],
      technologies: ["Multi-platform", "Remote Support", "Monitoring Tools"],
    },
  ]

  const benefits = [
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Agile development processes ensure timely project completion without compromising quality.",
    },
    {
      icon: Lock,
      title: "Security First",
      description: "Industry-standard security practices to protect your data and applications.",
    },
    {
      icon: RefreshCw,
      title: "Ongoing Support",
      description: "Continuous maintenance and support to keep your systems running smoothly.",
    },
    {
      icon: Layers,
      title: "Scalable Solutions",
      description: "Architecture designed to grow with your business needs.",
    },
  ]

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="relative overflow-hidden border-b border-border/40">
          <div className="absolute top-1/2 right-0 -translate-y-1/2 opacity-[0.05] pointer-events-none select-none">
            <img src="/nexora-logo.png" alt="" className="h-[400px] w-auto object-contain" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
          <div className="container relative mx-auto px-4 py-24">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl md:text-6xl">
                Our{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Services</span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed text-pretty">
                Comprehensive IT & Software solutions to power your digital transformation
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="border-b border-border/40 py-24">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 lg:grid-cols-2">
              {services.map((service) => (
                <Card key={service.title} className="group transition-all hover:border-primary/50">
                  <CardHeader>
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                      <service.icon className="h-7 w-7" />
                    </div>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="mb-3 text-sm font-semibold">Key Features</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="mb-2 text-sm font-semibold">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="border-b border-border/40 bg-card/50 py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">Why Choose Our Services</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Experience the Nexora advantage in every project
              </p>
            </div>
            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <benefit.icon className="h-8 w-8" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl rounded-lg border border-primary/20 bg-gradient-to-br from-primary/5 via-background to-accent/5 p-12 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">
                Ready to Start Your Project?
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Let's discuss how our services can help you achieve your business goals
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button asChild size="lg">
                  <Link href="/contact">Get in Touch</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/projects">View Our Work</Link>
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

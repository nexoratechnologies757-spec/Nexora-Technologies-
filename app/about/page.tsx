import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, Eye, Heart, Users, Lightbulb, Trophy, History, ArrowRight, CheckCircle2 } from "lucide-react"
import { TeamMemberCard } from "@/components/team-member-card"

export default function AboutPage() {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We embrace creativity and cutting-edge technologies to deliver forward-thinking solutions.",
    },
    {
      icon: Trophy,
      title: "Quality",
      description: "Excellence is not an option—it's our standard in every project we undertake.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in partnerships, working closely with clients to achieve shared success.",
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "Honesty, transparency, and ethical practices guide everything we do.",
    },
  ]

  const teamMembers = [
    {
      name: "Usman Ibrahim",
      role: "Founder & CEO",
      title: "Software Engineer",
      experience: "5+ years",
      image: "/images/team/usman-ibrahim.jpg",
      bio: "Usman Ibrahim is the visionary Founder and Chief Executive Officer of Nexora Technologies. He is a passionate Software Engineer specializing in Flutter development and Artificial Intelligence. With extensive expertise in building beautiful, high-performance cross-platform mobile applications using Flutter and Dart, combined with his knowledge of AI/ML technologies, Usman leads the company's innovation initiatives. His technical excellence in mobile development and AI solutions, combined with strategic leadership, drives Nexora's mission to deliver cutting-edge technology solutions.",
    },
    {
      name: "Ali Tukur Muhammad",
      role: "Software Engineer",
      title: "Backend Specialist",
      experience: "3+ years",
      image: "/images/team/ali-tukur.jpg",
      bio: "Ali Tukur Muhammad is a skilled and dedicated Software Engineer with a strong foundation in software development principles and best practices. He brings expertise in building robust, scalable, and efficient software solutions that meet complex business requirements. With a focus on code quality and system reliability, Ali actively contributes to application development, testing methodologies, and the implementation of scalable architectures. He is passionate about staying current with emerging technologies and collaborating with the team to deliver innovative solutions.",
    },
    {
      name: "Bello Aminu Muhammad",
      role: "Web Developer",
      title: "ICT Specialist",
      experience: "4+ years",
      image: "/images/team/bello-aminu.jpg",
      bio: "Bello Aminu Muhammad is a talented Web Developer and ICT Specialist with a strong focus on creating cutting-edge digital experiences. He specializes in designing and developing responsive, user-friendly, and visually compelling websites that drive engagement and conversions. With expertise in modern web technologies, frameworks, and best practices, Bello ensures seamless integration of front-end and back-end systems. His attention to detail and creative approach to problem-solving make him invaluable in delivering solutions that meet organizational and client needs.",
    },
    {
      name: "Muhammad Sani Shuaibu",
      role: "Computer Engineer",
      title: "Infrastructure Specialist",
      experience: "4+ years",
      image: "/images/team/muhammad-sani.jpg",
      bio: "Muhammad Sani Shuaibu is a dedicated Computer Engineer with comprehensive expertise in computer systems, hardware architecture, and technical infrastructure. He brings deep knowledge of system design, network optimization, and troubleshooting complex technical challenges. With a strong background in IT infrastructure and system integration, Muhammad Sani plays a crucial role in ensuring Nexora's technological backbone is robust, secure, and performant. His technical problem-solving abilities and infrastructure expertise contribute significantly to project success and system reliability.",
    },
    {
      name: "Muhsin Ibrahim",
      role: "Software Engineer",
      title: "Full Stack Developer",
      experience: "3+ years",
      image: "/images/team/muhsin-ibrahim.jpg",
      bio: "Muhsin Ibrahim is a passionate and results-driven Software Engineer committed to developing functional, efficient, and innovative software solutions. He brings strong technical expertise in application development, software optimization, and the implementation of cutting-edge technologies. With a collaborative approach to problem-solving, Muhsin works seamlessly with team members to deliver high-quality applications that solve real-world business challenges. His dedication to continuous learning and technical excellence makes him a valuable contributor to Nexora's mission of technological innovation.",
    },
  ]

  const history = [
    {
      year: "Dec 2025",
      title: "The Launch",
      description: "Nexora Technologies officially launched with a mission to deliver world-class software solutions.",
    },
    {
      year: "2025",
      title: "Foundations",
      description:
        "The visionary framework for Nexora was established, combining years of personal technical expertise.",
    },
  ]

  const stats = [
    {
      number: "50+",
      label: "Projects Delivered",
      description: "Successful implementations across various industries",
    },
    {
      number: "5+",
      label: "Team Members",
      description: "Dedicated experts in software engineering",
    },
    {
      number: "100+",
      label: "Clients Served",
      description: "Businesses transformed through our solutions",
    },
    {
      number: "3+",
      label: "Years Experience",
      description: "Proven track record of excellence",
    },
  ]

  const expertise = [
    "Web & Mobile Application Development",
    "Cloud Architecture & Infrastructure",
    "AI & Machine Learning Solutions",
    "DevOps & System Integration",
    "UI/UX Design & Product Strategy",
    "Technical Consulting & Planning",
  ]

  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <main className="min-h-screen pt-16 md:pt-20">
        <section className="relative overflow-hidden border-b border-border/40">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
          <div className="container relative mx-auto px-4 py-24 md:py-32">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-8 flex justify-center">
                <img src="/nexora-logo.png" alt="Nexora Logo" className="h-24 w-auto object-contain" />
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl md:text-7xl">
                About{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Nexora Technologies
                </span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed text-pretty sm:text-xl">
                A professional IT & Software company dedicated to transforming businesses through innovative technology
                solutions
              </p>
            </div>
          </div>
        </section>

        {/* Impact Statistics Section */}
        <section className="border-b border-border/40 py-20 md:py-24 bg-gradient-to-b from-background to-card/20">
          <div className="container mx-auto px-4">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="group relative rounded-xl border border-border/40 bg-card/50 p-8 hover:bg-card/80 hover:border-primary/40 transition-all duration-300"
                >
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/0 to-accent/0 group-hover:from-primary/5 group-hover:to-accent/5 transition-all duration-300" />
                  <div className="relative">
                    <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                      {stat.number}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{stat.label}</h3>
                    <p className="text-sm text-muted-foreground">{stat.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-border/40 py-20 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Our Expertise</h2>
              <p className="text-muted-foreground mb-12 leading-relaxed">
                We specialize in delivering cutting-edge solutions across a range of technologies and industries.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {expertise.map((item, index) => (
                  <div key={index} className="flex items-start gap-3 group">
                    <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Company History Section */}
        <section className="border-b border-border/40 py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <div className="mb-12 text-center">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Journey</h2>
                <p className="mt-4 text-muted-foreground">The milestones that define our growth</p>
              </div>
              <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-primary/30 before:to-transparent">
                {history.map((item, index) => (
                  <div
                    key={item.year}
                    className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border border-primary/30 bg-background text-primary shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                      <History className="w-5 h-5" />
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[45%] p-6 rounded-xl border border-border/40 bg-card/50">
                      <div className="flex items-center justify-between mb-2">
                        <time className="font-mono text-primary font-bold">{item.year}</time>
                        <h3 className="font-bold">{item.title}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="border-b border-border/40 py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">Our Story</h2>
              <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Nexora Technologies was founded with a singular vision: to bridge the gap between complex technology
                  and business success. In today's rapidly evolving digital landscape, we recognized that businesses
                  need more than just software—they need a trusted technology partner.
                </p>
                <p>
                  Our team of passionate engineers, developers, and consultants brings together decades of combined
                  experience in software development, cloud architecture, and IT consulting. We've worked with startups
                  finding their footing, established enterprises undergoing digital transformation, and everything in
                  between.
                </p>
                <p>
                  What sets us apart is our engineering mindset. We don't just build software; we architect solutions
                  that are secure, scalable, and sustainable. Every line of code, every system design, every
                  consultation is driven by our commitment to excellence and our passion for technology.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Team Section */}
        <section className="border-b border-border/40 py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">The Team</h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                Meet the talented professionals behind Nexora Technologies
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {teamMembers.map((member) => (
                <TeamMemberCard key={member.name} member={member} />
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="border-b border-border/40 bg-card/50 py-24">
          <div className="container mx-auto px-4">
            <div className="grid gap-12 lg:grid-cols-2">
              <Card className="border-primary/20">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Target className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-2xl">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    To empower businesses through innovative software solutions that drive growth, efficiency, and
                    competitive advantage. We are committed to delivering excellence in every project while fostering
                    long-term partnerships built on trust and results.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-accent/20">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Eye className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-2xl">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    To be recognized as Africa's leading IT & Software company, known for innovation, reliability, and
                    transformative technology solutions. We envision a future where every business, regardless of size,
                    has access to world-class software that propels them forward.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">Our Core Values</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                The principles that guide our work and define our culture
              </p>
            </div>
            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => (
                <div key={value.title} className="text-center group cursor-pointer">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors duration-300">
                    <value.icon className="h-8 w-8" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t border-border/40 bg-gradient-to-r from-primary/10 to-accent/10 py-16 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-balance">Ready to transform your business?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how Nexora Technologies can help you achieve your goals with innovative software solutions.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href="/services"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors duration-200 group"
              >
                View Our Services
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-primary text-primary font-semibold hover:bg-primary/10 transition-colors duration-200"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

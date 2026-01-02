"use client"

import { useState } from "react"
import { Award, ChevronDown, ChevronUp } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface TeamMember {
  name: string
  role: string
  title: string
  bio: string
  image: string
  experience: string
}

export function TeamMemberCard({ member }: { member: TeamMember }) {
  const [isExpanded, setIsExpanded] = useState(false)

  const shortBio = member.bio.length > 80 ? member.bio.slice(0, 80).trim() + "..." : member.bio
  const hasMoreContent = member.bio.length > 80

  return (
    <div className="group relative overflow-hidden rounded-xl border border-border/40 bg-card/30 p-1 hover:border-primary/40 transition-colors duration-300">
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center w-full">
        <img
          src={member.image || "/placeholder.svg"}
          alt={member.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-3 right-3 z-10">
          <Badge
            variant="secondary"
            className="bg-background/90 backdrop-blur-sm border border-border/40 flex items-center gap-1"
          >
            <Award className="h-3 w-3" />
            {member.experience}
          </Badge>
        </div>
      </div>
      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-foreground">{member.name}</h3>
          <div className="flex flex-wrap gap-2">
            <Badge variant="default" className="bg-primary/10 text-primary border-primary/20">
              {member.role}
            </Badge>
            <Badge variant="outline">{member.title}</Badge>
          </div>
        </div>
        <div className="space-y-2">
          <p className="text-muted-foreground leading-relaxed">{isExpanded ? member.bio : shortBio}</p>
          {hasMoreContent && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-1 text-sm text-primary hover:text-primary/80 transition-colors font-medium"
            >
              {isExpanded ? (
                <>
                  Show less <ChevronUp className="h-4 w-4" />
                </>
              ) : (
                <>
                  Read more <ChevronDown className="h-4 w-4" />
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

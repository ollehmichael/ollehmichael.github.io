"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { cn } from "@/lib/utils"

interface TimelineItemProps {
  date: string
  position: string
  company: string
  description: string
  index: number
}

export function TimelineItem({ date, position, company, description, index }: TimelineItemProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div
      className={cn(
        "relative pl-8 md:pl-0 pb-12 last:pb-0 animate-fade-in",
        `animate-fade-in-delay-${Math.min(index + 1, 5)}`,
      )}
    >
      {/* Timeline line (mobile) */}
      <div className="absolute left-[7px] top-0 bottom-0 w-[2px] bg-border md:hidden" />

      {/* Timeline dot */}
      <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-primary border-4 border-background md:left-1/2 md:-translate-x-1/2" />

      {/* Content */}
      <div className="md:grid md:grid-cols-2 md:gap-8">
        {/* Date (left on desktop, top on mobile) */}
        <div className={cn("mb-2 md:mb-0", index % 2 === 0 ? "md:text-right md:pr-8" : "md:col-start-2 md:pl-8")}>
          <time className="text-sm font-mono text-primary">{date}</time>
        </div>

        {/* Details (right on desktop, below on mobile) */}
        <div className={cn("space-y-2", index % 2 === 0 ? "md:col-start-2 md:pl-8" : "md:col-start-2 md:pl-8")}>
          <h3 className="text-xl font-bold text-foreground">{position}</h3>
          <p className="text-base text-muted-foreground">{company}</p>

          {/* Expandable description */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors mt-2"
          >
            {isExpanded ? (
              <>
                <ChevronUp size={16} />
                Hide details
              </>
            ) : (
              <>
                <ChevronDown size={16} />
                Show details
              </>
            )}
          </button>

          {isExpanded && (
            <div className="mt-3 text-sm text-muted-foreground leading-relaxed animate-fade-in">
              <p>{description}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

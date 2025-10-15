"use client"

import { cn } from "@/lib/utils"

interface FilterChipProps {
  label: string
  isActive: boolean
  onClick: () => void
}

export function FilterChip({ label, isActive, onClick }: FilterChipProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
        "border border-border hover:border-primary",
        isActive
          ? "bg-primary text-primary-foreground border-primary"
          : "bg-card text-muted-foreground hover:text-foreground",
      )}
    >
      {label}
    </button>
  )
}

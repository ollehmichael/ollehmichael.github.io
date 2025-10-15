import type { LucideIcon } from "lucide-react"

interface SocialIconProps {
  href: string
  icon: LucideIcon
  label: string
}

export function SocialIcon({ href, icon: Icon, label }: SocialIconProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 text-muted-foreground hover:text-primary transition-colors"
      aria-label={label}
    >
      <Icon size={20} />
    </a>
  )
}

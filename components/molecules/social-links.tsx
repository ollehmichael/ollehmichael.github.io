import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import { SocialIcon } from "@/components/atoms/social-icon"

export function SocialLinks() {
  return (
    <div className="flex items-center gap-4">
      <SocialIcon href="https://github.com" icon={Github} label="GitHub" />
      <SocialIcon href="https://linkedin.com" icon={Linkedin} label="LinkedIn" />
      <SocialIcon href="https://twitter.com" icon={Twitter} label="Twitter" />
      <SocialIcon href="mailto:contact@example.com" icon={Mail} label="Email" />
    </div>
  )
}

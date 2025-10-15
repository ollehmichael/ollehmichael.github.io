import { SocialLinks } from "@/components/molecules/social-links"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <SocialLinks />

          {/* Copyright and Built With */}
          <div className="flex flex-col items-center md:items-end gap-2 text-sm text-muted-foreground text-center md:text-right">
            <p>©2024 Mike's Portfolio v3.0.0</p>
            <p>
              Built with <span className="text-primary">React</span>, <span className="text-primary">TypeScript</span>,{" "}
              <span className="text-primary">Next.js</span>, and <span className="text-primary">Mike's Love</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

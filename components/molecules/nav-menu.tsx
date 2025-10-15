"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Career", href: "/career" },
  { name: "Projects", href: "/projects" },
]

interface NavMenuProps {
  variant?: "desktop" | "mobile"
}

export function NavMenu({ variant = "desktop" }: NavMenuProps) {
  const pathname = usePathname()

  if (variant === "mobile") {
    return (
      <div className="px-4 py-4 space-y-3">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "block px-4 py-2 text-base font-medium rounded-md transition-colors",
              pathname === item.href
                ? "bg-primary/10 text-primary"
                : "text-muted-foreground hover:bg-secondary hover:text-foreground",
            )}
          >
            {item.name}
          </Link>
        ))}
      </div>
    )
  }

  return (
    <div className="flex items-center gap-8">
      {navItems.map((item, index) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "relative text-sm font-medium transition-colors hover:text-primary",
            "after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all after:duration-300 hover:after:w-full",
            pathname === item.href ? "text-primary after:w-full" : "text-muted-foreground",
            `animate-fade-in-delay-${index + 1}`,
          )}
        >
          {item.name}
        </Link>
      ))}
    </div>
  )
}

import Link from "next/link"

export function Logo() {
  return (
    <Link href="/" className="text-xl md:text-2xl font-bold tracking-tight hover:text-primary transition-colors">
      <span className="text-foreground">MH</span>
      <span className="text-primary">.</span>
    </Link>
  )
}

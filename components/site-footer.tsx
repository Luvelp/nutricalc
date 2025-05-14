import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="border-t py-6 md:py-0 bg-secondary/50">
      <div className="container flex flex-col md:h-16 md:flex-row md:items-center">
        <p className="text-xs text-muted-foreground md:text-sm">© 2025 NutriCalc. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

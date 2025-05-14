import Link from "next/link"
import { Apple } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center justify-center">
          <Apple className="h-6 w-6 text-primary" />
          <span className="ml-2 text-xl font-bold">NutriCalc</span>
        </Link>

        {/* Navegación para escritorio */}
        <nav className="ml-auto hidden md:flex gap-6">
          <Link className="text-sm font-medium hover:text-primary hover:underline underline-offset-4" href="/">
            Inicio
          </Link>
          <Link
            className="text-sm font-medium hover:text-primary hover:underline underline-offset-4"
            href="/#nutrition-basics"
          >
            Fundamentos de Nutrición
          </Link>
          <Link
            className="text-sm font-medium hover:text-primary hover:underline underline-offset-4"
            href="/calculator"
          >
            Calculadora
          </Link>
          <Link className="text-sm font-medium hover:text-primary hover:underline underline-offset-4" href="/credits">
            Créditos
          </Link>
        </nav>

        {/* Navegación móvil */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden ml-auto mr-4">
            <Button variant="outline" size="icon" className="border-primary/50">
              <Menu className="h-5 w-5 text-primary" />
              <span className="sr-only">Abrir menú</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[240px] sm:w-[300px] border-l border-primary/20">
            <nav className="flex flex-col gap-4 mt-8">
              <Link className="text-base font-medium hover:text-primary hover:underline underline-offset-4" href="/">
                Inicio
              </Link>
              <Link
                className="text-base font-medium hover:text-primary hover:underline underline-offset-4"
                href="/#nutrition-basics"
              >
                Fundamentos de Nutrición
              </Link>
              <Link
                className="text-base font-medium hover:text-primary hover:underline underline-offset-4"
                href="/calculator"
              >
                Calculadora
              </Link>
              <Link
                className="text-base font-medium hover:text-primary hover:underline underline-offset-4"
                href="/credits"
              >
                Créditos
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

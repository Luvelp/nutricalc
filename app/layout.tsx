import "@/app/globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "NutriCalc - Calculadora de Macronutrientes",
  description: "Calcula tus necesidades de macronutrientes basadas en tu actividad y peso.",
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <div className="min-h-screen bg-background text-foreground">{children}</div>
      </body>
    </html>
  )
}

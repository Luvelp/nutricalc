import Link from "next/link"
import { ArrowRight, Apple, Dumbbell, Calculator } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  NutriCalc: Alimenta Tu Cuerpo Correctamente
                </h1>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Descubre el equilibrio perfecto de nutrientes para tu estilo de vida activo. Nuestra calculadora de
                  macronutrientes te ayuda a optimizar tu dieta según tus necesidades únicas.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/calculator">
                    <Button className="bg-primary hover:bg-primary/90">
                      Prueba la Calculadora <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="#nutrition-basics">
                    <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                      Aprende sobre Nutrición
                    </Button>
                  </Link>
                </div>
              </div>
              <img
                alt="Arreglo de comida saludable"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last shadow-md"
                height="550"
                src="/alimentos.jpeg?height=550&width=800"
                width="800"
              />
            </div>
          </div>
        </section>

        <section id="nutrition-basics" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary font-medium">
                  Fundamentos de Nutrición
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Entendiendo los Macronutrientes</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Los macronutrientes son los nutrientes que tu cuerpo necesita en grandes cantidades para funcionar
                  correctamente.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-12 mt-12">
              <Card className="shadow-md">
                <CardHeader className="bg-primary/5 rounded-t-lg">
                  <CardTitle>Proteínas</CardTitle>
                  <CardDescription>Bloques de construcción para los músculos</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <p>
                    Las proteínas son esenciales para la reparación y el crecimiento muscular. Están compuestas por
                    aminoácidos, que son cruciales para varias funciones corporales.
                  </p>
                </CardContent>
                <CardFooter className="border-t bg-secondary/50">
                  <p className="text-sm text-muted-foreground">4 calorías por gramo</p>
                </CardFooter>
              </Card>
              <Card className="shadow-md">
                <CardHeader className="bg-primary/5 rounded-t-lg">
                  <CardTitle>Carbohidratos</CardTitle>
                  <CardDescription>Fuente principal de energía</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <p>
                    Los carbohidratos son la principal fuente de energía de tu cuerpo. Alimentan tu cerebro, músculos y
                    otros órganos, especialmente durante la actividad física.
                  </p>
                </CardContent>
                <CardFooter className="border-t bg-secondary/50">
                  <p className="text-sm text-muted-foreground">4 calorías por gramo</p>
                </CardFooter>
              </Card>
              <Card className="shadow-md">
                <CardHeader className="bg-primary/5 rounded-t-lg">
                  <CardTitle>Grasas</CardTitle>
                  <CardDescription>Esenciales para la producción de hormonas</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <p>
                    Las grasas saludables apoyan el crecimiento celular, protegen los órganos, ayudan con la absorción
                    de nutrientes y son cruciales para la producción de hormonas.
                  </p>
                </CardContent>
                <CardFooter className="border-t bg-secondary/50">
                  <p className="text-sm text-muted-foreground">9 calorías por gramo</p>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 relative">
          <div className="absolute inset-0 z-0">
            <img
              src="/bg.jpeg?height=800&width=1600"
              alt=""
              className="w-full h-full object-cover"
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-primary/80 backdrop-blur-sm"></div>
          </div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                  ¿Por qué Calcular tus Macros?
                </h2>
                <p className="max-w-[900px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  La nutrición personalizada es clave para alcanzar tus objetivos de salud y fitness.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 mt-12">
              <div className="flex flex-col items-center space-y-2 border border-white/20 rounded-lg p-6 bg-white/10 backdrop-blur-sm shadow-lg">
                <div className="rounded-full bg-white/20 p-3">
                  <Dumbbell className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Optimiza el Rendimiento</h3>
                <p className="text-center text-white/80">
                  Obtén el equilibrio adecuado de nutrientes para alimentar tus entrenamientos y recuperación.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border border-white/20 rounded-lg p-6 bg-white/10 backdrop-blur-sm shadow-lg">
                <div className="rounded-full bg-white/20 p-3">
                  <Calculator className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Enfoque Personalizado</h3>
                <p className="text-center text-white/80">
                  Tus necesidades nutricionales son únicas según tu edad, peso, altura y nivel de actividad.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 border border-white/20 rounded-lg p-6 bg-white/10 backdrop-blur-sm shadow-lg">
                <div className="rounded-full bg-white/20 p-3">
                  <Apple className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">Hábitos Sostenibles</h3>
                <p className="text-center text-white/80">
                  Construye una base para patrones de alimentación saludable a largo plazo que funcionen para tu estilo
                  de vida.
                </p>
              </div>
            </div>
            <div className="flex justify-center mt-12">
              <Link href="/calculator">
                <Button className="bg-accent hover:bg-accent/90 text-white shadow-md">
                  Calcula tus Macros <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

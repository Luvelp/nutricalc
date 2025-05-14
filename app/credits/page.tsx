import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export default function CreditsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />

      <main className="flex-1 py-8 md:py-12 bg-secondary/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <div className="space-y-2">
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">Créditos</h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Reconocimiento a todas las personas e instituciones que hicieron posible este proyecto.
              </p>
            </div>
          </div>

          {/* Membrete institucional */}
          <div className="flex justify-center mb-12">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-4 relative">
                <Image
                  src="/logo.png?height=128&width=128"
                  alt="Logo institucional"
                  width={128}
                  height={128}
                  className="rounded-full object-cover shadow-md"
                />
              </div>
              <h2 className="text-xl font-bold">Institución Académica</h2>
              <p className="text-muted-foreground">Unidad Educativa Alto Barinas Sur</p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Creadores */}
            <Card className="shadow-md">
              <CardHeader className="bg-primary/5 rounded-t-lg">
                <CardTitle className="text-xl">Creadores</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 pt-6">
                <div>
                  <h3 className="font-medium text-primary">Desarrollo Web</h3>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Ignacio Bchare - Desarrollador Frontend</li>
                    <li>Luis Velázquez - Desarrollador Backend</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium text-primary">Contenido Nutricional</h3>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    <li>Francisco Hurtado - Nutricionista</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Agradecimientos */}
            <Card className="shadow-md">
              <CardHeader className="bg-primary/5 rounded-t-lg">
                <CardTitle className="text-xl">Agradecimientos</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 pt-6">
                <p>
                  Agradecemos especialmente a las siguientes personas e instituciones por su apoyo y contribuciones:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Gloria Vargas - Por su apoyo brindado en el desarrollo del proyecto</li>
                  <li><a href="https://vercel.com/">Vercel</a> - Por la infraestructura para el desarrollo web</li>
                  <li><a href="https://fitgeneration.es/">Fit Generation</a> - Por la validación de datos</li>
                  <li>Estudiantes de 4to A - Por sus valiosos comentarios y sugerencias</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              Este proyecto fue desarrollado por parte de estudiantes del 5to B como parte de una iniciativa para promover hábitos alimenticios saludables.
            </p>
            <p className="text-muted-foreground mt-2">Barinas - Mayo 2025</p>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}

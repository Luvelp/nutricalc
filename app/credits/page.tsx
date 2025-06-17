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

          <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
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
            <Card className="shadow-md lg:col-span-1">
              <CardHeader className="bg-primary/5 rounded-t-lg">
                <CardTitle className="text-xl text-center">Agradecimientos</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4 text-justify leading-relaxed">
                  <p>Primeramente, le damos las gracias a Dios por todo, por permitirnos hacer este proyecto.</p>
                  <p>
                    A nuestros padres, por todo el apoyo afectivo, económico, por cada ayuda y por cada consejo que nos
                    han dado.
                  </p>
                  <p>A la profesora Gloria Vargas por asesorarnos durante nuestro proyecto.</p>
                  <p>A los alumnos de cuarto año sección "A" por su colaboración y comportamiento.</p>
                  <p>Al profesor Carlos Coronado por darnos su autorización para realizar las encuestas.</p>
                  <p>
                    A la profesora Wendy Ávila por permitirnos darles la información a los alumnos durante su hora de
                    clases.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Información del proyecto centrada */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground">
              Este proyecto fue desarrollado como parte de una iniciativa educativa para promover hábitos alimenticios
              saludables.
            </p>
            <p className="text-muted-foreground mt-2">Versión 1.0 - Mayo 2025</p>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}

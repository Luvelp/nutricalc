"use client"

import { ArrowLeft, Printer } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function MacroResults({ results, resetCalculator }) {
  const { calories, protein, carbs, fat } = results

  // Calculate percentages for the progress bars
  const totalCaloriesFromMacros = protein * 4 + carbs * 4 + fat * 9
  const proteinPercentage = Math.round(((protein * 4) / totalCaloriesFromMacros) * 100)
  const carbsPercentage = Math.round(((carbs * 4) / totalCaloriesFromMacros) * 100)
  const fatPercentage = Math.round(((fat * 9) / totalCaloriesFromMacros) * 100)

  const handlePrint = () => {
    window.print()
  }

  return (
    <Card className="print:shadow-none shadow-md">
      <CardHeader className="bg-primary/5 rounded-t-lg">
        <CardTitle className="text-2xl">Tus Macros Recomendados</CardTitle>
        <CardDescription>
          Basado en tu información, aquí están tus objetivos diarios de macronutrientes.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-8 pt-6">
        <div className="text-center p-6 bg-secondary rounded-lg shadow-inner">
          <h3 className="text-lg font-medium text-secondary-foreground mb-2">Objetivo Diario de Calorías</h3>
          <p className="text-4xl font-bold text-primary">{calories} calorías</p>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <div>
                <h4 className="font-medium">Proteínas</h4>
                <p className="text-sm text-muted-foreground">Construye y repara tejidos</p>
              </div>
              <div className="text-right">
                <p className="font-bold">{protein}g</p>
                <p className="text-sm text-muted-foreground">{protein * 4} calorías</p>
              </div>
            </div>
            <Progress value={proteinPercentage} className="h-2 bg-secondary" indicatorClassName="bg-blue-500" />
            <p className="text-xs text-right text-muted-foreground">{proteinPercentage}% del total de calorías</p>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <div>
                <h4 className="font-medium">Carbohidratos</h4>
                <p className="text-sm text-muted-foreground">Fuente principal de energía</p>
              </div>
              <div className="text-right">
                <p className="font-bold">{carbs}g</p>
                <p className="text-sm text-muted-foreground">{carbs * 4} calorías</p>
              </div>
            </div>
            <Progress value={carbsPercentage} className="h-2 bg-secondary" indicatorClassName="bg-primary" />
            <p className="text-xs text-right text-muted-foreground">{carbsPercentage}% del total de calorías</p>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <div>
                <h4 className="font-medium">Grasas</h4>
                <p className="text-sm text-muted-foreground">Producción de hormonas y absorción de nutrientes</p>
              </div>
              <div className="text-right">
                <p className="font-bold">{fat}g</p>
                <p className="text-sm text-muted-foreground">{fat * 9} calorías</p>
              </div>
            </div>
            <Progress value={fatPercentage} className="h-2 bg-secondary" indicatorClassName="bg-accent" />
            <p className="text-xs text-right text-muted-foreground">{fatPercentage}% del total de calorías</p>
          </div>
        </div>

        <div className="bg-secondary p-4 rounded-lg shadow-inner">
          <h3 className="font-medium mb-2">Consejos para el Éxito</h3>
          <ul className="text-sm space-y-1 list-disc pl-5">
            <li>Enfócate en alimentos integrales y no procesados para la mayoría de tu dieta</li>
            <li>Distribuye tu ingesta de proteínas a lo largo del día</li>
            <li>Elige carbohidratos complejos en lugar de azúcares simples cuando sea posible</li>
            <li>Incluye grasas saludables de fuentes como aguacates, nueces y aceite de oliva</li>
            <li>Mantente hidratado bebiendo suficiente agua</li>
          </ul>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col sm:flex-row gap-4 border-t bg-secondary/30">
        <Button
          variant="outline"
          onClick={resetCalculator}
          className="w-full sm:w-auto border-primary/50 text-primary hover:bg-primary/10"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Recalcular
        </Button>
        <div className="flex gap-4 w-full sm:w-auto sm:ml-auto">
          <Button
            variant="outline"
            onClick={handlePrint}
            className="w-full sm:w-auto border-primary/50 text-primary hover:bg-primary/10"
          >
            <Printer className="mr-2 h-4 w-4" />
            Imprimir Resultados
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}

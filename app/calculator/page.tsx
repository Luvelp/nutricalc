"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { MacroResults } from "@/components/macro-results"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function CalculatorPage() {
  const [formData, setFormData] = useState({
    age: "",
    gender: "male",
    weight: "",
    height: "",
    activityLevel: "moderate",
    goal: "maintain",
  })

  const [results, setResults] = useState(null)
  const [activeTab, setActiveTab] = useState("calculator")

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const calculateMacros = (e) => {
    e.preventDefault()

    // Convert inputs to numbers
    const age = Number.parseInt(formData.age)
    const weight = Number.parseFloat(formData.weight) // in kg
    const height = Number.parseFloat(formData.height) // in cm

    // Calculate BMR using Mifflin-St Jeor Equation
    let bmr
    if (formData.gender === "male") {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5
    } else {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161
    }

    // Apply activity multiplier
    const activityMultipliers = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      active: 1.725,
      veryActive: 1.9,
    }

    const tdee = bmr * activityMultipliers[formData.activityLevel]

    // Adjust calories based on goal
    let calorieTarget
    switch (formData.goal) {
      case "lose":
        calorieTarget = tdee * 0.8 // 20% deficit
        break
      case "maintain":
        calorieTarget = tdee
        break
      case "gain":
        calorieTarget = tdee * 1.15 // 15% surplus
        break
      default:
        calorieTarget = tdee
    }

    // Calculate macros (protein, carbs, fat)
    // Protein: 1.6g per kg for active individuals, 1.2g for less active
    const proteinMultiplier = ["active", "veryActive"].includes(formData.activityLevel) ? 1.6 : 1.2
    const proteinGrams = weight * proteinMultiplier
    const proteinCalories = proteinGrams * 4

    // Fat: 25-35% of calories
    const fatCalories = calorieTarget * 0.3 // 30% of calories from fat
    const fatGrams = fatCalories / 9

    // Remaining calories from carbs
    const carbCalories = calorieTarget - proteinCalories - fatCalories
    const carbGrams = carbCalories / 4

    setResults({
      calories: Math.round(calorieTarget),
      protein: Math.round(proteinGrams),
      carbs: Math.round(carbGrams),
      fat: Math.round(fatGrams),
    })

    setActiveTab("results")
  }

  const resetCalculator = () => {
    setFormData({
      age: "",
      gender: "male",
      weight: "",
      height: "",
      activityLevel: "moderate",
      goal: "maintain",
    })
    setResults(null)
    setActiveTab("calculator")
  }

  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />

      <main className="flex-1 py-8 md:py-12 bg-secondary/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
            <Link href="/" className="flex items-center text-primary mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver al Inicio
            </Link>
            <div className="space-y-2">
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
                NutriCalc: Calculadora de Macronutrientes
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Obtén recomendaciones nutricionales personalizadas basadas en tu cuerpo y objetivos.
              </p>
            </div>
          </div>

          <div className="mx-auto max-w-3xl">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
              <TabsList className="grid w-full grid-cols-2 bg-secondary">
                <TabsTrigger
                  value="calculator"
                  className="data-[state=active]:bg-primary data-[state=active]:text-white"
                >
                  Calculadora
                </TabsTrigger>
                <TabsTrigger
                  value="results"
                  disabled={!results}
                  className="data-[state=active]:bg-primary data-[state=active]:text-white"
                >
                  Resultados
                </TabsTrigger>
              </TabsList>

              <TabsContent value="calculator">
                <Card className="shadow-md">
                  <CardHeader className="bg-primary/5 rounded-t-lg">
                    <CardTitle>Tu Información</CardTitle>
                    <CardDescription>
                      Ingresa tus detalles para calcular tus macronutrientes recomendados.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <form onSubmit={calculateMacros} className="space-y-6">
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="age">Edad</Label>
                          <Input
                            id="age"
                            name="age"
                            type="number"
                            placeholder="Años"
                            required
                            value={formData.age}
                            onChange={handleInputChange}
                            className="border-input focus:ring-primary"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label>Género</Label>
                          <RadioGroup
                            defaultValue={formData.gender}
                            onValueChange={(value) => handleSelectChange("gender", value)}
                            className="flex space-x-4"
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="male" id="male" className="text-primary" />
                              <Label htmlFor="male">Masculino</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="female" id="female" className="text-primary" />
                              <Label htmlFor="female">Femenino</Label>
                            </div>
                          </RadioGroup>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="weight">Peso (kg)</Label>
                          <Input
                            id="weight"
                            name="weight"
                            type="number"
                            placeholder="Kilogramos"
                            required
                            value={formData.weight}
                            onChange={handleInputChange}
                            className="border-input focus:ring-primary"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="height">Altura (cm)</Label>
                          <Input
                            id="height"
                            name="height"
                            type="number"
                            placeholder="Centímetros"
                            required
                            value={formData.height}
                            onChange={handleInputChange}
                            className="border-input focus:ring-primary"
                          />
                        </div>

                        <div className="space-y-2">
                          <div className="flex items-center">
                            <Label htmlFor="activityLevel">Nivel de Actividad</Label>
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Button variant="ghost" size="icon" className="h-4 w-4 ml-1 text-muted-foreground">
                                    <Info className="h-3 w-3" />
                                    <span className="sr-only">Información sobre nivel de actividad</span>
                                  </Button>
                                </TooltipTrigger>
                                <TooltipContent className="max-w-xs bg-secondary border-primary/20">
                                  <p>Sedentario: Poco o ningún ejercicio</p>
                                  <p>Ligero: Ejercicio 1-3 veces/semana</p>
                                  <p>Moderado: Ejercicio 3-5 veces/semana</p>
                                  <p>Activo: Ejercicio 6-7 veces/semana</p>
                                  <p>Muy Activo: Ejercicio y trabajo físico</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </div>
                          <Select
                            defaultValue={formData.activityLevel}
                            onValueChange={(value) => handleSelectChange("activityLevel", value)}
                          >
                            <SelectTrigger className="border-input focus:ring-primary">
                              <SelectValue placeholder="Selecciona nivel de actividad" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="sedentary">Sedentario</SelectItem>
                              <SelectItem value="light">Ligeramente Activo</SelectItem>
                              <SelectItem value="moderate">Moderadamente Activo</SelectItem>
                              <SelectItem value="active">Activo</SelectItem>
                              <SelectItem value="veryActive">Muy Activo</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="goal">Objetivo</Label>
                          <Select
                            defaultValue={formData.goal}
                            onValueChange={(value) => handleSelectChange("goal", value)}
                          >
                            <SelectTrigger className="border-input focus:ring-primary">
                              <SelectValue placeholder="Selecciona tu objetivo" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="lose">Perder Peso</SelectItem>
                              <SelectItem value="maintain">Mantener Peso</SelectItem>
                              <SelectItem value="gain">Ganar Peso</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-white">
                        Calcular Macros
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="results">
                {results && <MacroResults results={results} resetCalculator={resetCalculator} />}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}

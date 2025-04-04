"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FormProvider, useForm } from "react-hook-form"
import { FormStep1 } from "./form-steps/FormStep1"
import { FormStep2 } from "./form-steps/FormStep2"
import { FormStep3 } from "./form-steps/FormStep3"
import { FormStep4 } from "./form-steps/FormStep4"
import { FormSummary } from "./form-steps/FormSummary"
import { useToast } from "@/components/ui/use-toast"
import { ChevronLeft, ChevronRight, Send, Home } from "lucide-react"
import logogs from "../assets/images/logo-gruposilvestre.jpg"
import { Link } from "react-router-dom"
import { env } from "../lib/env"

export type FormData = {
  // Paso 1: Datos principales
  tipoIrregularidad: string
  involucrados: {
    id: number
    nombre: string
    apellido: string
    relacion: string
    otro: string
  }[]
  ubicacion: {
    pais: string
    provincia: string
    ciudad: string
    sede: string
  }
  fecha: string
  detalles: string
  evidencia: {
    tipo: string
    entregaFisica?: string
    archivos?: File[]
    dondeObtener?: string
  }

  // Paso 2: Datos adicionales
  conocimiento?: string
  conocimientoOtro?: string
  involucraExternos?: string
  quienesExternos?: string
  ocultado?: string
  comoOcultado?: string
  quienesOcultan?: string
  conocimientoPrevio?: string
  quienesConocen?: string
  comoConocen?: string
  relacion?: string
  relacionOtro?: string
  beneficios?: string
  testigos?: string

  // Paso 3: Opciones de contacto
  relacionGrupo?: string
  relacionGrupoOtro?: string
  anonimo?: string
  correoContacto?: string

  // Paso 4: Información opcional
  nombreCompleto?: string
  telefono?: string
  correo?: string
  otroContacto?: string
  cargo?: string
  area?: string
  areaOtro?: string

  // Paso 5: Términos y condiciones
  aceptaTerminos?: boolean
}

export function EthicsReportForm() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const methods = useForm<FormData>({
    defaultValues: {
      tipoIrregularidad: "",
      involucrados: [{ id: 1, nombre: "", apellido: "", relacion: "", otro: "" }],
      ubicacion: { pais: "", provincia: "", ciudad: "", sede: "" },
      fecha: "",
      detalles: "",
      evidencia: { tipo: "" },
    },
  })

  const totalSteps = 5

  const nextStep = async () => {
    const isValid = await methods.trigger()
    if (isValid || currentStep === 2) {
      // Paso 2 es opcional
      setCurrentStep((prev) => Math.min(prev + 1, totalSteps))
      window.scrollTo(0, 0)
    } else {
      toast({
        title: "Campos incompletos",
        description: "Por favor complete todos los campos requeridos antes de continuar.",
        variant: "destructive",
      })
    }
  }

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1))
    window.scrollTo(0, 0)
  }

  const handleSubmit = async (data: FormData) => {
    // Solo ejecutar la lógica de envío cuando estamos en el último paso
    if (currentStep === totalSteps) {
      // Verificar si se aceptaron los términos
      if (!data.aceptaTerminos) {
        toast({
          title: "Términos y condiciones",
          description: "Debe aceptar los términos y condiciones para enviar el reporte.",
          variant: "destructive",
        })
        return
      }

      setIsSubmitting(true)

      // Envío a API usando la URL del archivo de configuración
      fetch(`${env.apiUrl}/IrregularityReports`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Error en la red: ${response.status}`)
          }
          return response.json()
        })
        .then((responseData) => {
          console.log("Datos del formulario:", responseData)
          toast({
            title: "Reporte enviado con éxito",
            description:
              "Su reporte ha sido registrado con el código: GS-" + Math.floor(100000 + Math.random() * 900000),
          })
        })
        .catch((error) => {
          console.error("Error al enviar el reporte:", error)

          // Si estamos en modo simulación, mostrar éxito de todas formas
          if (env.useSimulation) {
            toast({
              title: "Reporte enviado con éxito (Simulación)",
              description:
                "Su reporte ha sido registrado con el código: GS-" + Math.floor(100000 + Math.random() * 900000),
            })
          } else {
            toast({
              title: "Error al enviar el reporte",
              description: "Por favor, inténtelo de nuevo más tarde.",
              variant: "destructive",
            })
          }
        })
        .finally(() => {
          setIsSubmitting(false)
        })
    } else {
      // Si no estamos en el último paso, simplemente avanzar al siguiente
      nextStep()
    }
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <FormStep1 />
      case 2:
        return <FormStep2 />
      case 3:
        return <FormStep3 />
      case 4:
        return <FormStep4 />
      case 5:
        return <FormSummary />
      default:
        return <FormStep1 />
    }
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <Card className="w-full max-w-4xl mx-auto border-primary/20">
        <CardHeader className="border-b">
          <div className="flex justify-between items-center">
            <div>
              <CardTitle className="text-2xl text-primary">{env.appName}</CardTitle>
              <CardDescription>Sistema de reporte de irregularidades éticas</CardDescription>
            </div>
            <img src={logogs || "/placeholder.svg"} alt="Logo Grupo Silvestre" className="h-16 w-auto" />
          </div>
        </CardHeader>

        <FormProvider {...methods}>
          <form>
            <CardContent className="pt-6">
              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  {Array.from({ length: totalSteps }).map((_, i) => (
                    <div
                      key={i}
                      className={`w-1/5 h-2 rounded-full transition-colors ${
                        i + 1 <= currentStep ? "bg-primary" : "bg-muted"
                      }`}
                    />
                  ))}
                </div>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Datos principales</span>
                  <span>Datos adicionales</span>
                  <span>Contacto</span>
                  <span>Información personal</span>
                  <span>Resumen</span>
                </div>
              </div>

              {renderStep()}
            </CardContent>

            <CardFooter className="flex justify-between border-t pt-6">
              {currentStep > 1 ? (
                <Button type="button" variant="outline" onClick={prevStep}>
                  <ChevronLeft className="mr-2 h-4 w-4" /> Anterior
                </Button>
              ) : (
                <Link to="/">
                  <Button type="button" variant="outline">
                    <Home className="mr-2 h-4 w-4" /> Inicio
                  </Button>
                </Link>
              )}

              {currentStep < totalSteps ? (
                <Button type="button" onClick={nextStep}>
                  Siguiente <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              ) : (
                <Button
                  type="button"
                  disabled={isSubmitting}
                  className="bg-primary"
                  onClick={methods.handleSubmit(handleSubmit)}
                >
                  {isSubmitting ? (
                    <>Enviando...</>
                  ) : (
                    <>
                      Enviar reporte <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              )}
            </CardFooter>
          </form>
        </FormProvider>
      </Card>
    </div>
  )
}


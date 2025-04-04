"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Mail, Phone, MessageSquare, MapPin } from "lucide-react"
import logogs from "../assets/images/logo-gruposilvestre.jpg"
import { useNavigate } from "react-router-dom"
import { env } from "../lib/env" 

export function LandingPage() {
  const navigate = useNavigate()

  const handleRegisterClick = () => {
    navigate("/register")
  }

  // const handleConsultClick = () => {
  //   window.open(env.consultaUrl, "_blank")
  // }

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

        <CardContent className="pt-6 space-y-6">
          {/* Introducción */}
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-primary">Introducción</h2>
            <p className="text-muted-foreground">
              <span className="font-medium text-foreground">{env.appName}</span> le permite informar posibles
              desviamientos del Código de Ética y/o políticas del Grupo. Permite reportar conductas que pueden ser
              ilegales, no éticas o que violen las normas profesionales; es decir, que sean inconsistentes con el Código
              de Ética del Grupo. Puede registrar irregularidades utilizando los canales de atención que se indican en
              la siguiente sección.
            </p>
          </div>

          <Separator />

          {/* Canales de Atención */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-primary">Canales de Atención</h2>

            {/* 1. Formulario Web */}
            <Card className="border-primary/10">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-primary">1. Formulario Web</CardTitle>
              </CardHeader>
              <CardContent className="pb-4 space-y-4">
                <p>Para registrar una nueva irregularidad, puede ir al siguiente enlace:</p>
                <Button onClick={handleRegisterClick} className="w-full sm:w-auto">
                  Registrar irregularidad
                </Button>
{/* 
                <p>Para consultar el estado de una irregularidad ya registrada, puede ir al siguiente enlace:</p>
                <Button variant="outline" onClick={handleConsultClick} className="w-full sm:w-auto">
                  Consultar irregularidad <ExternalLink className="ml-2 h-4 w-4" />
                </Button> */}
              </CardContent>
            </Card>

            {/* 2. Buzón de Correo */}
            <Card className="border-primary/10">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  2. Buzón de Correo
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Puede enviar un correo electrónico a la siguiente dirección:</p>
                <a href={`mailto:${env.supportEmail}`} className="text-primary hover:underline font-medium">
                  {env.supportEmail}
                </a>
              </CardContent>
            </Card>

            {/* 3. Buzón de Voz */}
            <Card className="border-primary/10">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  3. Buzón de Voz
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Puede informar una irregularidad a través de un mensaje de voz las 24 horas del día durante los 365
                  días del año, marcando la opción 2 en el siguiente número:
                </p>
                <p className="font-medium">{env.supportPhone} (número gratuito)</p>
              </CardContent>
            </Card>

            {/* 4. Línea Telefónica */}
            <Card className="border-primary/10">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Phone className="h-5 w-5 text-primary" />
                  4. Línea Telefónica
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Puede contactarse directamente con un profesional de Lunes a Viernes de 8:30 a.m. a 6:30 p.m. al
                  siguiente número:
                </p>
                <p className="font-medium">{env.supportPhone} (número gratuito)</p>
              </CardContent>
            </Card>

            {/* 5. Entrevista personal y Dirección Postal */}
            <Card className="border-primary/10">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  5. Entrevista personal y Dirección Postal
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p>Si desea ser atendido personalmente, diríjase a:</p>
                  <p className="font-medium">{env.officeAddress}</p>
                  <p>
                    <span className="font-medium">Preguntar por:</span> {env.contactPerson}
                  </p>
                  <p>Las entrevistas presenciales están disponibles con previa cita.</p>
                </div>

                <div>
                  <p>
                    Si desea proporcionar información física, envíala a la siguiente dirección en cualquier momento:
                  </p>
                  <p className="font-medium">{env.officeAddress}</p>
                  <p>
                    <span className="font-medium">Atención:</span> {env.contactPerson},{" "}
                    <span className="font-medium">Referencia:</span> {env.appName}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>

        <CardFooter className="border-t py-4 bg-primary/10 text-center text-sm text-muted-foreground">
          <div className="w-full">
            <p>
              Copyright © {new Date().getFullYear()} {env.appName}
            </p>
            <p>Todos los derechos reservados</p>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}


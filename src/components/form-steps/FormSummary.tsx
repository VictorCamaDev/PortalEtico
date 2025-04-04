"use client"

import { useFormContext } from "react-hook-form"
import type { FormData } from "../EthicsReportForm"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { CheckCircle2, AlertCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export function FormSummary() {
  const { watch, setValue } = useFormContext<FormData>()

  const formData = watch()
  const acceptedTerms = watch("aceptaTerminos") || false

  // Función para mostrar el valor de un campo o "No especificado"
  const displayValue = (value: any) => {
    if (value === undefined || value === null || value === "") {
      return <span className="text-muted-foreground italic">No especificado</span>
    }
    return value
  }

  const handleTermsChange = (checked: boolean) => {
    setValue("aceptaTerminos", checked)
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-primary mb-4">Resumen del Reporte</h2>

        <Alert variant="default" className="bg-blue-50 border-blue-200 mb-6">
          <AlertCircle className="h-4 w-4 text-blue-600" />
          <AlertDescription className="text-blue-800">
            Por favor revise la información antes de enviar su reporte. Una vez enviado, recibirá un código de
            seguimiento.
          </AlertDescription>
        </Alert>

        <div className="space-y-6">
          {/* Datos principales */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Datos Principales</CardTitle>
              <CardDescription>Información básica sobre la irregularidad</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-sm text-muted-foreground">Tipo de irregularidad</h4>
                  <p>{displayValue(formData.tipoIrregularidad)}</p>
                </div>
                <div>
                  <h4 className="font-medium text-sm text-muted-foreground">Fecha del incidente</h4>
                  <p>{displayValue(formData.fecha ? new Date(formData.fecha).toLocaleDateString() : "")}</p>
                </div>
              </div>

              <Separator />

              <div>
                <h4 className="font-medium text-sm text-muted-foreground">Ubicación</h4>
                <p>
                  {displayValue(
                    [
                      formData.ubicacion?.ciudad,
                      formData.ubicacion?.provincia,
                      formData.ubicacion?.pais,
                      formData.ubicacion?.sede,
                    ]
                      .filter(Boolean)
                      .join(", "),
                  )}
                </p>
              </div>

              <Separator />

              <div>
                <h4 className="font-medium text-sm text-muted-foreground">Personas involucradas</h4>
                {formData.involucrados && formData.involucrados.length > 0 ? (
                  <ul className="list-disc pl-5 space-y-1">
                    {formData.involucrados.map((inv, index) => (
                      <li key={index}>
                        {inv.nombre} {inv.apellido} - {inv.relacion} {inv.otro ? `(${inv.otro})` : ""}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-muted-foreground italic">No especificado</p>
                )}
              </div>

              <Separator />

              <div>
                <h4 className="font-medium text-sm text-muted-foreground">Detalles</h4>
                <p className="whitespace-pre-line">{displayValue(formData.detalles)}</p>
              </div>

              <Separator />

              <div>
                <h4 className="font-medium text-sm text-muted-foreground">Evidencia</h4>
                <p>{displayValue(formData.evidencia?.tipo)}</p>
                {formData.evidencia?.dondeObtener && (
                  <p className="mt-1 text-sm">
                    <span className="font-medium">Dónde obtener: </span>
                    {formData.evidencia.dondeObtener}
                  </p>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Datos de contacto */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">Datos de Contacto</CardTitle>
              <CardDescription>Información para comunicarnos con usted</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-sm text-muted-foreground">Relación con el Grupo</h4>
                  <p>{displayValue(formData.relacionGrupo)}</p>
                </div>
                <div>
                  <h4 className="font-medium text-sm text-muted-foreground">Reporte anónimo</h4>
                  <p>{formData.anonimo === "si" ? "Sí" : "No"}</p>
                </div>
              </div>

              {formData.anonimo !== "si" && (
                <>
                  <Separator />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-sm text-muted-foreground">Nombre</h4>
                      <p>{displayValue(formData.nombreCompleto)}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm text-muted-foreground">Teléfono</h4>
                      <p>{displayValue(formData.telefono)}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm text-muted-foreground">Correo electrónico</h4>
                      <p>{displayValue(formData.correo || formData.correoContacto)}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm text-muted-foreground">Cargo</h4>
                      <p>{displayValue(formData.cargo)}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm text-muted-foreground">Área</h4>
                      <p>
                        {displayValue(formData.area)} {formData.areaOtro ? `(${formData.areaOtro})` : ""}
                      </p>
                    </div>
                  </div>
                </>
              )}
            </CardContent>
          </Card>

          {/* Términos y condiciones */}
          <div className="flex items-start space-x-2 mt-6">
            <Checkbox id="terms" checked={acceptedTerms} onCheckedChange={handleTermsChange} />
            <div className="grid gap-1.5 leading-none">
              <Label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Autorizo a Grupo Silvestre a realizar el tratamiento de mis datos personales
              </Label>
              <p className="text-sm text-muted-foreground">
                Al enviar este formulario, acepto que he leído la cláusula de tratamiento de datos personales.
              </p>
            </div>
          </div>

          <Alert variant="default" className="bg-green-50 border-green-200">
            <CheckCircle2 className="h-4 w-4 text-green-600" />
            <AlertDescription className="text-green-800">
              Pulse el botón "Enviar reporte" para registrar su irregularidad. Recibirá un código de seguimiento para
              consultas futuras.
            </AlertDescription>
          </Alert>
        </div>
      </div>
    </div>
  )
}


"use client"

import { useFormContext } from "react-hook-form"
import type { FormData } from "../EthicsReportForm"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { AlertCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

export function FormStep4() {
  const { register, watch, setValue } = useFormContext<FormData>()

  const anonimo = watch("anonimo")
  const area = watch("area")

  // Si el usuario eligió ser anónimo, mostrar mensaje y no mostrar campos
  if (anonimo === "si") {
    return (
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold text-primary mb-4">Información Opcional de Contacto</h2>

          <Alert variant="default" className="bg-amber-50 border-amber-200">
            <AlertCircle className="h-4 w-4 text-amber-600" />
            <AlertDescription className="text-amber-800">
              Ha elegido mantener su identidad en el anonimato. Puede continuar al siguiente paso.
            </AlertDescription>
          </Alert>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-primary mb-4">Información Opcional de Contacto</h2>

        <p className="text-muted-foreground mb-4">
          En caso de no tener inconveniente de compartir su identidad, por favor proporcione la siguiente información
          opcional
        </p>

        <div className="space-y-6">
          {/* Nombre completo */}
          <div className="space-y-2">
            <Label htmlFor="nombreCompleto" className="text-base font-medium">
              Indique sus nombres y apellidos
            </Label>
            <Input id="nombreCompleto" {...register("nombreCompleto")} placeholder="Nombres y apellidos" />
          </div>

          {/* Teléfono */}
          <div className="space-y-2">
            <Label htmlFor="telefono" className="text-base font-medium">
              Indique un teléfono de contacto
            </Label>
            <Input id="telefono" {...register("telefono")} placeholder="Número de teléfono" />
          </div>

          {/* Correo */}
          <div className="space-y-2">
            <Label htmlFor="correo" className="text-base font-medium">
              Indique un correo electrónico de contacto
            </Label>
            <Input id="correo" type="email" {...register("correo")} placeholder="ejemplo@correo.com" />
          </div>

          {/* Otra forma de contacto */}
          <div className="space-y-2">
            <Label htmlFor="otroContacto" className="text-base font-medium">
              Indique cualquier otra forma de contacto
            </Label>
            <Input id="otroContacto" {...register("otroContacto")} placeholder="Otra forma de contacto" />
          </div>

          {/* Cargo */}
          <div className="space-y-2">
            <Label htmlFor="cargo" className="text-base font-medium">
              Indique el cargo que ocupa en el Grupo
            </Label>
            <Input id="cargo" {...register("cargo")} placeholder="Cargo o puesto" />
          </div>

          {/* Área */}
          <div className="space-y-3">
            <Label className="text-base font-medium">Indique el área a la cual pertenece</Label>

            <RadioGroup onValueChange={(value) => setValue("area", value)} defaultValue={area} className="space-y-3">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="RRHH" id="area_rrhh" />
                <Label htmlFor="area_rrhh" className="font-normal">
                  RRHH
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Finanzas" id="area_finanzas" />
                <Label htmlFor="area_finanzas" className="font-normal">
                  Finanzas
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Contabilidad" id="area_contabilidad" />
                <Label htmlFor="area_contabilidad" className="font-normal">
                  Contabilidad
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Gerencia" id="area_gerencia" />
                <Label htmlFor="area_gerencia" className="font-normal">
                  Gerencia
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Otros" id="area_otros" />
                <Label htmlFor="area_otros" className="font-normal">
                  Otros
                </Label>
              </div>
            </RadioGroup>

            {area === "Otros" && (
              <div className="ml-6 space-y-2">
                <Label htmlFor="areaOtro">Especificar</Label>
                <Input id="areaOtro" {...register("areaOtro")} placeholder="Indique su área" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}


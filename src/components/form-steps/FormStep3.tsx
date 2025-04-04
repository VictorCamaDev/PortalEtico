"use client"

import { useFormContext } from "react-hook-form"
import type { FormData } from "../EthicsReportForm"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useEffect } from "react"

export function FormStep3() {
  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext<FormData>()

  const relacionGrupo = watch("relacionGrupo")
  const anonimo = watch("anonimo")

  // Efecto para mostrar/ocultar campos de información personal
  useEffect(() => {
    if (anonimo === "no") {
      // Mostrar sección de información personal
      const elements = document.querySelectorAll('[id^="anonimato"]')
      elements.forEach((el) => {
        ;(el as HTMLElement).style.display = "block"
      })
    } else {
      // Ocultar sección de información personal
      const elements = document.querySelectorAll('[id^="anonimato"]')
      elements.forEach((el) => {
        ;(el as HTMLElement).style.display = "none"
      })
    }
  }, [anonimo])

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-primary mb-4">Opciones de Contacto</h2>

        <div className="space-y-6">
          {/* Relación con el Grupo */}
          <div className="space-y-3">
            <Label className="text-base font-medium">
              ¿Cuál de las siguientes opciones describe mejor su relación con el Grupo?{" "}
              <span className="text-destructive">*</span>
            </Label>

            <RadioGroup
              onValueChange={(value) => setValue("relacionGrupo", value)}
              defaultValue={relacionGrupo}
              className="space-y-3"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Empleado" id="rel_empleado" />
                <Label htmlFor="rel_empleado" className="font-normal">
                  Empleado
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Proveedor" id="rel_proveedor" />
                <Label htmlFor="rel_proveedor" className="font-normal">
                  Proveedor
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Cliente" id="rel_cliente" />
                <Label htmlFor="rel_cliente" className="font-normal">
                  Cliente
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Ex Empleado" id="rel_exempleado" />
                <Label htmlFor="rel_exempleado" className="font-normal">
                  Ex Empleado
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Otro" id="rel_otro" />
                <Label htmlFor="rel_otro" className="font-normal">
                  Otro
                </Label>
              </div>
            </RadioGroup>

            {relacionGrupo === "Otro" && (
              <div className="ml-6 space-y-2">
                <Label htmlFor="relacionGrupoOtro">Especificar</Label>
                <Input
                  id="relacionGrupoOtro"
                  {...register("relacionGrupoOtro")}
                  placeholder="Describa su relación con el Grupo"
                />
              </div>
            )}

            {errors.relacionGrupo && <p className="text-sm text-destructive mt-1">Este campo es requerido</p>}
          </div>

          {/* Anonimato */}
          <div className="space-y-3">
            <Label className="text-base font-medium">
              ¿Desea mantener su identidad en el anonimato? <span className="text-destructive">*</span>
            </Label>

            <RadioGroup
              onValueChange={(value) => setValue("anonimo", value)}
              defaultValue={anonimo}
              className="flex gap-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="anonimo_no" />
                <Label htmlFor="anonimo_no" className="font-normal">
                  No
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="si" id="anonimo_si" />
                <Label htmlFor="anonimo_si" className="font-normal">
                  Sí
                </Label>
              </div>
            </RadioGroup>

            {errors.anonimo && <p className="text-sm text-destructive mt-1">Este campo es requerido</p>}
          </div>

          {/* Correo de contacto */}
          <div className="space-y-3">
            <Label htmlFor="correoContacto" className="text-base font-medium">
              ¿Desea proporcionar una cuenta de correo electrónico para mantener contacto?
            </Label>
            <Input id="correoContacto" type="email" {...register("correoContacto")} placeholder="ejemplo@correo.com" />
            <p className="text-sm text-muted-foreground">
              Este correo se utilizará únicamente para comunicaciones relacionadas con su reporte.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}


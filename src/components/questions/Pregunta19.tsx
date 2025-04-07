"use client"

import { useFormContext } from "react-hook-form"
import type { FormData } from "../EthicsReportForm"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Mail } from "lucide-react"

export function Pregunta19() {
  const { setValue, watch } = useFormContext<FormData>()
  const correoContacto = watch("correoContacto") || ""

  return (
    <div className="space-y-4 pt-4 border-t">
      <Label htmlFor="correoContacto" className="text-base font-medium flex items-center gap-2">
        <Mail className="h-4 w-4 text-blue-600" />
        ¿Desea proporcionar una cuenta de correo electrónico para mantener contacto?
      </Label>
      <Input
        id="correoContacto"
        type="email"
        value={correoContacto}
        onChange={(e) => setValue("correoContacto", e.target.value)}
        placeholder="ejemplo@correo.com"
        className="max-w-md"
      />
      <p className="text-sm text-muted-foreground">
        Este correo se utilizará únicamente para comunicaciones relacionadas con su reporte.
      </p>
    </div>
  )
}


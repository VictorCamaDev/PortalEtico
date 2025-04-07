"use client"

import { useFormContext } from "react-hook-form"
import type { FormData } from "../EthicsReportForm"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { MessageSquare } from "lucide-react"

export function Pregunta23() {
  const { setValue, watch } = useFormContext<FormData>()
  const otroContacto = watch("otroContacto") || ""

  return (
    <div className="space-y-2 pt-4 border-t">
      <Label htmlFor="otroContacto" className="text-base font-medium flex items-center gap-2">
        <MessageSquare className="h-4 w-4 text-amber-600" />
        Indique cualquier otra forma de contacto
      </Label>
      <Input
        id="otroContacto"
        value={otroContacto}
        onChange={(e) => setValue("otroContacto", e.target.value)}
        placeholder="Otra forma de contacto"
        className="max-w-md"
      />
    </div>
  )
}


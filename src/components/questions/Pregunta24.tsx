"use client"

import { useFormContext } from "react-hook-form"
import type { FormData } from "../EthicsReportForm"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Briefcase } from "lucide-react"

export function Pregunta24() {
  const { setValue, watch } = useFormContext<FormData>()
  const cargo = watch("cargo") || ""

  return (
    <div className="space-y-2 pt-4 border-t">
      <Label htmlFor="cargo" className="text-base font-medium flex items-center gap-2">
        <Briefcase className="h-4 w-4 text-primary" />
        Indique el cargo que ocupa en el Grupo
      </Label>
      <Input
        id="cargo"
        value={cargo}
        onChange={(e) => setValue("cargo", e.target.value)}
        placeholder="Cargo o puesto"
        className="max-w-md"
      />
    </div>
  )
}


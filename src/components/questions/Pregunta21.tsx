"use client"

import { useFormContext } from "react-hook-form"
import type { FormData } from "../EthicsReportForm"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Phone } from "lucide-react"
import { useTranslation } from "react-i18next"

export function Pregunta21() {
  const { setValue, watch } = useFormContext<FormData>()
  const telefono = watch("telefono") || ""
  const { t } = useTranslation()

  return (
    <div className="space-y-2 pt-4 border-t">
      <Label htmlFor="telefono" className="text-base font-medium flex items-center gap-2">
        <Phone className="h-4 w-4 text-primary" />
        {t("personalInfo.fields.phone")}
      </Label>
      <Input
        id="telefono"
        value={telefono}
        onChange={(e) => setValue("telefono", e.target.value)}
        placeholder={t("personalInfo.fields.phone")}
        className="max-w-md"
      />
    </div>
  )
}


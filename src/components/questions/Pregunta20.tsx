"use client"

import { useFormContext } from "react-hook-form"
import type { FormData } from "../EthicsReportForm"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { User } from "lucide-react"
import { useTranslation } from "react-i18next"

export function Pregunta20() {
  const { setValue, watch } = useFormContext<FormData>()
  const nombreCompleto = watch("nombreCompleto") || ""
  const { t } = useTranslation()

  return (
    <div className="space-y-2">
      <Label htmlFor="nombreCompleto" className="text-base font-medium flex items-center gap-2">
        <User className="h-4 w-4 text-primary" />
        {t("personalInfo.fields.fullName")}
      </Label>
      <Input
        id="nombreCompleto"
        value={nombreCompleto}
        onChange={(e) => setValue("nombreCompleto", e.target.value)}
        placeholder={t("personalInfo.fields.fullName")}
        className="max-w-md"
      />
    </div>
  )
}


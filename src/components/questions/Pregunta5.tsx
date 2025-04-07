"use client"

import type React from "react"

import { useFormContext } from "react-hook-form"
import type { FormData } from "../EthicsReportForm"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useTranslation } from "react-i18next"

export function Pregunta5() {
  const { setValue, watch } = useFormContext<FormData>()
  const detalles = watch("detalles") || ""
  const maxCaracteres = 500
  const { t } = useTranslation()

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value
    if (value.length <= maxCaracteres) {
      setValue("detalles", value)
    }
  }

  return (
    <div>
      <Label htmlFor="detalles" className="text-base font-medium">
        {t("question5.label")} <span className="text-destructive">*</span>
      </Label>
      <Textarea
        id="detalles"
        value={detalles}
        onChange={handleChange}
        className="mt-2 min-h-[150px]"
        placeholder={t("question5.placeholder")}
        maxLength={maxCaracteres}
      />
      <div className="flex justify-end mt-1 text-sm text-muted-foreground">
        <span className={detalles.length > maxCaracteres * 0.8 ? "text-amber-500" : ""}>
          {detalles.length}/{maxCaracteres} {t("question5.characters")}
        </span>
      </div>
    </div>
  )
}


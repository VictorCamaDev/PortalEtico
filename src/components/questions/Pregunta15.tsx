"use client"

import { useFormContext } from "react-hook-form"
import type { FormData } from "../EthicsReportForm"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { DollarSign } from "lucide-react"
import { useTranslation } from "react-i18next"

export function Pregunta15() {
  const { setValue, watch } = useFormContext<FormData>()
  const beneficios = watch("beneficios") || ""
  const { t } = useTranslation()

  return (
    <div className="space-y-4 pt-4 border-t">
      <Label htmlFor="beneficios" className="text-base font-medium flex items-center gap-2">
        <DollarSign className="h-4 w-4 text-green-600" />
        {t("additionalQuestions.benefits")}
      </Label>
      <Textarea
        id="beneficios"
        value={beneficios}
        onChange={(e) => setValue("beneficios", e.target.value)}
        className="min-h-[100px]"
        placeholder={t("form.writeHere")}
      />
    </div>
  )
}


"use client"

import { useFormContext } from "react-hook-form"
import type { FormData } from "../EthicsReportForm"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Users } from "lucide-react"
import { useTranslation } from "react-i18next"

export function Pregunta16() {
  const { setValue, watch } = useFormContext<FormData>()
  const testigos = watch("testigos") || ""
  const { t } = useTranslation()

  return (
    <div className="space-y-4 pt-4 border-t">
      <Label htmlFor="testigos" className="text-base font-medium flex items-center gap-2">
        <Users className="h-4 w-4 text-blue-600" />
        {t("additionalQuestions.witnesses")}
      </Label>
      <Textarea
        id="testigos"
        value={testigos}
        onChange={(e) => setValue("testigos", e.target.value)}
        className="min-h-[100px]"
        placeholder={t("additionalQuestions.enterNamesOrDetails")}
      />
    </div>
  )
}


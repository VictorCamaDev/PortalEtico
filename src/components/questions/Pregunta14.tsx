"use client"

import { useFormContext } from "react-hook-form"
import type { FormData } from "../EthicsReportForm"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useTranslation } from "react-i18next"

export function Pregunta14() {
  const { setValue, watch } = useFormContext<FormData>()
  const relacion = watch("relacion") || ""
  const relacionOtro = watch("relacionOtro") || ""
  const { t } = useTranslation()

  return (
    <div className="space-y-4 pt-4 border-t">
      <Label className="text-base font-medium">{t("additionalQuestions.relationshipType")}</Label>

      <RadioGroup onValueChange={(value) => setValue("relacion", value)} value={relacion} className="space-y-3">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="Relación familiar" id="relacion_familiar" />
          <Label htmlFor="relacion_familiar" className="font-normal flex items-center gap-2">
            {t("additionalQuestions.familial")}
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="Relación laboral" id="relacion_laboral" />
          <Label htmlFor="relacion_laboral" className="font-normal flex items-center gap-2">
            {t("additionalQuestions.work")}
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="Relación amical" id="relacion_amical" />
          <Label htmlFor="relacion_amical" className="font-normal flex items-center gap-2">
            {t("additionalQuestions.friendship")}
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="Otra relación" id="relacion_otro" />
          <Label htmlFor="relacion_otro" className="font-normal flex items-center gap-2">
            {t("form.other")}
          </Label>
        </div>
      </RadioGroup>

      {relacion === "Otra relación" && (
        <div className="ml-6 space-y-2">
          <Label htmlFor="relacionOtro">{t("additionalQuestions.which")}</Label>
          <Input
            id="relacionOtro"
            value={relacionOtro}
            onChange={(e) => setValue("relacionOtro", e.target.value)}
            placeholder={t("form.specify")}
            className="max-w-md"
          />
        </div>
      )}
    </div>
  )
}


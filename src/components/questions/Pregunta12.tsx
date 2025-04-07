"use client"

import { useFormContext } from "react-hook-form"
import type { FormData } from "../EthicsReportForm"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useTranslation } from "react-i18next"

export function Pregunta12() {
  const { setValue, watch } = useFormContext<FormData>()
  const ocultado = watch("ocultado") || ""
  const comoOcultado = watch("comoOcultado") || ""
  const quienesOcultan = watch("quienesOcultan") || ""
  const { t } = useTranslation()

  return (
    <div className="space-y-4 pt-4 border-t">
      <Label className="text-base font-medium">{t("additionalQuestions.beingHidden")}</Label>

      <RadioGroup onValueChange={(value) => setValue("ocultado", value)} value={ocultado} className="flex gap-6">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="No" id="ocultado_no" />
          <Label htmlFor="ocultado_no" className="font-normal flex items-center gap-2">
            {t("form.no")}
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="Sí" id="ocultado_si" />
          <Label htmlFor="ocultado_si" className="font-normal flex items-center gap-2">
            {t("form.yes")}
          </Label>
        </div>
      </RadioGroup>

      {ocultado === "si" && (
        <div className="ml-6 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="comoOcultado">{t("additionalQuestions.how")}</Label>
            <Input
              id="comoOcultado"
              value={comoOcultado}
              onChange={(e) => setValue("comoOcultado", e.target.value)}
              placeholder={t("additionalQuestions.describeHowHidden")}
              className="max-w-md"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="quienesOcultan">{t("additionalQuestions.byWhom")}</Label>
            <Input
              id="quienesOcultan"
              value={quienesOcultan}
              onChange={(e) => setValue("quienesOcultan", e.target.value)}
              placeholder={t("additionalQuestions.enterNamesOrDetails")}
              className="max-w-md"
            />
          </div>
        </div>
      )}
    </div>
  )
}


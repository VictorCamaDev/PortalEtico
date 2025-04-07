"use client"

import { useFormContext } from "react-hook-form"
import type { FormData } from "../EthicsReportForm"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useTranslation } from "react-i18next"

export function Pregunta10() {
  const { setValue, watch } = useFormContext<FormData>()
  const conocimiento = watch("conocimiento") || ""
  const conocimientoOtro = watch("conocimientoOtro") || ""
  const { t } = useTranslation()

  return (
    <div className="space-y-4">
      <Label className="text-base font-medium">{t("additionalQuestions.howDidYouKnow")}</Label>

      <RadioGroup 
        onValueChange={(value) => setValue("conocimiento", value)} 
        value={conocimiento} 
        className="space-y-3"
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="me_sucedio" id="me_sucedio" />
          <Label htmlFor="me_sucedio" className="font-normal flex items-center gap-2">
            {t("additionalQuestions.itHappenedToMe")}
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="fui_testigo" id="fui_testigo" />
          <Label htmlFor="fui_testigo" className="font-normal flex items-center gap-2">
            {t("additionalQuestions.iWasWitness")}
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="compañero" id="compañero" />
          <Label htmlFor="compañero" className="font-normal flex items-center gap-2">
            {t("additionalQuestions.coworkerToldMe")}
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="escuche" id="escuche" />
          <Label htmlFor="escuche" className="font-normal flex items-center gap-2">
            {t("additionalQuestions.iOverheard")}
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="otro" id="otro" />
          <Label htmlFor="otro" className="font-normal flex items-center gap-2">
            {t("form.other")}
          </Label>
        </div>
      </RadioGroup>

      {conocimiento === "otro" && (
        <div className="ml-6 space-y-2">
          <Label htmlFor="conocimientoOtro">{t("form.specify")}</Label>
          <Input
            id="conocimientoOtro"
            value={conocimientoOtro}
            onChange={(e) => setValue("conocimientoOtro", e.target.value)}
            placeholder={t("form.writeHere")}
            className="max-w-md"
          />
        </div>
      )}
    </div>
  )
}


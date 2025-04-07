"use client"

import { useFormContext } from "react-hook-form"
import type { FormData } from "../EthicsReportForm"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useTranslation } from "react-i18next"

export function Pregunta11() {
  const { setValue, watch } = useFormContext<FormData>()
  const involucraExternos = watch("involucraExternos") || ""
  const quienesExternos = watch("quienesExternos") || ""
  const { t } = useTranslation()

  return (
    <div className="space-y-4 pt-4 border-t">
      <Label className="text-base font-medium">{t("additionalQuestions.involvesExternalPeople")}</Label>

      <RadioGroup
        onValueChange={(value) => setValue("involucraExternos", value)}
        value={involucraExternos}
        className="flex gap-6"
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="no" id="involucra_no" />
          <Label htmlFor="involucra_no" className="font-normal flex items-center gap-2">
            {t("form.no")}
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="si" id="involucra_si" />
          <Label htmlFor="involucra_si" className="font-normal flex items-center gap-2">
            {t("form.yes")}
          </Label>
        </div>
      </RadioGroup>

      {involucraExternos === "si" && (
        <div className="ml-6 space-y-2">
          <Label htmlFor="quienesExternos">{t("additionalQuestions.who")}</Label>
          <Input
            id="quienesExternos"
            value={quienesExternos}
            onChange={(e) => setValue("quienesExternos", e.target.value)}
            placeholder={t("additionalQuestions.enterNamesOrDetails")}
            className="max-w-md"
          />
        </div>
      )}
    </div>
  )
}


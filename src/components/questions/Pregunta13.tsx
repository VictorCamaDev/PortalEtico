"use client"

import { useFormContext } from "react-hook-form"
import type { FormData } from "../EthicsReportForm"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useTranslation } from "react-i18next"

export function Pregunta13() {
  const { setValue, watch } = useFormContext<FormData>()
  const conocimientoPrevio = watch("conocimientoPrevio") || ""
  const quienesConocen = watch("quienesConocen") || ""
  const comoConocen = watch("comoConocen") || ""
  const { t } = useTranslation()

  return (
    <div className="space-y-4 pt-4 border-t">
      <div>
        <Label className="text-base font-medium">{t("additionalQuestions.managementKnows")}</Label>
        <p className="text-sm text-muted-foreground mt-1">{t("additionalQuestions.managementInfo")}</p>
      </div>

      <RadioGroup
        onValueChange={(value) => setValue("conocimientoPrevio", value)}
        value={conocimientoPrevio}
        className="flex gap-6"
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="no" id="conocimiento_no" />
          <Label htmlFor="conocimiento_no" className="font-normal flex items-center gap-2">
            {t("form.no")}
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="si" id="conocimiento_si" />
          <Label htmlFor="conocimiento_si" className="font-normal flex items-center gap-2">
            {t("form.yes")}
          </Label>
        </div>
      </RadioGroup>

      {conocimientoPrevio === "si" && (
        <div className="ml-6 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="quienesConocen">{t("additionalQuestions.who")}</Label>
            <Input
              id="quienesConocen"
              value={quienesConocen}
              onChange={(e) => setValue("quienesConocen", e.target.value)}
              placeholder={t("additionalQuestions.enterNamesOrDetails")}
              className="max-w-md"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="comoConocen">{t("additionalQuestions.how")}</Label>
            <Input
              id="comoConocen"
              value={comoConocen}
              onChange={(e) => setValue("comoConocen", e.target.value)}
              placeholder={t("form.writeHere")}
              className="max-w-md"
            />
          </div>
        </div>
      )}
    </div>
  )
}


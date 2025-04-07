"use client"

import { useEffect } from "react"
import type { IProps1 } from "../../interfaces/ICuestionario"
import { useFormContext } from "react-hook-form"
import type { FormData } from "../EthicsReportForm"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { useTranslation } from "react-i18next"

export function Pregunta1({ onChange }: IProps1) {
  const { setValue, watch, register } = useFormContext<FormData>()
  const tiposSeleccionados = watch("tiposIrregularidad") || []
  const tipoIrregularidadOtro = watch("tipoIrregularidadOtro") || ""
  const { t } = useTranslation()

  // Opciones de irregularidades
  const tiposIrregularidades = [
    { value: "Conflictos de interes", label: t("question1.options.conflictsOfInterest") },
    { value: "Sobornos o coimas", label: t("question1.options.bribery") },
    { value: "Fuga de información confidencial", label: t("question1.options.confidentialInfoLeak") },
    { value: "Mal uso o abuso de los recursos del Grupo", label: t("question1.options.resourceMisuse") },
    { value: "Discriminación, intimidación, acoso u hostigamiento", label: t("question1.options.discrimination") },
    {
      value: "Destrucción o alteración de documentos o reportes del Grupo",
      label: t("question1.options.documentDestruction"),
    },
    { value: "Incumplimiento de leyes o regulaciones", label: t("question1.options.lawViolation") },
    { value: "Incumplimiento de políticas o procedimientos", label: t("question1.options.policyViolation") },
    { value: "Otras actividades ilegales o no éticas", label: t("question1.options.otherUnethical") },
  ]

  // Registrar el campo como requerido
  useEffect(() => {
    register("tiposIrregularidad", {
      required: t("errors.requiredField"),
      validate: (value) => (value && value.length > 0) || t("errors.selectAtLeastOne"),
    })
  }, [register, t])

  // Mantener la compatibilidad con el componente original
  useEffect(() => {
    if (onChange) {
      onChange({ tipoIrregularidad: tiposSeleccionados.join(", ") })
    }
  }, [tiposSeleccionados, onChange])

  const handleCheckboxChange = (value: string, checked: boolean) => {
    const currentValues = [...tiposSeleccionados]

    if (checked) {
      if (!currentValues.includes(value)) {
        setValue("tiposIrregularidad", [...currentValues, value])
      }
    } else {
      setValue(
        "tiposIrregularidad",
        currentValues.filter((v) => v !== value),
      )
    }
  }

  const includesOtro = tiposSeleccionados.includes("Otras actividades ilegales o no éticas")

  return (
    <div className="space-y-4">
      <div>
        <Label className="text-base font-medium">
          {t("question1.label")} <span className="text-destructive">*</span>
        </Label>
        <p className="text-sm text-muted-foreground mt-1 mb-3">{t("form.multipleSelection")}</p>

        <div className="space-y-3 mt-2">
          {tiposIrregularidades.map((tipo) => (
            <div key={tipo.value} className="flex items-center space-x-2">
              <Checkbox
                id={`tipo-${tipo.value}`}
                checked={tiposSeleccionados.includes(tipo.value)}
                onCheckedChange={(checked) => handleCheckboxChange(tipo.value, checked === true)}
              />
              <Label htmlFor={`tipo-${tipo.value}`} className="font-normal cursor-pointer">
                {tipo.label}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {includesOtro && (
        <div className="ml-6 space-y-2">
          <Label htmlFor="tipoIrregularidadOtro">
            {t("question1.specify")} <span className="text-destructive">*</span>
          </Label>
          <Input
            id="tipoIrregularidadOtro"
            value={tipoIrregularidadOtro}
            onChange={(e) => setValue("tipoIrregularidadOtro", e.target.value)}
            placeholder={t("question1.specify")}
            className="max-w-md"
            required={includesOtro}
          />
        </div>
      )}
    </div>
  )
}


"use client"

import { useFormContext } from "react-hook-form"
import type { FormData } from "../EthicsReportForm"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useTranslation } from "react-i18next"

export function Pregunta17() {
  const { setValue, watch } = useFormContext<FormData>()
  const relacionGrupo = watch("relacionGrupo") || ""
  const relacionGrupoOtro = watch("relacionGrupoOtro") || ""
  const { t } = useTranslation()

  return (
    <div className="space-y-4">
      <Label className="text-base font-medium">
        {t("question17.label")}
        <span className="text-destructive">*</span>
      </Label>

      <RadioGroup
        onValueChange={(value) => setValue("relacionGrupo", value)}
        value={relacionGrupo}
        className="space-y-3"
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="Empleado" id="rel_empleado" />
          <Label htmlFor="rel_empleado" className="font-normal flex items-center gap-2">
            {t("question17.options.employee")}
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="Proveedor" id="rel_proveedor" />
          <Label htmlFor="rel_proveedor" className="font-normal flex items-center gap-2">
            {t("question17.options.supplier")}
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="Cliente" id="rel_cliente" />
          <Label htmlFor="rel_cliente" className="font-normal flex items-center gap-2">
            {t("question17.options.client")}
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="Ex Empleado" id="rel_exempleado" />
          <Label htmlFor="rel_exempleado" className="font-normal flex items-center gap-2">
            {t("question17.options.exEmployee")}
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="Otro" id="rel_otro" />
          <Label htmlFor="rel_otro" className="font-normal flex items-center gap-2">
            {t("form.other")}
          </Label>
        </div>
      </RadioGroup>

      {relacionGrupo === "Otro" && (
        <div className="ml-6 space-y-2">
          <Label htmlFor="relacionGrupoOtro">{t("question17.specify")}</Label>
          <Input
            id="relacionGrupoOtro"
            value={relacionGrupoOtro}
            onChange={(e) => setValue("relacionGrupoOtro", e.target.value)}
            placeholder={t("form.writeHere")}
            className="max-w-md"
          />
        </div>
      )}
    </div>
  )
}


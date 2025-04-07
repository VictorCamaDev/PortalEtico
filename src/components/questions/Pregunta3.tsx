"use client"

import { useEffect } from "react"
import type { IProps3 } from "../../interfaces/ICuestionario"
import { useFormContext } from "react-hook-form"
import type { FormData } from "../EthicsReportForm"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useTranslation } from "react-i18next"

export function Pregunta3({ onChange }: IProps3) {
  const { setValue, watch, register } = useFormContext<FormData>()
  const ubicacion = watch("ubicacion") || { pais: "", provincia: "", ciudad: "", sede: "" }
  const sedeOtro = watch("ubicacion.sedeOtro") || ""
  const { t } = useTranslation()

  // Registrar campos como requeridos
  useEffect(() => {
    register("ubicacion.pais", { required: t("errors.countryRequired") })
    register("ubicacion.provincia", { required: t("errors.stateRequired") })
    register("ubicacion.ciudad", { required: t("errors.cityRequired") })
    register("ubicacion.sede", { required: t("errors.locationRequired") })
  }, [register, t])

  // Mantener la compatibilidad con el componente original
  useEffect(() => {
    if (onChange) {
      onChange(ubicacion)
    }
  }, [ubicacion, onChange])

  const handleChange = (field: string, value: string) => {
    setValue("ubicacion", { ...ubicacion, [field]: value })
  }

  return (
    <div>
      <Label className="text-base font-medium">
        {t("question3.label")} <span className="text-destructive">*</span>
      </Label>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
        <div>
          <Label htmlFor="ubicacion.pais">
            {t("question3.fields.country")} <span className="text-destructive">*</span>
          </Label>
          <Input
            id="ubicacion.pais"
            value={ubicacion.pais}
            onChange={(e) => handleChange("pais", e.target.value)}
            className="mt-1"
            required
          />
        </div>
        <div>
          <Label htmlFor="ubicacion.provincia">
            {t("question3.fields.state")} <span className="text-destructive">*</span>
          </Label>
          <Input
            id="ubicacion.provincia"
            value={ubicacion.provincia}
            onChange={(e) => handleChange("provincia", e.target.value)}
            className="mt-1"
            required
          />
        </div>
        <div>
          <Label htmlFor="ubicacion.ciudad">
            {t("question3.fields.city")} <span className="text-destructive">*</span>
          </Label>
          <Input
            id="ubicacion.ciudad"
            value={ubicacion.ciudad}
            onChange={(e) => handleChange("ciudad", e.target.value)}
            className="mt-1"
            required
          />
        </div>
        <div>
          <Label htmlFor="ubicacion.sede">
            {t("question3.fields.location")} <span className="text-destructive">*</span>
          </Label>
          <Select onValueChange={(value) => handleChange("sede", value)} value={ubicacion.sede} required>
            <SelectTrigger className="w-full mt-1">
              <SelectValue placeholder={t("form.select")} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="PlantaCajamarquilla">{t("question3.options.plantCajamarquilla")}</SelectItem>
              <SelectItem value="OficinasMiraflores">{t("question3.options.officesMiraflores")}</SelectItem>
              <SelectItem value="AlmacenPeriferico">{t("question3.options.peripheralWarehouse")}</SelectItem>
              <SelectItem value="Otro">{t("question3.options.other")}</SelectItem>
            </SelectContent>
          </Select>

          {ubicacion.sede === "Otro" && (
            <div className="mt-2">
              <Label htmlFor="ubicacion.sedeOtro">
                {t("question3.fields.specifyLocation")} <span className="text-destructive">*</span>
              </Label>
              <Input
                id="ubicacion.sedeOtro"
                value={sedeOtro}
                onChange={(e) => setValue("ubicacion.sedeOtro", e.target.value)}
                className="mt-1"
                required={ubicacion.sede === "Otro"}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}


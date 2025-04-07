"use client"

import { useEffect } from "react"
import { useFormContext } from "react-hook-form"
import type { FormData } from "../EthicsReportForm"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Mail } from "lucide-react"
import { useTranslation } from "react-i18next"

export function Pregunta22() {
  const {
    setValue,
    watch,
    register,
    formState: { errors },
  } = useFormContext<FormData>()
  const correo = watch("correo") || ""
  const anonimo = watch("anonimo") || ""
  const { t } = useTranslation()

  // Registrar el campo como requerido si el usuario no es anónimo
  useEffect(() => {
    register("correo", {
      required: anonimo === "no" ? t("errors.emailRequired") : false,
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: t("errors.invalidEmail"),
      },
    })
  }, [register, t, anonimo])

  return (
    <div className="space-y-2 pt-4 border-t">
      <Label htmlFor="correo" className="text-base font-medium flex items-center gap-2">
        <Mail className="h-4 w-4 text-blue-600" />
        {t("personalInfo.fields.email")} {anonimo === "no" && <span className="text-destructive">*</span>}
      </Label>
      <Input
        id="correo"
        type="email"
        value={correo}
        onChange={(e) => setValue("correo", e.target.value)}
        placeholder="ejemplo@correo.com"
        className={`max-w-md ${errors.correo ? "border-destructive" : ""}`}
        required={anonimo === "no"}
      />
      {errors.correo && (
        <p className="text-sm text-destructive">{errors.correo.message?.toString() || t("errors.emailRequired")}</p>
      )}
    </div>
  )
}


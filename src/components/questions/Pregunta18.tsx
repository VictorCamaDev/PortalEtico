"use client"

import { useEffect } from "react"
import { useFormContext } from "react-hook-form"
import type { FormData } from "../EthicsReportForm"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { UserRound, UserX2, Mail } from "lucide-react"
import { useTranslation } from "react-i18next"

export function Pregunta18() {
  const {
    setValue,
    watch,
    register,
    formState: { errors },
  } = useFormContext<FormData>()
  const anonimo = watch("anonimo") || ""
  const correoContacto = watch("correoContacto") || ""
  const { t } = useTranslation()

  // Registrar los campos como requeridos
  useEffect(() => {
    register("anonimo", { required: t("errors.anonymityRequired") })

    // Registrar correoContacto con validación condicional
    register("correoContacto", {
      required: anonimo === "Sí" ? t("errors.emailRequired") : false,
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: t("errors.invalidEmail"),
      },
    })
  }, [register, t, anonimo])

  return (
    <div className="space-y-4 pt-4 border-t">
      <Label className="text-base font-medium">
        {t("question18.label")} <span className="text-destructive">*</span>
      </Label>

      <RadioGroup onValueChange={(value) => setValue("anonimo", value)} value={anonimo} className="flex gap-6">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="No" id="anonimo_no" />
          <Label htmlFor="anonimo_no" className="font-normal flex items-center gap-2">
            <UserRound className="h-4 w-4 text-primary" /> {t("form.no")}
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="Sí" id="anonimo_si" />
          <Label htmlFor="anonimo_si" className="font-normal flex items-center gap-2">
            <UserX2 className="h-4 w-4 text-gray-600" /> {t("form.yes")}
          </Label>
        </div>
      </RadioGroup>

      {anonimo === "Sí" && (
        <div className="ml-6 space-y-2 pt-4">
          <Label htmlFor="correoContacto" className="text-base font-medium flex items-center gap-2">
            <Mail className="h-4 w-4 text-blue-600" />
            {t("question18.emailContact")} <span className="text-destructive">*</span>
          </Label>
          <Input
            id="correoContacto"
            type="email"
            value={correoContacto}
            onChange={(e) => setValue("correoContacto", e.target.value)}
            placeholder="ejemplo@correo.com"
            className={`max-w-md ${errors.correoContacto ? "border-destructive" : ""}`}
            required
          />
          {errors.correoContacto && (
            <p className="text-sm text-destructive">
              {errors.correoContacto.message?.toString() || t("errors.emailRequired")}
            </p>
          )}
          <p className="text-sm text-muted-foreground">{t("question18.emailNote")}</p>
        </div>
      )}
    </div>
  )
}


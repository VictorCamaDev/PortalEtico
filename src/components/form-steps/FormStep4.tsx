"use client"

import { useFormContext } from "react-hook-form"
import type { FormData } from "../EthicsReportForm"
import { Pregunta20 } from "../questions/Pregunta20"
import { Pregunta21 } from "../questions/Pregunta21"
import { Pregunta22 } from "../questions/Pregunta22"
import { Pregunta23 } from "../questions/Pregunta23"
import { Pregunta24 } from "../questions/Pregunta24"
import { Pregunta25 } from "../questions/Pregunta25"
import { AlertCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useTranslation } from "react-i18next"

export function FormStep4() {
  const { watch } = useFormContext<FormData>()
  const { t } = useTranslation()

  const anonimo = watch("anonimo")

  // Si el usuario eligió ser anónimo, mostrar mensaje y no mostrar campos
  if (anonimo === "si") {
    return (
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold text-primary mb-4">{t("personalInfo.title")}</h2>

          <Alert variant="default" className="bg-amber-50 border-amber-200">
            <AlertCircle className="h-4 w-4 text-amber-600" />
            <AlertDescription className="text-amber-800">{t("personalInfo.anonymous")}</AlertDescription>
          </Alert>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-primary mb-4">{t("personalInfo.title")}</h2>

        <p className="text-muted-foreground mb-4">{t("personalInfo.subtitle")}</p>

        <div className="space-y-6">
          {/* Usar los componentes de preguntas individuales */}
          <Pregunta20 />
          <Pregunta21 />
          <Pregunta22 />
          <Pregunta23 />
          <Pregunta24 />
          <Pregunta25 />
        </div>
      </div>
    </div>
  )
}


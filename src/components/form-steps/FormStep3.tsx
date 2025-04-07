"use client"

import { useFormContext } from "react-hook-form"
import type { FormData } from "../EthicsReportForm"
import { Pregunta17 } from "../questions/Pregunta17"
import { Pregunta18 } from "../questions/Pregunta18"
import { useEffect } from "react"
import { useTranslation } from "react-i18next"

export function FormStep3() {
  const {
    register,
    watch,
    formState: {},
  } = useFormContext<FormData>()
  const { t } = useTranslation()

  const anonimo = watch("anonimo")

  // Efecto para mostrar/ocultar campos de información personal
  useEffect(() => {
    if (anonimo === "no") {
      // Mostrar sección de información personal
      const elements = document.querySelectorAll('[id^="anonimato"]')
      elements.forEach((el) => {
        ;(el as HTMLElement).style.display = "block"
      })
    } else {
      // Ocultar sección de información personal
      const elements = document.querySelectorAll('[id^="anonimato"]')
      elements.forEach((el) => {
        ;(el as HTMLElement).style.display = "none"
      })
    }
  }, [anonimo])

  // Registrar los campos manualmente
  useEffect(() => {
    register("relacionGrupo", { required: t("errors.relationRequired") })
    register("anonimo", { required: t("errors.anonymityRequired") })
  }, [register, t])

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-primary mb-4">{t("steps.contact")}</h2>

        <div className="space-y-6">
          {/* Usar los componentes de preguntas individuales */}
          <Pregunta17 />
          <Pregunta18 />
        </div>
      </div>
    </div>
  )
}


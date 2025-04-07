"use client"

import { useFormContext } from "react-hook-form"
import type { FormData } from "../EthicsReportForm"
import { Pregunta1 } from "../questions/Pregunta1"
import { Pregunta2 } from "../questions/Pregunta2"
import { Pregunta3 } from "../questions/Pregunta3"
import { Pregunta4 } from "../questions/Pregunta4"
import { Pregunta5 } from "../questions/Pregunta5"
import { Pregunta6 } from "../questions/Pregunta6"
import { useEffect } from "react"

export function FormStep1() {
  const {
    register,
    // control,
    formState: {},
  } = useFormContext<FormData>()

  useEffect(() => {
    register("detalles", { required: true })
  }, [register])

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-primary mb-4">Datos Principales de la Irregularidad</h2>

        <div className="space-y-6">
          {/* Usar los componentes de preguntas individuales */}
          <Pregunta1 onChange={() => {}} />

          <Pregunta2 onChange={() => {}} />

          <Pregunta3 onChange={() => {}} />

          <Pregunta4 onChange={() => {}} />

          <Pregunta5 />

          <Pregunta6 />
        </div>
      </div>
    </div>
  )
}


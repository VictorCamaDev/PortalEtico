"use client"

import type React from "react"

import { useState } from "react"
import { Eye, User, Users, Ear, MoreHorizontal } from "lucide-react" // Importamos iconos

export function Pregunta10() {
  const [opcionSeleccionada, setOpcionSeleccionada] = useState("")
  const [otroTexto, setOtroTexto] = useState("")

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOpcionSeleccionada(e.target.value)
    if (e.target.value !== "p10_5") {
      setOtroTexto("") // Limpiar el campo "Otros" si no está seleccionado
    }
  }

  return (
    <tr>
      <td width="100%" valign="top">
        <h3 className="title">¿Cómo tomó conocimiento de estos hechos?</h3>

        <div className="radio-group">
          <label className="radio-option">
            <User className="icon" size={18} />
            <input
              type="radio"
              name="rbtn_pregunta10"
              value="p10_1"
              checked={opcionSeleccionada === "p10_1"}
              onChange={handleRadioChange}
            />
            Me sucedió a mí
          </label>

          <label className="radio-option">
            <Eye className="icon" size={18} />
            <input
              type="radio"
              name="rbtn_pregunta10"
              value="p10_2"
              checked={opcionSeleccionada === "p10_2"}
              onChange={handleRadioChange}
            />
            Fui testigo
          </label>

          <label className="radio-option">
            <Users className="icon" size={18} />
            <input
              type="radio"
              name="rbtn_pregunta10"
              value="p10_3"
              checked={opcionSeleccionada === "p10_3"}
              onChange={handleRadioChange}
            />
            Un compañero de trabajo me comentó la situación
          </label>

          <label className="radio-option">
            <Ear className="icon" size={18} />
            <input
              type="radio"
              name="rbtn_pregunta10"
              value="p10_4"
              checked={opcionSeleccionada === "p10_4"}
              onChange={handleRadioChange}
            />
            Lo escuché de casualidad
          </label>

          <label className="radio-option">
            <MoreHorizontal className="icon" size={18} />
            <input
              type="radio"
              name="rbtn_pregunta10"
              value="p10_5"
              checked={opcionSeleccionada === "p10_5"}
              onChange={handleRadioChange}
            />
            Otros
          </label>
        </div>

        {opcionSeleccionada === "p10_5" && (
          <div className="mt-3">
            <label className="font-medium">Especificar</label>
            <input
              className="input-field"
              name="txtConocimientoOtro"
              type="text"
              maxLength={25}
              value={otroTexto}
              onChange={(e) => setOtroTexto(e.target.value)}
              placeholder="Escriba aquí..."
            />
          </div>
        )}
      </td>
    </tr>
  )
}


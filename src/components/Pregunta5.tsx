"use client"

import type React from "react"

import { useState } from "react"
import { FaInfoCircle } from "react-icons/fa" // Importamos el icono de información

export function Pregunta5() {
  const [detalles, setDetalles] = useState("")
  const maxCaracteres = 500

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value
    if (value.length <= maxCaracteres) {
      setDetalles(value)
    }
  }

  return (
    <tr>
      <td width="100%" valign="top">
        <h3 className="title">Describa todos los detalles que ayuden a analizar y evaluar su irregularidad</h3>
        <textarea
          className="input-textarea"
          id="ta1"
          rows={8}
          placeholder="Escriba los detalles aquí..."
          value={detalles}
          onChange={handleChange}
        />
        <div className="character-count">
          <span
            style={{
              color: detalles.length > maxCaracteres * 0.8 ? "red" : "black",
            }}
          >
            Caracteres disponibles: {maxCaracteres - detalles.length}
          </span>
        </div>
      </td>
      <td width="0%" valign="top">
        <div className="help-info" id="ayudaDetalle">
          <FaInfoCircle className="icon-info" /> {/* Icono agregado */}
          <span>Considere incluir detalles sobre involucrados, fechas, hechos clave y lugares relevantes.</span>
        </div>
      </td>
    </tr>
  )
}


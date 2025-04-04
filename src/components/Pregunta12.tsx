"use client"

import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"

export function Pregunta12() {
  const [ocultado, setOcultado] = useState<string | null>(null)

  return (
    <tr id="s2_p5" className="block">
      <tr>
        <td colSpan={2}>
          <hr className="border-green-700" />
        </td>
      </tr>

      {/* Contenido de la pregunta */}
      <tr id="s2_p5">
        <td className="w-full" valign="top">
          <h3 className="title">¿Cree usted que estos hechos están siendo ocultados de alguna manera?</h3>
          <div className="mt-2 flex gap-5">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="radioOcultado"
                value="no"
                className="form-check-input"
                onChange={() => setOcultado("no")}
              />
              <Eye size={18} className="text-green-500" /> No
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="radioOcultado"
                value="si"
                className="form-check-input"
                onChange={() => setOcultado("si")}
              />
              <EyeOff size={18} className="text-red-500" /> Sí
            </label>
          </div>

          {ocultado === "si" && (
            <div id="p12" className="mt-3">
              <h4 className="title">¿Cómo?</h4>
              <input
                className="form-control border border-gray-300 rounded-md p-2 mt-1 w-full focus:ring-2 focus:ring-red-600"
                name="txtOcultado1"
                type="text"
                maxLength={50}
                placeholder="Describa cómo se está ocultando..."
              />
              <h4 className="pregunta mt-3">¿Por quiénes?</h4>
              <input
                className="form-control border border-gray-300 rounded-md p-2 mt-1 w-full focus:ring-2 focus:ring-red-600"
                name="txtOcultado2"
                type="text"
                maxLength={50}
                placeholder="Ingrese nombres o detalles..."
              />
            </div>
          )}
        </td>
      </tr>
    </tr>
  )
}


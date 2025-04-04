"use client"

import { useState } from "react"
import { UserCheck, UserX } from "lucide-react"

export function Pregunta13() {
  const [conocPrevio, setConocPrevio] = useState<string | null>(null)

  return (
    <tr id="s2_p7" className="block">
      <tr>
        <td colSpan={2}>
          <hr className="border-green-700" />
        </td>
      </tr>

      {/* Contenido de la pregunta */}
      <tr id="s2_p7">
        <td className="w-full" valign="top">
          <h3 className="title">¿Alguna dirección, gerencia, subgerencia o jefatura conoce de estos hechos?</h3>
          <p className="text-sm text-gray-600">
            Indique si alguien en un cargo de responsabilidad tiene conocimiento previo sobre esta irregularidad.
          </p>

          <div className="mt-2 flex gap-5">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="radioConocPrevio"
                value="no"
                className="form-check-input"
                onChange={() => setConocPrevio("no")}
              />
              <UserX size={18} className="text-green-500" /> No
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="radioConocPrevio"
                value="si"
                className="form-check-input"
                onChange={() => setConocPrevio("si")}
              />
              <UserCheck size={18} className="text-red-500" /> Sí
            </label>
          </div>

          {conocPrevio === "si" && (
            <div id="p13" className="mt-3">
              <h4 className="title">¿Quiénes?</h4>
              <input
                className="form-control border border-gray-300 rounded-md p-2 mt-1 w-full focus:ring-2 focus:ring-red-600"
                name="txtConocPrevio1"
                type="text"
                maxLength={50}
                placeholder="Ingrese nombres o áreas responsables..."
              />
              <h4 className="pregunta mt-3">¿Cómo?</h4>
              <input
                className="form-control border border-gray-300 rounded-md p-2 mt-1 w-full focus:ring-2 focus:ring-red-600"
                name="txtConocPrevio2"
                type="text"
                maxLength={50}
                placeholder="Explique cómo se enteraron..."
              />
            </div>
          )}
        </td>
      </tr>
    </tr>
  )
}


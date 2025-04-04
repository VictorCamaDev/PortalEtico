"use client"

import { useState } from "react"
import { Briefcase, HeartHandshake, UserPlus, HelpCircle } from 'lucide-react'

export function Pregunta14() {
  const [relacion, setRelacion] = useState<string | null>(null)

  return (
    <tr id="s2_p9" className="block">
      <tr>
        <td colSpan={2}>
          <hr className="border-green-700" />
        </td>
      </tr>

      {/* Contenido de la pregunta */}
      <tr id="s2_p9">
        <td className="w-full" valign="top">
          <h3 className="title">¿Qué tipo de relación existe entre las personas involucradas?</h3>

          <div className="mt-3 flex flex-col gap-2">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="radioRelacion"
                value="Familiar"
                className="form-check-input"
                onChange={() => setRelacion("Familiar")}
              />
              <HeartHandshake size={18} className="text-red-500" /> Familiar
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="radioRelacion"
                value="Laboral"
                className="form-check-input"
                onChange={() => setRelacion("Laboral")}
              />
              <Briefcase size={18} className="text-green-500" /> Laboral
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="radioRelacion"
                value="Amical"
                className="form-check-input"
                onChange={() => setRelacion("Amical")}
              />
              <UserPlus size={18} className="text-blue-500" /> Amical
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="radioRelacion"
                value="Otro"
                className="form-check-input"
                onChange={() => setRelacion("Otro")}
              />
              <HelpCircle size={18} className="text-yellow-500" /> Otro
            </label>
          </div>

          {relacion === "Otro" && (
            <div id="p14" className="mt-3">
              <h4 className="title">¿Cuál?</h4>
              <input
                className="form-control border border-gray-300 rounded-md p-2 mt-1 w-full focus:ring-2 focus:ring-yellow-600"
                name="txtRelacion"
                type="text"
                maxLength={50}
                placeholder="Especifica la relación..."
              />
            </div>
          )}
        </td>
      </tr>
    </tr>
  )
}


"use client"

import { useState } from "react"
import { Users, UserX } from "lucide-react"

export function Pregunta11() {
  const [involucraExternos, setInvolucraExternos] = useState<string | null>(null)

  return (
    <tr id="s2_p3" className="block">
      <tr>
        <td colSpan={2}>
          <hr className="border-green-700" />
        </td>
      </tr>

      {/* Contenido principal */}
      <tr id="s2_p3">
        <td className="w-full" valign="top">
          <h3 className="title">¿Este incidente involucra a personas externas al grupo?</h3>

          <div className="mt-2 flex gap-5">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="radioInvolucra"
                value="no"
                className="form-check-input"
                onChange={() => setInvolucraExternos("no")}
              />
              <UserX size={18} className="text-red-500" /> No
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="radioInvolucra"
                value="si"
                className="form-check-input"
                onChange={() => setInvolucraExternos("si")}
              />
              <Users size={18} className="text-green-500" /> Sí
            </label>
          </div>

          {involucraExternos === "si" && (
            <div id="p11" className="mt-3">
              <h4 className="title">¿Quiénes?</h4>
              <input
                className="form-control border border-gray-300 rounded-md p-2 mt-1 w-full focus:ring-2 focus:ring-green-600"
                name="txtInvolucraSi"
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


"use client"

import type React from "react"

import { useState } from "react"
import { FileText, MapPin, Users } from "lucide-react" // Importamos los íconos

export function Pregunta9() {
  const [respuesta, setRespuesta] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setRespuesta(e.target.value)
  }

  return (
    <tr>
      <td className="w-full" valign="top">
        <h3 className="text-lg font-semibold text-green-600 flex items-center gap-2">
          <MapPin size={20} /> ¿Dónde podría el Grupo obtener evidencia de las irregularidades?
        </h3>
        <p className="text-sm text-gray-600 flex items-center gap-2">
          <FileText size={18} /> Incluya detalles como lugares, documentos, personas relacionadas, etc.
        </p>

        <textarea
          className="mt-3 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600"
          rows={4}
          maxLength={256}
          placeholder="Escribe aquí..."
          value={respuesta}
          onChange={handleChange}
        />

        <p className="mt-2 text-gray-500 text-sm flex items-center gap-2">
          <Users size={18} /> Caracteres restantes: {256 - respuesta.length}
        </p>
      </td>
    </tr>
  )
}


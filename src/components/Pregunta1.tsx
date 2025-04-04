"use client"

import { type ChangeEvent, useEffect, useState } from "react"
import type { IPregunta1Props, IProps1 } from "../interfaces/ICuestionario"
import { MdReportProblem } from "react-icons/md" // Icono de reporte
import { FiChevronDown } from "react-icons/fi" // Icono de flecha abajo

export function Pregunta1({ onChange }: IProps1) {
  const [IrregularidadSel, setTipoIrregularidad] = useState<IPregunta1Props>({
    tipoIrregularidad: "",
  })

  useEffect(() => {
    onChange(IrregularidadSel)
  }, [IrregularidadSel, onChange])

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    console.log("seleccionado-->", e.target.value)
    setTipoIrregularidad({ tipoIrregularidad: e.target.value })
  }

  return (
    <tr>
      <td width="100%" valign="top">
        <span className="pregunta flex items-center gap-2 text-lg font-semibold">
          <MdReportProblem className="text-red-600" size={24} />
          Seleccione el tipo de irregularidad que desea reportar
        </span>
        <br />
        <div className="relative">
          <select
            name="tipoIrregularidad"
            className="form-control w-full p-2 border rounded-lg appearance-none pr-8"
            value={IrregularidadSel.tipoIrregularidad}
            onChange={handleChange}
          >
            <option value="">Seleccione...</option>
            <option value="Conflictos de interes">⚖️ Conflictos de interés</option>
            <option value="Sobornos o coimas ">💰 Sobornos o coimas</option>
            <option value="Fuga de información confidencial">🔓 Fuga de información</option>
            <option value="Mal uso o abuso de los recursos del Grupo.">🏢 Mal uso de recursos</option>
            <option value="Discriminación, intimidación, acoso u hostigamiento">🚫 Discriminación/Acoso</option>
            <option value="Destrucción o alteración de documentos o reportes del Grupo">
              📝 Destrucción de documentos
            </option>
            <option value="Incumplimiento de leyes o regulaciones">⚖️ Incumplimiento de leyes</option>
            <option value="Incumplimiento de pol&iacuteticas o procedimientos">📋 Incumplimiento de políticas</option>
            <option value="Otras actividades ilegales o no éticas">⚠️ Actividades no éticas</option>
          </select>
          <FiChevronDown className="absolute top-3 right-3 text-gray-500 pointer-events-none" size={20} />
        </div>
      </td>
      <td width="0%" valign="top"></td>
    </tr>
  )
}


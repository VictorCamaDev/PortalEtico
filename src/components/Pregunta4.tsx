"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { FaCalendarAlt } from "react-icons/fa"
import type { IProps4 } from "../interfaces/ICuestionario"

export function Pregunta4({ onChange }: IProps4) {
  const [fecha, setFecha] = useState("")

  useEffect(() => {
    onChange({ fecha })
  }, [fecha, onChange])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFecha(e.target.value)
  }

  return (
    <tr>
      <td width="100%" valign="top">
        <h3 className="title">Indique la fecha o período en el cual sucedió el incidente</h3>
        <div className="input-wrapper">
          <FaCalendarAlt className="icon" />
          <input className="input-field" name="txtFecha" type="date" value={fecha} onChange={handleChange} />
        </div>
      </td>
      <td width="0%" valign="top"></td>
    </tr>
  )
}
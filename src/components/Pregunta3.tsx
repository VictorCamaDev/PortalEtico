"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { FaGlobe, FaMapMarkedAlt, FaCity, FaBuilding } from "react-icons/fa" // Importamos iconos
import type { IPregunta3Props, IProps3 } from "../interfaces/ICuestionario"

export function Pregunta3({ onChange }: IProps3) {
  const [lugarIncidente, setLugarIncidente] = useState<IPregunta3Props>({
    pais: "",
    provincia: "",
    ciudad: "",
    sede: "",
  })

  useEffect(() => {
    onChange(lugarIncidente)
  }, [lugarIncidente, onChange])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setLugarIncidente((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <tr>
      <td width="100%" valign="top">
        <h3 className="title">Indique en qué lugar sucedió el incidente</h3>
        <table width="100%" className="table-form">
          <tbody>
            <tr>
              <td className="input-cell">
                <label className="label">País</label>
                <div className="input-wrapper">
                  <FaGlobe className="icon" />
                  <input
                    className="input-field"
                    name="pais"
                    type="text"
                    maxLength={25}
                    value={lugarIncidente.pais}
                    onChange={handleChange}
                  />
                </div>
              </td>
              <td />
              <td className="input-cell">
                <label className="label">Estado / Provincia</label>
                <div className="input-wrapper">
                  <FaMapMarkedAlt className="icon" />
                  <input
                    name="provincia"
                    className="input-field"
                    type="text"
                    maxLength={25}
                    value={lugarIncidente.provincia}
                    onChange={handleChange}
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td className="input-cell">
                <label className="label">Ciudad</label>
                <div className="input-wrapper">
                  <FaCity className="icon" />
                  <input
                    name="ciudad"
                    className="input-field"
                    type="text"
                    maxLength={25}
                    value={lugarIncidente.ciudad}
                    onChange={handleChange}
                  />
                </div>
              </td>
              <td />
              <td className="input-cell">
                <label className="label">Sede</label>
                <div className="input-wrapper">
                  <FaBuilding className="icon" />
                  <select className="input-field" value={lugarIncidente.sede} onChange={handleChange} name="sede">
                    <option value="empty" />
                    <option value="PlantaCajamarquilla">Planta Cajamarquilla</option>
                    <option value="OficinasMiraflores">Oficinas Miraflores</option>
                    <option value="AlmacenPeriferico">Almacén periférico</option>
                    <option value="Otro">Otro (especificar)</option>
                  </select>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </td>
      <td width="0%" valign="top"></td>
    </tr>
  )
}


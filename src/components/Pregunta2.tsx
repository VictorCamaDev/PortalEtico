"use client"

import { useState, useEffect } from "react"
import { FaPlusCircle, FaTrashAlt } from "react-icons/fa" // Importamos iconos
import type { IPregunta2Props, IProps2 } from "../interfaces/ICuestionario"

export function Pregunta2({ onChange }: IProps2) {
  const [involucrados, setInvolucrados] = useState<IPregunta2Props[]>([
    { id: 1, nombre: "", apellido: "", relacion: "", otro: "" },
  ])

  useEffect(() => {
    onChange(involucrados)
  }, [involucrados, onChange])

  const agregarInvolucrado = () => {
    setInvolucrados((prev) => [...prev, { id: prev.length + 1, nombre: "", apellido: "", relacion: "", otro: "" }])
  }

  const handleChange = (id: number, field: keyof IPregunta2Props, value: string) => {
    setInvolucrados((prev) => prev.map((inv) => (inv.id === id ? { ...inv, [field]: value } : inv)))
  }

  const limpiarData = () => {
    setInvolucrados([{ id: 1, nombre: "", apellido: "", relacion: "", otro: "" }])
  }

  return (
    <tr>
      <td width="100%" valign="top">
        <h3 className="title">Identifique a las personas involucradas:</h3>

        {/* Botón de agregar con icono */}
        <button onClick={agregarInvolucrado} className="btn-agregar">
          <FaPlusCircle size={20} style={{ marginRight: "8px" }} />
          Agregar involucrado
        </button>

        <div id="involucrados" className="involucrados-list">
          {involucrados.map((inv) => (
            <fieldset key={inv.id} className="involucrado-fieldset">
              <legend>Involucrado Nro. {inv.id}</legend>
              <table className="involucrado-table">
                <tbody>
                  <tr>
                    <td className="input-cell">
                      <label className="label">Nombres</label>
                      <input
                        type="text"
                        placeholder="Nombre"
                        value={inv.nombre}
                        onChange={(e) => handleChange(inv.id, "nombre", e.target.value)}
                        className="input-field"
                      />
                    </td>
                    <td />
                    <td className="input-cell">
                      <label className="label">Apellidos</label>
                      <input
                        type="text"
                        placeholder="Apellido"
                        value={inv.apellido}
                        onChange={(e) => handleChange(inv.id, "apellido", e.target.value)}
                        className="input-field"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="input-cell">
                      <label className="label">Relación con el Grupo</label>
                      <select
                        value={inv.relacion}
                        onChange={(e) => handleChange(inv.id, "relacion", e.target.value)}
                        className="input-field"
                      >
                        <option value="empty" />
                        <option value="Empleado">Empleado</option>
                        <option value="Proveedor">Proveedor</option>
                        <option value="Cliente">Cliente</option>
                        <option value="Inversionista">Inversionista</option>
                        <option value="Otro">Otro</option>
                      </select>
                    </td>
                    <td />
                    <td className="input-cell">
                      <label className="label">Especificar (empresa / cargo / otro)</label>
                      <input
                        type="text"
                        value={inv.otro}
                        onChange={(e) => handleChange(inv.id, "otro", e.target.value)}
                        className="input-field"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </fieldset>
          ))}
        </div>

        {/* Botón de limpiar con icono */}
        <button className="btn-limpiar" type="button" onClick={limpiarData}>
          <FaTrashAlt size={18} style={{ marginRight: "8px" }} />
          Limpiar Lista
        </button>
      </td>
    </tr>
  )
}


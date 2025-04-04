"use client"

import type React from "react"

import { useState } from "react"
import imgQuitar from "../assets/images/quitar.png"

export function Pregunta6() {
  const [selectedOption, setSelectedOption] = useState<string>("")
  const [archivos, setArchivos] = useState<File[]>([])

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(e.target.value)
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && archivos.length < 5) {
      setArchivos([...archivos, e.target.files[0]])
    }
  }

  const removeFile = (index: number) => {
    setArchivos(archivos.filter((_, i) => i !== index))
  }

  return (
    <table>
      <tbody>
        <tr>
          <td width="100%" valign="top">
            <h3 className="title">¿Posee usted evidencia física o digital que pueda ayudar en la investigación?</h3>

            <fieldset className="radio-group">
              <legend>Seleccione una opción</legend>
              {[
                { value: "p6_1", label: "No me es posible proporcionar evidencias de ningún tipo" },
                { value: "p6_2", label: "No tengo evidencias, pero podría obtenerlas" },
                { value: "p6_3", label: "Tengo evidencia física y digital que me gustaría entregar" },
                { value: "p6_4", label: "Tengo evidencia física que deseo entregar" },
                { value: "p6_5", label: "Tengo evidencia digital que deseo entregar" },
              ].map((opt) => (
                <div key={opt.value} className="radio-option">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="rbtnevidencia"
                    value={opt.value}
                    checked={selectedOption === opt.value}
                    onChange={handleRadioChange}
                  />
                  <label className="form-check-label">{opt.label}</label>
                </div>
              ))}
            </fieldset>

            {/* Pregunta 7: Forma de entrega evidencia física */}
            {selectedOption === "p6_4" && (
              <div className="mt-3">
                <h4>Indique la forma en la que entregará la información física</h4>
                <input className="input-text" name="txtInfoFisica" type="text" maxLength={50} />
              </div>
            )}

            {/* Pregunta 8: Adjuntar archivos digitales */}
            {selectedOption === "p6_5" && (
              <div className="mt-3">
                <h4>Seleccione evidencias digitales (máx. 5 archivos, 20MB)</h4>
                <input type="file" onChange={handleFileChange} />
                <div id="archivos">
                  {archivos.map((file, index) => (
                    <div key={index} className="input-container">
                      <span>{file.name}</span>
                      <img
                        alt="Quitar archivo"
                        src={imgQuitar}
                        className="remove-file"
                        onClick={() => removeFile(index)}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Pregunta 9 o 10 */}
            {["p6_1", "p6_2"].includes(selectedOption) && (
              <TextAreaField label="¿Dónde el Grupo podría obtener evidencia?" />
            )}
            {["p6_3", "p6_4", "p6_5"].includes(selectedOption) && (
              <TextAreaField label="¿Dónde más se podría obtener evidencia?" />
            )}
          </td>
          <td width="0%" valign="top"></td>
        </tr>
      </tbody>
    </table>
  )
}

const TextAreaField = ({ label }: { label: string }) => (
  <div className="mt-3">
    <h4>{label}</h4>
    <textarea className="input-textarea" rows={3} maxLength={256} placeholder="Escribe aquí..." />
  </div>
)


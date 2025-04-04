"use client"

import type React from "react"

import { useState } from "react"
import { Trash2, UploadCloud } from "lucide-react" // Importamos los íconos

export function Pregunta8() {
  const [archivos, setArchivos] = useState<File[]>([])
  const maxArchivos = 5
  const maxTamañoTotal = 20 * 1024 * 1024 // 20MB en bytes

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return
    const nuevoArchivo = e.target.files[0]

    // Validar número de archivos
    if (archivos.length >= maxArchivos) {
      alert("No puedes subir más de 5 archivos.")
      return
    }

    // Validar tamaño total de los archivos
    const tamañoTotal = archivos.reduce((sum, file) => sum + file.size, 0) + nuevoArchivo.size
    if (tamañoTotal > maxTamañoTotal) {
      alert("El tamaño total de los archivos no puede superar los 20MB.")
      return
    }

    // Agregar archivo al estado
    setArchivos([...archivos, nuevoArchivo])
  }

  const removeFile = (index: number) => {
    setArchivos(archivos.filter((_, i) => i !== index))
  }

  return (
    <tr id="p8">
      <td className="w-full" valign="top">
        <h3 className="title">
          <UploadCloud size={20} /> Seleccione evidencias digitales
        </h3>
        <p className="text">
          Puede adjuntar un máximo de <b>5 archivos</b> con un tamaño total de <b>20MB</b>.
        </p>

        <div id="archivos">
          {archivos.map((file, index) => (
            <div key={index} className="input-container flex items-center justify-between border p-2 rounded-md mt-2">
              <span>
                {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
              </span>
              <Trash2 size={20} className="text-red-500 cursor-pointer" onClick={() => removeFile(index)} />
            </div>
          ))}
        </div>

        {archivos.length < maxArchivos && (
          <div className="mt-3">
            <input type="file" className="input-file" onChange={handleFileChange} />
          </div>
        )}

        <p className="text-danger mt-3">
          Los archivos se adjuntarán al enviar el formulario. No cierre esta ventana hasta recibir la confirmación.
        </p>
      </td>
      <td className="w-0" valign="top"></td>
    </tr>
  )
}


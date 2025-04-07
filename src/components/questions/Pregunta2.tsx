"use client"

import { useEffect } from "react"
import type { IProps2 } from "../../interfaces/ICuestionario"
import { useFormContext } from "react-hook-form"
import type { FormData } from "../EthicsReportForm"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, Trash2 } from "lucide-react"
import { useTranslation } from "react-i18next"

export function Pregunta2({ onChange }: IProps2) {
  const { setValue, watch } = useFormContext<FormData>()
  const involucrados = watch("involucrados") || [{ id: 1, nombre: "", apellido: "", relacion: "", otro: "" }]
  const { t } = useTranslation()

  // Mantener la compatibilidad con el componente original
  useEffect(() => {
    if (onChange) {
      onChange(involucrados)
    }
  }, [involucrados, onChange])

  const agregarInvolucrado = () => {
    setValue("involucrados", [
      ...involucrados,
      { id: involucrados.length + 1, nombre: "", apellido: "", relacion: "", otro: "" },
    ])
  }

  const eliminarInvolucrado = (id: number) => {
    if (involucrados.length > 1) {
      setValue(
        "involucrados",
        involucrados.filter((inv) => inv.id !== id),
      )
    }
  }

  const handleInvolucradoChange = (id: number, field: string, value: string) => {
    setValue(
      "involucrados",
      involucrados.map((inv) => (inv.id === id ? { ...inv, [field]: value } : inv)),
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <Label className="text-base font-medium">{t("question2.label")}</Label>
        <Button type="button" onClick={agregarInvolucrado} variant="outline" size="sm" className="text-primary">
          <Plus className="h-4 w-4 mr-1" /> {t("question2.add")}
        </Button>
      </div>

      {involucrados.map((inv, index) => (
        <div key={inv.id} className="p-4 border rounded-lg bg-card">
          <div className="flex justify-between items-center mb-3">
            <h4 className="font-medium">
              {t("question2.person")} #{index + 1}
            </h4>
            {involucrados.length > 1 && (
              <Button
                type="button"
                onClick={() => eliminarInvolucrado(inv.id)}
                variant="ghost"
                size="sm"
                className="text-destructive h-8 w-8 p-0"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor={`involucrados.${index}.nombre`}>{t("question2.fields.firstName")}</Label>
              <Input
                id={`involucrados.${index}.nombre`}
                value={inv.nombre}
                onChange={(e) => handleInvolucradoChange(inv.id, "nombre", e.target.value)}
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor={`involucrados.${index}.apellido`}>{t("question2.fields.lastName")}</Label>
              <Input
                id={`involucrados.${index}.apellido`}
                value={inv.apellido}
                onChange={(e) => handleInvolucradoChange(inv.id, "apellido", e.target.value)}
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor={`involucrados.${index}.relacion`}>{t("question2.fields.relation")}</Label>
              <Select
                onValueChange={(value) => handleInvolucradoChange(inv.id, "relacion", value)}
                value={inv.relacion}
              >
                <SelectTrigger className="w-full mt-1">
                  <SelectValue placeholder={t("form.select")} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Empleado">{t("question2.options.employee")}</SelectItem>
                  <SelectItem value="Proveedor">{t("question2.options.supplier")}</SelectItem>
                  <SelectItem value="Cliente">{t("question2.options.client")}</SelectItem>
                  <SelectItem value="Inversionista">{t("question2.options.investor")}</SelectItem>
                  <SelectItem value="Otro">{t("form.other")}</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor={`involucrados.${index}.otro`}>{t("question2.fields.specify")}</Label>
              <Input
                id={`involucrados.${index}.otro`}
                value={inv.otro}
                onChange={(e) => handleInvolucradoChange(inv.id, "otro", e.target.value)}
                className="mt-1"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}


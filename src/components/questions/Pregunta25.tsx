"use client"
import { useFormContext } from "react-hook-form"
import type { FormData } from "../EthicsReportForm"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Users, Building2, Landmark, Building, HelpCircle } from "lucide-react"

export function Pregunta25() {
  const { setValue, watch } = useFormContext<FormData>()
  const area = watch("area") || ""
  const areaOtro = watch("areaOtro") || ""

  return (
    <div className="space-y-4 pt-4 border-t">
      <Label className="text-base font-medium">Indique el área a la cual pertenece</Label>

      <RadioGroup onValueChange={(value) => setValue("area", value)} value={area} className="space-y-3">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="RRHH" id="area_rrhh" />
          <Label htmlFor="area_rrhh" className="font-normal flex items-center gap-2">
            <Users className="h-4 w-4 text-blue-600" /> RRHH
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="Finanzas" id="area_finanzas" />
          <Label htmlFor="area_finanzas" className="font-normal flex items-center gap-2">
            <Landmark className="h-4 w-4 text-green-600" /> Finanzas
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="Contabilidad" id="area_contabilidad" />
          <Label htmlFor="area_contabilidad" className="font-normal flex items-center gap-2">
            <Building className="h-4 w-4 text-amber-600" /> Contabilidad
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="Gerencia" id="area_gerencia" />
          <Label htmlFor="area_gerencia" className="font-normal flex items-center gap-2">
            <Building2 className="h-4 w-4 text-purple-600" /> Gerencia
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="Otros" id="area_otros" />
          <Label htmlFor="area_otros" className="font-normal flex items-center gap-2">
            <HelpCircle className="h-4 w-4 text-gray-600" /> Otros
          </Label>
        </div>
      </RadioGroup>

      {area === "Otros" && (
        <div className="ml-6 space-y-2">
          <Label htmlFor="areaOtro">Especificar</Label>
          <Input
            id="areaOtro"
            value={areaOtro}
            onChange={(e) => setValue("areaOtro", e.target.value)}
            placeholder="Indique su área"
            className="max-w-md"
          />
        </div>
      )}
    </div>
  )
}


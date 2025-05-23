"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useFormContext } from "react-hook-form"
import type { FormData } from "../EthicsReportForm"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Button } from "@/components/ui/button"
import { FileUp } from "lucide-react"
import { useTranslation } from "react-i18next"

export function Pregunta6() {
  const { setValue, watch, register } = useFormContext<FormData>()
  const evidenciaTipo = watch("evidencia.tipo") || ""
  const [archivos, setArchivos] = useState<File[]>([])
  const { t } = useTranslation()

  useEffect(() => {
    register("evidencia.tipo", { required: t("errors.evidenceTypeRequired") })

    if (evidenciaTipo === "Tengo evidencia física que deseo entregar") {
      register("evidencia.entregaFisica", { required: t("errors.specifyPhysicalDelivery") })
    }

    if (evidenciaTipo === "Tengo evidencia digital que deseo entregar") {
      register("evidencia.archivos", { required: t("errors.specifyDigitalFiles") })
    }

    if (evidenciaTipo === "No tengo evidencias, pero podría obtenerlas") {
      register("evidencia.dondeObtener", { required: t("errors.specifyWhereToObtain") })
    }

    if (evidenciaTipo === "Tengo evidencia física y digital que me gustaría entregar") {
      register("evidencia.entregaFisica", { required: t("errors.specifyPhysicalDelivery") })
      register("evidencia.archivos", { required: t("errors.specifyDigitalFiles") })
    }
  }, [register, t, evidenciaTipo])

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && archivos.length < 5) {
      const newFiles = [...archivos, e.target.files[0]]
      setArchivos(newFiles)
      setValue("evidencia.archivos", newFiles)
    }
  }

  return (
    <div className="space-y-4">
      <Label className="text-base font-medium">{t("question6.label")}</Label>

      <RadioGroup
        onValueChange={(value) => setValue("evidencia.tipo", value)}
        value={evidenciaTipo}
        className="space-y-3"
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="No me es posible proporcionar evidencias de ningún tipo" id="no_posible" />
          <Label htmlFor="no_posible" className="font-normal">
            {t("question6.options.notPossible")}
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="No tengo evidencias, pero podría obtenerlas" id="no_tengo" />
          <Label htmlFor="no_tengo" className="font-normal">
            {t("question6.options.notHave")}
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="Tengo evidencia física y digital que me gustaría entregar" id="fisica_digital" />
          <Label htmlFor="fisica_digital" className="font-normal">
            {t("question6.options.bothTypes")}
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="Tengo evidencia física que deseo entregar" id="fisica" />
          <Label htmlFor="fisica" className="font-normal">
            {t("question6.options.physical")}
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="Tengo evidencia digital que deseo entregar" id="digital" />
          <Label htmlFor="digital" className="font-normal">
            {t("question6.options.digital")}
          </Label>
        </div>
      </RadioGroup>

      {evidenciaTipo === "No tengo evidencias, pero podría obtenerlas" && (
        <div className="ml-6 space-y-2">
          <Label htmlFor="evidencia.dondeObtener">{t("question6.fields.whereToObtain")}</Label>
          <Input
            id="evidencia.dondeObtener"
            value={watch("evidencia.dondeObtener") || ""}
            onChange={(e) => setValue("evidencia.dondeObtener", e.target.value)}
          />
        </div>
      )}

      {evidenciaTipo === "Tengo evidencia física y digital que me gustaría entregar" && (
        <div className="ml-6 space-y-4">
          <div className="space-y-2">
            <Label htmlFor="evidencia.archivos">{t("question6.fields.digitalFiles")}</Label>
            <div className="flex items-center gap-2">
              <Input id="evidencia.archivos" type="file" className="cursor-pointer" onChange={handleFileChange} />
              <Button type="button" variant="outline" size="icon">
                <FileUp className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="evidencia.entregaFisica">{t("question6.fields.physicalDelivery")}</Label>
            <Input
              id="evidencia.entregaFisica"
              value={watch("evidencia.entregaFisica") || ""}
              onChange={(e) => setValue("evidencia.entregaFisica", e.target.value)}
            />
          </div>
        </div>
      )}

      {evidenciaTipo === "Tengo evidencia física que deseo entregar" && (
        <div className="ml-6 space-y-2">
          <Label htmlFor="evidencia.entregaFisica">{t("question6.fields.physicalDelivery")}</Label>
          <Input
            id="evidencia.entregaFisica"
            value={watch("evidencia.entregaFisica") || ""}
            onChange={(e) => setValue("evidencia.entregaFisica", e.target.value)}
          />
        </div>
      )}

      {evidenciaTipo === "Tengo evidencia digital que deseo entregar" && (
        <div className="ml-6 space-y-2">
          <Label htmlFor="evidencia.archivos">{t("question6.fields.digitalFiles")}</Label>
          <div className="flex items-center gap-2">
            <Input id="evidencia.archivos" type="file" className="cursor-pointer" onChange={handleFileChange} />
            <Button type="button" variant="outline" size="icon">
              <FileUp className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">{t("question6.fileAttach")}</p>
        </div>
      )}
    </div>
  )
}

"use client"

import { useFormContext } from "react-hook-form"
import type { FormData } from "../EthicsReportForm"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { CheckCircle2, AlertCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { useTranslation } from "react-i18next"

export function FormSummary() {
  const { watch, setValue } = useFormContext<FormData>()
  const { t } = useTranslation()

  const formData = watch()
  const acceptedTerms = watch("aceptaTerminos") || false

  // Función para mostrar el valor de un campo o "No especificado"
  const displayValue = (value: any) => {
    if (value === undefined || value === null || value === "") {
      return <span className="text-muted-foreground italic">{t("summary.notSpecified")}</span>
    }
    return value
  }

  const handleTermsChange = (checked: boolean) => {
    setValue("aceptaTerminos", checked)
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-primary mb-4">{t("summary.title")}</h2>

        <Alert variant="default" className="bg-blue-50 border-blue-200 mb-6">
          <AlertCircle className="h-4 w-4 text-blue-600" />
          <AlertDescription className="text-blue-800">{t("summary.reviewNote")}</AlertDescription>
        </Alert>

        <div className="space-y-6">
          {/* Datos principales */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">{t("summary.sections.mainData")}</CardTitle>
              <CardDescription>{t("summary.sections.mainDataDesc")}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium text-sm text-muted-foreground">{t("summary.fields.irregularityTypes")}</h4>
                {formData.tiposIrregularidad && formData.tiposIrregularidad.length > 0 ? (
                  <ul className="list-disc pl-5 space-y-1">
                    {formData.tiposIrregularidad.map((tipo, index) => (
                      <li key={index}>
                        {tipo}
                        {tipo === "Otras actividades ilegales o no éticas" && formData.tipoIrregularidadOtro && (
                          <span className="text-muted-foreground ml-2">({formData.tipoIrregularidadOtro})</span>
                        )}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-muted-foreground italic">{t("summary.notSpecified")}</p>
                )}
              </div>

              <Separator />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-sm text-muted-foreground">{t("summary.fields.date")}</h4>
                  <p>{displayValue(formData.fecha ? new Date(formData.fecha).toLocaleDateString() : "")}</p>
                </div>
              </div>

              <Separator />

              <div>
                <h4 className="font-medium text-sm text-muted-foreground">{t("summary.fields.location")}</h4>
                <p>
                  {displayValue(
                    [
                      formData.ubicacion?.ciudad,
                      formData.ubicacion?.provincia,
                      formData.ubicacion?.pais,
                      formData.ubicacion?.sede === "Otro"
                        ? `${t("question3.fields.location")}: ${formData.ubicacion?.sedeOtro || t("form.other")}`
                        : formData.ubicacion?.sede,
                    ]
                      .filter(Boolean)
                      .join(", "),
                  )}
                </p>
              </div>

              <Separator />

              <div>
                <h4 className="font-medium text-sm text-muted-foreground">{t("summary.fields.involvedPeople")}</h4>
                {formData.involucrados && formData.involucrados.length > 0 ? (
                  <ul className="list-disc pl-5 space-y-1">
                    {formData.involucrados.map((inv, index) => (
                      <li key={index}>
                        {inv.nombre} {inv.apellido} - {inv.relacion} {inv.otro ? `(${inv.otro})` : ""}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-muted-foreground italic">{t("summary.notSpecified")}</p>
                )}
              </div>

              <Separator />

              <div>
                <h4 className="font-medium text-sm text-muted-foreground">{t("summary.fields.details")}</h4>
                <p className="whitespace-pre-line">{displayValue(formData.detalles)}</p>
              </div>

              <Separator />

              <div>
                <h4 className="font-medium text-sm text-muted-foreground">{t("summary.fields.evidence")}</h4>
                <p>{displayValue(formData.evidencia?.tipo)}</p>
                {formData.evidencia?.dondeObtener && (
                  <p className="mt-1 text-sm">
                    <span className="font-medium">{t("summary.fields.whereToObtain")}: </span>
                    {formData.evidencia.dondeObtener}
                  </p>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Datos de contacto */}
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-lg">{t("summary.sections.contactData")}</CardTitle>
              <CardDescription>{t("summary.sections.contactDataDesc")}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-medium text-sm text-muted-foreground">{t("summary.fields.relationWithGroup")}</h4>
                  <p>{displayValue(formData.relacionGrupo)}</p>
                </div>
                <div>
                  <h4 className="font-medium text-sm text-muted-foreground">{t("summary.fields.anonymousReport")}</h4>
                  <p>{formData.anonimo === "si" ? t("form.yes") : t("form.no")}</p>
                </div>
              </div>

              {formData.anonimo === "si" && (
                <>
                  <Separator />
                  <div>
                    <h4 className="font-medium text-sm text-muted-foreground">{t("summary.fields.contactEmail")}</h4>
                    <p>{displayValue(formData.correoContacto)}</p>
                  </div>
                </>
              )}

              {formData.anonimo !== "si" && (
                <>
                  <Separator />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-sm text-muted-foreground">{t("summary.fields.name")}</h4>
                      <p>{displayValue(formData.nombreCompleto)}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm text-muted-foreground">{t("summary.fields.phone")}</h4>
                      <p>{displayValue(formData.telefono)}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm text-muted-foreground">{t("summary.fields.email")}</h4>
                      <p>{displayValue(formData.correo)}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm text-muted-foreground">{t("summary.fields.position")}</h4>
                      <p>{displayValue(formData.cargo)}</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm text-muted-foreground">{t("summary.fields.area")}</h4>
                      <p>
                        {displayValue(formData.area)} {formData.areaOtro ? `(${formData.areaOtro})` : ""}
                      </p>
                    </div>
                  </div>
                </>
              )}
            </CardContent>
          </Card>

          {/* Términos y condiciones */}
          <div className="flex items-start space-x-2 mt-6">
            <Checkbox id="terms" checked={acceptedTerms} onCheckedChange={handleTermsChange} />
            <div className="grid gap-1.5 leading-none">
              <Label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {t("summary.terms.authorize")}
              </Label>
              <p className="text-sm text-muted-foreground">{t("summary.terms.agreement")}</p>
            </div>
          </div>

          <Alert variant="default" className="bg-green-50 border-green-200">
            <CheckCircle2 className="h-4 w-4 text-green-600" />
            <AlertDescription className="text-green-800">{t("summary.submitNote")}</AlertDescription>
          </Alert>
        </div>
      </div>
    </div>
  )
}


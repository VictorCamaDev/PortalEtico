"use client"

import { useFormContext } from "react-hook-form"
import type { FormData } from "../EthicsReportForm"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Info } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export function FormStep2() {
  const { register, watch, setValue } = useFormContext<FormData>()

  const conocimiento = watch("conocimiento")
  const involucraExternos = watch("involucraExternos")
  const ocultado = watch("ocultado")
  const conocimientoPrevio = watch("conocimientoPrevio")
  const relacion = watch("relacion")

  return (
    <div className="space-y-6">
      <div>
        <div className="flex items-center gap-2 mb-4">
          <h2 className="text-xl font-semibold text-primary">Datos Adicionales sobre la Irregularidad</h2>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Info className="h-5 w-5 text-muted-foreground cursor-help" />
              </TooltipTrigger>
              <TooltipContent>
                <p className="max-w-xs">
                  Esta sección es opcional pero proporciona información valiosa para la investigación
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        <div className="space-y-6">
          {/* Conocimiento de los hechos */}
          <div className="space-y-3">
            <Label className="text-base font-medium">¿Cómo tomó conocimiento de estos hechos?</Label>

            <RadioGroup
              onValueChange={(value) => setValue("conocimiento", value)}
              defaultValue={conocimiento}
              className="space-y-3"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="me_sucedio" id="me_sucedio" />
                <Label htmlFor="me_sucedio" className="font-normal">
                  Me sucedió a mí
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="fui_testigo" id="fui_testigo" />
                <Label htmlFor="fui_testigo" className="font-normal">
                  Fui testigo
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="compañero" id="compañero" />
                <Label htmlFor="compañero" className="font-normal">
                  Un compañero de trabajo me comentó la situación
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="escuche" id="escuche" />
                <Label htmlFor="escuche" className="font-normal">
                  Lo escuché de casualidad
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="otro" id="otro" />
                <Label htmlFor="otro" className="font-normal">
                  Otros
                </Label>
              </div>
            </RadioGroup>

            {conocimiento === "otro" && (
              <div className="ml-6 space-y-2">
                <Label htmlFor="conocimientoOtro">Especificar</Label>
                <Input id="conocimientoOtro" {...register("conocimientoOtro")} placeholder="Describa cómo se enteró" />
              </div>
            )}
          </div>

          {/* Involucra externos */}
          <div className="space-y-3">
            <Label className="text-base font-medium">¿Este incidente involucra a personas externas al grupo?</Label>

            <RadioGroup
              onValueChange={(value) => setValue("involucraExternos", value)}
              defaultValue={involucraExternos}
              className="flex gap-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="involucra_no" />
                <Label htmlFor="involucra_no" className="font-normal">
                  No
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="si" id="involucra_si" />
                <Label htmlFor="involucra_si" className="font-normal">
                  Sí
                </Label>
              </div>
            </RadioGroup>

            {involucraExternos === "si" && (
              <div className="ml-6 space-y-2">
                <Label htmlFor="quienesExternos">¿Quiénes?</Label>
                <Input id="quienesExternos" {...register("quienesExternos")} placeholder="Ingrese nombres o detalles" />
              </div>
            )}
          </div>

          {/* Hechos ocultados */}
          <div className="space-y-3">
            <Label className="text-base font-medium">
              ¿Cree usted que estos hechos están siendo ocultados de alguna manera?
            </Label>

            <RadioGroup
              onValueChange={(value) => setValue("ocultado", value)}
              defaultValue={ocultado}
              className="flex gap-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="ocultado_no" />
                <Label htmlFor="ocultado_no" className="font-normal">
                  No
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="si" id="ocultado_si" />
                <Label htmlFor="ocultado_si" className="font-normal">
                  Sí
                </Label>
              </div>
            </RadioGroup>

            {ocultado === "si" && (
              <div className="ml-6 space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="comoOcultado">¿Cómo?</Label>
                  <Input
                    id="comoOcultado"
                    {...register("comoOcultado")}
                    placeholder="Describa cómo se está ocultando"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="quienesOcultan">¿Por quiénes?</Label>
                  <Input id="quienesOcultan" {...register("quienesOcultan")} placeholder="Ingrese nombres o detalles" />
                </div>
              </div>
            )}
          </div>

          {/* Conocimiento previo */}
          <div className="space-y-3">
            <Label className="text-base font-medium">
              ¿Alguna dirección, gerencia, subgerencia o jefatura conoce de estos hechos?
            </Label>

            <RadioGroup
              onValueChange={(value) => setValue("conocimientoPrevio", value)}
              defaultValue={conocimientoPrevio}
              className="flex gap-4"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="conocimiento_no" />
                <Label htmlFor="conocimiento_no" className="font-normal">
                  No
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="si" id="conocimiento_si" />
                <Label htmlFor="conocimiento_si" className="font-normal">
                  Sí
                </Label>
              </div>
            </RadioGroup>

            {conocimientoPrevio === "si" && (
              <div className="ml-6 space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="quienesConocen">¿Quiénes?</Label>
                  <Input
                    id="quienesConocen"
                    {...register("quienesConocen")}
                    placeholder="Ingrese nombres o áreas responsables"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="comoConocen">¿Cómo?</Label>
                  <Input id="comoConocen" {...register("comoConocen")} placeholder="Explique cómo se enteraron" />
                </div>
              </div>
            )}
          </div>

          {/* Tipo de relación */}
          <div className="space-y-3">
            <Label className="text-base font-medium">
              ¿Qué tipo de relación existe entre las personas involucradas?
            </Label>

            <RadioGroup
              onValueChange={(value) => setValue("relacion", value)}
              defaultValue={relacion}
              className="space-y-3"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Familiar" id="relacion_familiar" />
                <Label htmlFor="relacion_familiar" className="font-normal">
                  Familiar
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Laboral" id="relacion_laboral" />
                <Label htmlFor="relacion_laboral" className="font-normal">
                  Laboral
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Amical" id="relacion_amical" />
                <Label htmlFor="relacion_amical" className="font-normal">
                  Amical
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="Otro" id="relacion_otro" />
                <Label htmlFor="relacion_otro" className="font-normal">
                  Otro
                </Label>
              </div>
            </RadioGroup>

            {relacion === "Otro" && (
              <div className="ml-6 space-y-2">
                <Label htmlFor="relacionOtro">¿Cuál?</Label>
                <Input id="relacionOtro" {...register("relacionOtro")} placeholder="Especifica la relación" />
              </div>
            )}
          </div>

          {/* Beneficios */}
          <div className="space-y-3">
            <Label htmlFor="beneficios" className="text-base font-medium">
              ¿Qué tipos de beneficios reciben las personas involucradas en la irregularidad?
            </Label>
            <Textarea
              id="beneficios"
              {...register("beneficios")}
              className="min-h-[100px]"
              placeholder="Describa los beneficios económicos, profesionales, personales u otros"
            />
          </div>

          {/* Testigos */}
          <div className="space-y-3">
            <Label htmlFor="testigos" className="text-base font-medium">
              ¿Qué testigos considera que podrían contribuir con mayor evidencia de esta irregularidad?
            </Label>
            <Textarea
              id="testigos"
              {...register("testigos")}
              className="min-h-[100px]"
              placeholder="Indique nombres, cargos o información de contacto de posibles testigos"
            />
          </div>
        </div>
      </div>
    </div>
  )
}


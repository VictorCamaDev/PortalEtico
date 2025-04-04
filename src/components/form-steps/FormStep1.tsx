"use client"

import { useFormContext } from "react-hook-form"
import type { FormData } from "../EthicsReportForm"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { useState } from "react"
import { CalendarIcon, FileUp, Plus, Trash2 } from "lucide-react"
import { FormField, FormItem, FormControl, FormMessage } from "@/components/ui/form"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { es } from "date-fns/locale"

export function FormStep1() {
  const {
    register,
    control,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext<FormData>()
  const [maxChars] = useState(500)

  const involucrados = watch("involucrados")
  const evidenciaTipo = watch("evidencia.tipo")
  const detalles = watch("detalles") || ""

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
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-primary mb-4">Datos Principales de la Irregularidad</h2>

        {/* Tipo de irregularidad */}
        <div className="space-y-4">
          <div>
            <Label htmlFor="tipoIrregularidad" className="text-base font-medium">
              Seleccione el tipo de irregularidad que desea reportar <span className="text-destructive">*</span>
            </Label>
            <Select
              onValueChange={(value) => setValue("tipoIrregularidad", value)}
              defaultValue={watch("tipoIrregularidad")}
            >
              <SelectTrigger className="w-full mt-2">
                <SelectValue placeholder="Seleccione un tipo de irregularidad" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Conflictos de interes">⚖️ Conflictos de interés</SelectItem>
                <SelectItem value="Sobornos o coimas">💰 Sobornos o coimas</SelectItem>
                <SelectItem value="Fuga de información confidencial">🔓 Fuga de información</SelectItem>
                <SelectItem value="Mal uso o abuso de los recursos del Grupo">🏢 Mal uso de recursos</SelectItem>
                <SelectItem value="Discriminación, intimidación, acoso u hostigamiento">
                  🚫 Discriminación/Acoso
                </SelectItem>
                <SelectItem value="Destrucción o alteración de documentos o reportes del Grupo">
                  📝 Destrucción de documentos
                </SelectItem>
                <SelectItem value="Incumplimiento de leyes o regulaciones">⚖️ Incumplimiento de leyes</SelectItem>
                <SelectItem value="Incumplimiento de políticas o procedimientos">
                  📋 Incumplimiento de políticas
                </SelectItem>
                <SelectItem value="Otras actividades ilegales o no éticas">⚠️ Actividades no éticas</SelectItem>
              </SelectContent>
            </Select>
            {errors.tipoIrregularidad && <p className="text-sm text-destructive mt-1">Este campo es requerido</p>}
          </div>

          {/* Personas involucradas */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <Label className="text-base font-medium">Identifique a las personas involucradas</Label>
              <Button type="button" onClick={agregarInvolucrado} variant="outline" size="sm" className="text-primary">
                <Plus className="h-4 w-4 mr-1" /> Agregar
              </Button>
            </div>

            {involucrados.map((inv, index) => (
              <div key={inv.id} className="p-4 border rounded-lg bg-card">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="font-medium">Involucrado #{index + 1}</h4>
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
                    <Label htmlFor={`involucrados.${index}.nombre`}>Nombres</Label>
                    <Input
                      id={`involucrados.${index}.nombre`}
                      value={inv.nombre}
                      onChange={(e) => handleInvolucradoChange(inv.id, "nombre", e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor={`involucrados.${index}.apellido`}>Apellidos</Label>
                    <Input
                      id={`involucrados.${index}.apellido`}
                      value={inv.apellido}
                      onChange={(e) => handleInvolucradoChange(inv.id, "apellido", e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor={`involucrados.${index}.relacion`}>Relación con el Grupo</Label>
                    <Select
                      onValueChange={(value) => handleInvolucradoChange(inv.id, "relacion", value)}
                      value={inv.relacion}
                    >
                      <SelectTrigger className="w-full mt-1">
                        <SelectValue placeholder="Seleccione" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Empleado">Empleado</SelectItem>
                        <SelectItem value="Proveedor">Proveedor</SelectItem>
                        <SelectItem value="Cliente">Cliente</SelectItem>
                        <SelectItem value="Inversionista">Inversionista</SelectItem>
                        <SelectItem value="Otro">Otro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor={`involucrados.${index}.otro`}>Especificar (empresa / cargo / otro)</Label>
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

          {/* Ubicación */}
          <div>
            <Label className="text-base font-medium">Indique en qué lugar sucedió el incidente</Label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              <div>
                <Label htmlFor="ubicacion.pais">País</Label>
                <Input id="ubicacion.pais" {...register("ubicacion.pais")} className="mt-1" />
              </div>
              <div>
                <Label htmlFor="ubicacion.provincia">Estado / Provincia</Label>
                <Input id="ubicacion.provincia" {...register("ubicacion.provincia")} className="mt-1" />
              </div>
              <div>
                <Label htmlFor="ubicacion.ciudad">Ciudad</Label>
                <Input id="ubicacion.ciudad" {...register("ubicacion.ciudad")} className="mt-1" />
              </div>
              <div>
                <Label htmlFor="ubicacion.sede">Sede</Label>
                <Select
                  onValueChange={(value) => setValue("ubicacion.sede", value)}
                  defaultValue={watch("ubicacion.sede")}
                >
                  <SelectTrigger className="w-full mt-1">
                    <SelectValue placeholder="Seleccione" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="PlantaCajamarquilla">Planta Cajamarquilla</SelectItem>
                    <SelectItem value="OficinasMiraflores">Oficinas Miraflores</SelectItem>
                    <SelectItem value="AlmacenPeriferico">Almacén periférico</SelectItem>
                    <SelectItem value="Otro">Otro (especificar)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Fecha */}
          <div>
            <Label className="text-base font-medium">Indique la fecha o período en el cual sucedió el incidente</Label>
            <div className="mt-2">
              <FormField
                control={control}
                name="fecha"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn("w-full pl-3 text-left font-normal", !field.value && "text-muted-foreground")}
                          >
                            {field.value ? (
                              format(new Date(field.value), "PPP", { locale: es })
                            ) : (
                              <span>Seleccione una fecha</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value ? new Date(field.value) : undefined}
                          onSelect={(date) => field.onChange(date ? date.toISOString() : "")}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* Detalles */}
          <div>
            <Label htmlFor="detalles" className="text-base font-medium">
              Describa todos los detalles que ayuden a analizar y evaluar su irregularidad{" "}
              <span className="text-destructive">*</span>
            </Label>
            <Textarea
              id="detalles"
              {...register("detalles", { required: true })}
              className="mt-2 min-h-[150px]"
              placeholder="Incluya información relevante como fechas, lugares, personas involucradas y descripción detallada de los hechos."
              maxLength={maxChars}
            />
            <div className="flex justify-end mt-1 text-sm text-muted-foreground">
              <span className={detalles.length > maxChars * 0.8 ? "text-amber-500" : ""}>
                {detalles.length}/{maxChars} caracteres
              </span>
            </div>
            {errors.detalles && <p className="text-sm text-destructive mt-1">Este campo es requerido</p>}
          </div>

          {/* Evidencia */}
          <div className="space-y-4">
            <Label className="text-base font-medium">
              ¿Posee usted evidencia física o digital que pueda ayudar en la investigación?
            </Label>

            <RadioGroup
              onValueChange={(value) => setValue("evidencia.tipo", value)}
              defaultValue={evidenciaTipo}
              className="space-y-3"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no_posible" id="no_posible" />
                <Label htmlFor="no_posible" className="font-normal">
                  No me es posible proporcionar evidencias de ningún tipo
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no_tengo" id="no_tengo" />
                <Label htmlFor="no_tengo" className="font-normal">
                  No tengo evidencias, pero podría obtenerlas
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="fisica_digital" id="fisica_digital" />
                <Label htmlFor="fisica_digital" className="font-normal">
                  Tengo evidencia física y digital que me gustaría entregar
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="fisica" id="fisica" />
                <Label htmlFor="fisica" className="font-normal">
                  Tengo evidencia física que deseo entregar
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="digital" id="digital" />
                <Label htmlFor="digital" className="font-normal">
                  Tengo evidencia digital que deseo entregar
                </Label>
              </div>
            </RadioGroup>

            {/* Campos condicionales según el tipo de evidencia */}
            {evidenciaTipo === "fisica" && (
              <div className="ml-6 space-y-2">
                <Label htmlFor="evidencia.entregaFisica">
                  Indique la forma en la que entregará la información física
                </Label>
                <Input id="evidencia.entregaFisica" {...register("evidencia.entregaFisica")} />
              </div>
            )}

            {evidenciaTipo === "digital" && (
              <div className="ml-6 space-y-2">
                <Label htmlFor="evidencia.archivos">Seleccione evidencias digitales (máx. 5 archivos, 20MB)</Label>
                <div className="flex items-center gap-2">
                  <Input id="evidencia.archivos" type="file" className="cursor-pointer" />
                  <Button type="button" variant="outline" size="icon">
                    <FileUp className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">Los archivos se adjuntarán al enviar el formulario.</p>
              </div>
            )}

            {["no_posible", "no_tengo", "fisica", "digital", "fisica_digital"].includes(evidenciaTipo || "") && (
              <div className="ml-6 space-y-2">
                <Label htmlFor="evidencia.dondeObtener">
                  {evidenciaTipo === "no_posible" || evidenciaTipo === "no_tengo"
                    ? "¿Dónde el Grupo podría obtener evidencia?"
                    : "¿Dónde más se podría obtener evidencia?"}
                </Label>
                <Textarea
                  id="evidencia.dondeObtener"
                  {...register("evidencia.dondeObtener")}
                  className="min-h-[100px]"
                  placeholder="Indique lugares, personas o documentos donde se podría encontrar más evidencia"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}


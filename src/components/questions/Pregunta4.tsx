"use client"

import { useEffect } from "react"
import type { IProps4 } from "../../interfaces/ICuestionario"
import { useFormContext } from "react-hook-form"
import type { FormData } from "../EthicsReportForm"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { CalendarIcon } from "lucide-react"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { es, enUS } from "date-fns/locale"
import { FormField, FormItem, FormControl } from "@/components/ui/form"
import { useTranslation } from "react-i18next"

export function Pregunta4({ onChange }: IProps4) {
  const { control, watch } = useFormContext<FormData>()
  const fecha = watch("fecha") || ""
  const { t, i18n } = useTranslation()

  // Seleccionar el locale según el idioma actual
  const dateLocale = (i18n as any).language === "es" ? es : enUS

  // Mantener la compatibilidad con el componente original
  useEffect(() => {
    if (onChange) {
      onChange({ fecha })
    }
  }, [fecha, onChange])

  return (
    <div>
      <Label className="text-base font-medium">{t("question4.label")}</Label>
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
                        format(new Date(field.value), "PPP", { locale: dateLocale })
                      ) : (
                        <span>{t("question4.selectDate")}</span>
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
                    locale={dateLocale}
                  />
                </PopoverContent>
              </Popover>
            </FormItem>
          )}
        />
      </div>
    </div>
  )
}


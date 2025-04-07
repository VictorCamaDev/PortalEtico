"use client"
import { Pregunta10 } from "../questions/Pregunta10"
import { Pregunta11 } from "../questions/Pregunta11"
import { Pregunta12 } from "../questions/Pregunta12"
import { Pregunta13 } from "../questions/Pregunta13"
import { Pregunta14 } from "../questions/Pregunta14"
import { Pregunta15 } from "../questions/Pregunta15"
import { Pregunta16 } from "../questions/Pregunta16"
import { Info } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export function FormStep2() {
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
          {/* Usar los componentes de preguntas individuales */}
          <Pregunta10 />
          <Pregunta11 />
          <Pregunta12 />
          <Pregunta13 />
          <Pregunta14 />
          <Pregunta15 />
          <Pregunta16 />
        </div>
      </div>
    </div>
  )
}


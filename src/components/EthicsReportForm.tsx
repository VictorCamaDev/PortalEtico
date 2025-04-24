"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FormProvider, useForm } from "react-hook-form";
import { FormStep1 } from "./form-steps/FormStep1";
import { FormStep2 } from "./form-steps/FormStep2";
import { FormStep3 } from "./form-steps/FormStep3";
import { FormStep4 } from "./form-steps/FormStep4";
import { FormSummary } from "./form-steps/FormSummary";
import { useToast } from "@/components/ui/use-toast";
import { ChevronLeft, ChevronRight, Send, Home } from "lucide-react";
import logogs from "../assets/images/logo-gruposilvestre.jpg";
import { Link, useNavigate } from "react-router-dom";
import { env } from "@/lib/env";
import { useTranslation } from "react-i18next";
import { LanguageSwitcher } from "../components/LanguageSwitcher";

export type FormData = {
  // Paso 1: Datos principales
  tipoIrregularidad?: string; // Mantenemos para compatibilidad
  tiposIrregularidad: string[]; // Nuevo campo para selección múltiple
  tipoIrregularidadOtro?: string;
  involucrados: {
    id: number;
    nombre: string;
    apellido: string;
    relacion: string;
    otro: string;
  }[];
  ubicacion: {
    pais: string;
    provincia: string;
    ciudad: string;
    sede: string;
    sedeOtro?: string;
  };
  fecha: string;
  detalles: string;
  evidencia: {
    tipo: string;
    entregaFisica?: string;
    archivos?: File[];
    dondeObtener?: string;
  };

  // Paso 2: Datos adicionales
  conocimiento?: string;
  conocimientoOtro?: string;
  involucraExternos?: string;
  quienesExternos?: string;
  ocultado?: string;
  comoOcultado?: string;
  quienesOcultan?: string;
  conocimientoPrevio?: string;
  quienesConocen?: string;
  comoConocen?: string;
  relacion?: string;
  relacionOtro?: string;
  beneficios?: string;
  testigos?: string;

  // Paso 3: Opciones de contacto
  relacionGrupo?: string;
  relacionGrupoOtro?: string;
  anonimo?: string;
  correoContacto?: string;

  // Paso 4: Información opcional
  nombreCompleto?: string;
  telefono?: string;
  correo?: string;
  otroContacto?: string;
  cargo?: string;
  area?: string;
  areaOtro?: string;

  // Paso 5: Términos y condiciones
  aceptaTerminos?: boolean;
};

export function EthicsReportForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const methods = useForm<FormData>({
    defaultValues: {
      tiposIrregularidad: [],
      involucrados: [
        { id: 1, nombre: "", apellido: "", relacion: "", otro: "" },
      ],
      ubicacion: { pais: "", provincia: "", ciudad: "", sede: "" },
      fecha: "",
      detalles: "",
      evidencia: { tipo: "" },
    },
    mode: "onChange", // Validar al cambiar
  });

  const totalSteps = 5;

  const nextStep = async () => {
    const isValid = await methods.trigger();
    if (isValid || currentStep === 2) {
      // Paso 2 es opcional
      setCurrentStep((prev) => Math.min(prev + 1, totalSteps));
      window.scrollTo(0, 0);
    } else {
      toast({
        title: t("errors.incompleteFields"),
        description: t("errors.incompleteFields"),
        variant: "destructive",
      });
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
    window.scrollTo(0, 0);
  };

  // Modificar la función handleSubmit para validar los campos de correo antes de enviar
  const handleSubmit = async (data: FormData) => {
    // Solo ejecutar la lógica de envío cuando estamos en el último paso
    if (currentStep === totalSteps) {
      // Verificar si se aceptaron los términos
      if (!data.aceptaTerminos) {
        toast({
          title: t("errors.termsRequired"),
          description: t("errors.termsRequired"),
          variant: "destructive",
        });
        return;
      }

      // Validar campos obligatorios
      const validationErrors = [];

      // Validar tipo de irregularidad
      if (!data.tiposIrregularidad || data.tiposIrregularidad.length === 0) {
        validationErrors.push(t("errors.irregularityTypeRequired"));
      }

      // Validar detalles
      if (!data.detalles?.trim()) {
        validationErrors.push(t("errors.detailsRequired"));
      }

      // Validar campos condicionales
      if (data.conocimiento === "otro" && !data.conocimientoOtro?.trim()) {
        validationErrors.push(t("errors.specifyKnowledge"));
      }

      if (data.involucraExternos === "si" && !data.quienesExternos?.trim()) {
        validationErrors.push(t("errors.specifyExternals"));
      }

      if (data.ocultado === "si") {
        if (!data.comoOcultado?.trim())
          validationErrors.push(t("errors.specifyHowHidden"));
        if (!data.quienesOcultan?.trim())
          validationErrors.push(t("errors.specifyWhoHides"));
      }

      if (data.conocimientoPrevio === "si") {
        if (!data.quienesConocen?.trim())
          validationErrors.push(t("errors.specifyWhoKnows"));
        if (!data.comoConocen?.trim())
          validationErrors.push(t("errors.specifyHowKnow"));
      }

      // Validar correo electrónico según si es anónimo o no
      if (
        data.anonimo === "si" &&
        (!data.correoContacto ||
          !data.correoContacto.match(
            /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
          ))
      ) {
        validationErrors.push(t("errors.invalidEmail"));
      }

      if (
        data.anonimo === "no" &&
        (!data.correo ||
          !data.correo.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i))
      ) {
        validationErrors.push(t("errors.invalidEmail"));
      }

      // Si hay errores, mostrarlos y detener el envío
      if (validationErrors.length > 0) {
        toast({
          title: t("errors.validationError"),
          description: validationErrors.join("\n"),
          variant: "destructive",
        });
        return;
      }

      setIsSubmitting(true);

      // Para compatibilidad, asignamos el valor de tiposIrregularidad a tipoIrregularidad
      const dataToSend = {
        ...data,
        tipoIrregularidad: data.tiposIrregularidad.join(", "),
      };

      console.log("Datos a enviar:", JSON.stringify(dataToSend)); // Añadir este log para verificar

      // Envío a API
      fetch(`${env.apiUrl}/IrregularityReports`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Error en la red: ${response.status}`);
          }
          return response.json();
        })
        .then((responseData) => {
          console.log("Respuesta de la API:", responseData);

          // Marcar como enviado exitosamente
          setIsSubmitSuccess(true);

          // Usar el ID real del registro de la base de datos
          // Asumiendo que la API devuelve un objeto con un campo 'id'
          const reportId =
            responseData.id ||
            responseData.reportId ||
            Math.floor(100000 + Math.random() * 900000);

          toast({
            title: t("success.title"),
            description: `${t("success.code")}${reportId}`,
          });

          // Redirigir después de 3 segundos
          setTimeout(() => {
            navigate("/");
          }, 3000);
        })
        .catch((error) => {
          console.error("Error al enviar el reporte:", error);

          // Si estamos en modo simulación, mostrar éxito de todas formas
          if (env?.useSimulation) {
            setIsSubmitSuccess(true);

            const mockId = Math.floor(100000 + Math.random() * 900000);

            toast({
              title: t("success.title"),
              description: `${t("success.code")}${mockId}`,
            });

            // Redirigir después de 3 segundos
            setTimeout(() => {
              navigate("/");
            }, 3000);
          } else {
            toast({
              title: t("errors.submitError"),
              description: t("errors.tryAgain"),
              variant: "destructive",
            });
            setIsSubmitting(false);
          }
        });
    } else {
      // Si no estamos en el último paso, simplemente avanzar al siguiente
      nextStep();
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <FormStep3 />;
      case 2:
        return <FormStep4 />;
      case 3:
        return <FormStep1 />;
      case 4:
        return <FormStep2 />;
      case 5:
        return <FormSummary />;
      default:
        return <FormStep3 />;
    }
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <Card className="w-full max-w-4xl mx-auto border-primary/20">
        <CardHeader className="border-b">
          <div className="flex justify-between items-center">
            <div>
              <CardTitle className="text-2xl text-primary">
                {t("app.title")}
              </CardTitle>
              <CardDescription>{t("app.description")}</CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <LanguageSwitcher />
              <img
                src={logogs || "/placeholder.svg"}
                alt="Logo Grupo Silvestre"
                className="h-16 w-auto"
              />
            </div>
          </div>
        </CardHeader>

        <FormProvider {...methods}>
          <form>
            <CardContent className="pt-6">
              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  {Array.from({ length: totalSteps }).map((_, i) => (
                    <div
                      key={i}
                      className={`w-1/5 h-2 rounded-full transition-colors ${
                        i + 1 <= currentStep ? "bg-primary" : "bg-muted"
                      }`}
                    />
                  ))}
                </div>
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>{t("steps.contact")}</span>
                  <span>{t("steps.personalInfo")}</span>
                  <span>{t("steps.mainData")}</span>
                  <span>{t("steps.additionalData")}</span>
                  <span>{t("steps.summary")}</span>
                </div>
              </div>

              {isSubmitSuccess ? (
                <div className="py-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-green-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">
                    {t("success.title")}
                  </h3>
                  <p className="text-gray-500">{t("success.message")}</p>
                </div>
              ) : (
                renderStep()
              )}
            </CardContent>

            <CardFooter className="flex justify-between border-t pt-6">
              {currentStep > 1 && !isSubmitSuccess ? (
                <Button
                  type="button"
                  variant="outline"
                  onClick={prevStep}
                  disabled={isSubmitting}
                >
                  <ChevronLeft className="mr-2 h-4 w-4" />{" "}
                  {t("navigation.previous")}
                </Button>
              ) : (
                <Link to="/">
                  <Button
                    type="button"
                    variant="outline"
                    disabled={isSubmitting}
                  >
                    <Home className="mr-2 h-4 w-4" /> {t("navigation.home")}
                  </Button>
                </Link>
              )}

              {currentStep < totalSteps && !isSubmitSuccess ? (
                <Button
                  type="button"
                  onClick={nextStep}
                  disabled={isSubmitting}
                >
                  {t("navigation.next")}{" "}
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              ) : !isSubmitSuccess ? (
                <Button
                  type="button"
                  disabled={isSubmitting || isSubmitSuccess}
                  className="bg-primary"
                  onClick={methods.handleSubmit(handleSubmit)}
                >
                  {isSubmitting ? (
                    <>Enviando...</>
                  ) : (
                    <>
                      {t("navigation.submit")} <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              ) : (
                <div></div> // Espacio vacío para mantener el layout cuando se muestra el mensaje de éxito
              )}
            </CardFooter>
          </form>
        </FormProvider>
      </Card>
    </div>
  );
}

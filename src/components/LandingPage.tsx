"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Mail, Phone, MessageSquare, MapPin } from "lucide-react"
import logogs from "../assets/images/logo-gruposilvestre.jpg"
import { useNavigate } from "react-router-dom"
import { env } from "../lib/env"
import { useTranslation } from "react-i18next"
import { LanguageSwitcher } from "../components/LanguageSwitcher"

export function LandingPage() {
  const navigate = useNavigate()
  const { t } = useTranslation()

  const handleRegisterClick = () => {
    navigate("/register")
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <Card className="w-full max-w-4xl mx-auto border-primary/20">
        <CardHeader className="border-b">
          <div className="flex justify-between items-center">
            <div>
              <CardTitle className="text-2xl text-primary">{t("app.title")}</CardTitle>
              <CardDescription>{t("app.description")}</CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <LanguageSwitcher />
              <img src={logogs || "/placeholder.svg"} alt="Logo Grupo Silvestre" className="h-16 w-auto" />
            </div>
          </div>
        </CardHeader>

        <CardContent className="pt-6 space-y-6">
          {/* Introducción */}
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-primary">{t("landing.introduction")}</h2>
            <p className="text-muted-foreground">
              <span className="font-medium text-foreground">{t("app.title")}</span> {t("landing.introText")}
            </p>
          </div>

          <Separator />

          {/* Canales de Atención */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-primary">{t("landing.serviceChannels")}</h2>

            {/* 1. Formulario Web */}
            <Card className="border-primary/10">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-primary">1. {t("landing.webForm")}</CardTitle>
              </CardHeader>
              <CardContent className="pb-4 space-y-4">
                <p>{t("landing.registerNewIrregularity")}</p>
                <Button onClick={handleRegisterClick} className="w-full sm:w-auto">
                  {t("landing.registerButton")}
                </Button>
              </CardContent>
            </Card>

            {/* 2. Buzón de Correo */}
            <Card className="border-primary/10">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  2. {t("landing.mailbox")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{t("landing.emailInstructions")}</p>
                <a href={`mailto:${env.supportEmail}`} className="text-primary hover:underline font-medium">
                  {env.supportEmail}
                </a>
              </CardContent>
            </Card>

            {/* 3. Buzón de Voz */}
            <Card className="border-primary/10">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  3. {t("landing.voicemail")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{t("landing.voicemailInstructions")}</p>
                <p className="font-medium">
                  {env.supportPhone} ({t("landing.tollFree")})
                </p>
              </CardContent>
            </Card>

            {/* 4. Línea Telefónica */}
            <Card className="border-primary/10">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Phone className="h-5 w-5 text-primary" />
                  4. {t("landing.phoneLine")}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{t("landing.phoneLineInstructions")}</p>
                <p className="font-medium">
                  {env.supportPhone} ({t("landing.tollFree")})
                </p>
              </CardContent>
            </Card>

            {/* 5. Entrevista personal y Dirección Postal */}
            <Card className="border-primary/10">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  5. {t("landing.inPersonAndMail")}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p>{t("landing.inPersonInstructions")}</p>
                  <p className="font-medium">{env.officeAddress}</p>
                  <p>
                    <span className="font-medium">{t("landing.askFor")}</span> {env.contactPerson}
                  </p>
                  <p>{t("landing.appointmentRequired")}</p>
                </div>

                <div>
                  <p>{t("landing.mailInstructions")}</p>
                  <p className="font-medium">{env.officeAddress}</p>
                  <p>
                    <span className="font-medium">{t("landing.attention")}</span> {env.contactPerson},{" "}
                    <span className="font-medium">{t("landing.reference")}</span> {t("app.title")}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>

        <CardFooter className="border-t py-4 bg-primary/10 text-center text-sm text-muted-foreground">
          <div className="w-full">
            <p>
              {t("landing.copyright")} © {new Date().getFullYear()} {t("app.title")}
            </p>
            <p>{t("landing.allRightsReserved")}</p>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}


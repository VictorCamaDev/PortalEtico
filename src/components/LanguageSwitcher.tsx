"use client"

// Solución alternativa usando un enfoque diferente
import { useTranslation } from "react-i18next"
import { Button } from "@/components/ui/button"
import { Check, Globe, ChevronDown } from "lucide-react"
import * as DropdownMenu from "@radix-ui/react-dropdown-menu"

export function LanguageSwitcher() {
  const { i18n } = useTranslation()
  const currentLanguage = i18n.language

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
    // Guardar la preferencia de idioma
    localStorage.setItem("i18nextLng", lng)
  }

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Button variant="outline" size="sm" className="h-9 gap-1 px-2.5">
          <Globe className="h-4 w-4" />
          <span className="hidden sm:inline-block">{currentLanguage === "es" ? "Español" : "English"}</span>
          <ChevronDown className="h-4 w-4 opacity-50" />
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="bg-white rounded-md shadow-md p-1 min-w-[160px] z-50 border"
          align="end"
          sideOffset={5}
        >
          <DropdownMenu.Item
            className="flex items-center justify-between px-2 py-1.5 text-sm rounded hover:bg-slate-100 cursor-pointer"
            onSelect={() => changeLanguage("es")}
          >
            <span>🇪🇸 Español</span>
            {currentLanguage === "es" && <Check className="h-4 w-4" />}
          </DropdownMenu.Item>
          <DropdownMenu.Item
            className="flex items-center justify-between px-2 py-1.5 text-sm rounded hover:bg-slate-100 cursor-pointer"
            onSelect={() => changeLanguage("en")}
          >
            <span>🇬🇧 English</span>
            {currentLanguage === "en" && <Check className="h-4 w-4" />}
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}


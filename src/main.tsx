import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./App.css"
import App from "./App"
import "./lib/i18n" // Importamos la configuración de i18n antes de renderizar la app

// Aseguramos que i18n esté inicializado antes de renderizar la aplicación
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


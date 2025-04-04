import "./App.css"
import { EthicsReportForm } from "./components/EthicsReportForm"
import { LandingPage } from "./components/LandingPage"
import { ThemeProvider } from "./components/ThemeProvider"
import { Toaster } from "./components/ui/toaster"
import { HashRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Router>
        <div className="min-h-screen bg-background">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/register" element={<EthicsReportForm />} />
          </Routes>
          <Toaster />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App


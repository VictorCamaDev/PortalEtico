/// <reference types="vite/client" />

// Declaración de módulos para i18next
declare module "i18next" {
    interface CustomTypeOptions {
      returnNull: false
    }
  }
  
  // Declaración para archivos JSON
  declare module "*.json" {
    const value: any
    export default value
  }
  
  
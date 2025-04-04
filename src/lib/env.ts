
const PREFIX = "VITE_"

/**
 * Obtiene una variable de entorno con validación
 * @param key Nombre de la variable (sin el prefijo VITE_)
 * @param defaultValue Valor predeterminado si la variable no existe
 * @returns El valor de la variable de entorno o el valor predeterminado
 */
export function getEnv<T extends string | boolean | number>(key: string, defaultValue: T): T {
  const fullKey = `${PREFIX}${key}`
  const value = import.meta.env[fullKey]

  if (value === undefined) {
    return defaultValue
  }

  // Convertir el valor según el tipo del valor predeterminado
  if (typeof defaultValue === "boolean") {
    return (value === "true") as unknown as T
  }

  if (typeof defaultValue === "number") {
    return (Number(value) || defaultValue) as unknown as T
  }

  return value as unknown as T
}

// Configuración centralizada de la aplicación
export const env = {
  // URLs de API y servicios
  apiUrl: getEnv("API_URL", "https://api.default.com"),
  consultaUrl: getEnv("CONSULTA_URL", "https://www.gruposilvestreetico.com/consulta.php"),

  // Información del entorno
  isProduction: import.meta.env.PROD,
  isDevelopment: import.meta.env.DEV,
  mode: import.meta.env.MODE,

  // Configuración de la aplicación
  appName: getEnv("APP_NAME", "Grupo Silvestre Ético"),
  appVersion: getEnv("APP_VERSION", "1.0.0"),

  // Contacto y soporte
  supportEmail: getEnv("SUPPORT_EMAIL", "reportes@gruposilvestreetico.com"),
  supportPhone: getEnv("SUPPORT_PHONE", "0-800-1-8106"),

  // Dirección física
  officeAddress: getEnv("OFFICE_ADDRESS", "Av. Víctor Andrés Belaunde 171, San Isidro, Lima 27, Lima - Perú"),
  contactPerson: getEnv("CONTACT_PERSON", "Sr. Rafael Huamán"),

  // Ahora pasamos un booleano como valor predeterminado en lugar de un string
  useSimulation: getEnv("USE_SIMULATION", false),
}


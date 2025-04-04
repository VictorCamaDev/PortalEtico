export interface IPregunta1Props {
  tipoIrregularidad: string
}

export interface IProps1 {
  onChange: (nuevaRespuesta: IPregunta1Props) => void
}

export interface IPregunta2Props {
  id: number
  nombre: string
  apellido: string
  relacion: string
  otro: string
}
export interface IProps2 {
  onChange: (involucrados: IPregunta2Props[]) => void
}

export interface IPregunta3Props {
  pais: string
  provincia: string
  ciudad: string
  sede: string
}

export interface IProps3 {
  onChange: (nuevaRespuesta: IPregunta3Props) => void
}

export interface IPregunta4Props {
  fecha: string
}

export interface IProps4 {
  onChange: (nuevaRespuesta: IPregunta4Props) => void
}


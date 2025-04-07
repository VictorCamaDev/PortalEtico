"use client"

import { Pregunta1 } from "./questions/Pregunta1"
import { Pregunta2 } from "./questions/Pregunta2"
import { Pregunta10 } from "./questions/Pregunta10"
import { Pregunta11 } from "./questions/Pregunta11"
import { Pregunta12 } from "./questions/Pregunta12"
import { Pregunta13 } from "./questions/Pregunta13"
import { Pregunta14 } from "./questions/Pregunta14"
import { Pregunta15 } from "./questions/Pregunta15"
import { Pregunta16 } from "./questions/Pregunta16"
import { Pregunta17 } from "./questions/Pregunta17"
import { Pregunta18 } from "./questions/Pregunta18"
import { Pregunta19 } from "./questions/Pregunta19"
import { Pregunta20 } from "./questions/Pregunta20"
import { Pregunta21 } from "./questions/Pregunta21"
import { Pregunta22 } from "./questions/Pregunta22"
import { Pregunta23 } from "./questions/Pregunta23"
import { Pregunta24 } from "./questions/Pregunta24"
import { Pregunta25 } from "./questions/Pregunta25"
import { Pregunta3 } from "./questions/Pregunta3"
import { Pregunta5 } from "./questions/Pregunta5"
import { Pregunta6 } from "./questions/Pregunta6"
import { useState } from "react"
import type { IPregunta1Props, IPregunta3Props, IPregunta2Props, IPregunta4Props } from "../interfaces/ICuestionario"
import logogs from "../assets/images/logo-gruposilvestre.jpg"
import { Pregunta4 } from "./questions/Pregunta4"
import { ChevronDown, ChevronUp } from "lucide-react"

export function Cuestionario() {
  const [datosPregunta1, setDatosPregunta1] = useState({})
  const [datosPregunta2, setDatosPregunta2] = useState<IPregunta2Props[]>([])
  const [datosPregunta3, setDatosPregunta3] = useState<IPregunta3Props>({
    pais: "",
    provincia: "",
    ciudad: "",
    sede: "",
  })
  const [datosPregunta4, setDatosPregunta4] = useState({})

  const handlePregunta1Change = (data: IPregunta1Props) => setDatosPregunta1(data)
  const handlePregunta2Change = (data: IPregunta2Props[]) => setDatosPregunta2(data)
  const handlePregunta3Change = (data: IPregunta3Props) => setDatosPregunta3(data)
  const handlePregunta4Change = (data: IPregunta4Props) => setDatosPregunta4(data)

  const enviarRespuestas = () => {
    console.log("Datos Pregunta1:", datosPregunta1)
    console.log("Datos Pregunta2:", datosPregunta2)
    console.log("Datos Pregunta3:", datosPregunta3)
    console.log("Datos Pregunta4:", datosPregunta4)
  }

  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev)
  }

  const preguntas = [Pregunta10, Pregunta11, Pregunta12, Pregunta13, Pregunta14, Pregunta15, Pregunta16]

  return (
    <table width="800px" align="center" style={{ border: "5px solid  #005643" }}>
      <tbody>
        <tr>
          <td align="center">
            <table width="768px" className="secundaria">
              <tbody>
                <tr>
                  <td width="90%" colSpan={2}>
                    <p>
                      <span className="titulo1" style={{ color: "#4BA14B", textAlign: "left" }}>
                        {" "}
                        <b> Grupo Silvestre Ético </b>{" "}
                      </span>
                    </p>
                  </td>
                  <td>
                    <img style={{ height: 100 }} src={logogs} />
                  </td>
                </tr>
                <tr>
                  <td colSpan={3} valign="top">
                    <button className="btn btn-success" type="button" onClick={enviarRespuestas}>
                      Imprimir Lista
                    </button>
                    <hr style={{ color: "#005643" }} />
                    <span className="descripcion">
                      Las siguientes preguntas son opcionales. Recuerde que la mayor cantidad de información, ayudará a
                      realizar un mejor análisis de su irregularidad .
                    </span>
                    <br />

                    {/* CAMPO ESCONDIDO PARA EVITAR ACCESO DIRECTO AL SERVLET */}
                    <input type="hidden" id="llave" name="llave" defaultValue="abcd123456789" />
                    <br />
                    <table width="100%" style={{ tableLayout: "fixed" }}>
                      {/* HM: Los siguientes tags son necesarios para definir la estructura de la tabla
                           antes de juntar dos filas mediante el COLSPAN */}
                      <tbody>
                        <tr>
                          <td width="100%" valign="top" />
                          <td width="0%" valign="top" />
                        </tr>
                        {/* INICIO SECCION 1 */}
                        <tr className="seccion">
                          <td width="100%" valign="top" colSpan={2}>
                            <span className="seccion">Datos Principales de la Irregularidad</span>
                          </td>
                        </tr>
                        {/* INICIO PREGUNTA 1 */}
                        <Pregunta1 onChange={handlePregunta1Change}></Pregunta1>
                        {/* FIN PREGUNTA 1 */}
                        <tr style={{ height: "30px" }}>
                          <td colSpan={2}>
                            <hr style={{ color: "#005643" }} />
                          </td>
                        </tr>
                        {/* INICIO PREGUNTA 2 */}

                        <Pregunta2 onChange={handlePregunta2Change}></Pregunta2>

                        {/* FIN PREGUNTA 2 */}
                        <tr style={{ height: "30px" }}>
                          <td colSpan={2}>
                            <hr style={{ color: "#005643" }} />
                          </td>
                        </tr>
                        {/* INICIO PREGUNTA 3 */}
                        <Pregunta3 onChange={handlePregunta3Change}></Pregunta3>
                        {/* FIN PREGUNTA 3 */}
                        <tr style={{ height: "30px" }}>
                          <td colSpan={2}>
                            <hr style={{ color: "#005643" }} />
                          </td>
                        </tr>
                        {/* INICIO PREGUNTA 4 */}
                        <Pregunta4 onChange={handlePregunta4Change}></Pregunta4>

                        {/* FIN PREGUNTA 4 */}
                        <tr style={{ height: "30px" }}>
                          <td colSpan={2}>
                            <hr style={{ color: "#005643" }} />
                          </td>
                        </tr>
                        {/* INICIO PREGUNTA 5 */}
                        <Pregunta5></Pregunta5>
                        {/* FIN PREGUNTA 5 */}
                        <tr style={{ height: "30px" }}>
                          <td colSpan={2}>
                            <hr style={{ color: "#005643" }} />
                          </td>
                        </tr>
                        {/* INICIO PREGUNTA 6 */}
                        <Pregunta6></Pregunta6>
                        {/* FIN PREGUNTA 6 */}

                        <tr id="p8_hr" style={{ height: "30px" }}>
                          <td colSpan={2}>
                            <hr style={{ color: "#005643" }} />
                          </td>
                        </tr>

                        <tr style={{ height: "15px" }}>
                          <td colSpan={2} />
                        </tr>

                        <table>
                          {/* INICIO SECCIÓN 2 */}
                          <tr className="seccion">
                            <td width="100%" valign="top" colSpan={2}>
                              <span className="seccion">Datos Adicionales sobre la Irregularidad (Opcional)</span>
                              {/* Íconos para mostrar/ocultar la sección */}
                              {isVisible ? (
                                <ChevronUp
                                  size={24}
                                  className="cursor-pointer text-gray-600 hover:text-black"
                                  onClick={toggleVisibility}
                                />
                              ) : (
                                <ChevronDown
                                  size={24}
                                  className="cursor-pointer text-gray-600 hover:text-black"
                                  onClick={toggleVisibility}
                                />
                              )}
                            </td>
                          </tr>
                          <tr>
                            <td width="100%" valign="top">
                              <span className="title">
                                Las preguntas contenidas en esta sección podrían proporcionar información relevante para
                                el análisis de la irregularidad. Pulse la flecha para desplegar las preguntas de esta
                                sección.
                              </span>
                            </td>
                          </tr>
                          <tr style={{ height: "30px" }}>
                            <td colSpan={2}>
                              <hr style={{ color: "#005643" }} />
                            </td>
                          </tr>

                          {/* Mostrar todas las preguntas si la sección está visible */}
                          {isVisible && preguntas.map((Pregunta, index) => <Pregunta key={index} />)}
                        </table>
                        <tr style={{ height: "30px", display: "none" }} id="s2_p2">
                          <td colSpan={2}>
                            <hr style={{ color: "#005643" }} />
                          </td>
                        </tr>

                        {/* INICIO SECCION 3 */}
                        <tr className="seccion">
                          <td width="100%" valign="top" colSpan={2}>
                            <span className="seccion">Opciones de Contacto</span>
                          </td>
                        </tr>
                        {/* INICIO PREGUNTA 17 */}

                        <Pregunta17></Pregunta17>
                        {/* FIN PREGUNTA 17 */}
                        <tr style={{ height: "30px" }}>
                          <td colSpan={2}>
                            <hr style={{ color: "#005643" }} />
                          </td>
                        </tr>
                        {/* INICIO PREGUNTA 18 */}
                        <Pregunta18></Pregunta18>
                        {/* FIN PREGUNTA 18 */}
                        <tr style={{ height: "30px" }}>
                          <td colSpan={2}>
                            <hr style={{ color: "#005643" }} />
                          </td>
                        </tr>
                        {/* INICIO PREGUNTA 19 */}
                        <Pregunta19></Pregunta19>
                        {/* FIN PREGUNTA 19 */}
                        <tr style={{ height: "30px" }}>
                          <td colSpan={2}>
                            <hr style={{ color: "#005643" }} />
                          </td>
                        </tr>
                        <tr style={{ height: "15px" }}>
                          <td colSpan={2} />
                        </tr>
                        {/* INICIO SECCION 4 */}
                        <tr id="anonimato1" style={{ display: "none" }} className="seccion">
                          <td width="100%" valign="top" colSpan={2}>
                            <span className="seccion">Información Opcional de Contacto</span>
                          </td>
                        </tr>
                        <tr id="anonimato2" style={{ display: "none" }}>
                          <td width="100%" valign="top">
                            <span className="title">
                              En caso no tener inconveniente de compartir su identidad, por favor proporcione la
                              siguiente información opcional
                            </span>
                          </td>
                          <td width="0%" valign="top"></td>
                        </tr>
                        <tr id="anonimato3" style={{ height: "30px", display: "none" }}>
                          <td colSpan={2}>
                            <hr style={{ color: "#005643" }} />
                          </td>
                        </tr>
                        {/* INICIO PREGUNTA 20 */}
                        <Pregunta20></Pregunta20>
                        {/* FIN PREGUNTA 20 */}
                        <tr id="anonimato5" style={{ height: "30px", display: "none" }}>
                          <td colSpan={2}>
                            <hr style={{ color: "#005643" }} />
                          </td>
                        </tr>
                        {/* INICIO PREGUNTA 21 */}
                        <Pregunta21></Pregunta21>
                        {/* FIN PREGUNTA 21 */}
                        <tr id="anonimato7" style={{ height: "30px", display: "none" }}>
                          <td colSpan={2}>
                            <hr style={{ color: "#005643" }} />
                          </td>
                        </tr>
                        {/* INICIO PREGUNTA 22 */}
                        <Pregunta22></Pregunta22>
                        {/* FIN PREGUNTA 22 */}
                        <tr id="anonimato9" style={{ height: "30px", display: "none" }}>
                          <td colSpan={2}>
                            <hr style={{ color: "#005643" }} />
                          </td>
                        </tr>
                        {/* INICIO PREGUNTA 23 */}
                        <Pregunta23></Pregunta23>
                        {/* FIN PREGUNTA 23 */}
                        <tr id="anonimato11" style={{ height: "30px", display: "none" }}>
                          <td colSpan={2}>
                            <hr style={{ color: "#005643" }} />
                          </td>
                        </tr>
                        {/* INICIO PREGUNTA 24 */}
                        <Pregunta24></Pregunta24>
                        {/* FIN PREGUNTA 24 */}
                        <tr id="anonimato13" style={{ height: "30px", display: "none" }}>
                          <td colSpan={2}>
                            <hr style={{ color: "#005643" }} />
                          </td>
                        </tr>
                        {/* INICIO PREGUNTA 25 */}
                        <Pregunta25></Pregunta25>
                        {/* FIN PREGUNTA 25 */}
                        <tr id="anonimato15" style={{ height: "30px", display: "none" }}>
                          <td colSpan={2}>
                            <hr style={{ color: "#005643" }} />
                          </td>
                        </tr>
                        {/* TOGGLE */}
                        {/* Ley de Protección de Datos */}
                        <tr id="lpdp" style={{ height: "30px" }}>
                          <td colSpan={2}>
                            <div
                              id="toggleLeyProtDatos"
                              // type="hidden"
                              style={{ display: "none" }}
                            >
                              <div id="toggleProtDatos" className="" style={{}}>
                                <p id="textProtDatos" style={{ color: "#A94442" }}>
                                  Autorizo a Grupo Silvestre a realizar el tratamiento de mis datos personales luego de
                                  haber leído la{" "}
                                  <a href="javascript:avisoPrivacidad()">
                                    cláusula de tratamiento de datos personales.
                                  </a>
                                  <input
                                    id="checkboxLPDP"
                                    type="checkbox"
                                    //onclick="toggleProteccionDatos()"
                                  />
                                </p>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr></tr>
                        <tr>
                          <td valign="top" colSpan={2}>
                            {/*<div class="g-recaptcha" data-sitekey="6LeX8UwUAAAAADiEE2oPtz-S0T8oY5OMg2xmmIX_" data-callback="enableBtn"></div><br>      
                                    <span style="color:#A94442">* Obligatorio</span>*/}
                            <br />
                            <br />
                            <span className="descripcion">
                              Pulse el siguiente botón para enviar su irregularidad a través del canal{" "}
                              <b>Formulario Web</b>. Recuerde que debe esperar unos momentos hasta recibir el mensaje de
                              confirmación y su có;digo de reclamo para que su irregularidad quede correctamente
                              registrada.
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td align="center" colSpan={2}>
                            <br />
                            <input className="submit" type="submit" defaultValue="Enviar" />
                            <input type="hidden" name="g-recaptcha-response" id="g-recaptcha-response" />
                            <br />
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    <hr style={{ color: "#005643" }} />
                    <table className="footer" align="center" width="100%">
                      <tbody>
                        <tr>
                          <td align="center" style={{ backgroundColor: "#4BA14B" }}>
                            <span>Copyright © 2017&nbsp;</span>
                            Grupo Silvestre Etico <br />
                            <span>Todos los derechos reservados</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
  )
}


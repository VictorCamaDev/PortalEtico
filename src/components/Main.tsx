import logo from "../assets/images/logo-gruposilvestre.jpg"
export function Main() {
  return (
    <div className="principal" style={{ marginTop: "10px" }}>
      <div style={{ textAlign: "center" }}>
        <div
          className="secundaria"
          style={{
            width: "768px",
            border: "5px solid #005643",
            margin: "auto",
            paddingTop: "15px",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <p>
              <span className="titulo1" style={{ color: "#4BA14B", textAlign: "left" }}>
                <b>Grupo Silvestre Ético</b>
              </span>
            </p>
            <img style={{ height: "100px" }} src={logo} alt="Logo Grupo Silvestre" />
          </div>

          <hr style={{ color: "#005643" }} />

          <div>
            <div style={{ display: "flex" }}>
              <span style={{ marginRight: "10px" }}>Introducción</span>
              <div className="row">
                <div className="col-md-12">
                  <p className="text-start">
                    <strong>Grupo Silvestre Ético</strong> le permite informar posibles desviaciones del Código de Ética
                    y/o políticas del Grupo. Puede registrar irregularidades utilizando los canales de atención que se
                    indican en la siguiente sección.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <hr style={{ color: "#005643" }} />

          <div>
            <div style={{ display: "flex", alignItems: "flex-start" }}>
              <span style={{ marginRight: "15px" }}>Canales de Atención</span>
              <div className="row">
                <div className="col-md-12">
                  <div>
                    <div>
                      <div className="row">
                        <div className="col-md-12">
                          <p className="titulo2" style={{ color: "#4BA14B" }}>
                            1. Formulario Web
                          </p>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-12">
                          <p className="text-start">
                            Para registrar una nueva irregularidad, puede ir al siguiente enlace:{" "}
                            <a href="formulario.php">Registrar irregularidad</a>
                          </p>
                          {/* <p className="text-start">
                            Para consultar el estado de una irregularidad ya registrada, puede ir al siguiente enlace:{" "}
                            <a href="consulta.php">Consultar irregularidad</a>
                          </p> */}
                        </div>
                      </div>
                    </div>
                    <p className="titulo2" style={{ color: "#4BA14B" }}>
                      2. Buzón de Correo
                    </p>
                    <p className="text-start">Puede enviar un correo electrónico a la siguiente dirección:</p>
                    <p className="text-start">
                      <a href="mailto:reportes@gruposilvestreetico.com">reportes@gruposilvestreetico.com</a>
                    </p>

                    <p className="titulo2" style={{ color: "#4BA14B" }}>
                      3. Buzón de Voz
                    </p>
                    <p className="text-start">
                      Puede informar una irregularidad a través de un mensaje de voz las 24 horas del día durante los
                      365 días del año, marcando la opción 2 en el siguiente número:
                    </p>
                    <p className="text-start">0-800-1-8106 (número gratuito)</p>

                    <p className="titulo2" style={{ color: "#4BA14B" }}>
                      4. Línea Telefónica
                    </p>
                    <p className="text-start">
                      Puede contactarse directamente con un profesional de Lunes a Viernes de 8:30 a.m. a 6:30 p.m. al
                      siguiente número:
                    </p>
                    <p className="text-start">0-800-1-8106 (número gratuito)</p>

                    <p className="titulo2" style={{ color: "#4BA14B" }}>
                      5. Entrevista personal y Dirección Postal
                    </p>
                    <p className="text-start">
                      Si desea ser atendido personalmente, diríjase a:
                      <br />
                      <strong>Av. Víctor Andrés Belaunde 171, San Isidro, Lima 27, Lima - Perú</strong>
                      <br />
                      <strong>Preguntar por:</strong> Sr. Rafael Huamán,
                      <br />
                      Las entrevistas presenciales están disponibles con previa cita.
                    </p>

                    <p className="text-start">
                      Si deseas proporcionar información física, envíala a la siguiente dirección en cualquier momento:
                      <br />
                      <strong>Av. Víctor Andrés Belaunde 171, San Isidro, Lima 27, Lima - Perú</strong>
                      <br />
                      <strong>Atención:</strong> Sr. Rafael Huamán, <strong>Referencia:</strong> Grupo Silvestre Ético
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="footer"
            style={{ backgroundColor: "#4BA14B", textAlign: "center", padding: "10px", marginTop: "20px" }}
          >
            <span>Copyright © 2022&nbsp;</span>
            Grupo Silvestre Ético <br />
            <span>Todos los derechos reservados</span>
          </div>
        </div>
      </div>
    </div>
  )
}


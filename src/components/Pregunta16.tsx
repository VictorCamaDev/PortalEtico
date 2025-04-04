export function Pregunta16() {
  return (
    <tr id="s2_p13" style={{ display: "block" }}>
      <td width="100%" valign="top">
        <tr style={{ height: "30px" }}>
          <td colSpan={2}>
            <hr style={{ color: "#005643" }} />
          </td>
        </tr>
        <span className="title">
          ¿Qué testigos considera que podrían contribuir con mayor evidencia de esta irregularidad?
        </span>
        <br />
        {/* onkeydown="contador_ta4()" onkeyup="contador_ta4()" */}
        <textarea
          className="form-control"
          name="txtTestigos"
          id="ta4"
          rows={3}
          cols={70}
          maxLength={256}
          defaultValue={""}
        />
        {/*
                  <br />
                  <span class="texto_general">Caracteres disponibles: </span>
                  <span class="texto_general" id="carac_ta4">250</span>
                  */}
      </td>
      <td width="0%" valign="top"></td>
    </tr>
  )
}


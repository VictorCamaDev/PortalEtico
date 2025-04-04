export function Pregunta15() {
  return (
    <tr id="s2_p11" style={{ display: "block" }}>
      <tr style={{ height: "30px" }}>
        <td colSpan={2}>
          <hr style={{ color: "#005643" }} />
        </td>
      </tr>
      <td width="100%" valign="top">
        <span className="title">¿Qué tipos de beneficios reciben las personas involucradas en la irregularidad?</span>
        <br />
        {/* onkeydown="contador_ta3()" onkeyup="contador_ta3()" */}
        <textarea
          className="form-control"
          name="txtBeneficios"
          id="ta3"
          rows={3}
          cols={70}
          maxLength={256}
          defaultValue={""}
        />
        {/*
                    <br />
                    <span class="texto_general">Caracteres disponibles: </span>
                    <span class="texto_general" id="carac_ta3">250</span>
                    */}
      </td>
      <td width="0%" valign="top"></td>
    </tr>
  )
}


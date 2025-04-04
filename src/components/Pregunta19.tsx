export function Pregunta19() {
  return (
    <tr>
      <td width="100%" valign="top">
        <span className="title">¿Desea proporcionar una cuenta de correo electrónico para mantener contacto?</span>
        <br />
        <input
          id="inputCorreoAnonimo"
          className="form-control"
          name="txtCorreoAnonimo"
          type="text"
          maxLength={50}
          //onkeyup="checkToggleDisclaimer();"
        />
      </td>
      <td width="0%" valign="top"></td>
    </tr>
  )
}


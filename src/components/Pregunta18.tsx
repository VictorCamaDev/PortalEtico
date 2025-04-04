export function Pregunta18() {
  return (
    <tr>
      <td width="100%" valign="top">
        <span className="title">¿Desea mantener su identidad en el anonimato?</span>
        <br />
        <input
          id="anonIdentity_no"
          type="radio"
          name="radioAnonimo"
          defaultValue="no"
          className="form-check-input"
          //onclick="desactivarAnonimato();checkToggleDisclaimer();resetCorreoAnonimo();"
        />
        <label>No</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input
          id="anonIdentity_yes"
          type="radio"
          name="radioAnonimo"
          defaultValue="si"
          className="form-check-input"
          //onclick="activarAnonimato();checkToggleDisclaimer();"
        />
        <label>Sí</label>
      </td>
      <td width="0%" valign="top"></td>
    </tr>
  )
}


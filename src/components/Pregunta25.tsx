export function Pregunta25() {
  return (
    <tr id="anonimato14" style={{ display: "none" }}>
      <td width="100%" valign="top">
        <span className="title">Indique el área a la cual pertenece</span>
        <br />
        <input
          type="radio"
          name="radioS4_area"
          defaultValue="RRHH"
          className="form-check-input"
          //onclick="hide('p23')"
        />
        <label>RRHH</label>
        <br />
        <input
          type="radio"
          name="radioS4_area"
          defaultValue="Finanzas"
          className="form-check-input"
          //onclick="hide('p23')"
        />
        <label>Finanzas</label>
        <br />
        <input
          type="radio"
          name="radioS4_area"
          defaultValue="Contabilidad"
          className="form-check-input"
          //onclick="hide('p23')"
        />
        <label>Contabilidad</label>
        <br />
        <input
          type="radio"
          name="radioS4_area"
          defaultValue="Gerencia"
          className="form-check-input"
          //onclick="hide('p23')"
        />
        <label>Gerencia</label>
        <br />
        <input
          type="radio"
          name="radioS4_area"
          defaultValue="Otros"
          className="form-check-input"
          //onclick="show('p23')"
        />
        <label>Otros</label>
        <br />
        <div id="p23" style={{ display: "none" }}>
          <span className="title">Especificar</span>
          <br />
          <input className="form-control" name="txtS4_area" type="text" maxLength={25} />
        </div>
      </td>
      <td width="0%" valign="top"></td>
    </tr>
  )
}


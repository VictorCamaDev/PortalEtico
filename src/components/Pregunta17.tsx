export function Pregunta17() {
  return (
    <tr>
      <td width="100%" valign="top">
        <span className="title">¿Cuál de las siguientes opciones describe mejor su relación con el Grupo</span>
        <br />
        <input
          type="radio"
          name="radioRelacionCpnia"
          defaultValue="Empleado"
          className="form-check-input"
          //onclick="empleado(1)"
        />
        <label>Empleado</label>
        <br />
        <input
          type="radio"
          name="radioRelacionCpnia"
          defaultValue="Proveedor"
          className="form-check-input"
          //onclick="empleado(2)"
        />
        <label>Proveedor</label>
        <br />
        <input
          type="radio"
          name="radioRelacionCpnia"
          defaultValue="Cliente"
          className="form-check-input"
          //onclick="empleado(3)"
        />
        <label>Cliente</label>
        <br />
        <input
          type="radio"
          name="radioRelacionCpnia"
          defaultValue="Ex Empleado"
          className="form-check-input"
          //onclick="empleado(4)"
        />
        <label>Ex Empleado</label>
        <br />
        <input
          type="radio"
          name="radioRelacionCpnia"
          defaultValue="Otro"
          className="form-check-input"
          //onclick="empleado(5)"
        />
        <label>Otro</label>
        <br />
        <div id="p17" style={{ display: "none" }}>
          <span className="title">Especificar</span>
          <br />
          <input className="form-control" name="txtRelacionCpnia" type="text" maxLength={25} />
        </div>
      </td>
      <td width="0%" valign="top"></td>
    </tr>
  )
}


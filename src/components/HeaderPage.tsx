import logo from "../assets/images/logo-gruposilvestre.jpg"

export function HeaderPage() {
  return (
    <div className="row mt-5">
      <div className="col-md-12 titulo">
        <h3>Grupo Silvestre Etico</h3>
        <img src={logo} className="img-thumbnail" alt="logo" style={{ height: "80px" }}></img>
      </div>
    </div>
  )
}


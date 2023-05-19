import logotipo from "../img/logotipo.png";

export function Nav() {
  return (
    <nav>
      <div
        style={{ height: "100px", width: "325px" }}
        className="titulo-container container d-flex align-items-center justify-content-center"
      >
        <img className="w-100" src={logotipo} alt="Delights Helados"></img>
      </div>

      <header className="container border-top border-bottom border-dark">
        <ul
          style={{ listStyle: "none" }}
          className="container my-0 row text-center justify-content-center align-items-center"
        >
          <li className="col-6 col-sm-3 my-4">
            <a className="text-decoration-none text-dark h5" href="/">
              INICIO
            </a>
          </li>
          <li className="col-6 col-sm-3 my-4">
            <a
              className="text-decoration-none text-dark h5"
              href="/Sabores"
            >
              SABORES
            </a>
          </li>
          <li className="col-6 col-sm-3 my-4">
            <a
              className="text-decoration-none text-dark h5"
              href="/Locales"
            >
              LOCALES
            </a>
          </li>
          <li className="col-6 col-sm-3 my-4">
            <a
              className="text-decoration-none text-dark h5"
              href="/Contacto"
            >
              CONTACTO
            </a>
          </li>
        </ul>
      </header>
    </nav>
  );
}

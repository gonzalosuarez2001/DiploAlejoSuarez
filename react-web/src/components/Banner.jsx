import "../styles/banner.css";

export function Banner() {
  return (
    <div className="banner container-md d-flex align-items-center justify-content-center shadow">
      <div className="d-flex flex-column justify-content-center align-items-center px-3 filtro">
        <h1 className="text-light">Helados Artesanales</h1>
        <a href="/Sabores" className="h4 text-light text-decoration-none">
          Lista de Sabores <i className="fas fa-forward arrow"></i>
        </a>
      </div>
    </div>
  );
}

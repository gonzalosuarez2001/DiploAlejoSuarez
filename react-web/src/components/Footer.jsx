export function Footer() {
  return (
    <footer
      style={{ background: "#5A3742" }}
      className="d-flex flex-column justify-content-center align-items-center"
    >
      <div className="container row py-2 align-items-center">
        <div className="col-12 col-lg-4 py-2 text-center text-white">
          <h4>DELIGHTS</h4>
          <p>
            Somos una heladería que combina la verdadera receta italiana con
            tecnología de última generación para elaborar helados de calidad
          </p>
        </div>
        <div className="col-12 col-lg-4 py-2 text-center text-white">
          <h5>CONTACTO</h5>
          <p>Delights.Helados@gmail.com</p>
          <p>11 5268-1938</p>
        </div>
        <div className="col-12 col-lg-4 py-2 text-center text-white d-none d-lg-block">
          <p>Scalabrini Ortiz 941, Palermo.</p>
          <p>Riestra 5841, Almagro.</p>
          <p>Roosvelt 2569, Puerto Madero.</p>
        </div>
      </div>
      <div
        className="w-100 text-center text-white py-1"
        style={{ background: "#23161A" }}
      >
        Delights Helados | Copyright 2023 ©
      </div>
    </footer>
  );
}

import "../styles/local.css";

export function Local(props) {
  const { imagen, titulo, descripcion } = props;
  return (
    <div className="container my-5 shadow">
      <div className="row">
        <div className="col-md-auto d-flex justify-content-center container-img">
          <img className="img" src={imagen} alt="Local" />
        </div>
        <div className="col descripcion py-3 px-5 d-flex flex-column text-center justify-content-center align-items-center">
          <h1 className="mb-3" >{titulo}</h1>
          <p>{descripcion}</p>
        </div>
      </div>
    </div>
  );
}

import "../styles/sabor.css";

export function Sabor(props) {
  const { imagen, titulo, subtitulo } = props;
  return (
    <li className="gallery_item border shadow">
      <div className="gallery_image">
        <img src={imagen} alt="Sabor" />
      </div>
      <div
        style={{ height: "90px", backgroundColor: "#ede8df" }}
        className="overlay d-flex flex-column justify-content-evenly align-items-center "
      >
        <div style={{ fontWeight: "bold"}} className="h4 m-0 text-center">{titulo}</div>
        <div className="p-1 px-2 m-0 text-center helado">{subtitulo}</div>
      </div>
    </li>
  );
}

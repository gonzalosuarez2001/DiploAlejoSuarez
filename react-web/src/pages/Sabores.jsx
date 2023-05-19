import { useState, useEffect } from "react";
import axios from "axios";

import { Sabor } from "../components/Sabor";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";

import "../styles/sabores.css";

export function Sabores(props) {
  const [loading, setLoading] = useState(false);
  const [sabores, setSabores] = useState([]);

  useEffect(() => {
    const cargaSabores = async () => {
      setLoading(true);
      const response = await axios.get("http://localhost:3000/api/sabores");
      setSabores(response.data);
      setLoading(false);
    };

    cargaSabores();
  }, []);

  return (
    <>
      <Nav />
      <div class="container my-5">
        <ul class="container_gallery">
          {loading ? (
            <p>Cargando...</p>
          ) : (
            sabores.map((item) => (
              <Sabor
                key={item.id}
                titulo={item.titulo}
                subtitulo={item.subtitulo}
                imagen={item.imagen}
              />
            ))
          )}
        </ul>
      </div>
      <Footer />
    </>
  );
}

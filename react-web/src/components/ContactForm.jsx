import "../styles/contactForm.css";
import { useState } from "react";
import axios from "axios";

export function ContactForm() {
  const initialForm = {
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  };

  const [sending, setSending] = useState(false);
  const [msg, setMsg] = useState("");
  const [formData, setFormData] = useState(initialForm);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((oldData) => ({
      ...oldData,
      [name]: value, // forma dinamica
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMsg("");
    setSending(true);
    const response = await axios.post(
      "http://localhost:3000/api/contacto",
      formData
    );
    setSending(false);
    setMsg(response.data.message);
    if (response.data.error === false) {
    }
    setFormData(initialForm);
  };

  return (
    <form action="/Contacto" method="post" className="container border shadow formulario" onSubmit={handleSubmit}>
      <div className="pb-1 text-center">
        <p className="h1">Contacto</p>
      </div>
      <div>
        <input
          className="col-12 form-control p-3 my-4"
          placeholder="Nombre"
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          required
        />
        <input
          className="col-12 form-control p-3 my-4"
          placeholder="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          className="col-12 form-control p-3 my-4"
          placeholder="Telefono"
          type="tel"
          name="telefono"
          value={formData.telefono}
          onChange={handleChange}
          required
        />
        <input
          className="col-12 form-control p-3 my-4"
          placeholder="Consulta"
          type="text"
          name="mensaje"
          value={formData.mensaje}
          onChange={handleChange}
          required
        />
        {sending ? <p>Enviando...</p> : null}
        {msg ? <p>{msg}</p> : null}
      </div>
      <div className="d-flex justify-content-center">
        <button type="submit" value="Enviar" className="col-12 text-light w-50 border-0 p-3 h5 rounded-3 contacto_button">
          Consultar
        </button>
      </div>
    </form>
  );
}

var express = require("express");
var router = express.Router();
var saboresModel = require("../models/saboresModel");
const cloudinary = require("cloudinary").v2;
const nodemailer = require("nodemailer");

router.get("/api/sabores", async (req, res, next) => {
  let sabores = await saboresModel.getSabores();

  sabores = sabores.map((sabores) => {
    if (sabores.img_id) {
      const imagen = cloudinary.url(sabores.img_id, {
        width: 400,
        height: 260,
      });
      return { ...sabores, imagen };
    }
  });

  res.json(sabores);
});

router.post("/api/contacto", async (req, res) => {
  const mail = {
    to: "alejo.2001.suarez@gmail.com",
    subject: "Contacto web",
    html: `${req.body.nombre} se contacto a traves de la web y quiere más informacion a este correo: ${req.body.email} <br> Además, hizo el siguiente comentario: ${req.body.mensaje} <br> Su tel es: ${req.body.telefono}`,
  };

  const transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transport.sendMail(mail);

  res.status(201).json({
    error: false,
    message: "Mensaje enviado",
  });
});

module.exports = router;

var express = require("express");
var router = express.Router();
var saboresModel = require("../../models/saboresModel");
const util = require("util");
const cloudinary = require("cloudinary").v2;
const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy);

router.get("/admin/sabores", async (req, res) => {
  let sabores = await saboresModel.getSabores();

  sabores = sabores.map((sabor) => {
    if (sabor.img_id) {
      const imagen = cloudinary.image(sabor.img_id, {
        width: 400,
        height: 260,
      });
      return { ...sabor, imagen };
    }
  });

  res.render("admin/sabores", {
    layout: "admin/layout",
    usuario: req.session.user_name,
    sabores: sabores,
  });
});

router.get("/admin/sabores/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/admin/login");
});

router.get("/admin/sabores/add", (req, res) => {
  res.render("admin/saboresAdd", {
    layout: "admin/layoutCrud",
    usuario: req.session.user_name,
  });
});

router.post("/admin/sabores/add", async (req, res) => {
  try {
    console.log(req.files.imagen);
    var img_id = "";
    if (req.files?.imagen != null && Object.keys(req.files.imagen).length > 0) {
      image = req.files.imagen;
      img_id = (await uploader(image.tempFilePath)).public_id;
    }
    if (req.body.titulo != "" && req.body.subtitulo != "" && img_id != "") {
      let data = [req.body.titulo, req.body.subtitulo, img_id];
      await saboresModel.insertSabor(data);
      res.redirect("/admin/sabores");
    } else {
      res.render("admin/saboresAdd", {
        layout: "admin/layout",
        error: true,
      });
    }
  } catch (error) {
    console.log(error);
  }
});

router.get("/admin/sabores/delete/:id", async (req, res) => {
  try {
    let id = req.params.id;
    await saboresModel.deleteSabor(id);
    res.redirect("/admin/sabores");
  } catch (error) {
    console.log(error);
  }
});

router.get("/admin/sabores/modificar/:id", async (req, res) => {
  try {
    let id = req.params.id;
    let sabor = await saboresModel.getSaborById(id);
    res.render("admin/saboresModify", {
      layout: "admin/layoutCrud",
      usuario: req.session.user_name,
      sabor: sabor[0],
    });
  } catch (error) {
    console.log(error);
  }
});

router.post("/admin/sabores/modificar", async (req, res) => {
  try {
    var img_id = req.body.img_original;
    var delete_img = false;
    if (req.files?.imagen != null && Object.keys(req.files.imagen).length > 0) {
      image = req.files.imagen;
      img_id = (await uploader(image.tempFilePath)).public_id;
      delete_img = true;
    }
    if (delete_img == true) {
      await destroy(req.body.img_original);
    }
    let data = {
      titulo: req.body.titulo,
      subtitulo: req.body.subtitulo,
      img_id: img_id
    };
    await saboresModel.modifySabor(data, req.body.id);
    res.redirect("/admin/sabores");
  } catch (error) {
    console.log(error);
    res.render("admin/saboresModify", {
      layout: "admin/layout",
      error: true,
    });
  }
});

module.exports = router;

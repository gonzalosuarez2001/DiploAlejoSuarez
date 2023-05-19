var express = require("express");
var router = express.Router();
var getUserByUsernameAndPassword = require("../../models/usersModel");

router.get("/admin/login", function (req, res) {
  res.render("admin/login", {
    layout: "admin/layout",
  });
});

router.post("/admin/login", async (req, res) => {
  try {
    let user = req.body.user;
    let password = req.body.password;
    let data = await getUserByUsernameAndPassword(user, password);
    if (data != undefined) {
      req.session.user_id = data.id;
      req.session.user_name = data.user;
      res.redirect("./sabores");
    } else {
      res.render("admin/login", {
        layout: "admin/layout",
        error: true,
      });
    }
  } catch (error) {console.log(error)}
});

router.get("/admin/novedades/delete/:id", async (req, res) => {
  try {
    let id = req.params.id;
    await novedadesModel.deleteNovedad(id);
    res.redirect("/admin/novedades");
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;

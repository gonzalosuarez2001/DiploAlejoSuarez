var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const session = require("express-session");
const fileUpload = require('express-fileupload')
const cors = require('cors');

require('dotenv').config();

var indexRouter = require("./routes/admin/login");
var saboresRouter = require("./routes/admin/sabores");
var apiRouter = require("./routes/api");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: '/tmp/'
}));

app.use(
  session({
    secret: "123",
    resave: true,
    saveUninitialized: true,
  })
);

const secured = async (req, res, next) => {
  if (req.session.user_id != undefined) {
    next();
  } else {
    res.redirect("/admin/login");
    res.end();
  }
};

app.use("/admin/sabores", secured);
app.use(indexRouter);
app.use(saboresRouter);
app.use(cors(), apiRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;

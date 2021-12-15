const express = require("express");
const router = express.Router();

// responder la solicitud con las views de las paginas

router.get("/", (req, res) => {
  res.render("index", { title: " | Inicio" });
});

router.get("/html", (req, res) => {
  res.render("html", { title: " | HTML" });
});

router.get("/css", (req, res) => {
  res.render("css", { title: " | CSS" });
});

router.get("/javascript", (req, res) => {
  res.render("javascript", { title: " | JavaScript" });
});

router.get("/node", (req, res) => {
  res.render("node", { title: " | Node.JS" });
});

router.get("/python", (req, res) => {
  res.render("python", { title: " | Python" });
});

router.get("/git", (req, res) => {
  res.render("git", { title: " | Git" });
});

router.get("/typescript", (req, res) => {
  res.render("typescript", { title: " | Typescript" });
});

module.exports = router;


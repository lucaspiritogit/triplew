const express = require('express');
const router = express.Router();


// responder la solicitud con las views de las paginas


router.get("/", (req, res) => {
    res.render("index", 
    {title : " | Inicio"});
  });
  
  router.get("/html", (req, res) => {
    res.render("html", 
    {title : " | HTML"});
  });
  
  router.get("/css", (req, res) => {
    res.render("css", 
    {title : " | CSS"});
  });
  
  router.get("/javascript", (req, res) => {
    res.render("javascript", 
    {title : " | javaScript"});
  });
  
  
  module.exports = router;

  
  
  
  // /////////////////////////////////
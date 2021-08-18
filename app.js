// requires y modulos
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");

// app.set asigna funciones al servidor, consultar la documentacion de express.js
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname + '/views'));

// static files routes
// path.join permite normalizar las rutas de carpetas distintos sistemas operativos
app.use(express.static(path.join(__dirname + '/public')));
app.use(express.static(path.join(__dirname + '/scripts')));

// routes
app.use('/', require('./router/webroutes'));

// error handling del 404
app.use((req, res) => {
  res.status(404).render("404",
  {title : " | 404"})
});

// listen para testear si todo corre bien
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}(●'◡'●)`);
});

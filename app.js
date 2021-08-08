const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// esto setea de donde agarrar los static files para el servidor
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/scripts'));


// routes
app.use('/', require('./router/webroutes'));


// error handling del 404
app.use((req, res, next) => {
  res.status(404).render("404",
  {title : " | 404"})
});


// listen para testear si todo corre bien👍
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

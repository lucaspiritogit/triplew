const express = require("express");
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/public'));

// app get para responder la solicitud con las views de las paginas

app.get("/", (req, res) => {
  res.render("index", 
  {title : " | Inicio"});
});

app.get("/html", (req, res) => {
  res.render("html", 
  {title : " | HTML"});
});

app.get("/css", (req, res) => {
  res.render("css", 
  {title : " | CSS"});
});

app.get("/javascript", (req, res) => {
  res.render("javascript", 
  {title : " | javaScript"});
});




// /////////////////////////////////

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});


app.use((req, res, next) => {
  res.status(404).render("404", 
  {title : " | 404"})
});
const express = require("express");
const app = express();
const port = 3000;



app.set('port', process.env.PORT || port);

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + '/public'));

// routes
app.use('/', require('./router/webroutes'));



// /////

app.use((req, res, next) => {
  res.status(404).render("404", 
  {title : " | 404"})
});



app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

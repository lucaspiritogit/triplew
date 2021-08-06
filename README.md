# TripleW es una pagina de recursos para estudiar desarrollo web
Funciona de manera **OpenSource**, esto quiere decir que cualquiera puede contribuir con sus conocimientos, tips o recursos que encuentre en el camino.
Dentro de poco la pagina va a ser deployeada en Heroku, hasta entonces lo vamos a ir trabajando en privado.

# Documentacion para contribuir

### **1. Instalar las dependencias del proyecto.**

 Dependencias:
```javascript
  "dependencies": {
    "ejs": "^3.1.6",
    "express": "^4.17.1",
    "nodemon": "^2.0.12"
  }
```

Para este proyecto estamos usando [Node](https://nodejs.org), [Express](https://expressjs.com/), [EJS](https://ejs.co/) y [Nodemon](https://www.npmjs.com/package/nodemon)

Clona el repositorio de manera local con `git clone https://github.com/lucaspiritogit/triplew`, usa la terminal de tu editor de texto y metete a la carpeta raiz del proyecto. Ejecuta `npm i` para instalar las dependencias del proyecto. Tambien te recomiendo que instales `nodemon` de manera `global` usando el comando `npm install -g nodemon`. Esto hace que en el futuro, cuando estes en un proyecto que use nodemon, no tengas que instalarlo localmente en esa carpeta. Si no queres instalarlo globalmente, usa `npm i nodemon` y deberia de funcionar igual.
Para ver el proyecto de manera local, anda a la terminal y escribi `nodemon app` o `nodemon app.js`.

### El proyecto deberia de verse asi:
![](public/images/docs/structure.png)
> `node_modules` y `.env` no van a ser visibles ya que estan dentro del `.gitignore`

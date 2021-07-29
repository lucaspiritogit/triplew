# TripleW es una pagina de recursos para estudiar desarrollo web
Funciona de manera **OpenSource**, esto quiere decir que cualquiera puede contribuir con sus conocimientos, tips o recursos que encuentre en el camino.
Dentro de poco la pagina va a ser deployeada en Heroku, hasta entonces lo vamos a ir trabajando en privado.

# Documentacion para contribuir

### **Antes de empezar a contribuir, hay que instalar las dependencias del proyecto.**

1. Dependencias
```javascript
  "dependencies": {
    "ejs": "^3.1.6",
    "express": "^4.17.1",
    "mongoose": "^5.13.3",
    "nodemon": "^2.0.12"
  }
```

Para este proyecto estamos usando [Node](https://nodejs.org), [Express](https://expressjs.com/), [EJS](https://ejs.co/), [Nodemon](https://www.npmjs.com/package/nodemon) y [Mongoose](https://mongoosejs.com/).
> Mongoose esta implementado porque la idea es que TripleW tenga un sistema de log-in para agregar distintas features, pero la verdad es que me olvide completamente de implementarlo asi que probablemente es lo que mas tarde en llegar👻.

### Dentro del proyecto:

2. Instalar las dependencias dentro del editor de texto.

Una vez tengas clonado el repositorio, usa la terminal de tu editor de texto y metete a la carpeta raiz del proyecto.
y ejecuta `npm i` para instalar las dependencias del proyecto. Tambien te recomiendo que instales `nodemon` de manera `global` usando el comando `npm install -g nodemon`. Esto hace que en el futuro, cuando estes en un proyecto que use nodemon, no tengas que instalarlo localmente en esa carpeta. Si no queres instalarlo globalmente, usa `npm i nodemon` y deberia de funcionar igual.


### Estructura del proyecto:
![](public/images/docs/structure.png)


# Video 02 - Escritura y lectura de ficheros ejemplo básico pokemon

En este vídeo hemos visto como podemos escribir en un fichero haciendo uso de FS:

```javascript
console.log("--- START WRITE.JS ---");

const fs = require("fs");

const pokemons = [
  {
    name: "Bulbasaur",
    id: 1,
  },
  {
    name: "Ivysaur",
    id: 2,
  },
  {
    name: "Venusaur",
    id: 3,
  },
];

const pokemonString = JSON.stringify(pokemons);

fs.writeFile("./pokemons.json", pokemonString, (error) => {
  if (error) {
    console.log("Ha ocurrido un error escribiendo el fichero");
    console.log(error);
  } else {
    console.log("Fichero guardado correctamente!");
  }

  console.log("--- END WRITE.JS ---");
});
```

También hemos hecho uso de FS para leer ese fichero que acabamos de crear

```javascript
console.log("--- START READ.JS ---");

const fs = require("fs");

fs.readFile("./pokemons.json", (readError, data) => {
  if (readError) {
    console.log("Ha ocurrido un error leyendo el fichero");
    console.log(readError);
  } else {
    try {
      const pokemons = JSON.parse(data);
      console.log(pokemons);
    } catch (parseError) {
      console.log("Ha ocurrido un error PARSEANDO el fichero");
      console.log(parseError);
    }
  }

  console.log("--- END READ.JS ---");
});
```

Por otro lado, para poder ejecutar fácilmente estos dos ficheros hemos creado dos scripts (write y read) en nuestro package.json:

```json
{
  "name": "s1-intro-scripts-and-files",
  "version": "0.0.1",
  "description": "Test node for Node session 1",
  "main": "sample.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "read": "node read.js",
    "write": "node write.js"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/The-Valley-School/node-s1-intro-scripts-and-files.git"
  },
  "keywords": ["Node"],
  "author": "Fran Linde",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/The-Valley-School/node-s1-intro-scripts-and-files/issues"
  },
  "homepage": "https://github.com/The-Valley-School/node-s1-intro-scripts-and-files#readme",
  "dependencies": {
    "prompt-sync": "^4.2.0"
  }
}
```

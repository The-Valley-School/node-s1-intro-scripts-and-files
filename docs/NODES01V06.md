# Video 06 - Ejemplo de script que cuenta palabras

En este vídeo hemos hecho un script que lee un fichero TXT, cuenta todas las apariciones de las palabras que hay, y te muestra las más repetidas:

```javascript
const prompt = require("prompt-sync")();
const fs = require("fs");

const filePath = prompt("Introduce el path del fichero a leer: ");

fs.readFile(filePath, "utf-8", (error, data) => {
  if (error) {
    console.log("Ha ocurrido un error leyendo el fichero");
  } else {
    const text = data.toLowerCase();
    const words = text.split(" ");
    const wordCount = words.reduce((acc, word) => {
      if (word.length > 3) {
        acc[word] = acc[word] ? acc[word] + 1 : 1;
      }
      return acc;
    }, {});

    console.log(wordCount);

    const topWords = Object.entries(wordCount)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5);

    console.log(topWords);
  }
});
```

Lo más interesante de este script es el uso de la codificación “utf-8” para leer ficheros de texto.

Recuerda que el código que hemos visto durante los vídeos puedes encontrarlo en el siguiente repositorio:

<https://github.com/The-Valley-School/node-s1-intro-scripts-and-files>

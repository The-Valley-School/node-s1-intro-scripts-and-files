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

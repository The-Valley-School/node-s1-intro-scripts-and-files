# Video 05 - Ejemplo de script que convierte JSON a CSV

En este vídeo hemos visto lo que es un CSV (Comma-separated Values).

Los archivos CSV (del inglés "comma-separated values") son un tipo de documento en formato abierto sencillo para representar datos en forma de tabla. En ellos, las columnas se separan por comas (o punto y coma en casos donde la coma es el separador decimal) y las filas por saltos de línea.

El formato CSV es muy sencillo y no indica un juego de caracteres concreto, ni cómo están situados los bytes ni el formato para el salto de línea. Es necesario indicar estos puntos al abrir el archivo, por ejemplo, con una hoja de cálculo.

Durante el vídeo hemos realizado un script que pide al usuario un fichero JSON y lo convierte a CSV:

```javascript
const fs = require("fs");
const prompt = require("prompt-sync")();

const convertJsonToCsv = (jsonData) => {
  let csv = "";

  // Encabezados
  const firstItemInJson = jsonData[0];
  const headers = Object.keys(firstItemInJson);
  csv = csv + headers.join(";") + "; \n";

  // Datos

  // Recorremos cada fila
  jsonData.forEach((item) => {
    // Dentro de cada fila recorremos todas las propiedades
    headers.forEach((header) => {
      csv = csv + item[header] + ";";
    });
    csv = csv + "\n";
  });

  return csv;
};

const filePath = prompt("Introduce la ruta de un fichero JSON: ");

fs.readFile(filePath, (readError, data) => {
  if (readError) {
    console.log("Ha ocurrido un error leyendo el fichero");
  } else {
    try {
      const parsedData = JSON.parse(data);
      const csv = convertJsonToCsv(parsedData);

      const filePathOutput = prompt("Introduce la ruta del fichero a generar: ");
      fs.writeFile(filePathOutput, csv, (error) => {
        if (error) {
          console.log("Ha ocurrido un error escribiendo el fichero");
        } else {
          console.log("Fichero guardado correctamente!");
        }
      });
    } catch (parseError) {
      console.log("Ha ocurrido un error PARSEANDO el fichero");
    }
  }
});
```

De esta manera podemos pasar de un json como el de pokemons:

```javascript
[
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
  {
    name: "Pikachu",
    id: 99,
  },
  {
    name: "Charizard",
    id: 10,
  },
];
```

A un CSV que represente lo mismo:

```csv
name;id;
Bulbasaur;1;
Ivysaur;2;
Venusaur;3;
Pikachu;99;
Charizard;10;
```

Y así visualizarlo por ejemplo con Excel:

![pokemon-excel.png](/docs/assets/pokemon-excel.png)

# Video 07 - Ejercicio nota media de los alumnos

Debes realizar un script en Node que se encargue de procesar un fichero de notas como este:

```javascript
[
  {
    name: "Fran",
    mark: 7,
    test: "Javascript",
  },
  {
    name: "Edu",
    mark: 8,
    test: "Javascript",
  },
  {
    name: "Gon",
    mark: 9,
    test: "Javascript",
  },
  {
    name: "Maria",
    mark: 6,
    test: "Javascript",
  },
  {
    name: "Juan",
    mark: 5,
    test: "Javascript",
  },
  {
    name: "Fran",
    mark: 6,
    test: "CSS",
  },
  {
    name: "Edu",
    mark: 7,
    test: "CSS",
  },
  {
    name: "Gon",
    mark: 8,
    test: "CSS",
  },
  {
    name: "Maria",
    mark: 6,
    test: "CSS",
  },
  {
    name: "Juan",
    mark: 4,
    test: "CSS",
  },
  {
    name: "Fran",
    mark: 9,
    test: "HTML",
  },
  {
    name: "Edu",
    mark: 8,
    test: "HTML",
  },
  {
    name: "Gon",
    mark: 6,
    test: "HTML",
  },
  {
    name: "Maria",
    mark: 9,
    test: "HTML",
  },
  {
    name: "Juan",
    mark: 7,
    test: "HTML",
  },
  {
    name: "Fran",
    mark: 8,
    test: "React",
  },
  {
    name: "Edu",
    mark: 9,
    test: "React",
  },
  {
    name: "Gon",
    mark: 7,
    test: "React",
  },
  {
    name: "Maria",
    mark: 6,
    test: "React",
  },
  {
    name: "Juan",
    mark: 8,
    test: "React",
  },
];
```

Y genere un CSV indicando la media de cada alumno, además debes mostrarlo ordenado de mayor a menor. Para el JSON de ejemplo indicado debe devolver el siguiente CSV:

```csv
Nombre;Nota media
Edu;8.00
Fran;7.50
Gon;7.50
Maria;6.75
Juan;6.00
```

Si lo visualizamos con excel o similar, podremos verlo así:

![notas.png](Sesio%CC%81n%201%200516c5d59660420e91a32d3b8093fd91/notas.png)

El script debe preguntar el nombre del fichero JSON donde se encuentran las notas, y también el nombre del fichero CSV que debe generar como salida. Para estas preguntas puedes usar la librería prompt-sync:

<https://github.com/heapwolf/prompt-sync>

Recuerda que el código que hemos visto durante los vídeos puedes encontrarlo en el siguiente repositorio:

<https://github.com/The-Valley-School/node-s1-intro-scripts-and-files>

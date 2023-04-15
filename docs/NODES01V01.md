# Video 01 - Introducción a Node.js

Node.js es un entorno de ejecución de JavaScript desarrollado por Ryan Dahl en 2009. Utiliza el motor de JavaScript V8 de Google y permite a los desarrolladores escribir aplicaciones en JavaScript en el lado del servidor. Esto significa que los desarrolladores pueden usar un mismo lenguaje de programación para crear tanto el frontend como el backend de una aplicación web.

Con Node.js, se pueden crear aplicaciones web, scripts de servidor, y aplicaciones de red de alta escalabilidad y rendimiento. Por ejemplo, se pueden crear aplicaciones de chat en tiempo real, juegos multijugador en línea, y herramientas de automatización de tareas. Además, tiene una gran variedad de módulos y librerías disponibles en su ecosistema, llamado npm. Estos módulos y librerías permiten a los desarrolladores agregar funcionalidades a sus aplicaciones de manera más rápida y eficiente.

Web oficial Node:

<https://nodejs.org/>

Listado versiones Node + NPM:

<https://nodejs.org/en/download/releases>

Es importante estar al tanto de las versiones, por ejemplo durante la 18 aparecieron muchas novedades interesantes como soporte para fetch o módulo propio de ejecución de tests:

<https://nodejs.org/en/blog/announcements/v18-release-announce>

Node.js es un proyecto de código abierto mantenido por el Technical Steering Committee, un grupo de líderes de la comunidad Node.js que se encargan de la toma de decisiones técnicas y estratégicas del proyecto.

Web Oficial TSC:

<https://github.com/nodejs/TSC>

Un script con Node.js es un archivo de código JavaScript que se ejecuta en el entorno de ejecución de Node.js. Puede ser utilizado para automatizar tareas, crear aplicaciones de línea de comandos, procesar datos, y realizar otras operaciones.

Por ejemplo, un script con Node.js puede ser utilizado para:

- Leer y escribir archivos en el sistema de archivos
- Acceder a bases de datos y realizar operaciones CRUD
- Realizar operaciones de red, como hacer solicitudes HTTP
- Acceder a las funcionalidades del sistema operativo, como ejecutar comandos de línea de comando
- Automatizar tareas, como el procesamiento de datos o la generación de informes.

Un script de Node.js se ejecuta desde la línea de comando utilizando el comando "node" seguido del nombre del archivo .js

En este vídeo hemos hecho un ejemplo de script Node que pregunta al usuario su nombre para saludarle:

```javascript
// Manera clásica de pedir datos al usuario node nativo
const readLine = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readLine.question("Cómo te llamas? ", (name) => {
  console.log(`Hola ${name}`);
  readLine.close();
});
```

También lo hemos hecho mediante una librería de NPM:

<https://www.npmjs.com/package/prompt-sync>

El código queda así:

```javascript
// Ejemplo con librería
const prompt = require("prompt-sync")();
const name = prompt("Cómo te llamas? ");
console.log(`Hola ${name}`);
```

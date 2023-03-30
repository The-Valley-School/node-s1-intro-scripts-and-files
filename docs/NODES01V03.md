# Video 03 - Husky, prettier y Eslint para Node

En este vídeo hemos configurado el linter más famoso de JavaScript, ESLint:

<https://eslint.org/docs/latest/use/getting-started>

Con él podremos detectar errores y forzar a que nuestro código siga un estilo concreto.

Para ello debemos ejecuta en consola:

```javascript
npm init @eslint/config
```

Y responder a las preguntas que nos hace el script. Finalmente tras personalizar algunas de las reglas, el fichero final de configuración .eslintrc queda de la siguiente manera:

```javascript
module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: "standard",
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    "semi": "off",
    "space-before-function-paren": "off",
    "quotes": [2, "double"],
    "quote-props": [2, "consistent"],
    "multiline-ternary": "off",
    "comma-dangle": "off",
  },
};
```

Después hemos configurado la extensión Prettier añadiendo un fichero .prettierrc con la siguiente configuración:

```javascript
{
  "singleQuote": false,
  "tabWidth": 2,
  "arrowParens": "always",
  "proseWrap": "never",
  "singleAttributePerLine": false,
  "quoteProps": "consistent",
  "semi": true,
  "printWidth": 600
}
```

Y por último hemos instalado Husky para que todos nuestros commits pasen previamente las reglas de lintado:

<https://typicode.github.io/husky/#/?id=automatic-recommended>

El comando para instalarlo ha sido:

```javascript
npx husky-init && npm install
```

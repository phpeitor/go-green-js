# Go Green JS🐞
[![forthebadge](http://forthebadge.com/images/badges/made-with-javascript.svg)](https://www.linkedin.com/in/drphp/)
[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](https://www.linkedin.com/in/drphp/)

[![Video](https://img.youtube.com/vi/0FmUHmAS3C8/0.jpg)](https://www.youtube.com/watch?v=0FmUHmAS3C8)  

[![Video Demo](https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube)](https://www.youtube.com/watch?v=0FmUHmAS3C8)

Go Green JS es una herramienta de laboratorio para generar commits con fechas simuladas dentro de un rango controlado. Esta pensada para practicar automatizacion con Git, validar historiales y experimentar con patrones de contribuciones en repositorios propios o de prueba.

> Este proyecto modifica el historial del repositorio donde se ejecuta y puede hacer `push` al remoto configurado. Usalo solo cuando entiendas el impacto.

## Objetivo

- Simular actividad de commits en un repositorio de pruebas.
- Practicar flujos automatizados con Git y fechas personalizadas.
- Generar un archivo auditable con el rango y los commits creados.
- Visualizar el progreso de ejecucion en terminal con una animacion de avance.

## Requisitos

- Node.js 18 o superior.
- Git instalado y disponible desde terminal.
- Un repositorio Git inicializado.
- Un remoto configurado si queres permitir el `push` final.

## Instalacion

```bash
npm install
```

## Ejecucion

```bash
npm start
```

Durante la ejecucion se muestra una barra de progreso con el ultimo commit generado y una animacion con `🐞`.

## Configuracion actual

La configuracion principal esta en `src/index.js`:

```js
const TOTAL_COMMITS = 250;
const startDate = moment("2026-01-05");
const endDate = moment();
```

- `TOTAL_COMMITS`: cantidad total de commits a generar.
- `startDate`: fecha inicial del rango. Es el valor que normalmente deberias editar.
- `endDate`: fecha final del rango. Se calcula automaticamente con la fecha actual.

Si `startDate` queda despues de la fecha actual, el script se detiene con un error para evitar rangos invalidos.

## Que genera

- Commits con fechas aleatorias entre `startDate` y la fecha actual.
- Un archivo `data/date.json` con metadatos de la ejecucion.
- Una lista de commits generados con su fecha asociada.
- Un `push` al remoto al finalizar, si el repositorio lo permite.

## Estructura del proyecto

```text
go-green-js/
  index.js              entrada raiz del paquete
  src/index.js          logica principal del generador
  data/date.json        salida generada por el script
  docs/                 documentacion complementaria
  package.json          scripts y dependencias
  README.md             guia principal
  LICENSE               condiciones de uso
```

## Flujo recomendado

1. Ejecuta el proyecto en un repositorio de prueba.
2. Ajusta solo `startDate` si queres cambiar el rango.
3. Revisa que `TOTAL_COMMITS` sea razonable para el rango elegido.
4. Ejecuta `npm start`.
5. Verifica el resultado en `data/date.json` y en `git log`.

## Reglas de desarrollo

1. Mantener el proyecto simple: cambios pequenos, directos y faciles de revisar.
2. No agregar abstracciones si no hay una necesidad real de reutilizacion.
3. Mantener JavaScript moderno con ESM, siguiendo el estilo existente del proyecto.
4. Usar nombres claros para variables y funciones; evitar abreviaciones ambiguas.
5. Validar entradas que puedan romper el flujo, especialmente fechas, cantidades y operaciones Git.
6. No ejecutar automaticamente acciones destructivas ni irreversibles sin que el comportamiento este documentado.
7. No subir `node_modules`, logs, archivos temporales ni credenciales.
8. Revisar el diff antes de commitear para evitar incluir archivos generados por accidente.
9. Documentar en este README cualquier cambio que modifique como se configura o ejecuta el script.
10. Verificar al menos la sintaxis con `node --check src/index.js` antes de entregar cambios.

## Mejoras pendientes recomendadas

- Permitir configurar `startDate` y `TOTAL_COMMITS` por argumentos de consola.
- Agregar un modo `dry-run` para simular sin crear commits reales.
- Pedir confirmacion antes de ejecutar el `push` final.
- Reemplazar `moment` por una alternativa mas ligera como `dayjs` o fechas nativas.
- Agregar tests unitarios para validacion de rangos y generacion de payload.

## Uso responsable

Este proyecto debe usarse solo en repositorios propios, de prueba o con autorizacion explicita. No esta pensado para falsificar actividad profesional, academica o contribuciones en servicios de terceros.

Consulta [LICENSE](LICENSE) para condiciones de uso, restricciones y responsabilidad.

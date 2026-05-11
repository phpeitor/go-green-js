# Go Green JS🐞
[![forthebadge](http://forthebadge.com/images/badges/made-with-javascript.svg)](https://www.linkedin.com/in/drphp/)
[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](https://www.linkedin.com/in/drphp/)

[![Video](https://img.youtube.com/vi/0FmUHmAS3C8/0.jpg)](https://www.youtube.com/watch?v=0FmUHmAS3C8)  

[![Video Demo](https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube)](https://www.youtube.com/watch?v=0FmUHmAS3C8)

Herramienta en Node.js para generar actividad de commits de forma automatizada con fines de laboratorio, pruebas y aprendizaje de historiales git.

## Objetivo

- Simular patrones de contribuciones en un repositorio de pruebas.
- Practicar automatizacion de flujo git con fechas personalizadas.
- Analizar visualmente periodos de actividad por rango de fechas.

## Requisitos

- Node.js 18 o superior.
- Git instalado y disponible en terminal.
- Un repositorio git inicializado con remoto configurado si deseas usar push.

## Estructura

```text
go-green-js/
  src/                  codigo principal
  data/                 salida generada por el script
  docs/                 reglas y documentacion complementaria
  README.md             guia principal
  LICENSE               reglas de uso
```

## Ejecucion rapida

1. Instalar dependencias (solo si no existe node_modules o cambiaste dependencias):

```bash
npm install
```

2. Ejecutar el script:

```bash
npm start
```

## Que genera el script

- Commits con fechas aleatorias dentro del rango definido en el codigo.
- Registro completo en data/data.json con:
  - metadatos de ejecucion
  - rango de fechas completo
  - lista de commits generados

## Reglas de desarrollo

Consulta el documento de reglas en [docs/REGLAS_DESARROLLO.md](docs/REGLAS_DESARROLLO.md).

## Uso responsable

Consulta [LICENSE](LICENSE) para condiciones de uso, restricciones y responsabilidad.
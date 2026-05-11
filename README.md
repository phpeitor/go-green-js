# GO GREEN JS

Herramienta en Node.js para generar actividad de commits de forma automatizada con fines de laboratorio, pruebas y aprendizaje de historiales git.

## Objetivo

- Simular patrones de contribuciones en un repositorio de pruebas.
- Practicar automatizacion de flujo git con fechas personalizadas.
- Analizar visualmente periodos de actividad por rango de fechas.

## Requisitos

- Node.js 18 o superior.
- Git instalado y disponible en terminal.
- Un repositorio git inicializado con remoto configurado si deseas usar push.

## Ejecucion rapida

1. Instalar dependencias (solo si no existe node_modules o cambiaste dependencias):

```bash
npm install
```

2. Ejecutar el script:

```bash
node index.js
```

## Que genera el script

- Commits con fechas aleatorias dentro del rango definido en el codigo.
- Registro completo en data.json con:
  - metadatos de ejecucion
  - rango de fechas completo
  - lista de commits generados

## Reglas de desarrollo

Consulta el documento de reglas en [REGLAS_DESARROLLO.md](REGLAS_DESARROLLO.md).

## Uso responsable

Consulta [LICENSE](LICENSE) para condiciones de uso, restricciones y responsabilidad.

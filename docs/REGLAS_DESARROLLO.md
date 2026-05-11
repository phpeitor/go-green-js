# Reglas de Desarrollo

## Principios

1. Mantener el proyecto simple, legible y sin complejidad innecesaria.
2. Priorizar cambios pequenos y comprobables.
3. Registrar en mensajes de commit el objetivo tecnico del cambio.

## Convenciones de codigo

1. Usar JavaScript moderno (ESM) compatible con la version de Node del proyecto.
2. Nombrar variables y funciones en ingles, con intencion clara.
3. Evitar funciones largas; extraer helpers cuando una seccion crezca demasiado.
4. Validar errores de escritura de archivos y operaciones git.

## Flujo de trabajo

1. Crear una rama por cambio funcional o correccion.
2. Ejecutar pruebas/manual checks antes de hacer push.
3. Revisar diff para evitar subir archivos generados o credenciales.

## Archivos y versionado

1. No subir node_modules, logs, ni archivos de entorno.
2. Mantener package-lock.json versionado para reproducibilidad.
3. Documentar cambios de comportamiento en README cuando aplique.

## Seguridad y uso etico

1. Usar este proyecto solo en repositorios propios o autorizados.
2. No usar para falsificar actividad profesional o academica.
3. No automatizar acciones en servicios de terceros sin permiso.

## Criterio de aceptacion de cambios

1. El script debe ejecutarse sin errores en entorno limpio.
2. data/data.json debe reflejar el rango y commits generados correctamente.
3. La salida en terminal debe ser clara para seguimiento del progreso.
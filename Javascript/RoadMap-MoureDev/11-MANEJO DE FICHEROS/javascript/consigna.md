/\*

- EJERCICIO:
- Desarrolla un programa capaz de crear un archivo que se llame como
- tu usuario de GitHub y tenga la extensión .txt.
- Añade varias líneas en ese fichero:
- - Tu nombre.
- - Edad.
- - Lenguaje de programación favorito.
- Imprime el contenido.
- Borra el fichero.
-
- DIFICULTAD EXTRA (opcional):
- Desarrolla un programa de gestión de ventas que almacena sus datos en un
- archivo .txt.
- - Cada producto se guarda en una línea del archivo de la siguiente manera:
- [nombre_producto], [cantidad_vendida], [precio].
- - Siguiendo ese formato, y mediante terminal, debe permitir añadir, consultar,
- actualizar, eliminar productos y salir.
- - También debe poseer opciones para calcular la venta total y por producto.
- - La opción salir borra el .txt.
    \*

En JavaScript se puede manejar ficheros utilizando
el módulo fs trabajando en Node.js

es un módulo incorporado que proporciona funciones
para trabajar con el sistema de archivos del sistema
operativo. La abreviatura "fs" significa "file system" (sistema de archivos en inglés).

Este módulo fs permite realizar operaciones como leer archivos,
escribir en archivos, crear directorios, eliminar archivos, entre
otras operaciones relacionadas con el sistema de archivos del servidor
o del sistema donde se esté ejecutando Node.js.

Algunos de los métodos más comunes que proporciona el módulo fs incluyen:

fs.readFile(): Lee el contenido de un archivo.
fs.writeFile(): Escribe datos en un archivo.
fs.appendFile(): Añade datos al final de un archivo.
fs.unlink(): Borra un archivo.
fs.readdir(): Lee el contenido de un directorio.
fs.mkdir(): Crea un nuevo directorio.

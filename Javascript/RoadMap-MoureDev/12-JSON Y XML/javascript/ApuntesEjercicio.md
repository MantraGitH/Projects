# "Importamos el módulo fs y path":

fs (Filesystem): es un módulo de Node.js que proporciona una API para interactuar con el sistema de archivos.
Permite leer, escribir y eliminar archivos, entre otras cosas.
Path: es un módulo de Node.js que ayuda a trabajar con rutas de archivos y directorios.
Le permite mantener y construir rutas de forma segura y en línea con los sistemas operativos.

---

# "Definimos los datos":

Data: Es un objeto JavaScript que contiene la información que queremos almacenar en los archivos.
Incluye nombre, edad, fecha de nacimiento y una lista de lenguajes de programación.
Esta propiedad se utilizará tanto para archivos JSON como para archivos XML.

---

# "Creamos el archivo JSON":

-JSON.stringify (datA, null, 2): convierte el objeto data en una cadena JSON.
El segundo parámetro (null) es para la función de reemplazo (no lo usamos aquí) y el tercer parámetro (2) especifica
la cantidad de espacios para la identación, lo que hace que el JSON sea más legible.

-path.join(**dirname, 'data.json'): genera la ruta completa del archivo data.json en el mismo directorio que
el script. **dirname es una variable global en Node.js que contiene el directorio del archivo que se está creando.

-fs.writeFileSync(jsonFilePath, jsonData, 'utf8'): crea el archivo JSON con el contenido de "jsonData".
La opción 'utf8' garantiza que el archivo esté codificado en codificación UTF-8.

---

# "Creamos el archivo XML":

-xmlData: Es una cadena que representa el contenido XML. Utilizamos template literals (`delimitadores```) para agregar variables
al XML.Cada lenguaje de programación se convierte en una etiqueta <language> mediante
el método "map" y "join" combina todas las etiquetas en una sola cadena, con saltos de línea para facilitar la lectura.

-path.join(\_\_dirname, 'data.xml'): Al igual que crear un archivo JSON, construye la ruta completa del archivo data.xml.

-fs.writeFileSync(xmlFilePath, xmlData, 'utf8'): genera el archivo XML con contenido xmlData, utilizando codificación UTF-8.

---

# "Mostramos el contenido de los archivos por consola":

-fs.readFileSync(jsonFilePath, "utf8"): lee el contenido del archivo JSON de forma sincrónica (de forma bloqueante) y
lo muestra en la consola. La opción "utf8" garantiza que el archivo sea legible en codificación UTF-8.

-fs.readFileSync(xmlFilePath, 'utf8'): hace lo mismo con el archivo XML.

---

# "Borramos los archivos":

-fs.unlinkSync(jsonFilePath): Elimina el archivo JSON. unlinkSync es una función sincrónica que borra un archivo en el sistema
de archivos.

-fs.unlinkSync(xmlFilePath): Elimina el archivo XML de la misma manera.

# Instalación de xml2js:

Para manejar la conversión de XML a JSON, utilizamos la librería xml2js. La instalación se hace con "npm install xml2js". Esto agrega xml2js a las dependencias del proyecto, permitiendo usar sus funcionalidades para parsear XML.

---
# Importar "xml2js"

"require("xml2js")" Importa el módulo xml2js, que proporciona herramientas para convertir datos XML en objetos JavaScript y viceversa.
---

# "Clase custom para manejar datos JSON y XML" (Definición de la clase "DataHandler").

La clase DataHandler está diseñada para manejar la carga de datos desde archivos JSON y XML y almacenarlos en un formato unificado.

"constructor()": Inicializa el objeto de la clase. "this.data" se establece como "null" hasta que se carguen los datos.

### Método "loadJSON":

"fs.readFileSync(filePath, "utf8")": Lee el contenido del archivo JSON en la ruta filePath y lo convierte a una cadena de texto (utf8 asegura que se lea correctamente).


"JSON.parse(jsonData)": Convierte la cadena JSON en un objeto JavaScript y lo asigna a "this.data".

### Método "loadXML"

"fs.readFileSync(filePath, "utf8")": Lee el archivo XML desde la ruta filePath.


"xml2js.parseString(xmlData, callback)": Convierte el XML en un objeto JavaScript. "callback" es una función que maneja el resultado.
"err": Si ocurre un error durante el parsing, se lanza una excepción.
"result": Contiene el objeto JavaScript convertido del XML.


Asignación a "this.data": Extrae y organiza los datos del objeto result en un formato que coincide con la estructura de "data".

### Método "getData()"

Devuelve el contenido de this.data. Permite acceder a los datos almacenados después de la carga.

---

# Crear una instancia de "DataHandler"

Crea una nueva instancia de DataHandler. Usaremos esta instancia para cargar y manipular los datos.

---

# Cargar y mostrar datos desde JSON

"dataHandler.loadJSON(jsonFilePath)": Carga los datos desde el archivo JSON.

"console.log(dataHandler.getData())": Muestra los datos cargados en la consola.

---

# Cargar y mostrar datos desde XML

"dataHandler.loadXML(xmlFilePath)": Carga los datos desde el archivo XML.

"console.log(dataHandler.getData())": Muestra los datos cargados en la consola.

---

# Borramos los archivos JSON y XML

"fs.unlinkSync(filePath)": Elimina el archivo en la ruta especificada.

"console.log()": Muestra un mensaje confirmando que los archivos han sido borrados.


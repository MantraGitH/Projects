/*
 * DIFICULTAD EXTRA (opcional):
 * Utilizando la lógica de creación de los archivos anteriores, crea un
 * programa capaz de leer y transformar en una misma clase custom de tu
 * lenguaje los datos almacenados en el XML y el JSON.
 * Borra los archivos.
 */
// Ver información de los comentarios de cada punto del código en ApuntesExtra.md

// Importamos los módulos necesarios
const fs = require("fs");
const path = require("path");
const xml2js = require("xml2js");

// Definimos los datos
const data = {
  name: "Camilo",
  age: 23,
  date: "2001-03-10",
  lenguajesDeProgramacion: ["JavaScript"],
};

// Creamos el archivo .JSON
const jsonData = JSON.stringify(data, null, 2);
const jsonFilePath = path.join(__dirname, "data.json");
fs.writeFileSync(jsonFilePath, jsonData, "utf8");
console.log("JSON Creado");

// Creamos el archivo .XML
const xmlData = `
<persona>
  <nombre>${data.name}</nombre>
  <edad>${data.age}</edad>
  <fechaNacimiento>${data.date}</fechaNacimiento>
  <lenguajesDeProgramacion>
    ${data.lenguajesDeProgramacion
      .map((lang) => `<lenguaje>${lang}</lenguaje>`)
      .join("\n    ")}
  </lenguajesDeProgramacion>
</persona>
`;
const xmlFilePath = path.join(__dirname, "data.xml");
fs.writeFileSync(xmlFilePath, xmlData, "utf8");
console.log("XML Creado");

// Clase custom para manejar datos JSON y XML

class DataHandler {
  constructor() {
    this.data = null;
  }

  loadJSON(filePath) {
    const jsonData = fs.readFileSync(filePath, "utf8");
    this.data = JSON.parse(jsonData);
  }

  loadXML(filePath) {
    const xmlData = fs.readFileSync(filePath, "utf8");
    xml2js.parseString(xmlData, (err, result) => {
      if (err) throw err;
      this.data = {
        name: result.persona.nombre[0],
        age: parseInt(result.persona.edad[0], 10),
        date: result.persona.fechaNacimiento[0],
        lenguajesDeProgramacion:
          result.persona.lenguajesDeProgramacion[0].lenguaje,
      };
    });
  }

  getData() {
    return this.data;
  }
}

// Crear una instancia de DataHandler
const dataHandler = new DataHandler();

// Cargar y mostrar datos desde JSON

dataHandler.loadJSON(jsonFilePath);
console.log("Datos desde JSON:");
console.log(dataHandler.getData());

// Cargar y mostrar datos desde XML

dataHandler.loadXML(xmlFilePath);
console.log("Datos desde XML:");
console.log(dataHandler.getData());

/* // Borramos los archivos
fs.unlinkSync(jsonFilePath);
console.log("JSON Borrado");

fs.unlinkSync(xmlFilePath);
console.log("XML Borrado"); */

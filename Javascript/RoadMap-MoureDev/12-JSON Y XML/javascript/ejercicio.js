/*
 * EJERCICIO:
 * Desarrolla un programa capaz de crear un archivo XML y JSON que guarde los
 * siguientes datos (haciendo uso de la sintaxis correcta en cada caso):
 * - Nombre
 * - Edad
 * - Fecha de nacimiento
 * - Listado de lenguajes de programación
 * Muestra el contenido de los archivos.
 * Borra los archivos.
 */

// Ver Notas de cada punto del código en ApuntesJercicio.md

// Importamos el módulo fs y path:

const fs = require("fs");
const path = require("path");

// Definimos los datos:
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
  <nombre>${data.nombre}</nombre>
  <edad>${data.edad}</edad>
  <fechaNacimiento>${data.fechaNacimiento}</fechaNacimiento>
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

// Mostramos el contenido de los archivos por consola
console.log("Contenido JSON:");
console.log(fs.readFileSync(jsonFilePath, "utf8"));

console.log("Contenido XML:");
console.log(fs.readFileSync(xmlFilePath, "utf8"));

// // Borramos los archivos:

// fs.unlinkSync(jsonFilePath);
// console.log("JSON Borrado");

// fs.unlinkSync(xmlFilePath);
// console.log("XML Borrado");

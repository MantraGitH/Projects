/*
 * EJERCICIO:
 * Desarrolla un programa capaz de crear un archivo que se llame como
 * tu usuario de GitHub y tenga la extensión .txt.
 * Añade varias líneas en ese fichero:
 * - Tu nombre.
 * - Edad.
 * - Lenguaje de programación favorito.
 * Imprime el contenido.
 * Borra el fichero.
 */

import { writeFile, readFile, unlink } from "fs";

// Nombre del archivo y contenido a escribir
const filename = "MantraGitH.txt";
const content = `MantraGitH.\n23\nJavascript.`;

// Escribir en el archivo
writeFile(filename, content, (err) => {
  if (err) {
    console.error("Error al crear el archivo:", err);
    return;
  }
  console.log(`Archivo '${filename}' creado con éxito.`);

  // Leer el contenido del archivo
  readFile(filename, "utf8", (err, data) => {
    if (err) {
      console.error("Error al leer el archivo:", err);
      return;
    }
    console.log(`Contenido del archivo '${filename}':\n${data}`);

    // Borrar el archivo
    unlink(filename, (err) => {
      if (err) {
        console.error("Error al borrar el archivo:", err);
        return;
      }
      console.log(`Archivo '${filename}' borrado con éxito.`);
    });
  });
});

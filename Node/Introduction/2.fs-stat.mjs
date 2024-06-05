//File System//Sistema de Archivos

import fs from "node:fs";

const stats = fs.statSync('./etc.txt')

console.log(
  stats.isFile(), // si es un fichero
  stats.isDirectory(), // si es un directorio
  stats.isSymbolicLink(), // si es un enlace simbólico
  stats.size // tamaño en bytes
)
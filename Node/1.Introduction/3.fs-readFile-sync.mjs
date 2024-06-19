//File System//Sistema de Archivos

import fs from "node:fs";

//Sync

console.log("Leyendo el primer archivo...");
const text = fs.readFileSync("./etc.txt", "utf-8");
console.log("primer texto:", text);

console.log("--> Hacer cosas mientras lee el archivo...");

console.log("Leyendo el segundo archivo...");
const secondText = fs.readFileSync("./etc2.txt", "utf-8");
console.log("segundo texto:", secondText);

// https://nodejs.org/en/learn/manipulating-files/reading-files-with-nodejs

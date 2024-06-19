//promises (async)

import fs from "node:fs/promises"; // => /promises

// Esto sólo en los módulos nativos
// que no tienen promesas nativas

// const { promisify } from "node:util"
// const readFilePromise = promisify(fs.readFile)

//en lugar de utilizar callbacks se utilizan promises (.then)
console.log("Leyendo el primer archivo...");
fs.readFile("./etc.txt", "utf-8").then((text) => {
  console.log("primer texto", text);
});

console.log("--> Hacer cosas mientras lee el archivo...");

console.log("Leyendo el segundo archivo...");
fs.readFile("./etc2.txt", "utf-8").then((text) => {
  console.log("segundo texto", text);
});

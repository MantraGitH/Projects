// Esto sólo en los módulos nativos
// que no tienen promesas nativas

// const { promisify } from "node:util"
// const readFilePromise = promisify(fs.readFile)

import { readFile } from "node:fs/promises";

Promise.all([
  readFile("./etc.txt", "utf-8"),
  readFile("./etc2.txt", "utf-8"),
]).then(([text, secondText]) => {
  console.log("primer texto:", text);
  console.log("segundo texto:", secondText);
});

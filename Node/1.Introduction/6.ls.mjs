import { readdir } from "node:fs/promises";

readdir(".")
  .then((files) => {
    files.forEach((file) => {
      console.log(file);
    });
  })
  .catch((err) => {
    if (err) {
      console.error("Error al leer el directorio: ", err);
      return;
    }
  });

// node 6.ls.mjs

//vvv

// 1.os-info.mjs
// 2.fs-stat.mjs
// 3.fs-readFile-sync.mjs       
// 3.fs-readFile.mjs
// 4.fs-async-await-parallel.mjs
// 4.fs-async-await.js
// 4.fs-async-await.mjs
// 4.fs-promises.mjs
// 5.path.mjs
// 6.ls.mjs
// 7.process.mjs
// 8.ls-advanced.mjs
// cjs
// etc.txt
// etc2.txt
// mjs
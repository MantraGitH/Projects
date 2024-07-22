// mejorando la app: listar archivos/directorios

// Sistema de módulos
import { readdir, stat } from "node:fs/promises";
import { join } from "node:path";

//process
const folder = process.argv[2] ?? ".";

//asincronía
async function ls(folder) {
  let files;
  try {
    //asincronia secuencial: hasta que no lea el directorio no continúa
    files = await readdir(folder);
  } catch {
    console.error(red(` No se pudo leer el directorio ${folder}`));
    process.exit(1);
  }

  //recuperando en paralelo la información de todos los ficheros del directiorio
  const filesPromises = files.map(async (file) => {
    const filePath = join(folder, file);
    let stats;

    try {
      stats = await stat(filePath); // status - información del archivo
    } catch {
      //si hay un error
      console.error(`No se pudo leer el archivo ${filePath}`);
      process.exit(1);
    }

    //filesystem no solo para leer el directiorio sino para recuperar la información de cada archivo
    const isDirectory = stats.isDirectory();
    // "d" = directorio, "f" = fichero
    const fileType = isDirectory ? "d" : "f";
    const fileSize = stats.size.toString();
    const fileModified = stats.mtime.toLocaleString();
    // utilizando la consola para enseñar cada archivo
    return `${fileType} ${file.padEnd(20)} ${fileSize
      .toString()
      .padStart(10)} ${fileModified}`;
  });

  const filesInfo = await Promise.all(filesPromises);

  filesInfo.forEach((fileInfo) => console.log(fileInfo));
}

ls(folder);

// node 8.ls-advanced.mjs

// vvv

// f 1.os-info.mjs               484 8/6/2024, 3:05:45 p. m.
//f 2.fs-stat.mjs               301 5/6/2024, 2:53:34 p. m.
//f 3.fs-readFile-sync.mjs        507 19/6/2024, 1:02:45 p. m.
//f 3.fs-readFile.mjs           541 19/6/2024, 1:02:48 p. m.
//f 4.fs-async-await-parallel.mjs        429 19/6/2024, 4:49:37 p. m.
//f 4.fs-async-await.js        1105 19/6/2024, 4:51:15 p. m.
//f 4.fs-async-await.mjs        566 19/6/2024, 4:49:15 p. m.
//f 4.fs-promises.mjs           658 19/6/2024, 4:49:45 p. m.
//f 5.path.mjs                  475 26/6/2024, 4:09:04 p. m.
//f 6.ls.mjs                    281 29/6/2024, 9:47:02 a. m.
//f 7.process.mjs               452 26/6/2024, 5:27:50 p. m.
//f 8.ls-advanced.mjs          1144 29/6/2024, 9:58:05 a. m.
//d cjs                           0 5/6/2024, 2:11:12 p. m.
//f etc.txt                      11 5/6/2024, 2:50:54 p. m.
//f etc2.txt                     74 5/6/2024, 2:58:19 p. m.
//d mjs                           0 5/6/2024, 2:19:12 p. m.

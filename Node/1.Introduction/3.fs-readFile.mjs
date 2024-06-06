//File System/Manejo de archivos

import fs from "node:fs";

//Async

console.log('Leyendo el primer archivo...')
fs.readFile('./etc.txt', 'utf-8', (err, text) => { // <---- ejecutas este callback
  console.log('primer texto:', text)
})

console.log('--> Hacer cosas mientras lee el archivo...')

console.log('Leyendo el segundo archivo...')
fs.readFile('./etc2.txt', 'utf-8', (err, text) => {
  console.log('segundo texto:', text)
})

// https://nodejs.org/en/learn/manipulating-files/reading-files-with-nodejs
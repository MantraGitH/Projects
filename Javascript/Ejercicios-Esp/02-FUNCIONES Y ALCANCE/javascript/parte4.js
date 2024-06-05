/* Pon a prueba el concepto de variable LOCAL y GLOBAL. */

//Las variables locales se declaran dentro de una función y solo son accesibles dentro de esa función, mientras que las variables globales se declaran fuera de todas las funciones y están disponibles en todo el script.

// Variable global
let globalVariable = "Una Variable Global";

function miFuncion() {
  // Variable local
  let localVariable = "Una Variable Local";
  console.log(localVariable);
  console.log(globalVariable);
}

miFuncion();

// Esta línea arrojará un error porque localVariable no está definida fuera de la función
console.log(localVariable);

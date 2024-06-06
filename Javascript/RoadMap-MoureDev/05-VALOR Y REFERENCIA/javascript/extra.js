/*
DIFICULTAD EXTRA (opcional):
Crea dos programas que reciban dos parámetros (cada uno) definidos como
variables anteriormente.
Cada programa recibe, en un caso, dos parámetros por valor, y en otro caso, por referencia.
Estos parámetros los intercambia entre ellos en su interior, los retorna, y su retorno
se asigna a dos variables diferentes a las originales. A continuación, imprime
el valor de las variables originales y las nuevas, comprobando que se ha invertido
su valor en las segundas.
Comprueba también que se ha conservado el valor original en las primeras.
 */

// Intercambio por valor
function intercambioPorValor(a, b) {
  let temp = a;
  a = b;
  b = temp;
  return [a, b];
}

// Intercambio por referencia
function intercambioPorReferencia(obj) {
  let temp = obj.a;
  obj.a = obj.b;
  obj.b = temp;
  return obj;
}

let originalA = 5;
let originalB = 10;

// Intercambio por valor
let [nuevoA, nuevoB] = intercambioPorValor(originalA, originalB);
console.log("Intercambio por valor:");
console.log("Original A:", originalA); // console.log: 5
console.log("Original B:", originalB); // console.log: 10
console.log("Nuevo A:", nuevoA); // console.log: 10
console.log("Nuevo B:", nuevoB); // console.log: 5

// Intercambio por referencia
let objeto = { a: originalA, b: originalB };
let nuevoObjeto = intercambioPorReferencia(objeto);
console.log("Intercambio por referencia:");
console.log("Original A:", objeto.a); // console.log: 10
console.log("Original B:", objeto.b); // console.log: 5
console.log("Nuevo A:", nuevoObjeto.a); // console.log: 10
console.log("Nuevo B:", nuevoObjeto.b); // console.log: 5

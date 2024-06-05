/* 
EJERCICIO:
-Muestra ejemplos de creación de todas las estructuras soportadas por defecto en tu lenguaje. 
-Utiliza operaciones de inserción, borrado, actualización y ordenación.
*/

/* 
Arrays definición:
Son colecciones ordenadas de elementos, donde cada elemento puede ser de cualquier tipo de datos,
incluyendo números, cadenas, objetos, etc.
Los arrays en JavaScript son dinámicos, lo que significa que su tamaño puede cambiar dinámicamente.
*/

// Array tipo string
let frutas = ["Manzana", "Banana", "Naranja"];

// Acceder a elementos del array
console.log(frutas);
console.log("después de", frutas[2], "se agrega Uva");

//Agregar un nuevo elemento al array
frutas.push("Uva");
console.log(frutas);

//Borrar el último elemento del Array
frutas.pop();
console.log("Se borrará la fruta Uva", frutas);

//Actualización: Encuentra la posición de "Naranja"
let indice = frutas.indexOf("Naranja");

// Si "Naranja" existe en el array, se elimina
if (indice !== -1) {
  frutas.splice(indice, 1);
}
console.log("aparte de Uva, también se borrará Naranja", frutas);

//Ordenación:

// Encuentra las posiciones de "Banana" y "Manzana"
let indiceBanana = frutas.indexOf("Banana");
let indiceManzana = frutas.indexOf("Manzana");

// Si ambos elementos existen en el array, reorganiza el orden
if (indiceBanana !== -1 && indiceManzana !== -1) {
  // Elimina "Manzana" del array
  frutas.splice(indiceManzana, 1);
  // Inserta "Manzana" en la posición después de "Banana"
  frutas.splice(indiceBanana + 1, 0, "Manzana");
}

console.log("Se cambió el orden de Manzana y Banana", frutas);

console.log("----------------------------------------------------------");

//Array tipo number

let numeros = [1, 2, 3, 4, 5];

// Acceder a elementos del array
console.log(numeros);
console.log("después del numero", numeros[4], "viene el 6");

//Agregar un nuevo elemento al array
numeros.push(6);
console.log(numeros);

//Borrar el último elemento del Array
numeros.pop();
console.log("Se borrará el ultimo numero (6)", numeros);

//Actualización: Encuentra la posición de "5"
let indiceNumero = numeros.indexOf(5);

// Si "5" existe en el array, se elimina
if (indiceNumero !== -1) {
  numeros.splice(indiceNumero, 1);
}
console.log("aparte del numero 6, también se borrará el numero 5", numeros);

//Ordenación:

// Encuentra las posiciones de "2" y "1"
let indiceDos = numeros.indexOf(2);
let indiceUno = numeros.indexOf(1);

// Si ambos elementos existen en el array, se reorganiza el orden
if (indiceDos !== -1 && indiceUno !== -1) {
  // Elimina "1" del array
  numeros.splice(indiceUno, 1);
  // Inserta "1" antes que "2"
  numeros.splice(indiceDos, 0, 1);
}

console.log("Se cambió el orden de números", numeros);

// ordenación descendente
numeros.sort((a, b) => b - a);
console.log(numeros)

//ordenación ascendente
numeros.sort((a, b) => a - b);
console.log(numeros)

/* 
EJERCICIO:
-Muestra ejemplos de creación de todas las estructuras soportadas por defecto en tu lenguaje. 
-Utiliza operaciones de inserción, borrado, actualización y ordenación.
*/

/*
En JavaScript, un String es una estructura de datos que representa una secuencia de caracteres. 
Los strings son utilizados para almacenar y manipular texto en el lenguaje. Cada carácter en un 
string tiene un índice numérico, comenzando desde 0 para el primer carácter.
*/

let miString = "Hola, mundo!";

// Acceder a caracteres por índice
console.log(miString[0]); // Resultado: "H"

// Longitud de un string
console.log(miString.length); // Resultado: 12

// Algunos Métodos de string
console.log(miString.toUpperCase()); // Resultado: "HOLA, MUNDO!"
console.log(miString.indexOf("mundo")); // Resultado: 6
console.log(miString.split(", ")); // Resultado: ["Hola", "mundo!"]

/*
Caracteristicas

Inmutabilidad: Los strings en JavaScript son inmutables, lo que significa que no 
pueden ser modificados directamente una vez creados. Cualquier operación que parezca 
modificar un string, en realidad crea uno nuevo.

Concatenación: Puedes concatenar strings utilizando el operador + o el método concat().

Interpolación de cadenas (Template literals): Puedes utilizar template literals para 
crear strings de manera más legible e incluir expresiones dentro del string.

Métodos de manipulación: JavaScript proporciona diversos métodos para manipular y trabajar con strings
*/

//INSERCION EN STRINGS
//Para "insertar" caracteres en un string, puedes utilizar la concatenación de strings o
//la interpolación de cadenas (template literals):
let original = "Hola";
let insertado = original + ", mundo!";
console.log(insertado); // Resultado: "Hola, mundo!"

// O usando template literals
let insertadoTemplate = `${original}, mundo!`;
console.log(insertadoTemplate); // Resultado: "Hola, mundo!"

//BORRADO DE STRINGS
//Para "borrar" caracteres de un string, puedes utilizar el método slice para crear un nuevo
//string excluyendo ciertos caracteres:
let originalDos = "Hola, mundo!";
let borrado = originalDos.slice(0, 5); // Elimina los caracteres desde el índice 5 en adelante
console.log(borrado); // Resultado: "Hola"

//ACTUALIZACION DE STRINGS
//Para "actualizar" caracteres en un string, también puedes utilizar el método slice para
//dividir el string en partes, modificar la parte deseada y luego concatenarlas de nuevo:
let originalTres = "Hola, mundo!";
let actualizado = originalTres.slice(0, 5) + " JavaScript!";
console.log(actualizado); // Resultado: "Hola JavaScript!"

//ORDENACION DE STRINGS
//Para "ordenar" caracteres en un string, puedes convertir el string en un array, ordenar
//el array y luego convertirlo de nuevo a un string:
let originalCuatro = "javascript";
let ordenado = originalCuatro.split("").sort().join("");
console.log(ordenado); // Resultado: "aaccijprstv"

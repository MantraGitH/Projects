/* 1. Crea ejemplos utilizando todos los tipos de operadores de tu lenguaje:
 *   Aritméticos, lógicos, de comparación, asignación, identidad, pertenencia, bits...
 *   (Ten en cuenta que cada lenguaje puede poseer unos diferentes) */

// Operadores Aritméticos: Se utilizan para realizar operaciones matemáticas en números.
//Ejemplos: + (suma), - (resta), * (multiplicación), / (división).

console.log(1 + 1); // el resultado de la suma es 2
console.log(8 - 4); // el resultado de la resta es 4
console.log(2 * 3); // el resultado de la multiplicación es 6
console.log(16 / 2); // el resultado de la división es 8

// --------------------------------------------------------------------------------------

//Operadores Lógicos: Se utilizan para combinar expresiones booleanas y devolver un valor booleano.
//Ejemplos: && (y lógico), || (o lógico), ! (negación lógica).

// OPERADOR LÓGICO &&

console.log(true && true); // false
console.log(false && true); // false
console.log(true && false); // false
console.log(false && false); // false

// OPERADOR LÓGICO ||

console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

// OPERADOR LÓGICO !

console.log(!true); // false

//--------------------------------------------------------------------------------------

//Operadores de comparación: Se utilizan para comparar dos valores y determinar su relación entre sí. devuelven un valor booleano que indica si la comparación es verdadera o falsa

// Igualdad (==): Comprueba si dos valores son iguales, incluso si no son del mismo tipo.

console.log(5 == 5); // true
console.log("5" == 5); // true

//Igualdad estricta (===): Comprueba si dos valores son iguales y del mismo tipo.

console.log(5 === 5); // true
console.log("5" === 5); // false

//Desigualdad (!=): Comprueba si dos valores no son iguales, independientemente de su tipo.

console.log(5 != 3); // true
console.log("5" != 5); // false

//Desigualdad estricta (!==): Comprueba si dos valores no son iguales sin hacer conversión de tipos.

console.log(5 !== 3); //true
console.log(5 !== "5"); //true

//Mayor que (>) y mayor o igual que (>=): Comprueban si un valor es mayor o mayor o igual que otro.

console.log(5 > 3); //true
console.log(5 >= 5); // true

//Menor que (<) y menor o igual que (<=): Comprueban si un valor es menor o menor o igual que otro.

console.log(5 < 10); // true
console.log(5 <= 5); // true

//--------------------------------------------------------------------------------------

// Operadores de Asignación: son utilizados para asignar valores a variables. Estos operadores combinan la operación de asignación (=) con otra operación matemática o de manipulación de datos.

//Operador de asignación básico (=)

let a = 5; // a es asignado con el valor 5

//Operador de asignación de suma (+=)

let b = 10;
x += 5; // equivalente a: b = b + 5
//ahora b es 15

//Operador de asignación de resta(-=)

let c = 10;
x -= 3; // equivalente a: c = c - 3
//ahora c es 7

//Operador de asignación de multiplicación (*=)

let d = 5;
d *= 2; // Equivalente a: d = d * 2
// ahora d es 10

//operador de Operador de asignación de división (/=):

let e = 20;
e /= 4; // Equivalente a: e = e / 4
// ahora e es 5

//----------------------------------------------

//Operadores de identidad: son utilizados para comparar si dos valores son idénticos en tipo y valor

// Operador de identidad estricta (===): Este operador devuelve true si los operandos son idénticos en tipo y valor, es decir, si ambos operandos son del mismo tipo y tienen el mismo valor.

console.log(5 === 5); // true
console.log(5 === "5"); // false (diferentes tipos)
console.log(5 === 6); // false (valores diferentes)

// Operador de no-identidad estricta (!==): Este operador devuelve true si los operandos no son idénticos en tipo y valor, es decir, si ambos operandos no son del mismo tipo o si tienen valores diferentes.

console.log(5 !== "5"); // true (diferentes tipos)
console.log(5 !== 6); // true (valores diferentes)
console.log(5 !== 5); // false

//----------------------------------------------

//Operadores de pertenencia: son utilizados para verificar si un valor se encuentra dentro de una estructura de datos, como un arreglo o un objeto. Hay dos tipos de operadores de pertenencia: in y instanceof.


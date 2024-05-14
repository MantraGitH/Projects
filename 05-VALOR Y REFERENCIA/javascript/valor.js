/* 
EJERCICIO:
- Muestra ejemplos de asignación de variables "por valor" y "por referencia", según
su tipo de dato.
- Muestra ejemplos de funciones con variables que se les pasan "por valor" y 
"por referencia", y cómo se comportan en cada caso en el momento de ser modificadas.
(Entender estos conceptos es algo esencial en la gran mayoría de lenguajes)
*/

/* 
Valor: 
Cuando se le asigna un valor primitivo a una variable en Javascript, se asigna el valor real a esa variable.
Los tipos de datos primitivos en Javascript son strings, numbers, booleans, null, undefined, y symbols. 
Cuando se asigna un valor primitivo a otra variable, se crea una copia independiente de ese valor. 
Si se cambia una variable, no afectará a la otra variable. 
*/

let a = 5;
let b = a;

b = 10;

console.log(a);
console.log(b);

let c = "ernesto";
let d = c;

c = "camilo";

console.log(c);
console.log(d);

console.log("----------------------------------------------------------");

//funcion con datos por valor


function duplicar(numero) {
    numero *= 2;
    return numero;
}

let x = 5;

console.log(duplicar(x)); // console.log: 10
console.log(x); // console.log: 5 (x no se ve afectada)

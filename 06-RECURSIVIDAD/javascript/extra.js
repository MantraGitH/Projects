/* 
DIFICULTAD EXTRA (opcional):
Utiliza el concepto de recursividad para:
Calcular el factorial de un número concreto (la función recibe ese número).
Calcular el valor de un elemento concreto (según su posición) en la 
sucesión de Fibonacci (la función recibe la posición).
*/

// La recursividad es una técnica en la que una función se llama a sí misma
//  para resolver un problema en términos de subproblemas más simples del mismo tipo.

//  El factorial de un número n(n!) se define como el producto de todos los enteros positivos desde 1 hasta n
//  ejemplo: 5! = 5x4x3x2x1 = 120

//  Calcular el factorial de un numero de manera recursiva:

//  Caso base: El factorial de 0 o 1 es 1. Esto detiene la recursión.
//  Caso recursivo: para n > 1, n! = n x (n - 1)!

function factorial(n) {
  if (n < 0) {
    console.log("los números negativos no son válidos");
    return 0;
  } else if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log(factorial(5));

console.log("------------------------------------------------");

//  Fibonacci: serie infinita de números naturales que empieza con un 0 y un 1 y continúa añadiendo números
//  que son la suma de los dos anteriores: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597…

function fibonacci(n) {
  if (n <= 0) {
    console.log("La posición debe ser mayor que cero");
    return 0;
  } else if (n === 1){
    return 0
  } else if (n === 2){
    return 1
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2)
  }
}

// imprimir un número en base a la posición en la serie de fibonacci: 1=0, 2=1, 3=1, 4=2, 5=3...
console.log(fibonacci(10));

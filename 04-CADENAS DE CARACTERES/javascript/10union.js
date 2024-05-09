/* EJERCICIO:
Muestra ejemplos de todas las operaciones que puedes realizar con cadenas de caracteres
en tu lenguaje. Algunas de esas operaciones podrían ser (busca todas las que puedas):
- Acceso a caracteres específicos, subcadenas, longitud, concatenación, repetición,
recorrido, conversión a mayúsculas y minúsculas, reemplazo, división, unión,
interpolación, verificación... */

/* Unión: Une los elementos de un array en una sola cadena, utilizando un separador especificado. */

let arrayFrutas = ["Manzana", "Naranja", "Pera"];
console.log(arrayFrutas);
let cadena = arrayFrutas.join(", "); // Unión con coma y espacio
console.log(cadena); // "Manzana, Naranja, Pera"

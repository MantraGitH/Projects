/* EJERCICIO:
Muestra ejemplos de todas las operaciones que puedes realizar con cadenas de caracteres
en tu lenguaje. Algunas de esas operaciones podrían ser (busca todas las que puedas):
- Acceso a caracteres específicos, subcadenas, longitud, concatenación, repetición,
recorrido, conversión a mayúsculas y minúsculas, reemplazo, división, unión,
interpolación, verificación... */

/* División: Divide una cadena en un array de subcadenas utilizando un delimitador especificado. */

let cadena = "Manzana,Naranja,Pera";
console.log(cadena);
let arrayFrutas = cadena.split(","); // División por coma
console.log(arrayFrutas); // ["Manzana", "Naranja", "Pera"]

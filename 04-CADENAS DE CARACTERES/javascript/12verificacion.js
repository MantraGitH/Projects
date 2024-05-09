/* EJERCICIO:
Muestra ejemplos de todas las operaciones que puedes realizar con cadenas de caracteres
en tu lenguaje. Algunas de esas operaciones podrían ser (busca todas las que puedas):
- Acceso a caracteres específicos, subcadenas, longitud, concatenación, repetición,
recorrido, conversión a mayúsculas y minúsculas, reemplazo, división, unión,
interpolación, verificación... */

/* Verificación: Realiza diferentes tipos de verificaciones en una cadena, como buscar la existencia de una subcadena, verificar si comienza o termina con una subcadena específica. */

let cadena = "Hola Javascript";

console.log(cadena.includes("Hola Mundo")); // Verificación de existencia: False

console.log(cadena.includes("Hola Javascript")); // Verificación de existencia: true
console.log(cadena.startsWith("Hola")); // Verificación de inicio: true
console.log(cadena.endsWith("Javascript")); // Verificación de final: true
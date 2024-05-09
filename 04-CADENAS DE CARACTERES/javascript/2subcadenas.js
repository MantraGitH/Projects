/* EJERCICIO:
Muestra ejemplos de todas las operaciones que puedes realizar con cadenas de caracteres
en tu lenguaje. Algunas de esas operaciones podrían ser (busca todas las que puedas):
- Acceso a caracteres específicos, subcadenas, longitud, concatenación, repetición,
recorrido, conversión a mayúsculas y minúsculas, reemplazo, división, unión,
interpolación, verificación... */

/* Subcadenas: Permite extraer una porción de una cadena, especificando el índice inicial y final. */

let cadena = "JavaScript";
console.log(cadena.substring(0, 4)); // Subcadena desde el índice 0 al 4: "Java"
console.log(cadena.slice(-6)); // Subcadena desde el sexto carácter desde el final: "Script"

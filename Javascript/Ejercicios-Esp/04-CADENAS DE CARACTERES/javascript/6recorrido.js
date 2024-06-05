/* EJERCICIO:
Muestra ejemplos de todas las operaciones que puedes realizar con cadenas de caracteres
en tu lenguaje. Algunas de esas operaciones podrían ser (busca todas las que puedas):
- Acceso a caracteres específicos, subcadenas, longitud, concatenación, repetición,
recorrido, conversión a mayúsculas y minúsculas, reemplazo, división, unión,
interpolación, verificación... */

/* Recorrido: Permite iterar sobre cada carácter de una cadena para realizar operaciones en cada uno.*/

let cadena = "JavaScript";
for (let i = 0; i < cadena.length; i++) {
  console.log(cadena[i]); // Recorrido e impresión de cada carácter
}
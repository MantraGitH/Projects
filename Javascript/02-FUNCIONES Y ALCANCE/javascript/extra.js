/* Crea una función que reciba dos parámetros de tipo cadena de texto y retorne un número.
La función imprime todos los números del 1 al 100. Teniendo en cuenta que:
Si el número es múltiplo de 3, muestra la cadena de texto del primer parámetro.
Si el número es múltiplo de 5, muestra la cadena de texto del segundo parámetro.
Si el número es múltiplo de 3 y de 5, muestra las dos cadenas de texto concatenadas.
La función retorna el número de veces que se ha impreso el número en lugar de los textos. */

function imprimirNumeros(texto1, texto2) {
  let contador = 0;
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(texto1 + texto2);
      contador++;
    } else if (i % 3 === 0) {
      console.log(texto1);
      contador++;
    } else if (i % 5 === 0) {
      console.log(texto2);
      contador++;
    } else {
      console.log(i);
    }
  }
  return contador;
}

// Ejemplo de uso
const cantidadImpresiones = imprimirNumeros("Fizz", "Buzz");
console.log("Cantidad de impresiones: " + cantidadImpresiones);

/* * DIFICULTAD EXTRA (opcional):
 * Crea una función que sea capaz de procesar parámetros, pero que también
 * pueda lanzar 3 tipos diferentes de excepciones (una de ellas tiene que
 * corresponderse con un tipo de excepción creada por nosotros de manera
 * personalizada, y debe ser lanzada de manera manual) en caso de error.
 * - Captura todas las excepciones desde el lugar donde llamas a la función.
 * - Imprime el tipo de error.
 * - Imprime si no se ha producido ningún error.
 * - Imprime que la ejecución ha finalizado. */

class StrTypeError extends Error {
  constructor(message) {
    super(message);
    this.name = "StrTypeError";
  }
}

function processParams(parameters) {
    //Comprueba si la longitud del array parameters es menor que 3
  if (parameters.length < 3) {
    throw new Error("IndexError");
    // Comprueba si el segundo elemento del array parameters es 0
  } else if (parameters[1] === 0) {
    throw new Error("ZeroDivisionError");
    //Comprueba si el tercer elemento del array parameters es una cadena de texto
  } else if (typeof parameters[2] === "string") {
    throw new StrTypeError(
      "El tercer elemento no puede ser una cadena de texto."
    );
  }
//Si ninguna de las condiciones anteriores se cumple, ejecuta las siguientes instrucciones:
//console.log(parameters[2]): Imprime el tercer elemento del array.
//console.log(parameters[0] / parameters[1]): Imprime el resultado de dividir el primer elemento entre el segundo.
//console.log(parameters[2] + 5): Intenta sumar 5 al tercer elemento y lo imprime.
  console.log(parameters[2]);
  console.log(parameters[0] / parameters[1]);
  console.log(parameters[2] + 5);
}

try {
  processParams([1, 2, 3, 4]);
} catch (e) {
  if (e instanceof Error && e.name === "IndexError") {
    console.log("El número de elementos de la lista debe ser mayor que dos.");
  } else if (e instanceof Error && e.name === "ZeroDivisionError") {
    console.log("El segundo elemento de la lista no puede ser un cero.");
  } else if (e instanceof StrTypeError) {
    console.log(e.message);
  } else {
    console.log(`Se ha producido un error inesperado: ${e}`);
  }
} finally {
  console.log("El programa finaliza sin detenerse.");
}

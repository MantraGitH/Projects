/* * EJERCICIO:
 * Explora el concepto de manejo de excepciones según tu lenguaje.
 * Fuerza un error en tu código, captura el error, imprime dicho error
 * y evita que el programa se detenga de manera inesperada.
 * Prueba a dividir "10/0" o acceder a un índice no existente
 * de un listado para intentar provocar un error. */

try {
  let result = 10 / 0;
  console.log(result); // Esto imprimirá Infinity
  if (!isFinite(result)) {
    throw new Error("División por cero no permitida");
  }
} catch (error) {
  console.log("Se ha capturado un error: " + error.message);
} finally {
  console.log("Finally se ha ejecutado.");
}

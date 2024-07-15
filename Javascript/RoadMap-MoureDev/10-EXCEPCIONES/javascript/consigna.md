/*
 * EJERCICIO:
 * Explora el concepto de manejo de excepciones según tu lenguaje.
 * Fuerza un error en tu código, captura el error, imprime dicho error
 * y evita que el programa se detenga de manera inesperada.
 * Prueba a dividir "10/0" o acceder a un índice no existente
 * de un listado para intentar provocar un error.
 *
 * DIFICULTAD EXTRA (opcional):
 * Crea una función que sea capaz de procesar parámetros, pero que también
 * pueda lanzar 3 tipos diferentes de excepciones (una de ellas tiene que
 * corresponderse con un tipo de excepción creada por nosotros de manera
 * personalizada, y debe ser lanzada de manera manual) en caso de error.
 * - Captura todas las excepciones desde el lugar donde llamas a la función.
 * - Imprime el tipo de error.
 * - Imprime si no se ha producido ningún error.
 * - Imprime que la ejecución ha finalizado.
 */

El manejo de excepciones en JavaScript se realiza utilizando los bloques try...catch. Este mecanismo permite capturar errores que ocurren durante la ejecución de un bloque de código y manejar estos errores de una manera controlada, evitando que el programa se detenga de manera inesperada.

Bloque try: Contiene el código que puede potencialmente causar un error. Si el código dentro del bloque try genera una excepción, la ejecución del código en ese bloque se detiene y se pasa al bloque catch.

Bloque catch: Se ejecuta si ocurre una excepción en el bloque try. El objeto error contiene información sobre el error que ocurrió.

Bloque finally (opcional): Se ejecuta después de que se ha ejecutado el bloque try y el bloque catch, sin importar si se lanzó una excepción o no. Esto es útil para realizar cualquier limpieza necesaria.
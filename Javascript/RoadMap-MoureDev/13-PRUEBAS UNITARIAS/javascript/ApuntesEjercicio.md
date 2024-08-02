## ejercicio.js

El código del archivo **ejercicio.js** contiene la definición de la función **suma** que se encarga de sumar dos números y retornarlos. También incluye la exportación de la función para que pueda ser utilizada en otros archivos.

### Primero definimos la función:

**"function suma(a, b)"**: Esta línea define una función llamada **suma** que toma dos parámetros, **a** y **b**.

**"return a + b;"**: La función devuelve la suma de a y b.

### Segundo exportamos la función:

**"module.exports = suma;"**: Esta línea exporta la función **suma** para que pueda ser utilizada en otros archivos. En Node.js, **module.exports** se utiliza para exportar módulos, lo cual hace que la función **suma** esté disponible cuando se use **require** en otro archivo.

## suma.test.js

Este archivo contiene pruebas (tests) para verificar que la función **suma** funciona correctamente. Utiliza Jest, un framework de pruebas de JavaScript.

### Primero importamos la función:

**const suma = require('./ejercicio.js');**: Esta línea importa la función **suma** definida en **ejercicio.js** usando **require**.

### Segundo definimos los tests:

Cada test utiliza la función **test** proporcionada por Jest para definir una prueba.

La función **test** toma dos argumentos: una descripción del test y una función que contiene las expectativas (assertions) del test.

**test('suma 1 + 2 para igualar 3', () => { ... });**: Este test verifica que **suma(1, 2)** es igual a 3.

**expect(suma(1, 2)).toBe(3);**: La función **expect** toma el resultado de **suma(1, 2)** y verifica que sea igual a 3 usando el matcher **toBe**.

**test('suma 5 + 6 para igualar 11', () => { ... });**: Este test verifica que **suma(5, 6)** es igual a 11.

**expect(suma(5, 6)).toBe(11);**: La función expect toma el resultado de **suma(5, 6)** y verifica que sea igual a 11 usando el matcher **toBe**.

**test('suma números negativos -3 + (-2) para igualar -5', () => { ... });**: Este test verifica que **suma(-3, -2)** es igual a -5.

**expect(suma(-3, -2)).toBe(-5);**: La función **expect** toma el resultado de **suma(-3, -2)** y verifica que sea igual a -5 usando el matcher **toBe**.

### Tercero ejecutamos los tests.

Para ejecutar los tests podemos utilizar el comando **npx jest**. Este comando ejecutará todos los archivos de test y mostrará los resultados en la terminal. Si todos los tests pasan, se verá un mensaje en verde indicando que los tests fueron exitosos. Si algún test falla, se verá un mensaje en color rojo indicando cuál test falló y por qué.

**Ejemplo de un test exitoso:**

<!--  PASS  ./suma.test.js
  √ suma 1 + 2 para igualar 3 (2 ms)
  √ suma 5 + 6 para igualar 11 (1 ms)
  √ suma números negativos -3 + (-2) para igualar -5

Test Suites: 1 passed, 1 total
Tests:       3 passed, 3 total
Snapshots:   0 total
Time:        0.453 s
Ran all test suites. -->

**Ejemplo de un fallo en un test:**

<!--  FAIL  ./suma.test.js
  ● Test suite failed to run

    Jest encountered an unexpected token

    ...

    -->

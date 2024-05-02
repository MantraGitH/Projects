/* 
EJERCICIO:
-Muestra ejemplos de creación de todas las estructuras soportadas por defecto en tu lenguaje. 
-Utiliza operaciones de inserción, borrado, actualización y ordenación.
*/

/* Un "set" es una estructura de datos que te permite almacenar colecciones de valores únicos,
lo que significa que no puede haber duplicados dentro de un conjunto. 
Los conjuntos son útiles cuando se necesitan almacenar elementos únicos sin importar el orden en el que se almacenan.
Se pueden agregar, eliminar y verificar la existencia de elementos en un conjunto  */

// Crear un nuevo set
let miSet = new Set();

// Inserción de elementos al set. Método .add
miSet.add(1);
miSet.add("Hola");
miSet.add(true);
miSet.add(1); // No se agregará porque 1 ya está en el set

console.log(miSet);

/*
Características

Valores Únicos: Los Sets no pueden contener elementos duplicados. 
Si intentas añadir un elemento que ya está presente en el conjunto, no 
se realizará ninguna acción.

No Ordenados: A diferencia de los arrays, los Sets no mantienen un orden 
específico de los elementos. No puedes acceder a los elementos de un Set 
por índice.

Operaciones Básicas: Los Sets proporcionan métodos como add para añadir 
elementos, delete para eliminar elementos, y has para verificar si un elemento 
está presente en el conjunto.
*/

// Borrado de elementos. Método .delete

let miSetdos = new Set([1, 2, 3, 4, 5]);

miSetdos.delete(3);
console.log(miSetdos);

/* Actualizacion:
No hay un método específico para actualizar un elemento en un Set porque, 
por diseño, los elementos en un Set son únicos y no se permiten duplicados. 
Si se necesitara actualizar un valor, se puede eliminar el antiguo y añadir 
el nuevo. */
let miSettres = new Set([1, 2, 3]);

miSettres.delete(2);
miSettres.add(4);

console.log(miSettres);
// Resultado: Set { 1, 3, 4 }

/*
Ordenación:
Los Sets en JavaScript no tienen un método sort porque, a diferencia de los 
arrays, los Sets no mantienen un orden específico. Sin embargo, si se necesita
obtener un array ordenado a partir de un Set, Se puede convertir en un array y 
luego usar el método sort de los arrays. */

let miSetcuatro = new Set([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5]);

let arrayOrdenado = Array.from(miSetcuatro).sort((a, b) => a - b);

console.log(arrayOrdenado);
// Resultado: [1, 2, 3, 4, 5, 6, 9]

//En este ejemplo, Array.from(miSet) convierte el Set en un array, y luego sort ordena ese array numéricamente.
/* 
EJERCICIO:
-Muestra ejemplos de creación de todas las estructuras soportadas por defecto en tu lenguaje. 
-Utiliza operaciones de inserción, borrado, actualización y ordenación.
*/

/*
Un "Map" es una estructura de datos que te permite almacenar pares clave-valor, 
donde cada clave y cada valor pueden ser de cualquier tipo. A diferencia de los Sets, que solo 
almacenan valores únicos, los Mapas permiten asociar valores específicos a claves y proporcionan
métodos para la inserción, borrado, actualización y recuperación de estos pares clave-valor.
*/

// Creacion del map
let miMapa = new Map();

// Inserción de pares clave-valor

miMapa.set("clave1", "valor1");
miMapa.set(42, "Hola");
miMapa.set(true, [1, 2, 3]);

console.log(miMapa); // Resultado: Map { 'clave1' => 'valor1', 42 => 'Hola', true => [ 1, 2, 3 ] }

// Acceder a un valor asociado con una clave utilizando el método get():
console.log(miMapa.get("clave1")); // Imprime "valor1". En caso que no exista imprimirá Undefined

console.log("----------------------------------------------------------");

/*
Caracteristicas
Claves Únicas: Cada clave en un Map es única, lo que significa que no puede haber duplicados.
Iteración: Puedes iterar sobre los pares clave-valor de un Map utilizando bucles o métodos como forEach.
*/

miMapa.forEach((valor, clave) => {
  console.log(`${clave} : ${valor}`);
});

/*   Los Mapas son especialmente útiles cuando necesitas almacenar y recuperar datos asociados 
a claves específicas y proporcionan una alternativa a los objetos cuando las claves no 
necesariamente son cadenas de texto y se requiere un comportamiento más predecible en términos 
de orden y manipulación de datos. */

console.log("----------------------------------------------------------");

// Inserción en Maps

let miMapados = new Map();

miMapados.set("Nombre:", "Camilo");
miMapados.set("Edad:", 23);
miMapados.set("Status", true);
console.log(miMapados);

//Actualizacion en Maps
//Para actualizar el valor asociado a una clave específica, simplemente vuelves a utilizar el método set con la misma clave:
miMapados.set("Lenguaje:", "Javascript");

console.log(miMapados);

// Borrado en Maps. Método Delete.
miMapados.delete("Edad:");
console.log(miMapados);

console.log("----------------------------------------------------------");

// Recorrido/Ordenación de Maps

//si queremos recorrer los pares clave-valor en un orden específico, se puede hacer utilizando el método
//entries() y, por ejemplo, ordenar el array resultante.

let miMapatres = new Map([
  ["z", 1],
  ["a", 2],
  ["c", 3],
]);

// Recorrer los pares clave-valor en orden alfabético
let paresOrdenados = Array.from(miMapatres.entries()).sort((a, b) =>
  a[0].localeCompare(b[0])
);

console.log(paresOrdenados);
// Resultado: [ [ 'a', 2 ], [ 'c', 3 ], [ 'z', 1 ] ]

/*
En este ejemplo, Array.from(miMapatres.entries()) convierte los pares clave-valor en un array, y 
luego el método sort se utiliza para ordenar el array alfabéticamente según las claves.
este enfoque proporcionará un array ordenado, pero los Mapas en sí 
mismos mantendrán el orden de inserción original.
*/

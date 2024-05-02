/* 
EJERCICIO:
-Muestra ejemplos de creación de todas las estructuras soportadas por defecto en tu lenguaje. 
-Utiliza operaciones de inserción, borrado, actualización y ordenación.
*/

/*
En JavaScript, las colas (queues) y pilas (stacks) son estructuras 
de datos comúnmente implementadas utilizando arrays o linked lists. Estas estructuras se 
utilizan para organizar y gestionar datos de manera específica.
*/

//Pilas (Stacks)

/*  
Una pila es una estructura de datos en la que los elementos se añaden y eliminan siguiendo 
el principio de Last In, First Out (LIFO), es decir, el último elemento que se añade es el 
primero en ser eliminado.
En JavaScript, se puede implementar una pila utilizando un array y utilizando los métodos push 
para añadir elementos al final y pop para eliminar el último elemento añadido.
*/

let pila = [];

// Añadir elementos a la pila
pila.push(1);
pila.push(2);
pila.push(3);

console.log(pila); // Resultado: [1, 2, 3]

// Eliminar el último elemento añadido (LIFO)
let elementoEliminado = pila.pop();
console.log(elementoEliminado); // Resultado: 3
console.log(pila); // Resultado: [1, 2]

console.log("----------------------------------------------------------");

// Colas (Q)

/*
Una cola es una estructura de datos en la que los elementos se añaden al final y se eliminan 
desde el principio, siguiendo el principio de First In, First Out (FIFO), es decir, el 
primer elemento que se añade es el primero en ser eliminado.
En JavaScript, se puede implementar una cola utilizando un array y utilizando los métodos push 
para añadir elementos al final y shift para eliminar el primer elemento añadido.
*/

let cola = [];

// Añadir elementos a la cola
cola.push(1);
cola.push(2);
cola.push(3);

console.log(cola); // Resultado: [1, 2, 3]

// Eliminar el primer elemento añadido (FIFO)
let elementoFuera = cola.shift();
console.log(elementoFuera); // Resultado: 1
console.log(cola); // Resultado: [2, 3]

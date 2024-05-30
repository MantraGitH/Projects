/* 
EJERCICIO:
* Implementa los mecanismos de introducción y recuperación de elementos propios de las
* pilas (stacks - LIFO) y las colas (queue - FIFO) utilizando una estructura de array
* o lista (dependiendo de las posibilidades de tu lenguaje).
*/

// Una pila (stack) es una estructura de datos que sigue el principio LIFO (Last In, First Out), lo que
//  significa que el último elemento que se agrega es el primero en ser eliminado.
//  Las pilas son útiles para una variedad de aplicaciones, como la gestión de la ejecución de funciones,
//  la reversión de acciones (deshacer/rehacer), y la evaluación de expresiones.

let stack = [];

// Agregar un elemento al tope de la pila.
stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack); // [ 1, 2, 3 ]

// Eliminar y devolver el elemento del tope de la pila.

let lastElement = stack.pop();
console.log(lastElement); // 3
console.log(stack); // [1, 2]

console.log("------------------------------------------------");

// Una cola (Queue) es una estructura de datos que sigue el principio FIFO (First In, First Out), es decir, el primer elemento en
//entrar es el primero en salir. Esto es similar a una fila en una tienda: la primera persona en la fila es la primera en ser
//atendida.

let queue = []

// Agregar elementos a la cola (queue)
queue.push(1)
queue.push(2)
queue.push(3)

console.log(queue) // [ 1, 2, 3 ]

// Eliminar elementos de la cola (dequeue)

let firstElement = queue.shift();
console.log(firstElement); // 1
console.log(queue); // [2, 3]




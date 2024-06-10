/* DIFICULTAD EXTRA (opcional):
 * Implementa dos clases que representen las estructuras de Pila y Cola (estudiadas
 * en el ejercicio número 7 de la ruta de estudio)
 * - Deben poder inicializarse y disponer de operaciones para añadir, eliminar,
 *   retornar el número de elementos e imprimir todo su contenido. */

// LIFO

class Pila {
  constructor() {
    this.items = [];
  }

  // Añadir un elemento a la pila
  push(elemento) {
    this.items.push(elemento);
  }

  // Eliminar el elemento superior de la pila
  pop() {
    if (this.isEmpty()) {
      return "La pila está vacía";
    }
    return this.items.pop();
  }

  // Retornar el número de elementos en la pila
  size() {
    return this.items.length;
  }

  // Imprimir todo el contenido de la pila
  print() {
    console.log(this.items.join(", "));
  }

  // Verificar si la pila está vacía
  isEmpty() {
    return this.items.length === 0;
  }
}

// FIFO

class Cola {
  constructor() {
    this.items = [];
  }

  // Añadir un elemento a la cola
  enqueue(elemento) {
    this.items.push(elemento);
  }

  // Eliminar el primer elemento de la cola
  dequeue() {
    if (this.isEmpty()) {
      return "La cola está vacía";
    }
    return this.items.shift();
  }

  // Retornar el número de elementos en la cola
  size() {
    return this.items.length;
  }

  // Imprimir todo el contenido de la cola
  print() {
    console.log(this.items.join(", "));
  }

  // Verifica si la cola está vacía
  isEmpty() {
    return this.items.length === 0;
  }
}

// Ejemplo de uso de la clase Pila

let pila = new Pila();
console.log("Pila:")
pila.push(10);
pila.push(20);
pila.push(30);
pila.print(); // Imprime: 10, 20, 30
console.log(pila.pop()); // Elimina y devuelve el elemento superior: 30
pila.print(); // Imprime: 10, 20
console.log(pila.size()); // Devuelve el número de elementos: 2

console.log("---------------------------------------------------------");

// Ejemplo de uso de la clase Cola
let cola = new Cola();
console.log("Cola:")
cola.enqueue(10);
cola.enqueue(20);
cola.enqueue(30);
cola.print(); // Imprime: 10, 20, 30
console.log(cola.dequeue()); // Elimina y devuelve el primer elemento: 10
cola.print(); // Imprime: 20, 30
console.log(cola.size()); // Devuelve el número de elementos: 2

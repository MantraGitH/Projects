/* * EJERCICIO:
 * Explora el concepto de herencia según tu lenguaje. Crea un ejemplo que
 * implemente una superclase Animal y un par de subclases Perro y Gato,
 * junto con una función que sirva para imprimir el sonido que emite cada Animal. */

// Superclase Animal
class Animal {
  constructor(nombre) {
    this.nombre = nombre;
  }

  emitirSonido() {
    // Método que será sobrescrito por las subclases
    console.log(`${this.nombre} emite un sonido.`);
  }
}

// Subclase Perro
class Perro extends Animal {
  constructor(nombre) {
    super(nombre); // Llama al constructor de la superclase
  }

  emitirSonido() {
    console.log(`${this.nombre} dice: Guau`);
  }
}

// Subclase Gato
class Gato extends Animal {
  constructor(nombre) {
    super(nombre); // Llama al constructor de la superclase
  }

  emitirSonido() {
    console.log(`${this.nombre} dice: Miau`);
  }
}

// Función para imprimir el sonido de un animal
function imprimirSonido(animal) {
  animal.emitirSonido();
}

// Crear instancias de Perro y Gato
let miPerro = new Perro("Coco");
let miGato = new Gato("Tyrion");

// Imprimir el sonido que emiten
imprimirSonido(miPerro); // Coco dice: Guau
imprimirSonido(miGato); // Tyrion dice: Miau

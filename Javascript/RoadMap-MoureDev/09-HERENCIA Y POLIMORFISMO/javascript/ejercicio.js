/* * EJERCICIO:
 * Explora el concepto de herencia según tu lenguaje. Crea un ejemplo que
 * implemente una superclase Animal y un par de subclases Perro y Gato,
 * junto con una función que sirva para imprimir el sonido que emite cada Animal. */

class Animal {
  constructor(name) {
    this.name = name;
  }

  sound() {
    // Método abstracto
  }
}

class Dog extends Animal {
  sound() {
    console.log("Guau!");
  }
}

class Cat extends Animal {
  sound() {
    console.log("Miau!");
  }
}

function emitirSonido(animal) {
  animal.sound();
}

let myAnimal = new Animal("Animal");
emitirSonido(myAnimal); // No hará nada ya que el método sound() en Animal no está implementado
let myDog = new Dog("Coco");
emitirSonido(myDog);
let myCat = new Cat("Tyrion");
emitirSonido(myCat);

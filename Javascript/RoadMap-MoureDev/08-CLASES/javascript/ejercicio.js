/* EJERCICIO:
 * Explora el concepto de clase y crea un ejemplo que implemente un inicializador,
 * atributos y una función que los imprima (teniendo en cuenta las posibilidades
 * de tu lenguaje).
 * Una vez implementada, créala, establece sus parámetros, modifícalos e imprímelos
 * utilizando su función. */

class Vikingo {
  // El constructor es el inicializador de la clase.
  constructor(nombre, edad, ocupacion) {
    this.nombre = nombre; // Atributo nombre
    this.edad = edad; // Atributo edad
    this.ocupacion = ocupacion; // Atributo ocupacion
  }

  // Método para imprimir los atributos de la clase
  imprimirDetalles() {
    console.log(`Nombre: ${this.nombre}`);
    console.log(`Edad: ${this.edad}`);
    console.log(`Ocupación: ${this.ocupacion}`);
  }
}

// Crear una instancia de la clase Vikingo
let vikingo = new Vikingo("Ragnar Lothbrok", 30, "Granjero");

// Imprimir los detalles del vikingo
vikingo.imprimirDetalles();

console.log("-----------------------------------");

// Modificar los atributos del vikingo
vikingo.nombre = "Rey Ragnar Lothbrok";
vikingo.edad = 33;
vikingo.ocupacion = "Rey de Kattegat";

// Imprimir los detalles actualizados del vikingo
vikingo.imprimirDetalles();

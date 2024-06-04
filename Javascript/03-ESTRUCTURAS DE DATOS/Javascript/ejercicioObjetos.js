/* 
EJERCICIO:
-Muestra ejemplos de creación de todas las estructuras soportadas por defecto en tu lenguaje. 
-Utiliza operaciones de inserción, borrado, actualización y ordenación.
*/

/* 
Objetos definición:
Son colecciones de pares clave-valor, donde las claves son cadenas (o símbolos) 
y los valores pueden ser cualquier tipo de datos,
incluyendo otros objetos.
Los objetos en JavaScript son muy flexibles y se utilizan ampliamente para modelar datos complejos. 
*/

// Definir un objeto
let persona = {
  nombre: "Camilo",
  edad: 23,
  ciudad: "Minas",
};

//Inserción de propiedad

persona.lenguaje = "Javascript";
console.log(persona);

//Eliminacion de propiedad

delete persona.lenguaje;
console.log(persona);

// Actualizacion de las propiedades de un objeto
persona.nombre = "Ernesto";
persona.edad = 24;
persona.ciudad = "Montevideo";
console.log(persona);

// // Acceder a propiedades del objeto
// console.log(persona.nombre);
// console.log(persona.edad);
// console.log(persona.ciudad);

// Ordenación de las propiedades
let { edad, nombre, ciudad } = persona;
persona = { edad, nombre, ciudad };
console.log(persona);

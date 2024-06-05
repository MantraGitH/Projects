/* 
EJERCICIO:
- Muestra ejemplos de asignación de variables "por valor" y "por referencia", según
su tipo de dato.
- Muestra ejemplos de funciones con variables que se les pasan "por valor" y 
"por referencia", y cómo se comportan en cada caso en el momento de ser modificadas.
(Entender estos conceptos es algo esencial en la gran mayoría de lenguajes)
*/

/* 
Referencia: 
Cuando se asigna un objeto (incluyendo arrays y funciones) a una variable en Javascript, 
se está asignando una referencia a ese objeto en la memoria. 
Esto significa que ambas variables apuntan al mismo objeto en la memoria, por lo que si se
modifica el objeto a través de una variable, los cambios se reflejarán en todas las variables que hacen referencia a ese objeto. 
*/

let arr1 = [1, 2, 3];
let arr2 = arr1;

arr2.push(4);

console.log(arr1);
console.log(arr2);

let obj1 = { nombre: "Juan" };
let obj2 = obj1;

obj2.nombre = "Pedro";

console.log(obj1.nombre);
console.log(obj2.nombre);

console.log("----------------------------------------------------------");

//Funcion con datos por referencia

function cambiarListaYDuplicar(unaLista, otraLista) {
  unaLista.push(30);

  otraLista = unaLista;
  otraLista.push(40);

  console.log(unaLista);
  console.log(otraLista);
}

let miLista = [10, 20];
cambiarListaYDuplicar(miLista);

let persona = { nombre: "Juan" };

function modificarNombre(obj) {
  obj.nombre = "Carlos";
}

modificarNombre(persona);
console.log(persona.nombre); // console.log: Carlos (el objeto persona se ve afectado)

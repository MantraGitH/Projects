/* Crea ejemplos de funciones básicas que representen las diferentes posibilidades del lenguaje:
Sin parámetros ni retorno, con uno o varios parámetros, con retorno... */

// Función que imprime un saludo en la consola
function saludar() {
  console.log("Hi there");
}

// Llamada a la función
saludar();

console.log("----------------------------------------------------------");

// Función que suma 5 a un número dado y devuelve el resultado
function sumarCinco(num) {
  return num + 5;
}

// Llamada a la función
let resultado = sumarCinco(10);
console.log(resultado); // Imprime 15

console.log("----------------------------------------------------------");

// Función que calcula el área de un rectángulo
function calcularAreaRectangulo(base, altura) {
  return base * altura;
}

// Llamada a la función
var area = calcularAreaRectangulo(5, 10);
console.log("El área del rectángulo es: " + area);

console.log("----------------------------------------------------------");

// Función que concatena dos strings con un espacio opcionalmente
function concatenarStrings(str1, str2, incluirEspacio = true) {
  if (incluirEspacio) {
      return str1 + " " + str2;
  } else {
      return str1 + str2;
  }
}

// Llamadas a la función
console.log(concatenarStrings("Hola", "Mundo")); // Imprime "Hola Mundo"
console.log(concatenarStrings("Hola", "Mundo", false)); // Imprime "HolaMundo"




/* DIFICULTAD EXTRA (opcional):
Crea un programa que analice dos palabras diferentes y realice comprobaciones
para descubrir si son:
- Palíndromos
- Anagramas
- Isogramas */

/* Nota:

Palíndromos: Son palabras, frases o números que se leen igual de izquierda a derecha que de derecha a izquierda.

Anagramas: Son palabras o frases que resultan de reorganizar las letras de otra palabra o frase.

Isogramas: Son palabras en las que no se repite ninguna letra.

*/

// Ejemplo
let palabra1 = "reconocer";
let palabra2 = "murcielago";

// Función para verificar si una palabra es palíndromo
function esPalindromo(palabra) {
  palabra = palabra.toLowerCase();
  return palabra === palabra.split("").reverse().join("");
}

// Función para verificar si dos palabras son anagramas
function sonAnagramas(palabra1, palabra2) {
  palabra1 = palabra1.toLowerCase().split("").sort().join("");
  palabra2 = palabra2.toLowerCase().split("").sort().join("");
  return palabra1 === palabra2;
}

// Función para verificar si una palabra es un isograma
function esIsograma(palabra) {
  palabra = palabra.toLowerCase();
  for (let i = 0; i < palabra.length; i++) {
    for (let j = i + 1; j < palabra.length; j++) {
      if (palabra[i] === palabra[j]) {
        return false;
      }
    }
  }
  return true;
}

// Función principal para analizar las dos palabras
function analizarPalabras(palabra1, palabra2) {
  console.log(`Palabra 1: ${palabra1}`);
  console.log(`Palabra 2: ${palabra2}`);
  if (esPalindromo(palabra1)) {
    console.log("La Palabra 1 es un palíndromo.");
  } else {
    console.log("La Palabra 1 no es un palíndromo.");
  }
  if (esPalindromo(palabra2)) {
    console.log("La Palabra 2 es un palíndromo.");
  } else {
    console.log("La Palabra 2 no es un palíndromo.");
  }
  if (sonAnagramas(palabra1, palabra2)) {
    console.log("Las dos palabras son anagramas.");
  } else {
    console.log("Las dos palabras no son anagramas.");
  }
  if (esIsograma(palabra1)) {
    console.log("La Palabra 1 es un isograma.");
  } else {
    console.log("La Palabra 1 no es un isograma.");
  }
  if (esIsograma(palabra2)) {
    console.log("La Palabra 2 es un isograma.");
  } else {
    console.log("La Palabra 2 no es un isograma.");
  }
}


analizarPalabras(palabra1, palabra2);

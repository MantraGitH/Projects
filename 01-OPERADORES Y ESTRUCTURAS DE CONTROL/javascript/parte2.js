/* * Parte2: Utilizando las operaciones con operadores que tú quieras, crea ejemplos
*   que representen todos los tipos de estructuras de control que existan
*   en tu lenguaje:
*   Condicionales, iterativas, excepciones...
* - Debes hacer console.log por consola del resultado de todos los ejemplos. */

// Estructuras Condicionales:

//if-else:

let edad = 18;
if (edad >= 18) {
    console.log("Eres mayor de edad");
} else {
    console.log("Eres menor de edad");
}

//switch-case:

let dia = 3;
switch (dia) {
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
        console.log("Miércoles");
        break;
    default:
        console.log("Otro día");
}

// Estructuras Iterativas:

//for

for (let i = 0; i < 5; i++) {
    console.log("Iteración número " + (i + 1));
}

//while

let x = 0;
while (x < 5) {
    console.log("Iteración número " + (x + 1));
    x++;
}

//excepciones

//try-catch

try {
    // Intenta ejecutar este código
    let resultado = 10 / 0;
    console.log("El resultado es: " + resultado);
} catch (error) {
    // Si hay un error, captúralo y ejecuta este bloque
    console.log("Error:", error);
}

//throw

function dividir(a, b) {
    if (b === 0) {
        throw "No se puede dividir por cero";
    }
    return a / b;
}

try {
    let resultado = dividir(10, 0);
    console.log("El resultado es: " + resultado);
} catch (error) {
    console.log("Error:", error);
}

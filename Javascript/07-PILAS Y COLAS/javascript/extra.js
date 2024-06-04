/*  
DIFICULTAD EXTRA (opcional):
* - Utilizando la implementación de pila y cadenas de texto, simula el mecanismo adelante/atrás
*   de un navegador web. Crea un programa en el que puedas navegar a una página o indicarle
*   que te quieres desplazar adelante o atrás, mostrando en cada caso el nombre de la web.
*   Las palabras "adelante", "atrás" desencadenan esta acción, el resto se interpreta como
*   el nombre de una nueva web.
* - Utilizando la implementación de cola y cadenas de texto, simula el mecanismo de una
*   impresora compartida que recibe documentos y los imprime cuando así se le indica.
*   La palabra "imprimir" imprime un elemento de la cola, el resto de palabras se
*   interpretan como nombres de documentos. 
*/

//codigo a modo de ejemplo para entender el funcionamiento de stack y queue, no funciona como tal.

function webNavigation() {
    let stack = [];

    while (true) {
        let action = prompt("Añade una url o interactúa con palabras adelante/atrás/salir:");

        if (action === "salir") {
            console.log("Saliendo del navegador web.");
            break;
        } else if (action === "adelante") {
            // No se hace nada en caso de 'adelante' porque no hay funcionalidad especificada
        } else if (action === "atrás") {
            if (stack.length > 0) {
                stack.pop();
            }
        } else {
            stack.push(action);
        }

        if (stack.length > 0) {
            console.log(`Has navegado a la web: ${stack[stack.length - 1]}.`);
        } else {
            console.log("Estás en la página de inicio.");
        }
    }
}

webNavigation();

function sharedPrinter() {
    let queue = [];

    while (true) {
        let action = prompt("Añade un documento o selecciona imprimir/salir:");

        if (action === "salir") {
            break;
        } else if (action === "imprimir") {
            if (queue.length > 0) {
                console.log(`Imprimiendo: ${queue.shift()}`);
            }
        } else {
            queue.push(action);
        }

        console.log(`Cola de impresión: ${queue}`);
    }
}

sharedPrinter();
/* 
EJERCICIO:
Entiende el concepto de recursividad creando una función recursiva que imprima
números del 100 al 0.
 */

function funcionRecursiva(number) {
  if (number === 0) {
    console.log(number);
    return;
  }
  console.log(number);
  funcionRecursiva(number - 1);
}

funcionRecursiva(100);

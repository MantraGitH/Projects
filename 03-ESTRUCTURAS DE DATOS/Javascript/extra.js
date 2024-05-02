/* DIFICULTAD EXTRA (opcional):
Crea una agenda de contactos por terminal.
- Debes implementar funcionalidades de búsqueda, inserción, actualización y eliminación de contactos.
- Cada contacto debe tener un nombre y un número de teléfono.
- El programa solicita en primer lugar cuál es la operación que se quiere realizar, y a continuación los datos necesarios para llevarla a cabo.
- El programa no puede dejar introducir números de teléfono no númericos y con más de 11 dígitos (o el número de dígitos que quieras).
- También se debe proponer una operación de finalización del programa. */

const agendaContactos = () => {
  let agenda = new Map();

// datos hardcodeados

  let opcion = 1;
  let nombre = "Ernesto";
  let numero = 3413646464;
  let nombre2 = "Camilo";
  let numero2 = 3413646566;

  console.log(`
    1. Buscar
    2. Insertar
    3. Actualizar
    4. Eliminar
    5. Salir
  `);

  if (opcion >= 1 && opcion <= 5) {
    switch (opcion) {
      case 1:
        if (nombre !== "" && !isNaN(numero) && numero.toString().length <= 11) {
          agenda.set(nombre, numero);
          console.log(agenda);
        } else {
          console.log("Error, vuelva a insertar datos validos");
        }
        break;
      case 2:
        if (nombre !== "" && !isNaN(numero) && numero.toString().length <= 11) {
          agenda.set(nombre, numero);
        } else if (agenda.has(nombre)) {
          console.log(`El numero de ${nombre} es: ${agenda.get(nombre)}`);
        } else {
          console.log("El contacto no esta registrado");
        }
        break;
      case 3:
        agenda.set(nombre2, numero2);
        console.log(`El numero de ${nombre2} es: ${agenda.get(nombre2)}`);
        break;
      case 4:
        agenda.delete(nombre);
        console.log(agenda);
        break;
      case 5:
        console.log("Saliendo de la agenda..");
        break;
      default:
        break;
    }
  } else {
    console.log("Error de opcion, ingrese un numero entre el 1 y el 5");
  }
};

agendaContactos();
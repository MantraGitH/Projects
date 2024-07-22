/*
 * DIFICULTAD EXTRA (opcional):
 * Desarrolla un programa de gestión de ventas que almacena sus datos en un
 * archivo .txt.
 * - Cada producto se guarda en una línea del archivo de la siguiente manera:
 *   [nombre_producto], [cantidad_vendida], [precio].
 * - Siguiendo ese formato, y mediante terminal, debe permitir añadir, consultar,
 *   actualizar, eliminar productos y salir.
 * - También debe poseer opciones para calcular la venta total y por producto.
 * - La opción salir borra el .txt.
 */

import {
  createReadStream,
  createWriteStream,
  unlink,
  rename,
  promises,
} from "fs";
import { createInterface } from "readline";

// Definición de las funciones principales del programa
const ventas = {
  archivo: "ventas.txt",

  // Agrega un producto al archivo ventas.txt.
  async agregarProducto(producto) {
    await appendToFile(
      this.archivo,
      `${producto.nombre}, ${producto.cantidad}, ${producto.precio}\n`
    );
  },

  // Muestra el contenido del archivo ventas.txt
  async consultarProductos() {
    const data = await readFile(this.archivo);
    console.log(data);
  },

  // Actualiza un producto en el archivo ventas.txt
  async actualizarProducto(nombre, cantidad, precio) {
    const tempFile = "temporal.txt";
    const readStream = createReadStream(this.archivo);
    const writeStream = createWriteStream(tempFile);
    const rl = createInterface({
      input: readStream,
      output: writeStream,
    });

    for await (const line of rl) {
      const [nombreProducto, cantidadStr, precioStr] = line.split(",");
      if (nombreProducto.trim() === nombre) {
        writeStream.write(`${nombre}, ${cantidad}, ${precio}\n`);
      } else {
        writeStream.write(`${line}\n`);
      }
    }

    await new Promise((resolve) => {
      readStream.close();
      writeStream.close();
      unlink(this.archivo, () => {
        rename(tempFile, this.archivo, resolve);
      });
    });
  },

  // Elimina un producto del archivo ventas.txt
  async eliminarProducto(nombre) {
    const tempFile = "temporal.txt";
    const readStream = createReadStream(this.archivo);
    const writeStream = createWriteStream(tempFile);
    const rl = createInterface({
      input: readStream,
      output: writeStream,
    });

    for await (const line of rl) {
      const [nombreProducto, ,] = line.split(",");
      if (nombreProducto.trim() !== nombre) {
        writeStream.write(`${line}\n`);
      }
    }

    await new Promise((resolve) => {
      readStream.close();
      writeStream.close();
      unlink(this.archivo, () => {
        rename(tempFile, this.archivo, resolve);
      });
    });
  },

  // Calcula el total de ventas
  async calcularVentaTotal() {
    const data = await readFile(this.archivo);
    const lines = data.split("\n");
    let total = 0;
    for (const line of lines) {
      const [cantidadStr, precioStr] = line.split(",");
      const cantidad = parseInt(cantidadStr.trim());
      const precio = parseFloat(precioStr.trim());
      total += cantidad * precio;
    }
    return total;
  },

  //Calcula la venta total de un producto específico
  async calcularVentaPorProducto(nombre) {
    const data = await readFile(this.archivo);
    const lines = data.split("\n");
    for (const line of lines) {
      const [nombreProducto, cantidadStr, precioStr] = line.split(",");
      if (nombreProducto.trim() === nombre) {
        const cantidad = parseInt(cantidadStr.trim());
        const precio = parseFloat(precioStr.trim());
        return cantidad * precio;
      }
    }
    return 0;
  },

  // Elimina el archivo ventas.txt y termina el programa
  async salir() {
    await promises.unlink(this.archivo);
    console.log("Archivo borrado. Saliendo del programa...");
    process.exit(0);
  },
};

// Funciones de utilidad

// Agrega datos a un archivo.
async function appendToFile(filename, data) {
  await promises.appendFile(filename, data);
}

// Lee y devuelve el contenido de un archivo.
async function readFile(filename) {
  return await promises.readFile(filename, "utf8");
}

// Lógica principal del programa. Maneja la interacción del usuario con el programa.
async function main() {
  console.log("===== Gestión de Ventas =====");
  console.log("1. Agregar producto");
  console.log("2. Consultar productos");
  console.log("3. Actualizar producto");
  console.log("4. Eliminar producto");
  console.log("5. Calcular venta total");
  console.log("6. Calcular venta por producto");
  console.log("7. Salir");

  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Seleccione una opción: ", async (opcion) => {
    switch (opcion) {
      case "1":
        const producto = await obtenerDatosProducto();
        await ventas.agregarProducto(producto);
        break;
      case "2":
        await ventas.consultarProductos();
        break;
      case "3":
        const { nombre, cantidad, precio } = await obtenerDatosProducto();
        await ventas.actualizarProducto(nombre, cantidad, precio);
        break;
      case "4":
        const nombreProductoEliminar = await obtenerNombreProducto();
        await ventas.eliminarProducto(nombreProductoEliminar);
        break;
      case "5":
        console.log("Venta total: $" + (await ventas.calcularVentaTotal()));
        break;
      case "6":
        const nombreProductoVenta = await obtenerNombreProducto();
        console.log(
          "Venta de " +
            nombreProductoVenta +
            ": $" +
            (await ventas.calcularVentaPorProducto(nombreProductoVenta))
        );
        break;
      case "7":
        await ventas.salir();
        break;
      default:
        console.log("Opción no válida");
        break;
    }
    rl.close();
  });
}

// Solicita al usuario los datos de un producto.
async function obtenerDatosProducto() {
  return new Promise((resolve) => {
    const producto = {};
    const rl = createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    rl.question("Nombre del producto: ", (nombre) => {
      rl.question("Cantidad vendida: ", (cantidad) => {
        rl.question("Precio: ", (precio) => {
          rl.close();
          resolve({
            nombre,
            cantidad: parseInt(cantidad),
            precio: parseFloat(precio),
          });
        });
      });
    });
  });
}

//  Solicita al usuario el nombre de un producto.
async function obtenerNombreProducto() {
  return new Promise((resolve) => {
    const rl = createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    rl.question("Nombre del producto: ", (nombre) => {
      rl.close();
      resolve(nombre);
    });
  });
}

// Ejecución del programa
main().catch((error) => console.error(error));

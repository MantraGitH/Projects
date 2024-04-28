/* Comprueba si puedes crear funciones dentro de funciones. */

// funciones anidadas o funciones internas

function funcionExterna() {
    console.log("Esta es la función externa");
  
    function funcionInterna() {
      console.log("Esta es la función interna");
    }
  
    // Llamamos a la función interna desde la externa
    funcionInterna();
  }
  
  // Llamamos a la función externa
  funcionExterna()
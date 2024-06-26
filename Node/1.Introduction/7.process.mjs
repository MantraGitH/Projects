//process: proporciona información y control sobre el proceso actual de ejecución

//argumentos de entrada
//console.log(process.argv)

//controlar el proceso y su salida
// 0: todo bien
// 1: algun error y que se muestre
//process.exit(0)

// controlar eventos del proceso
//process.on("exit", () =>{
    //limpiar los recursos
//})

//current working directory
console.log(process.cwd())

//platform
console.log(process.env.NODE)
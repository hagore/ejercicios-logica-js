//elaborar un programa en javascript que simule ser un programa para estacionamiento el cual debera darle la posbilidad al usuario de ingresar el numero de horas que utilizo el estacionamiento. 
//Por politicas de la empresa si el usuario estuvo menos de media hora estacionado no se le cobrara nada, en caso en que el usuario alla estado mas de medio hora y menos de dos se le cobrara 10 pesos por la cantidad de horas, 
//si el usuario estubo de dos a tres horas se le cobrara por 25 pesos y si el usuario estubo mas de tres horas se le cobrara en el rango de 30 pesos 

// //function CalHrs(horas){

//     let cobro = 0;
//     if (hrs <= 0.5){
//         cobro = 0;
//         console.log("no se cobrara ")
//     }
//     else if (hrs > 0.5 && hrs <= 2){
//         cobro = hrs * 10;
//         console.log("El cobro es de 10{cobro}. Estuviste entre 30 minutos y 2 horas.")
//     }
//     else if (hrs > 0.5 && hrs <= 2){
//         cobro = 25 ;
//         console.log("El cobro es de 10{cobro}. Estuviste entre 30 minutos y 2 horas.")
//     }

try {

    let horasEstacionadas;
    let minutosEstacionados;
    let cobro = 0;
    let tiempoTotalHoras;
    
    // Bucle para validar la entrada de horas (debe ser un número entero y no negativo)
    while (true) {
        horasEstacionadas = prompt("Ingresa el número de horas que estuviste estacionado (número entero):");
        
        if (!isNaN(horasEstacionadas) && horasEstacionadas !== "" && horasEstacionadas >= 0 && Number.isInteger(parseFloat(horasEstacionadas))) {
            horasEstacionadas = parseInt(horasEstacionadas);
            
        } else {
            console.log("Entrada inválida. Por favor, ingresa un número entero mayor o igual a 0.");
            break;  // Salir del bucle si la entrada es válida
        }
    }
    
    // Bucle para validar la entrada de minutos (debe ser un número entero entre 0 y 59)
    while (true) {
        minutosEstacionados = prompt("Ingresa el número de minutos que estuviste estacionado (número entre 0 y 59):");
        
        if (!isNaN(minutosEstacionados) && minutosEstacionados !== "" && minutosEstacionados >= 0 && minutosEstacionados < 60 && Number.isInteger(parseFloat(minutosEstacionados))) {
            minutosEstacionados = parseInt(minutosEstacionados);
            
        } else {
            console.log("Entrada inválida. Por favor, ingresa un número entero entre 0 y 59.");
            break;  // Salir del bucle si la entrada es válida
        }
    }
    
    // Convertir el tiempo total a horas (puede ser un valor fraccionado)
    tiempoTotalHoras = horasEstacionadas + (minutosEstacionados / 60);
    
    // Cálculo del cobro basado en el tiempo total en horas
    if (tiempoTotalHoras <= 0.5) {
        cobro = 0;
        console.log("No se cobrará nada. Estuviste menos de 30 minutos.");
    } else if (tiempoTotalHoras > 0.5 && tiempoTotalHoras <= 2) {
        cobro = Math.ceil(tiempoTotalHoras) * 10;  // Cobrar por cada hora completa o fracción de hora
        console.log(`El cobro es de $${cobro}. Estuviste entre 30 minutos y 2 horas.`);
    } else if (tiempoTotalHoras > 2 && tiempoTotalHoras <= 3) {
        cobro = 25;
        console.log("El cobro es de $25. Estuviste entre 2 y 3 horas.");
    } else if (tiempoTotalHoras > 3) {
        cobro = 30;
        console.log("El cobro es de $30. Estuviste más de 3 horas.");
    } else {
        console.log("Entrada inválida.");
    }
    
    console.log(`Total a pagar: $${cobro}`);
    
    

} catch (error) {
    console.log("tu error es: ", error)
}
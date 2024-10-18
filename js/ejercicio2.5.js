//Validación de entrada: Pide al usuario que ingrese un número y verifica si es
//realmente un número. Si no lo es, muestra un mensaje de error.

let CaractEr = prompt("Ingrese un numero: ")

if (isNaN(CaractEr)) {
    console.log("Error: No has ingresado un número válido.");
  } else {
    console.log("Has ingresado el número:",   $,{CaractEr});
  }
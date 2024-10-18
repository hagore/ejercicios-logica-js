//Palíndromos: Pide al usuario ingresar una palabra y determina si es un
//palíndromo (se lee igual al derecho y al revés).

let palabra = prompt("Ingresa una palabra:").toLowerCase();
let palabraInvertida = palabra.split("").reverse().join("");

if (palabra === palabraInvertida) {
  console.log(palabra + " es un palíndromo.");
} else {
  console.log(palabra + " no es un palíndromo.");
}
console.log("Un palíndromo es una palabra, número, frase u otra secuencia de caracteres que se lee igual de izquierda a derecha");
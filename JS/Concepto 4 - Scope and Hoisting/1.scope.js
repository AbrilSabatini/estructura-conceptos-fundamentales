// Scope global
let nombre = "Abril";

function saludar() {
  // Scope local
  let mensaje = "Hola " + nombre;
  console.log(mensaje);
}

saludar();
console.log(nombre);
// console.log(mensaje); // Error

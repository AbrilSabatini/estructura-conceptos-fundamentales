// Función
function saludar(nombre) {
  return `Hola, ${nombre}!`;
}
console.log(saludar("Abril"));

// Función anónima asignada a una variable
const saludar2 = function (nombre) {
  return `Hola, ${nombre}!`;
};
console.log(saludar2("Abril"));

// Función flecha
const saludar3 = (nombre) => {
  return `Hola, ${nombre}!`;
};
console.log(saludar3("Abril"));

// Retorno implícito
const saludar4 = (nombre) => `Hola, ${nombre}!`;
console.log(saludar4("Abril"));

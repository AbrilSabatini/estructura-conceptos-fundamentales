console.log("Resultado invocando la función antes de declararla: ");
saludar();

function saludar() {
  console.log("¡Hola!");
}

console.log("--------------------");
console.log("Resultado utilizando var antes de declarla: ");
console.log(x); // undefined
var x = 5;

console.log("--------------------");
console.log(
  "Resultado utilizando let y const antes de declaralas: ReferenceError: Cannot access 'y' before initialization"
);
// console.log(y); // Error
let y = 10;

// console.log(x); // Error
const s = -20;

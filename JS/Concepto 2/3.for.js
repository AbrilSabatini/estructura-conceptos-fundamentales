// For clásico
for (let i = 0; i < 3; i++) {
  console.log(i);
}
// 0
// 1
// 2

let colores = ["rojo", "verde", "azul"];
for (let color of colores) {
  console.log(color);
}
// rojo
// verde
// azul

let texto = "Hola mundo";
for (let caracter of texto) {
  console.log(caracter);
}
// H
// o
// l
// a

// m
// u
// n
// d
// o

const objeto = { nombre: "Daniela", edad: 25 };
for (let clave in objeto) {
  console.log(`${clave}: ${objeto[clave]}`);
}

// nombre: Daniela
// edad: 25

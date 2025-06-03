let edad = 17;

/** ----- */
console.log("-------- IF --------");
if (edad >= 18) {
  console.log("Sos mayor de edad");
}

/** ----- */
console.log("-------- If...ELSE --------");
if (edad >= 18) {
  console.log("Sos mayor de edad");
} else {
  console.log("Sos menor de edad");
}

/** ----- */
console.log("-------- IF..IF ELSE...ELSE --------");
if (edad >= 18) {
  console.log("Sos mayor de edad");
} else if (edad >= 13) {
  console.log("Sos adolescente");
} else {
  console.log("Sos menor de 13");
}

/** ----- */
console.log("-------- IF anidado --------");
let tieneLicencia = true;

if (edad >= 18) {
  if (tieneLicencia) {
    console.log("Podés conducir");
  } else {
    console.log("No tenés licencia");
  }
} else {
  console.log("No podés conducir");
}

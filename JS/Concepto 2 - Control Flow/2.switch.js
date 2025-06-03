// Switch
let dia = "martes";

switch (dia) {
  case "lunes":
    console.log("Arranca la semana");
    break;
  case "martes":
  case "miércoles":
    console.log("Mitad de semana");
    break;
  case "viernes":
    console.log("Es viernes");
    break;
  default:
    console.log("Es un día común");
    break;
}

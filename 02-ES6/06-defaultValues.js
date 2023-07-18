let myVar = "Algo";

// let otraVar = myVar != undefined ? myVar : "Valor por default"

let otraVar = myVar || "Valor por default"

console.log(otraVar)

let var3 = ""; // Es un valor falsy
let otravar3 = var3 || "Valor por default";

console.log(otravar3)


// Funciones con argumentos

function getNombre() {
  // ...
  let nombre = null;
  return nombre || "Valor no encontrado"
}

function getJuan(nombre = "Juan") {
  return nombre
}

console.log(getNombre())
console.log(getJuan())
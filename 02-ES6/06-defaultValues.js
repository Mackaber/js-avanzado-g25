let myVar = "Algo";

// let otraVar = myVar != undefined ? myVar : "Valor por default"

let otraVar = myVar || "Valor por default"

console.log(otraVar)

let var3 = ""; // Es un valor falsy
let otravar3 = var3 || "Valor por default";

console.log(otravar3)
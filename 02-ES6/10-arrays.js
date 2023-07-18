const myArray = [1,2,3,4,5,6];

// Se le aplica una operacion en cada iteracion
for(let i=0; i < myArray.length; i++) {
  console.log(myArray[i])
}

myArray.forEach(element => {
  console.log(`Elemento: ${element}`)
})

console.log(myArray.map(element => {
  return `Elemento x 2: ${element*2}`
}))

let newarr = []
myArray.forEach(element => {
  newarr.push(`Elemento x 2: ${element*2}`)
})
console.log(newarr)

let personas = [
  {edad: 5, nombre: "Hugo"}, // 
  {edad: 7, nombre: "Paco"},
  {edad: 1, nombre: "Luis"},
  {edad: 6, nombre: "Juan"},
  {edad: 8, nombre: "Laura"}
]

let edadesDePersonas = personas.map(element => {
  return element.edad
})

console.log(edadesDePersonas.map(elemento => {
  return `La edad es de ${elemento}`
}))

console.log(edadesDePersonas)

personas.forEach(element => {
  console.log(element.edad)
})

console.log(personas.filter((persona) => {
  return persona.edad >= 6
}).map(element => element.nombre))
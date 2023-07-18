let myarray = [1,103,4,5,55,6,20,2]

// Ordena pero en orden alfabético
console.log(myarray.sort())

// Ordenar numeros de mayor a menor
function queEstaPasando(valor1, valor2) {
  console.log(`Valor 1: ${valor1}`)
  console.log(`Valor 2: ${valor2}`)
  console.log(`Resta de valor1 con valor2: ${valor1 - valor2}`)
  console.log('-----')
  return valor1 - valor2
}

// Si el resultado de valor1 - valor2 es positivo significa que valor1 es MAYOR (>) valor2
// Si el resultado de valor1 - valor2 es negativo signica que valor1 es MENOR (<) valor2

console.log(myarray.sort(queEstaPasando))


function deMayorAmenor (a, b) {
  return b-a
}

console.log(myarray.sort(deMayorAmenor))

let personas = [
  {edad: 5, nombre: "Hugo"}, // 
  {edad: 7, nombre: "Paco"},
  {edad: 1, nombre: "Luis"},
  {edad: 6, nombre: "Juan"},
  {edad: 8, nombre: "Laura"}
]

function ordenarPorEdades(persona1, persona2) {
  return persona1.edad - persona2.edad
}

// Necesito una funcion que al restar "a" - "b" = negativo
function ordenarPorNombres(persona1, persona2) {
  return persona1.nombre.charCodeAt() - persona2.nombre.charCodeAt()
}

// Reto: hacer que se ordene en orden alfabetico tomando en cuenta todas las letras

console.log(personas.sort(ordenarPorEdades))
console.log(personas.sort(ordenarPorNombres))


const misColores = ['Amarillo', 'Rojo', 'Azul'];
const misColoresDos = ['Negro', 'Blanco', ...misColores]


console.log(misColoresDos)


const misColoresTres = ['Amarillo', 'Rojo', 'Azul', 'Verde']
const misColoresCuatro = ['Negro', 'Blanco', 'Gris']

const misColoresCinco = [...misColoresTres,...misColoresCuatro] // ['Negro', 'Blanco', 'Gris','Amarillo', 'Rojo', 'Azul', 'Verde']

console.log(misColoresCinco)

let my_arr = [{id: 1, nombre: "Hugo", calificaciones: [{materia: "Ingles", calificacion: 9.0}, 7.0,5.0]},{ id: 2, nombre: "Paco"},{ id: 3, nombre: "Luis"}]
console.log(my_arr)

// Para clonar arreglos: https://runkit.com/mackaber/64a61fc954cf080007d216d1

const myPokemon = {
  id: 4,
  name: "Charmander",
  type: ["Fuego", "Agua"]
}

console.log(myPokemon)

const updatedData = {
  attack: "Mordisco",
  type: "Hielo"
}

const myNewPokemon = {...myPokemon,...updatedData }

console.log(myNewPokemon)
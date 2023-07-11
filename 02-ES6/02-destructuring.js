// let, var, const : https://runkit.com/mackaber/64a616a89c2bf60008a84c77


let fruta = {
  id: 1,
  nombre: 'Manzana',
  color: 'rojo',
  precio: 30,
  // "tamaño-en-cm": 10
}

console.log(fruta)

let { nombre, color } = fruta 
// let nombre = "Manzana"
// let color = "rojo"

// o

// let nombre = fruta.nombre
// let color = fruta.color

console.log(nombre, color)


let { nombre: name  } = fruta 

console.log(name)

const user = {
  id: 7,
  displayName: 'cguerra',
  fullName: {
    firstName: "Cesar",
    lastName: "Guerra"
  }
}

function userId({ id, displayName } /* user */) {
  // let { id } = user
  return `${id}:${displayName}`;
  // return id + ":" + displayName
}

console.log('El ID del usuario es', userId(user));

function whois({ displayName, fullName: { firstName : name }}) {
  return `${displayName} es ${name}`
}

console.log('El usuario', whois(user));


const verduras = ['Cebolla', 'Lechuga', 'Pepino', 'Cilantro'];

const [cebolla, _, elPepino] = verduras;

console.log(elPepino)

myMath_lib = {
  squared: (a) => a*a,
  byThree: (a) => a*3 
}

const {squared : pwd2} = myMath_lib

console.log(pwd2(3))
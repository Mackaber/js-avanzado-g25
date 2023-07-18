/* REGEX: Regular Expression */

const discurso = "Felicitamos al candidato Pepe, por haber ganado las elecciones. Pepe es la esperanza del pueblo";
console.log("Reemplazo nombre del candidato: ", discurso.replaceAll("Pepe","César"));

const discurso2 = "Felicitamos al candidato {Nombre}, por haber ganado las elecciones. {Nombre} es la esperanza del pueblo. Viva {Nombre}";

console.log("Reemplazo nombre del candidato: ", discurso2.replaceAll("{Nombre}","César"));

// Usando REGEX

const regex = /{Nombre}/g
console.log(discurso2.replace(regex, "César"))


// REGEX me sirve para determinar patrones dentro de un string

const otroRegex = /abc/
console.log(otroRegex.test("abcdefg"))
console.log(otroRegex.test("xyz"))
console.log(otroRegex.test("xyzabcxyz"))

console.log("Validando correos")
const emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

const emailRegexEasy = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

console.log('Correo Caso 1 ', emailRegex.test('cesar@cesarguerra.mx')); //true
console.log('Correo Caso 2 ', emailRegex.test('cesarcesarguerra.mx')); //false
console.log('Correo Caso 3 ', emailRegex.test('cesar@cesarguerramx')); //FALSE
console.log('Correo Caso 4 ', emailRegex.test('cesar@c.mx')); //true
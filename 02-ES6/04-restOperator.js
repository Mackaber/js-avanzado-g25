const persona = {
  id: 1,
  firstName: "Cesar",
  lastName: "Guerra",
  workAt: "DevF",
  profession: "sensei",
  genre: "Hombre"
}
// rest (del lado izquierdo) = spread (del lado derecho) 
const { firstName, lastName, ...info } = persona;
const { profession } = info
console.log(profession);

const user = {
  firstName: "Cesar",
  lastName: "Guerra",
  email: "cesar@guerra.com",
  password: "gatito123"
}

const { password : _, ...userSinPassword } = user;

console.log('User sin Password', userSinPassword);
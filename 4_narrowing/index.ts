// 1 - type guard

function sum(a: number | string, b: number | string) {
  if (typeof a === "string" && typeof b === "string") {
    console.log(parseFloat(a) + parseFloat(b))
  } else if (typeof a === "number" && typeof b === "number") {
    console.log(a + b)
  } else {
    console.log("Impossível realizar o cálculo")
  }
}

sum("7", "50")
sum(45, 50)

// 2 - checando se o valor existe

function operations(arr: number[], operation?: string | undefined) {
  if (operation) {
    if (operation === "sum") {
      const sum = arr.reduce((i, total) => i + total)
      console.log(sum)
    } else if (operation === "multiply") {
      const multiply = arr.reduce((i, total) => i * total)
      console.log(multiply)
    }
  } else {
    console.log("Por favor, defina uma operação")
  }
}

operations([2, 2, 2])
operations([1, 2, 3], "sum")
operations([1, 2, 100], "multiply")

// 3 - Instance of

class User {
  name

  constructor(name: string) {
    this.name = name
  }
}

class SuperUser extends User {
  constructor(name: string) {
    super(name)
  }
}

const igor = new User("Igor")
const matheus = new User("Matheus")

console.log(igor)
console.log(matheus)

function userGreeting(user: object) {
  if (user instanceof SuperUser) {
    console.log(`Olá ${user.name}, deseja verificar as informações do sistema?`)
  } else if (user instanceof User) {
    console.log(`Olá ${user.name}!`)
  }
}

userGreeting(igor)
userGreeting(matheus)

// 4 - Operador in
class Dog {
  name
  breed

  constructor(name: string, breed?: string) {
    this.name = name

    if (breed) {
      this.breed = breed
    }
  }
}

const bola = new Dog("Bola")
const alfredo = new Dog("Alfredo", "Pastor alemão")

function showDogDetails(dog: Dog) {
  if ('breed' in dog) {
    console.log(`O cachorro é da raça ${dog.breed}`)
  } else {
    console.log(`O cachorro não tem raça definida`)
  }
}

showDogDetails(bola)
showDogDetails(alfredo)

// Desafio
function receiveReview(star: number | boolean) {
  if (typeof star === "number") {
    console.log(`Você recebeu ${star} ${star === 1 ? "estrela" : "estrelas"}`)
  } else {
    console.log("Você não recebeu review")
  }
}

receiveReview(1)
receiveReview(5)
receiveReview(false)
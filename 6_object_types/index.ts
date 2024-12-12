//1 - tipo de objeto para função com interface
interface Product {
  name: string
  price: number
  isAvailable: boolean
}

function showProductDetails(product: Product) {
  console.log(`O nome do produto é ${product.name} e o preço é R$${product.price}`)

  if (product.isAvailable === true) {
    console.log("O produto está disponível")
  }
}

const shirt: Product = {
  name: "Camisa",
  price: 134.90,
  isAvailable: true
}

showProductDetails(shirt)

// 2 - Propriedade opcional em interface
interface User {
  email: string
  role?: string
}

function showUserDetails(user: User) {
  console.log(`E-mail do usuário: ${user.email}`)

  if (user.role) {
    console.log(`A função do usuário é: ${user.role}`)
  }
}

const user1: User = { email: "igor@email.com.br", role: "Admin" }
const user2: User = { email: "igor123@email.com.br" }

showUserDetails(user1)
showUserDetails(user2)

// 3 - Readonly
interface Car {
  brand: string
  readonly wheels: number
}

const fusca: Car = {
  brand: "Volkswagen",
  wheels: 4
}

console.log(fusca)

// fusca.wheels = 5

// 4 - index signature
interface CoordObject {
  [index: string]: number
}

let coords: CoordObject = {
  x: 10
}

coords.y = 30
coords.z = 40

console.log(coords)

// 5 - Extending interfaces
interface Human {
  name: string
  age: number
}

interface SuperHuman extends Human {
  superpowers: string[]
}

const igor: Human = {
  name: "Igor",
  age: 26
}

console.log(igor)

const hulk: SuperHuman = {
  name: "Hulk",
  age: 30,
  superpowers: ["Super regeneração", "Super força"]
}

console.log(hulk)

// 6 - Intersection types
interface Character {
  name: string
}

interface Gun {
  type: string
  caliber: number
}

type HumanWithGun = Character & Gun

const arnold: HumanWithGun = {
  name: "Arnold",
  type: "Shotgun",
  caliber: 12
}

console.log(arnold)

// 7 - Readonly array
let myArray: ReadonlyArray<string> = ["Abacaxi", "Banana", "Morango"]

// myArray[3] = "Uva"

console.log(myArray)

myArray.forEach((item) => {
  console.log(`Fruta: ${item}`)
})

myArray.map((item) => {
  console.log(`Fruta: ${item}`)
})

// 8 - Tuplas
type fiveNumbers = [number, number, number, number, number]

const myNumberArray: fiveNumbers = [2, 4, 6, 8, 10]
// const myNumberArray2: fiveNumbers = [2, 4, 6, 8, 10, 12]
// const mixedArray: fiveNumbers = [2, true, "String", 8, 10]

console.log(myNumberArray)

type nameAndAge = [string, number]

const igorM: nameAndAge = ["Igor", 26]

console.log(igorM)

// 9 - Tuplas com readonly
function showNumber(numbers: readonly [number, number]) {
  console.log(numbers[0])
  console.log(numbers[1])
}

showNumber([1, 2])
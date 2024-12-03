// 1 - arrays
let nums: number[] = [1, 2, 3]

nums.push(5)

console.log(nums[2])

// nums.push('a')
// nums = 'teste'

const nomes = ['Igor', 'Pedro']

// nomes.push(2)

// 2 - outra sintaxe de array
const numbers: Array<number> = [100, 200]

numbers.push(200)

// numbers.push('teste')

console.log(numbers[1])

// 3 - any
const arr: any[] = [1, 'teste', true, { nome: 'Igor' }]

console.log(arr)

arr.push([1, 2, 3])

console.log(arr)

// 4 - parametro de funcao

function sum(a: number, b: number) {
  console.log(a + b)
}

sum(4, 5)

// soma('ads', 1)

// 5 - retorno de funcao
function greeting(name: string): string {
  return `Olá ${name}!`
  // return 1
}

console.log(greeting('Igor'))

// greeting(1)

// 6 - funcoes anonimas
setTimeout(function () {
  const sallary = 1000

  // console.log(parseFloat(sallary))
}, 100)

// 7 - tipos de objetos

function passCoordinates(coord: { x: number; y: number }) {
  console.log('X coordinates: ' + coord.x)
  console.log('X coordinates: ' + coord.y)
}

const objCoord = { x: 10, y: 5 }

passCoordinates(objCoord)

// 8 - propriedades opcionais
function showNumbers(a: number, b: number, c?: number) {
  console.log('A: ' + a)
  console.log('B: ' + b)
  console.log('C: ' + c)
}

showNumbers(1, 2, 3)
showNumbers(4, 8)
// showNumbers(4)

// 9 - validando parâmetro opcional
function advancedGreeting(firstName: string, lastName?: string) {
  if (lastName !== undefined) {
    console.log(`Olá, ${firstName} ${lastName}, tudo bem?`)
  }

  console.log(`Olá, ${firstName}, tudo bem?`)
}

advancedGreeting('Igor', 'Siquieri')
advancedGreeting('João')

// 10 - union type
function showBalance(balance: string | number) {
  console.log(`O saldo da conta é R$${balance}`)
}

showBalance(500)
showBalance('100')

// 11 - mais sobre union types
function showUserRole(role: boolean | string) {
  if (typeof role === 'boolean') {
    console.log('Usuário não aprovado!')
  }
  console.log(`O usuário é um: ${role}`)
}

showUserRole(false)
showUserRole('Admin')
showUserRole('Editor')

// 12 - type alias
type ID = number | string

function showId(id: ID) {
  console.log(`O ID é: ${id}`)
}

showId('15')
showId(20)

type User = {
  name: string
  surname: string
}

function userDetails(user: User) {
  console.log(`Nome: ${user.name}`)
  console.log(`Sobrenome: ${user.surname}`)
}

userDetails({ name: 'Igor', surname: 'Siquieri' })

//13 - Interfaces
interface Point {
  x: number
  y: number
  z: number
}

function showCoords(obj: Point) {
  console.log(`X: ${obj.x} Y: ${obj.y} Z: ${obj.z}`)
}

const coordObj: Point = {
  x: 10,
  y: 20,
  z: 30
}

showCoords(coordObj)

//14 - Interface x type alias
interface Person {
  name: string
}

interface Person {
  age: number
}

const somePerson: Person = { name: 'Igor', age: 26 }

console.log(somePerson)

type PersonType = {
  name: string
}

// type PersonType = {
//   age: number
// }

// 15 - literal types
let test: "testando"

test = "testando"

function showDirection(direction: "left" | "right" | "center") {
  console.log(`A direção é ${direction}`)
}

showDirection("left")

// 16 - non null assertion operators
const p = document.getElementById("some-p")

console.log(p!.innerText)

// 17 - bigint

let n: bigint

n = 1000n

console.log(n)

console.log(typeof n)

console.log(n + 100n)

// 18 - symbol
let symbolA: symbol = Symbol("a")

let symbolB = Symbol("a")

console.log(symbolA == symbolB)
console.log(symbolA === symbolB)
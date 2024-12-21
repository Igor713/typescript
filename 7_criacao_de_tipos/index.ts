// 1 - Generics
function showData<T>(arg: T): string {
  return `O dado é: ${arg}`
}

console.log(showData(5))
console.log(showData('Teste'))
console.log(showData([]))

// 2 - Constraint em generic
function showProductName<T extends { name: string }>(obj: T) {
  return `O nome do produto é: ${obj.name}`
}

const myObj = { name: 'Porta', cor: 'Branca' }
const myCar = { name: 'Carro', cor: 'Prata', wheels: 4 }
const thirdObj = { price: 29.99, cor: 'Branca' }

console.log(showProductName(myObj))
console.log(showProductName(myCar))
// console.log(showProductName(thirdObj))

// 3 - Generics com interface
interface MyObject<T, U, Q> {
  name: string
  wheels: T
  engine: U
  color: Q
}

type Car = MyObject<number, number, string>
type Pen = MyObject<boolean, boolean, string>

const civic: Car = { name: 'Civic G7', wheels: 4, engine: 1.0, color: 'Green' }
const pen: Pen = { name: 'Caneta Bic', wheels: false, engine: false, color: 'Blue' }

console.log(civic)
console.log(pen)

// 4 - Type parameters
function getSomeKey<T, K extends keyof T>(obj: T, key: K) {
  return `A chave ${String(key)} está presente no objeto e tem valor de ${obj[key]}`
}

const server = {
  hd: '32gb',
  ram: '16gb'
}

console.log(getSomeKey(server, 'ram'))
// console.log(getSomeKey(server, 'teste'))

// 5 - Keyof type operator
type Person = { name: string, age: number, hasDriveLicense: boolean }

type C = keyof Person

function showPersonName(obj: Person, name: C): string {
  return `${obj[name]}`
}

const igor: Person = {
  name: 'Igor',
  age: 26,
  hasDriveLicense: true
}

console.log(showPersonName(igor, 'name'))

// 6 - Typeof type operator
const userName: string = 'Igor'

const userName1: typeof userName = 'Juca'

type x = typeof userName

const userName2: x = 'Francisco'

// 7 - Indexed access types
type Truck = { km: number, kg: number, description: string }

type km = Truck['km']

const volvoFh540: Truck = {
  km: 10000,
  kg: 15000,
  description: 'Caminhão de carga'
}

function showKm(km: km) {
  console.log(`O veículo tem o km de: ${km}`)
}

showKm(volvoFh540.km)

const fordFocus = {
  km: 1000,
  kg: 1050
}

showKm(fordFocus.km)

// 8 - Conditional types
interface A { }

interface B extends A { }

interface Teste {
  showName(): string
}

type mytype = B extends A ? number : string

const result: mytype = 5

type myTypeB = Teste extends { showNumber(): number } ? string : boolean

// 9 - Template literals type
type testA = 'text'

type CustomType = `some ${testA}`

const testing: CustomType = 'some text'
// const testing: CustomType = 'some text 2'
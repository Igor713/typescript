// 1 - void
function withoutReturn(): void {
  console.log("Essa função não tem retorno")
}

withoutReturn()

// 2 - callback com argumento
function greeting(name: string): string {
  return `Olá ${name}`
}

function preGreeting(f: (name: string) => string, userName: string) {
  console.log("Preparando função!")

  const greet = f(userName)

  console.log(greet)
}

preGreeting(greeting, "Igor")
preGreeting(greeting, "Igor 2")

// 3 - generic functions

function firstElement<T>(arr: T[]): T {
  return arr[0]
}

console.log(firstElement([1, 2, 3]))
console.log(firstElement(["a", "b", "c"]))

function mergeObjects<U, T>(obj1: U, obj2: T) {
  return {
    ...obj1,
    ...obj2
  }
}

const newObject = mergeObjects({ name: "Igor" }, { age: "26", job: "developer" })

console.log(newObject)

// 4 - constraints
function biggestNumber<T extends number | string>(a: T, b: T): T {
  let biggest: T

  if (+a > +b) {
    biggest = a
  } else {
    biggest = b
  }

  return biggest
}

console.log(biggestNumber(1, 2))
console.log(biggestNumber("3", "4"))

// 5 - especificar tipo de argumento
function mergeArrays<T>(arr1: T[], arr2: T[]) {
  return arr1.concat(arr2)
}

console.log(mergeArrays([1, 2, 3], [5, 6]))
console.log(mergeArrays<number | string>([1, 2, 3], ["5", "6"]))

// 6 - parâmtros opcionais
function modernGreeting(name: string, greet?: string) {
  if (greet) {
    return `Olá ${greet} ${name}, tudo bem?`
  }

  return `Olá ${name}`
}

console.log(modernGreeting("Igor"))
console.log(modernGreeting("Dr.", "Igor"))

// 7 - parâmetro default
function sumDefault(n: number, m: number = 10) {
  return n + m
}

console.log(sumDefault(1))
console.log(sumDefault(1, 2))

// 8 - unknown
function doSomenthing(x: unknown) {
  if (Array.isArray(x)) {
    console.log(x[0])
  } else if (typeof x === "number") {
    console.log("X é um número")
  }
}

doSomenthing([1, 2, 3])
doSomenthing(1)

// 9 - Never
function showErrorMessage(msg: string): never {
  throw new Error(msg)
}

// showErrorMessage("Deu algum erro!")

// 10 - Rest operator
function sumAll(...n: number[]) {
  return n.reduce((number, sum) => sum + number)
}

console.log(1, 2, 3, 4, 5)
console.log(1, 2, 789, 456, 123)

// 11 - destructoring como parâmetro
function showProductDetails({ name, price }: { name: string, price: number }): string {
  return `O nome do produto é ${name} e ele custa R$${price}`
}

const shirt = { name: "Camiseta", price: 56.98 }

console.log(showProductDetails)
// 1 - Campos em classes
class User {
  name!: string
  age!: number
}

const igor = new User()

console.log(igor)

igor.name = 'Igor'

console.log(igor)

// 2 - Constructor
class NewUser {
  name
  age

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
}

const pedro = new NewUser('Pedro', 25)
// const pedro = new NewUser(21, 25)

console.log(pedro)

// 3 - Campo readonly
class Car {
  name
  readonly wheels = 4

  constructor(name: string) {
    this.name = name
  }
}

const fusca = new Car('Fusca')

console.log(fusca)
console.log(fusca.wheels)

fusca.name = 'Fusca 1600'
// fusca.wheels = 5

console.log(fusca.name)

// 4 - Herança e super
class Machine {
  name

  constructor(name: string) {
    this.name = name
  }
}

const trator = new Machine('Trator')

class KillerMachine extends Machine {
  guns

  constructor(name: string, guns: number) {
    super(name)
    this.guns = guns
  }
}

const destroyer = new KillerMachine('Destroyer', 6)

console.log(trator)
console.log(destroyer)



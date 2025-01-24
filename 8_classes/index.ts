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

// 5 - Métodos

class Dwarf {
  name

  constructor(name: string) {
    this.name = name
  }

  greeting() {
    console.log('Hey stranger!')
  }
}

const jimmy = new Dwarf('Jimmy')
console.log(jimmy.name)
jimmy.greeting()

// 6 - This
class Truck {
  model
  hp

  constructor(model: string, hp: number) {
    this.model = model
    this.hp = hp
  }

  showDetails() {
    console.log(`O caminhão do modelo: ${this.model}, quem tem ${this.hp} de potência`)
  }
}

const volvo = new Truck('Volvo', 400)
volvo.showDetails()

// 7 - Getters
class Person {
  name
  surname

  constructor(name: string, surname: string) {
    this.name = name
    this.surname = surname
  }

  get fullName() {
    return this.name + " " + this.surname
  }
}

const igorSiquieri = new Person('Igor', 'Siquieri')
igorSiquieri.name
console.log(igorSiquieri.fullName)

// 8 - Setter
class Coords {
  x!: number
  y!: number

  set fillX(x: number) {
    if (x === 0) {
      return
    }

    this.x = x

    console.log('X inserido com sucesso')
  }

  set fillY(y: number) {
    if (y === 0) {
      return
    }

    this.y = y

    console.log('Y inserido com sucesso')
  }

  getCoords() {
    return `X: ${this.x} e Y: ${this.y}`
  }
}

const myCoords = new Coords()
myCoords.fillX = 15
myCoords.fillY = 16

console.log(myCoords)
console.log(myCoords.getCoords)

// 9 - Implements
interface showTitle {
  itemTitle(): string
}

class blogPost implements showTitle {
  title

  constructor(title: string) {
    this.title = title
  }

  itemTitle(): string {
    return `O título do post é ${this.title}`
  }
}

const myPost = new blogPost('Hello world')
console.log(myPost.itemTitle)

// 10 - Override de métodos
class Base {
  someMethod() {
    console.log('Alguma coisa')
  }
}

class Nova extends Base {
  someMethod() {
    console.log('Testando override')
  }
}

const myObject = new Nova()
myObject.someMethod

// 11 - Public
class C {
  public x = 10
}

class D extends C { }

const cInstance = new C()
console.log(cInstance.x)

const dInstance = new D()
console.log(dInstance.x)

// 12 - Protect
class E {
  protected x = 10

  protected protectedMethod() {
    console.log('Este método é protegido')
  }
}

class F extends E {
  showX() {
    console.log(`X: ${this.x}`)
  }

  showProtectMethod() {
    this.protectedMethod
  }
}

const fInstance = new F()
console.log(fInstance.showX)
console.log(fInstance.showProtectMethod)

// 13 - Private
class PrivateClass {
  private name = 'Private'

  showName() {
    return this.name
  }

  private privateMethod() {
    console.log('Método privado')
  }

  showPrivateMethod() {
    this.privateMethod
  }
}

const pObject = new PrivateClass()
// console.log(pObject.name)
console.log(pObject.showName())
console.log(pObject.showPrivateMethod())

// class TestingPrivate extends PrivateClass {
//   myMethod() {
//     this.privateMethod()
//   }
// }

// 14 - Static members
class staticMembers {
  static prop = 'Teste static'

  static staticMethod() {
    console.log('Está é um método estático')
  }
}

console.log(staticMembers.prop)
staticMembers.staticMethod()

// 15 - Generic class
class Item<T, U> {
  first
  second

  constructor(first: T, second: U) {
    this.first = first
    this.second = second
  }

  get showFirst() {
    return `O first é ${this.first}`
  }
}

const newItem = new Item('Caixa', 'surpresa')
console.log(newItem)
console.log(newItem.showFirst)
console.log(typeof newItem.showFirst)

const secondItem = new Item(12, true)
console.log(secondItem)

// 16 - Parameter properties
class ParameterProperties {
  constructor(public name: string, private qty: number, private price: number) {
    this.name = name
    this.qty = qty
    this.price = price
  }

  get showQty() {
    return `Quantidade total: ${this.qty}`
  }

  get showPrice() {
    return `Preço total: ${this.price}`
  }
}

const newShirt = new ParameterProperties('Camisa', 5, 39.99)

console.log(newShirt.name)
console.log(newShirt.showQty)
console.log(newShirt.showPrice)

// 17 - Class expressions
const myClass = class <T> {
  name

  constructor(name: T) {
    this.name = name
  }
}

const pessoa = new myClass('Jones')

// 18 - Abstract class
abstract class AbstractClass {
  abstract showName(): void
}

// const newObj = new AbstractClass()

class AbstractExample extends AbstractClass {
  name: string

  constructor(name: string) {
    super()
    this.name = name
  }

  showName(): void {
    console.log(`O nome é ${this.name}`)
  }
}

const newAbstractObject = new AbstractExample('Igor')

newAbstractObject.showName()

// 19 - Relações entre classes
class Dog {
  name!: string
}

class Cat {
  name!: string
}

const doguinho: Dog = new Cat()
console.log(doguinho)
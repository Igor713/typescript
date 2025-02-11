// 1 - Exemplo decorator
function myDecorator() {
  console.log("Iniciando decorator");

  return function (
    target: any,
    propertKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("Executando decorator");
    console.log(target);
    console.log(propertKey);
    console.log(descriptor);
  };
}

class myClass {
  @myDecorator()
  testing() {
    console.log("Terminando execução do método");
  }
}

const newObjt = new myClass();
newObjt.testing();

// 2 - Múltiplos decorators
function a() {
  return function (
    target: any,
    propertKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("Executou A");
  };
}

function b() {
  return function (
    target: any,
    propertKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("Executou B");
  };
}

class multipleDecorators {
  @a()
  @b()
  testing() {
    console.log("Terminando execução");
  }
}

const multiple = new multipleDecorators();

multiple.testing();

// 3 - Class decorator
function classDecorator(constructor: Function) {
  console.log(constructor.name);

  if (constructor.name === "User") {
    console.log("Criando usuário!");
  }
}

@classDecorator
class User {
  name;

  constructor(name: string) {
    this.name = name;
  }
}

const person1 = new User("Igor");
console.log(person1);

// 4 - Method decorator
function enumerable(value: boolean) {
  return function (
    target: any,
    propertKey: string,
    descriptor: PropertyDescriptor
  ) {
    descriptor.enumerable = value;
  };
}

class Machine {
  name;

  constructor(name: string) {
    this.name = name;
  }

  @enumerable(false)
  showName() {
    console.log(`O nome da máquina é ${this.name}`);
  }
}

const civic = new Machine("Civic");
civic.showName();

// 5 - Acessor decorator
class Monster {
  name?;
  age?;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  @enumerable(true)
  get showName() {
    return `O nome do monstro é ${this.name}`;
  }

  @enumerable(false)
  get showAge() {
    return `Idade do monstro ${this.name}`;
  }
}

const monster1 = new Monster("Frankenstein", 18);

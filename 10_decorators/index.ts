// 1 - Exemplo decorator
function myDecorator() {
  console.log("Iniciando decorator");

  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("Executando decorator");
    console.log("Target:", target);
    console.log("PropertyKey:", propertyKey);
    console.log("Descriptor:", descriptor);
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

// 6 - Property decorator
function formatNumber(target: any, propertyKey: string) {
  let value: string;

  Object.defineProperty(target, propertyKey, {
    get: function () {
      return value;
    },
    set: function (newVal: string) {
      value = newVal.padStart(5, "0");
    },
    enumerable: true,
    configurable: true,
  });
}

class ID {
  @formatNumber
  id!: string;

  constructor(id: string) {
    this.id = id;
  }
}

const newItem = new ID("1");
console.log(newItem.id);

// 7 - Exemplo real com class decorator
function createdDate(created: Function) {
  created.prototype.createdAt = new Date();
}

@createdDate
class Book {
  id;
  createdDate?: Date;

  constructor(id: number) {
    this.id = id;
  }
}

@createdDate
class Pen {
  id;
  createdDate?: Date;

  constructor(id: number) {
    this.id = id;
  }
}

const newBook = new Book(12);
const newPen = new Pen(35);

console.log(newBook);
console.log(newPen);

// 8 - Exemplo real metodo decorator
function checkIfUserPosted() {
  return function (
    target: Object,
    key: string | symbol,
    descriptor: PropertyDescriptor
  ) {
    const childFunction = descriptor.value;
    console.log(childFunction);
    descriptor.value = function (...args: any[]) {
      if (args[1] === true) {
        console.log("Usuário já postou");
        return null;
      } else {
        return childFunction.apply(this, args);
      }
    };

    return descriptor;
  };
}

class Post {
  alreadyPosted = false;

  @checkIfUserPosted()
  post(content: string, alreadyPosted: boolean) {
    this.alreadyPosted = true;
    console.log(`Post do usuário: ${content}`);
  }
}

const newPost = new Post();
newPost.post("Meu primeiro post", newPost.alreadyPosted);
newPost.post("Meu segundo post", newPost.alreadyPosted);
newPost.post("Meu terceiro post", newPost.alreadyPosted);

// 9 - Exemplo real property decorator
function Max(limit: number) {
  return function (target: Object, propertyKey: string) {
    let value: string;

    const getter = function () {
      return value;
    };

    const setter = function (newVal: string) {
      if (newVal.length > limit) {
        console.log(`O valor deve ter no máximo ${limit} dígitos`);

        return;
      } else {
        value = newVal;
      }
    };

    Object.defineProperty(target, propertyKey, {
      get: getter,
      set: setter,
    });
  };
}

class Admin {
  @Max(10)
  username;

  constructor(username: string) {
    this.username = username;
  }
}

let pedro = new Admin("Pedroadmin123");
let maria = new Admin("Maria1");

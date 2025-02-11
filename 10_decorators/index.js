"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// 1 - Exemplo decorator
function myDecorator() {
    console.log("Iniciando decorator");
    return function (target, propertKey, descriptor) {
        console.log("Executando decorator");
        console.log(target);
        console.log(propertKey);
        console.log(descriptor);
    };
}
class myClass {
    testing() {
        console.log("Terminando execução do método");
    }
}
__decorate([
    myDecorator()
], myClass.prototype, "testing", null);
const newObjt = new myClass();
newObjt.testing();
// 2 - Múltiplos decorators
function a() {
    return function (target, propertKey, descriptor) {
        console.log("Executou A");
    };
}
function b() {
    return function (target, propertKey, descriptor) {
        console.log("Executou B");
    };
}
class multipleDecorators {
    testing() {
        console.log("Terminando execução");
    }
}
__decorate([
    a(),
    b()
], multipleDecorators.prototype, "testing", null);
const multiple = new multipleDecorators();
multiple.testing();
// 3 - Class decorator
function classDecorator(constructor) {
    console.log(constructor.name);
    if (constructor.name === "User") {
        console.log("Criando usuário!");
    }
}
let User = class User {
    constructor(name) {
        this.name = name;
    }
};
User = __decorate([
    classDecorator
], User);
const person1 = new User("Igor");
console.log(person1);
// 4 - Method decorator
function enumerable(value) {
    return function (target, propertKey, descriptor) {
        descriptor.enumerable = value;
    };
}
class Machine {
    constructor(name) {
        this.name = name;
    }
    showName() {
        console.log(`O nome da máquina é ${this.name}`);
    }
}
__decorate([
    enumerable(false)
], Machine.prototype, "showName", null);
const civic = new Machine("Civic");
civic.showName();
// 5 - Acessor decorator
class Monster {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    get showName() {
        return `O nome do monstro é ${this.name}`;
    }
    get showAge() {
        return `Idade do monstro ${this.name}`;
    }
}
__decorate([
    enumerable(true)
], Monster.prototype, "showName", null);
__decorate([
    enumerable(false)
], Monster.prototype, "showAge", null);
const monster1 = new Monster("Frankenstein", 18);

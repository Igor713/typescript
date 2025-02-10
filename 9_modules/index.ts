// 1 - Importação de arquivos
import importGreet from "./greet";

importGreet();

// 2 - Import de variável
import { x } from "./variable";

console.log(x);

// 3 - Múltiplas importações
import { a, b, myFunction } from "./multiple";
console.log(a);
console.log(b);
myFunction();

// 4 - Alias
import { someName as name } from "./changeName";
console.log(name);

// 5 - Import all
import * as myNumbers from "./numbers";
console.log(myNumbers.n1);
console.log(myNumbers.n2);
console.log(myNumbers.n3);

// 6 - Importante tipos
import { Human } from "./myType";
class User implements Human {
  name;
  age;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const igor = new User("Igor", 26);
console.log(igor);

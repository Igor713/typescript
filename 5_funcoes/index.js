var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// 1 - void
function withoutReturn() {
    console.log("Essa função não tem retorno");
}
withoutReturn();
// 2 - callback com argumento
function greeting(name) {
    return "Ol\u00E1 ".concat(name);
}
function preGreeting(f, userName) {
    console.log("Preparando função!");
    var greet = f(userName);
    console.log(greet);
}
preGreeting(greeting, "Igor");
preGreeting(greeting, "Igor 2");
// 3 - generic functions
function firstElement(arr) {
    return arr[0];
}
console.log(firstElement([1, 2, 3]));
console.log(firstElement(["a", "b", "c"]));
function mergeObjects(obj1, obj2) {
    return __assign(__assign({}, obj1), obj2);
}
var newObject = mergeObjects({ name: "Igor" }, { age: "26", job: "developer" });
console.log(newObject);
// 4 - constraints
function biggestNumber(a, b) {
    var biggest;
    if (+a > +b) {
        biggest = a;
    }
    else {
        biggest = b;
    }
    return biggest;
}
console.log(biggestNumber(1, 2));
console.log(biggestNumber("3", "4"));
// 5 - especificar tipo de argumento
function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(mergeArrays([1, 2, 3], [5, 6]));
console.log(mergeArrays([1, 2, 3], ["5", "6"]));
// 6 - parâmtros opcionais
function modernGreeting(name, greet) {
    if (greet) {
        return "Ol\u00E1 ".concat(greet, " ").concat(name, ", tudo bem?");
    }
    return "Ol\u00E1 ".concat(name);
}
console.log(modernGreeting("Igor"));
console.log(modernGreeting("Dr.", "Igor"));
// 7 - parâmetro default
function sumDefault(n, m) {
    if (m === void 0) { m = 10; }
    return n + m;
}
console.log(sumDefault(1));
console.log(sumDefault(1, 2));

// 1 - Generics
function showData(arg) {
    return "O dado \u00E9: ".concat(arg);
}
console.log(showData(5));
console.log(showData('Teste'));
console.log(showData([]));
// 2 - Constraint em generic
function showProductName(obj) {
    return "O nome do produto \u00E9: ".concat(obj.name);
}
var myObj = { name: 'Porta', cor: 'Branca' };
var myCar = { name: 'Carro', cor: 'Prata', wheels: 4 };
var thirdObj = { price: 29.99, cor: 'Branca' };
console.log(showProductName(myObj));
console.log(showProductName(myCar));
var civic = { name: 'Civic G7', wheels: 4, engine: 1.0, color: 'Green' };
var pen = { name: 'Caneta Bic', wheels: false, engine: false, color: 'Blue' };
console.log(civic);
console.log(pen);
// 4 - Type parameters
function getSomeKey(obj, key) {
    return "A chave ".concat(String(key), " est\u00E1 presente no objeto e tem valor de ").concat(obj[key]);
}
var server = {
    hd: '32gb',
    ram: '16gb'
};
console.log(getSomeKey(server, 'ram'));

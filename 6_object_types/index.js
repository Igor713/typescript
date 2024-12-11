function showProductDetails(product) {
    console.log("O nome do produto \u00E9 ".concat(product.name, " e o pre\u00E7o \u00E9 R$").concat(product.price));
    if (product.isAvailable === true) {
        console.log("O produto está disponível");
    }
}
var shirt = {
    name: "Camisa",
    price: 134.90,
    isAvailable: true
};
showProductDetails(shirt);
function showUserDetails(user) {
    console.log("E-mail do usu\u00E1rio: ".concat(user.email));
    if (user.role) {
        console.log("A fun\u00E7\u00E3o do usu\u00E1rio \u00E9: ".concat(user.role));
    }
}
var user1 = { email: "igor@email.com.br", role: "Admin" };
var user2 = { email: "igor123@email.com.br" };
showUserDetails(user1);
showUserDetails(user2);
var fusca = {
    brand: "Volkswagen",
    wheels: 4
};
console.log(fusca);
var coords = {
    x: 10
};
coords.y = 30;
coords.z = 40;
console.log(coords);
var igor = {
    name: "Igor",
    age: 26
};
console.log(igor);
var hulk = {
    name: "Hulk",
    age: 30,
    superpowers: ["Super regeneração", "Super força"]
};
console.log(hulk);

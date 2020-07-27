// Objektum definíciók
let user = {
    //kulcs: érték párok
    name: "Kiss Ramóna",
    age: 20,
    city: "Bp"
};

console.log(user);
console.log(user.name);

let admin = new Object();

let customer = {};

Object.keys(user); //kulcsok tömbje
Object.values(user); //értékek
Object.entries(user); //kulcs érték párok

Object.keys(user).length; //kulcs tömb hossza
Object.values(user).length;
Object.entries(user).length;

console.log(Object.entries(user)[1]); //["age",20]
console.log(Object.entries(user)[1][0]); // "age"

const person = {
    name: "John Doe",
    age: 33
};

//person = {}; ez nem lehetséges. A kötés a változó neve és az értéke között nem változtatható
person.name = "John Lennon";//ez OK! Konstans objektum tulajdonságai változhatnak!

console.log(person.name);

// forin ciklus (kulcsokon, indexeken megy végig)
for (let k in user) {
    console.log("Key: ", k, "Value: ", user[k]);
}

console.log(user.name);
console.log(user["name"]);

let cars = ["VW", "Audi", "Volvo"];
for (let k in cars) {
    console.log("Key: ", k, "Value: ", cars[k]);
}

console.log(cars["0"]); //sztring-el magadott index is működik
console.log(cars[0]);

//forof ciklus (értékeken megy végig)
for (let car of cars) {
    console.log(car);
}

let str = "Hello";
for (let char of str) {
    console.log(char);
}

for (let k of Object.keys(user)) {
    console.log(k);
}

for (let k of Object.keys(user)) {
    console.log(user[k]);
}

for (let k of Object.keys(user)) {
    console.log(k, user[k]);
}

for (let val of Object.values(user)) {
    console.log(val);
}

for (let entry of Object.entries(user)) {
    console.log(entry[0], entry[1]);
}

//metódusok
let user1 = {
    name: "John Doe",
    age: 30,
    sayHi: function () {
        //return this.name;
        return `Hi my name is ${this.name}!`; //itt az objektum a this
    }
}
console.log(user1.sayHi());
//consola.log(this.toString); itt (gyökér környezetben a window a this)

let btn = document.querySelector('form button.btn-primary');
//eseménykezelő
btn.onclick = function () {
    //console.log(this); //itt az elem (gomb) a this amihez az eseménykezelőt kötöttük
    console.log(this.style.display = "none"); //eltűnik a gomb kattintásra
}

//Egy összetettebb user2 objektum létrehozása
let user2 = {
    "_id": "trwertwperoitup12343234lkjhgfdfg",
    index: 0,
    isActive: true,
    balance: 1242291,
    picture: "http:placeholder.it/32x32"
};

user2.minusBalance = function (amount) {
    this.balance -= amount;
}

user2.plusBalance = function (amount) {
    this.balance += amount;
}

user2.getBalance = function () {
    return `$ ${this.balance}`;
}

user2.minusBalance(100000);
user2.minusBalance(1);
user2.plusBalance(1);

user2.getBalance();

//függvénymegadások
/* let adder = function(n1,n2){
    return n1+n2;
} */

//arrow function
/* let adder = (n1, n2) => {
    return n1 + n2;
} */

let adder = (n1, n2) => n1 + n2; //ha egy soros a függvény

let greeter = name => `Hello ${name}!`; // ha csak egy paraméter van pl. greeter("Joe");

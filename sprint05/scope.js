// Global scope
var globalName = "Joe";
var globalName = "Joeeee"; //ez lehet

function something() {
    // var globalName="Jack";
    globalName = "Piri";
    console.log(globalName);
}

something();

console.log(globalName);

/////////////////
let name="Sanyi";
// let name="Sanyiiii"; ez nem lehet
const NAME="C Sanyi";
{
    let name = "Pisti";
    const NAME="C Pisti";
    console.log(name);
    console.log(NAME);
}

console.log(name);
console.log(NAME);
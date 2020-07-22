//összegzés
var numericArray = [1, 3, 2, 6, 5, 3, 4, 6, 7];
var amount = 0;
for (var i = 0; i < numericArray.length; i++) {
    amount += numericArray[i];
}
console.log(amount);

//számlálás (páros számok)
let db = 0;
for (let i = 0; i < numericArray.length; i++) {
    if (numericArray[i] % 2 == 0) {
        db++;
    }
}
console.log("Even numbers: ", db);

//szélsőérték keresés
let biggest = numericArray[0];
for (let i = 0; i < numericArray.length; i++) {
    if (numericArray[i] > biggest) {
        biggest = numericArray[i];
    }
}
console.log("The biggest element: ", biggest);

let smallest = numericArray[0];
for (let i = 0; i < numericArray.length; i++) {
    if (numericArray[i] < smallest) {
        smallest = numericArray[i];
    }
}
console.log("The smallest element: ", smallest);

//eldöntés tétele (benne van-e)
let contains=false;
for (let i = 0; i < numericArray.length  && !contains; i++) {
    if(numericArray[i] == 15){
        contains=true;
    }
}
console.log("This array contains 15:",contains);
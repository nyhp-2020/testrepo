window.addEventListener("resize", function () { // ablakméret konzolra írása átméretezéskor
    console.log(this.innerHeight, this.innerWidth);
});

//Ürlap események

let orderForm = document.querySelector("#orderForm");
orderForm.addEventListener("submit", function (ev) {
    ev.preventDefault();
    //console.log(this);
    let inputs = document.querySelectorAll("input");
    let values = {};//objektum
    for (let i = 0; i < inputs.length; i++) {
        values[inputs[i].name] = inputs[i].value;
    }
    console.log(values);
});

//Parent elem kezelése

let alertCloseButtons = document.querySelectorAll(".close[data-dismiss='alert']");
let alertColseEventHandlerFunction = function (ev) { //function expression
    //console.log(ev);
    this.parentElement.style.display = "none"; //gomb (this) szülőelemének eltüntetése
};

for (let i = 0; i < alertCloseButtons.length; i++) {
    /* alertCloseButtons[i].addEventListener("click", function (ev) { //név nélküli függvény
        //console.log(ev);
        this.parentElement.style.display = "none";
    }); */

    alertCloseButtons[i].addEventListener("click", alertColseEventHandlerFunction);
}

//Dátumok,switch

let weekDay = new Date().getDay();
weekDay=10;
let dayName = "";
switch(weekDay){
    case 0: dayName = "Vas";
    break;
    case 1: dayName = "Hét";
    break;
    case 2: dayName = "Ked";
    break;
    case 3: dayName = "Sze";
    break;
    case 4: dayName = "Csü";
    break;
    case 5: dayName = "Pén";
    break;
    case 6: dayName = "Szo";
    break;
    default: dayName = "unknown";// ha egyik sem
}
console.log(dayName);

//Select elem kitöltése
let toppings = [
    "Szalonna",
    "Hagyma",
    "Tükörtojás",
    "Libamáj",
    "Extra Sonka"
]

let toppingSelect = document.querySelector("#topInput");
let index =0;
while(index < toppings.length){
    let option = document.createElement("option");
    option.value = index;
    option.innerHTML = toppings[index];
    toppingSelect.appendChild(option);
    index++;
}
/* function calcAmount() {
    let price = 1000;
    let amountInput = document.querySelector("input[name='amount-input']");
    let showAmount = document.querySelector("span.show-amount");
    let amountNumber = parseInt(amountInput.value);

    

    amountNumber = isNaN(amountNumber) ? 0 : amountNumber;

    if (amountNumber > 10) {
        alert("Maximum 10 terméket vásárolhat!");
    } else if (amountNumber < 1) {
        alert("Minimum 1 terméket kell vásárolnia!");
    } else {
        let amount = amountNumber * price;
        showAmount.innerHTML = amount;
    }

} */

function calcAmount() {
    let price = 1000;
    let amountInput = document.querySelector("input[name='amount-input']");
    let amountNumber = parseInt(amountInput.value);

    /* if (isNaN(amountNumber)) {
        amountNumber = 0;
    } */

    amountNumber = isNaN(amountNumber) ? 0 : amountNumber;

    showSumPrice(price, amountNumber);


}

function showSumPrice(price = 1000, amountNumber = 1) {
    amountNumber = amountNumber || 0;
    let showAmount = document.querySelector("span.show-amount");
    if (amountNumber > 10) {
        alert("Maximum 10 terméket vásárolhat!");
    } else if (amountNumber < 1) {
        alert("Minimum 1 terméket kell vásárolnia!");
    } else {
        let amount = amountNumber * price;
        showAmount.innerHTML = amount;
    }
}

//Add help text
let helpText = document.createElement("smal");
helpText.className = "form-text text-muted";
helpText.innerHTML = "Adja meg a feltéteket !";

let parent = document.querySelector("div.form-group:nth-child(1)");
parent.appendChild(helpText); //gyerek hozzáadása

parent.removeChild(helpText); //gyerek eltávolítása

//Eseménykezelés (pl gombnyomásra)
let sendButton = document.querySelector("form .btn.btn-primary");
// ezek felülírják az aktuális műveletet
/* sendButton.onclick = function(){
    alert("Hello JS!");
} */

// sendButton.onclick = calcAmount;

//Így több művelet is hozzárendelhető az eseményhez!
sendButton.addEventListener("click", function () {
    alert("Hello JS!");
});

window.addEventListener("resize", function () { // ablakméret konzolra írása átméretezéskor
    console.log(this.innerHeight, this.innerWidth);
});

//Ürlap események

let orderForm = document.querySelector("#orderForm");
orderForm.addEventListener("submit", function (ev) {
    ev.preventDefault();
    //console.log(this);
    let inputs = document.querySelectorAll("input");
    let values = {};
    for(let i = 0; i < inputs.length; i++){
        values[inputs[i].name] = inputs[i].value;
    }
    console.log(values);
});
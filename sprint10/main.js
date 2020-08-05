const buttonClickHandler = () => console.log("Katt");

const button = document.querySelector("#submitButton");

button.addEventListener("click", buttonClickHandler); //callback függvény (gombra kattintáskor fut le)
console.log("Utolsó utasítás");

//Promise
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject({ error: "User not found!" });
    //resolve({name:"Piri"});
  }, 3000);
});
myPromise
  .then(
    data => console.log(data),
    err => console.error(err)
  );

//fetch
let fetchInit = {
  method: "GET",
  headers: new Headers(),
  mode: "cors",
  cache: "default"
};

fetch("http://localhost:3000/users",fetchInit).then(
  data => data.json(),
  error => document.error(err)
).then(
  users => console.log(users)
);
let rate1 = document.querySelector(".rate1");
let rate2 = document.querySelector(".rate2");
let resultBtn = document.querySelector(".result");
let selects = document.querySelectorAll(".options select");
let sel1 = selects[0];
let sel2 = selects[1];
let inputs = document.querySelectorAll(".input input");
let inpt1 = inputs[0];
let inpt2 = inputs[1];

let rates = {};

let requestURL = "https://api.exchangerate.host/latest?base=USD";

async function fetchRates() {
    let res = await fetch(requestURL);
    res = await res.json();
    rates = res.rates;
    opulateOption();
}

function populateOptions (){
 let val = "";
 Object.keys(rates).forEach((code) => {
    let str = `<option value="${code}">${code}</option>`;
    val += str;
 });
 selects.forEach((s) => (s.innerHTML = val));
}



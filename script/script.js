"use strict"
console.clear();

const priceKm = 0.21;
const youngDiscount = 20;
const seniorDiscount = 40;

const form = document.getElementById("ticketForm");
const nameInput = document.getElementById("name");
const surnameInput = document.getElementById("surname");
const kmInput = document.getElementById("km");
const ageInput = document.getElementById("age");
const resultDiv = document.getElementById("result");
const discountInfo = document.getElementById("discountInfo");
const totalPrice = document.getElementById("totalPrice");



// const km = parseFloat("Inserisci il numero di chilometri da percorrere:"));
// const age = parseInt("Inserisci l'età del passeggero:");

// let totalPrice = priceKm * km;
// let result;
// let discountApplied = ""; 

// console.log(totalPrice);


// // Condizioni per applicare gli sconti
// if(!isNaN(age) && !isNaN(km)){
// if (age < 18) {
//     result = totalPrice - (totalPrice * youngDiscount / 100); 
//     discountApplied = "young (20%)";
//     console.log("Lo sconto utilizzato è quello " + discountApplied + ", il prezzo totale è: €" + result.toFixed(2));
// } else if (age > 65) {
//     result = totalPrice - (totalPrice * seniorDiscount / 100);
//     discountApplied = "senior (40%)";
//     console.log("Lo sconto utilizzato è quello " + discountApplied + ", il prezzo totale è: €" + result.toFixed(2));
// } else {
//     result = totalPrice;
//     discountApplied = "nessuno sconto applicato";
//     console.log("Non è previsto nessuno sconto. Il prezzo totale è: €" + totalPrice.toFixed(2));
// }
// }
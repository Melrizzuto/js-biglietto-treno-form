"use strict";
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
const personalInfo = document.getElementById("personalInfo")
const discountInfo = document.getElementById("discountInfo");
const totalPrice = document.getElementById("totalPrice");

// Gestione invio del modulo
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Impedisce il comportamento predefinito del form

    // Otteniamo i valori dai campi di input che l'utente ha scritto
    const km = parseFloat(kmInput.value);
    const age = parseInt(ageInput.value);

    // Verifica che i dati siano validi
    if (!isNaN(km) && !isNaN(age)) {
        let totalPrice = km * priceKm; 
        let result;
        let discountApplied = ""; 

        // Condizioni per applicare gli sconti
        if (age < 18) {
            result = totalPrice - (totalPrice * youngDiscount / 100); 
            discountApplied = "young (20%)";
        } else if (age > 65) {
            result = totalPrice - (totalPrice * seniorDiscount / 100);
            discountApplied = "senior (40%)";
        } else {
            result = totalPrice;
            discountApplied = "nessuno sconto applicato";
        }
       
        totalPriceDisplay.innerText = `Il prezzo finale è: €${result.toFixed(2)}`;
        discountInfo.innerText = `Sconto applicato: ${discountApplied}`;
    } else {
        alert("Per favore, inserisci valori validi.");
    }
});
        
// const km = parseFloat("Inserisci il numero di chilometri da percorrere:"));
// const age = parseInt("Inserisci l'età del passeggero:");


// console.log(totalPrice);

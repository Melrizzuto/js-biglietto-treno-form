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
const passengerInfo = document.getElementById("personalInfo");
const discountInfo = document.getElementById("discountInfo");
const totalPrice = document.getElementById("totalPrice");
const cancelButton = document.getElementById("cancelButton");
const cpCodeElement = document.getElementById("cpCode");
const carriageNumberElement = document.getElementById("carriageNumber");

// Gestione invio del modulo
form.addEventListener("submit", function (event) {
    event.preventDefault(); // Impedisce il comportamento predefinito del form

    // Otteniamo i valori dai campi di input che l'utente ha scritto
    const name = nameInput.value;  // Recupero il nome
    const surname = surnameInput.value;  // Recupero il cognome
    const km = parseFloat(kmInput.value);  // Recupero i chilometri
    const age = parseInt(ageInput.value);  // Recupero l'età

    // Verifica che i dati siano validi
    if (!isNaN(km) && !isNaN(age)) {
        let totalPriceValue = km * priceKm;  // Calcolo il prezzo totale
        let result;
        let discountApplied = "";

        // Condizioni per applicare gli sconti
        if (age < 18) {
            result = totalPriceValue - (totalPriceValue * youngDiscount / 100);
            discountApplied = "Young (20%)";
        } else if (age > 65) {
            result = totalPriceValue - (totalPriceValue * seniorDiscount / 100);
            discountApplied = "Senior (40%)";
        } else {
            result = totalPriceValue;
            discountApplied = "Standard";
        }

        // Mostra il risultato sul DOM
        resultDiv.style.display = "block";

        // Stampa risultato sul DOM 
        passengerInfo.innerHTML = `<strong>${name} ${surname}</strong>`;
        totalPrice.innerHTML = `Il prezzo finale è:<br>€${result.toFixed(2)}`;
        discountInfo.innerHTML = `Biglietto ${discountApplied}`;

        // Genera il codice CP
        const cpCode = generateCP();
        cpCodeElement.innerHTML = cpCode;

        // Genera il numero della carrozza
        const carriageNumber = generateCarriageNumber();
        carriageNumberElement.innerHTML = carriageNumber;
    } else {
        alert("Per favore, inserisci valori validi.");
    }
});

cancelButton.addEventListener("click", function () {
    // Nasconde il div dei risultati
    resultDiv.style.display = "none";

    // Svuota i dati
    passengerInfo.innerHTML = "";
    discountInfo.innerText = "";
    totalPrice.innerText = "";
    cpCodeElement.innerHTML = "";
    carriageNumberElement.innerHTML = "";
});

// Funzione per generare un codice CP casuale
function generateCP() {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let cp = "";
    for (let i = 0; i < 2; i++) {
        cp += letters.charAt(Math.floor(Math.random() * letters.length));
    }
    cp += Math.floor(100000 + Math.random() * 900000);
    return cp;
}

// Funzione per generare un numero di carrozza casuale
function generateCarriageNumber() {
    return Math.floor(Math.random() * 10) + 1;
}
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
const personalInfo = document.getElementById("personalInfo");
const discountInfo = document.getElementById("discountInfo");
const totalPrice = document.getElementById("totalPrice");
const cancelButton = document.getElementById("cancelButton");

// Gestione invio del modulo
form.addEventListener("submit", function(event) {
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
            discountApplied = "young (20%)";
        } else if (age > 65) {
            result = totalPriceValue - (totalPriceValue * seniorDiscount / 100);
            discountApplied = "senior (40%)";
        } else {
            result = totalPriceValue;
            discountApplied = "nessuno sconto applicato";
        }

        // Mostra il risultato sul DOM
        resultDiv.style.display = "block";

        // Stampa risultato sul DOM 
        personalInfo.innerHTML = `<strong>${name} ${surname}</strong>`;
        totalPrice.innerText = `Il prezzo finale è: €${result.toFixed(2)}`;
        discountInfo.innerText = `Sconto applicato: ${discountApplied}`;

    } else {
        alert("Per favore, inserisci valori validi.");
    }
});


cancelButton.addEventListener("click", function() {
    // Nasconde il div dei risultati
    resultDiv.style.display = "none";

    // Svuota i dati
    personalInfo.innerHTML = "";
    discountInfo.innerText = "";
    totalPrice.innerText = "";
});
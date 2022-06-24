function changeHeadlines(checkedId, outputText) {
    document.getElementById("headline").innerHTML = checkedId;
    document.getElementById("outputText").innerHTML = outputText;
}

function setDefaultValues() {
    document.getElementById("vatValue").innerHTML = '0,00 €';
    document.getElementById("outputValue").innerHTML = '0,00 €';
}

function validateInput(inputValue) {
    inputValue <= 0 ? setDefaultValues() : setCalcValues(inputValue);
}

//Hilfsfunktion um zu prüfen ob ein das Element ausgewählt ist.
function isChecked(elementId) {
    return document.getElementById(elementId).checked == true ? true : false;
}

//Ermittelt den Steuersatz mit den gerechnet wird.
function getVatRate() {
    return isChecked("nineteen") ? 1.19 : 1.07;
}

//Gibt die ermittelten Werte nach der Berechnung an die UI-Elemente zurück.
function setCalcValues(inputValue) {
    let result = calc(inputValue);

    document.getElementById("outputValue").innerHTML = result.toFixed(2) + ` €`;
    document.getElementById("vatValue").innerHTML = vat(inputValue, result).toFixed(2) + ` €`;
}

//Ermittelt welche Berechnungverfahren durchgeführt werden soll und startet dies.
function calc(inputValue) {
    return isChecked("calcBrutto") ? nettoToBrutto(getVatRate(), inputValue) : bruttoToNetto(getVatRate(), inputValue);
}

// Von einem Bruttobetrag wird der Nettobetrag berechnet.
function bruttoToNetto(vatRate, inputValue) {
    return inputValue / vatRate;
}

// Aus dem Nettobetrag wird der Bruttobetrag berechnet.
function nettoToBrutto(vatRate, inputValue) {
    return inputValue * vatRate;
}

//Steuerbetrag berechnen.
function vat(inputValue, result) {
    let x = inputValue - result;
    return (x < 0) ? x * -1 : x;
}
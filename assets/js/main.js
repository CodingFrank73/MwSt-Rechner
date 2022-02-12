function changeHeadlines(checkedId, outputText) {
    document.getElementById("headline").innerHTML = checkedId;
    document.getElementById("outputText").innerHTML = outputText;
}

function clearInAndOut() {
    document.getElementById("inputValue").value = '';
    document.getElementById("vatValue").innerHTML = '';
    document.getElementById("outputValue").innerHTML = '';
}

//Hilfsfunktion um zu prüfen ob ein das Element ausgewählt ist.
function isChecked(elementId) {
    return document.getElementById(elementId).checked == true ? true : false;
}

function getVatRate() {
    return isChecked("nineteen") ? 1.19 : 1.07;
}

function setCalcValues(inputValue) {
    let result = calc(inputValue);

    document.getElementById("outputValue").innerHTML = result.toFixed(2) + ` €`;
    document.getElementById("vatValue").innerHTML = vat(inputValue, result).toFixed(2) + ` €`;
}

function calc(inputValue) {
    return isChecked("calcBrutto") ? nettoToBrutto(getVatRate(), inputValue) : bruttoToNetto(getVatRate(), inputValue);
}

// Von einem Bruttobetrag wird der Nettobetrag berechnet
function bruttoToNetto(vatRate, inputValue) {
    return inputValue / vatRate;
}

// Aus dem Nettobetrag wird der Bruttobetrag berechnet
function nettoToBrutto(vatRate, inputValue) {
    return inputValue * vatRate;
}

//Steuerbetrag berechnen
function vat(inputValue, result) {
    let x = inputValue - result;
    return (x < 0) ? x * -1 : x;
}






console.log('Script loaded')
// Nagaan of script effectieef wordt geïmplementeerd.

// Medaillestand einde Olympische spelen, lijst van objecten.
const topMedailleWinnaars = [
    {plaats: '1.', naam: 'Verenigde Staten', goud: 40, zilver: 44,  brons: 42 },
    {plaats: '2.', naam: 'China', goud: 40, zilver: 27, brons: 24 },
    {plaats: '3.', naam: 'Japan', goud: 20, zilver: 12, brons: 13 },
    {plaats: '4.', naam: 'Australië', goud: 18, zilver: 19, brons: 16},
    {plaats: '5.', naam: 'Frankrijk', goud: 16, zilver: 26, brons: 22}
]

// Element selecteren uit HTML.
let lijstLanden = document.getElementById("landen-lijst")

// Functie maken voor de som van de medailles.
function som(...nummers){ // Gebruik van restoperator, weten niet hoeveel argumenten er zullen zijn.
    let totaal_medailles = 0
    for(let nummer of nummers){
        totaal_medailles += nummer
    }
    return totaal_medailles
}

for(let land of topMedailleWinnaars){
    // Destructureren van objecten.
    let {plaats, naam, goud, zilver, brons} = land
    //somfunctie toepassen.
    let totaal = som(...[goud, zilver, brons]) //gebruik van spreadoperator
   
    // Template litearals.
    let lijstItem=
    `<tr>
        <td>${plaats}</td>
        <td>${naam}</td>
        <td>${goud}</td>
        <td>${zilver}</td>
        <td>${brons}</td>
        <td>${totaal}</td>
    </tr>`;


    lijstLanden.innerHTML +=  lijstItem // Elementen manipuleren.

}

const invoer = document.getElementById("invoer"); // Selectie van elementen en toewijzen aan een variabele.
const paragraaf = document.getElementById("herhaling")

paragraaf.innerHTML = localStorage.getItem("waarde"); // Weergave van laatste geüpdatete waarde in local storage.
invoer.addEventListener("keyup", Weergave) // Eventlistner.

function Weergave(){
    localStorage.setItem("waarde", invoer.value); // Modificeren van de key in localStorage
    paragraaf.innerHTML = localStorage.getItem("waarde"); 
}
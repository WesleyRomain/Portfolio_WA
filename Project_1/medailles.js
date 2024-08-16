console.log('Script loaded')
//nagaan of script effectieef wordt geïmplementeerd

//Medaillestand op 04/08/2024 omstreeks 18u30, we gaan even uit van een constante lijst (de Olympische spelen zijn geëindigd door noodweer)
const topMedailleWinnaars = [
    {plaats: '1.', naam: 'China', goud: 18, zilver: 15,  brons: 10 },
    {plaats: '2.', naam: 'Verenigde Staten', goud: 16, zilver: 25, brons: 25 },
    {plaats: '3.', naam: 'Frankrijk', goud: 12, zilver: 14, brons: 16 },
    {plaats: '4.', naam: 'Australië', goud: 12, zilver: 9, brons: 7},
    {plaats: '5.', naam: 'Groot-Brittanië', goud: 10, zilver: 12, brons: 15}
]

//element selecteren uit HTML
let lijstLanden = document.getElementById("landen-lijst")

//functie maken voor de som van de medailles
function som(...nummers){
    let totaal_medailles = 0
    for(let nummer of nummers){
        totaal_medailles += nummer
    }
    return totaal_medailles
}

for(let land of topMedailleWinnaars){
    //destructureren van objecten
    let {plaats, naam, goud, zilver, brons} = land
    //somfunctie toepassen
    let totaal = som(goud, zilver, brons)
   
    //Template litearals
    let lijstItem=
    `<tr>
        <td>${plaats}</td>
        <td>${naam}</td>
        <td>${goud}</td>
        <td>${zilver}</td>
        <td>${brons}</td>
        <td>${totaal}</td>
    </tr>`;


    lijstLanden.innerHTML +=  lijstItem

}

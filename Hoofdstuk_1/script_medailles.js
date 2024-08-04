console.log('Script loaded')
//nagaan of script effectieef wordt geïmplementeerd

//Medaillestand op 04/08/2024 omstreeks 18u30, we gaan even uit van een constante lijst (de Olympische spelen zijn geëindigd door noodweer)
const topMedailleWinnaars = [
    {plaats: '1.', naam: 'China', goud: 18, zilver: 15,  brons: 10 },
    {plaats: '2.', naam: 'Verenigde staten', goud: 16, zilver: 25, brons: 25 },
    {plaats: '3.', naam: 'Frankrijk', goud: 12, zilver: 14, brons: 16 },
    {plaats: '4.', naam: 'Australië', goud: 12, zilver: 9, brons: 7},
    {plaats: '5.', naam: 'Groot-Brittanië', goud: 10, zilver: 12, brons: 15}
]

let lijstLanden = document.getElementById("landen-lijst")

for(land of topMedailleWinnaars){
    //destructureren van objecten
    let {plaats, naam, goud, zilver, brons} = land 

    //Template litearals
    let lijstItem =
    `<tr>
        <td>${plaats}</td>
        <td>${naam}</td>
        <td>${goud}</td>
        <td>${zilver}</td>
        <td>${brons}</td>
    </tr>`;


    lijstLanden.innerHTML +=  lijstItem

}



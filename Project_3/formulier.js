console.log("Script loaded"); // Nagaan of script geladen wordt.

function weergeefBMI(waarde){
    document.getElementById("BMI").innerHTML += waarde.toFixed(2);
}
// Code om BMI te berekenen.
function bmiBerekenen(lengte, gewicht, callback){
    let BMI = (gewicht) / ((lengte)*(lengte));
    callback(BMI);
}

// Invoer ophalen en BMI berekenen, callbackfunctie weergeefBMI wordt meegegeven: resultaat wordt toegevoegd aan de HTML code.
function berekenUitHTML(){
    let lengte = parseFloat(document.getElementById("lengte").value);
    let gewicht = parseFloat(document.getElementById("gewicht").value);
    bmiBerekenen(lengte, gewicht, weergeefBMI);
}
// Zal een link toevoegen aan de webpagina, dit zal echter pas na 10 seconden verschijnen (zie setTimeout).
function hulpNodig(){
    let eersteVersie= document.getElementById("hulpnodig");
    eersteVersie.innerHTML += '<br><a href = "mailto:wesleyromain@gmail.com">Hulp nodig? Klik op deze link om de eigenaar te mailen.</a>';
}
// Callback hulpNodig uitvoeren na 10s
setTimeout(hulpNodig, 10000);

function checkMotivatie(){
let motivatiePromise = new Promise((resolve, reject) => { // Promise initialiseren.
    let motivatie = document.getElementById("motivatie").value; // Vraag de waarde op die wordt ingevuld in het veld.

    if (motivatie == "Heel veel zin") {
        resolve("Wat fijn dat je gemotiveerd bent!"); // Resolve module.
    }
    else{
        reject("Jammer dat de motivatie ontbreekt..."); // Reject module.
    }
    
})

motivatiePromise.then(
    function(boodschap){ // Zal uitgevoerd worden indien resolved.
        let p = document.createElement("p");
        p.textContent = boodschap;
        document.getElementById("formulier").appendChild(p);
    },
    function(foutboodschap){ // Zal uitgevoerd worden indien reject.
        let p = document.createElement("p");
        p.textContent = foutboodschap;
        document.getElementById("formulier").appendChild(p);
    }
)
}

async function controleVerificatie() {
    let promise = new Promise((resolve, reject) => {
        let som = document.getElementById("verificatie").value;

        if (som == 8) {                         // Gebaseerd op slide 33 van de cursus, maar met eigen touch.
            resolve("Verificatie geslaagd.");
        } else {
            reject("verificatie mislukt");
        }
    });
        let resultaat = await promise;
        alert(resultaat);
};

(async function zelfUitvoerend() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() =>resolve("Als je nog vragen hebt, scroll dan naar de link vanboven."), 10000);
    });
        let resultaat = await promise;
        alert(resultaat);
    })();

// Functie zal de instructies ophalen van iemand zijn favoriete oefening.
async function dataOphalen() {
    try{
        const naamOefening = document.getElementById("naamOefening").value; // Haal de waarde op ingevoerd in mijn textveld.
        const response = await fetch(`https://raw.githubusercontent.com/wrkout/exercises.json/master/exercises/${naamOefening}/exercise.json`); // Antwoord is afh. van de naam van de oefening.

        if (!response.ok) {
            throw new Error("Kan de fetch bron niet vinden"); // Indien oefening niet in database, error wordt gegooid.
        }

        const data = await response.json(); // Data omzetten naar objectnotatie.
        console.log(data); // Controle of data effectief wordt opgehaald.

        const lijstInstructies = data.instructions; // Haal de value op van de key instructions in data.
        console.log(lijstInstructies);

        let zin = ""; // We maken eerst een lege zin.
        
        for (let i = 0; i <lijstInstructies.length; i++) {  // Voor elk lijstitem haal de waarde op en voeg toe aan de zin.
            const element = lijstInstructies[i];
            zin += element;
        }

        console.log(zin); // Ter verificatie dat de zin effectief wordt geladen.

        document.getElementById("uitlegOefening").innerText = zin; // Voeg de zin toe in HTML.

    }

    catch(error){
        console.error(error);
    }

}
// Wordt aangeroepen als formulier verstuurd.
function formulierVerstuurd(){ 
    alert("Het formulier werd verstuurd");
}
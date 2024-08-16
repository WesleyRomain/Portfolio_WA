console.log("Script loaded")

function weergeefBMI(waarde){
    document.getElementById("BMI").innerHTML += waarde.toFixed(2);
}

function bmiBerekenen(lengte, gewicht, callback){
    let BMI = (gewicht) / ((lengte)*(lengte));
    callback(BMI);
}


function berekenUitHTML(){
    let lengte = parseFloat(document.getElementById("lengte").value);
    let gewicht = parseFloat(document.getElementById("gewicht").value);
    bmiBerekenen(lengte, gewicht, weergeefBMI)
}

function hulpNodig(){
    let eersteVersie= document.getElementById("hulpnodig");
    eersteVersie.innerHTML += '<br><a href = "mailto:wesleyromain@gmail.com">Hulp nodig? Klik op deze link om de eigenaar te mailen.</a>';
}

setTimeout(hulpNodig, 10000);

function checkMotivatie(){
let motivatiePromise = new Promise((resolve, reject) => { // Promise initialiseren.
    let motivatie = document.getElementById("motivatie").value; // Vraag de waarde op die wordt ingevuld in het veld.

    if (motivatie == "Heel veel zin") {
        resolve("Wat fijn dat je gemotiveerd bent!") // resolve module
    }
    else{
        reject("Jammer dat de motivatie ontbreekt...") //reject module
    }
    
})

motivatiePromise.then(
    function(boodschap){ //zal uitgevoerd worden indien resolved
        let p = document.createElement("p")
        p.textContent = boodschap;
        document.getElementById("formulier").appendChild(p);
    },
    function(foutboodschap){ //zal uitgevoerd worden indien reject
        let p = document.createElement("p")
        p.textContent = foutboodschap;
        document.getElementById("formulier").appendChild(p);
    }
)
}

async function controleVerificatie() {
    let promise = new Promise((resolve, reject) => {
        let som = document.getElementById("verificatie").value;

        if (som == 8) {                         //gebaseerd op slide 33 van de cursus, maar met eigen touch.
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
        setTimeout(() =>resolve("Als je nog vragen hebt, scroll dan naar de link vanboven."), 10000)
    });
        let resultaat = await promise;
        alert(resultaat);
    })();


async function dataOphalen() {
    try{
        const naamOefening = document.getElementById("naamOefening").value; //haal de waarde op ingevoerd in mijn textveld
        const response = await fetch(`https://raw.githubusercontent.com/wrkout/exercises.json/master/exercises/${naamOefening}/exercise.json`); //antwoord is afh. van de naam van de oefening.

        if (!response.ok) {
            throw new Error("Kan de fetch bron niet vinden") // indien oefening niet in database, error wordt gegooid.
        }

        const data = await response.json();
        console.log(data); //controle of data effectief wordt opgehaald.

        const lijstInstructies = data.instructions; //haal de value op van de key instructions in data.
        console.log(lijstInstructies);

        let zin = "" //we maken eerst een lege zin
        
        for (let i = 0; i <lijstInstructies.length; i++) {  //voor elk lijstitem haal de waarde op en voeg toe aan de zin.
            const element = lijstInstructies[i];
            zin += element;
        }

        console.log(zin); //ter verificatie dat de zin effectief wordt geladen.

        document.getElementById("uitlegOefening").innerText = zin //voeg de zin toe in HTML

    }

    catch(error){
        console.error(error);
    }

}

function formulierVerstuurd(){
    alert("Het formulier werd verstuurd")
}
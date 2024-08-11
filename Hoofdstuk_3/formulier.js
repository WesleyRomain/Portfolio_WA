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

function hulpNodig(params){
    let eersteVersie= document.getElementById("hulpnodig");
    eersteVersie.innerHTML += '<br><a href = "mailto:wesleyromain@gmail.com">Hulp Nodig? klik op deze link om de eigenaar te mailen</a>';
}

setTimeout(hulpNodig, 10000)

function checkMotivatie(){
let motivatiePromise = new Promise((resolve, reject) => {
    let motivatie = document.getElementById("motivatie").value;

    if (motivatie == "Heel veel zin") {
        resolve("Wat fijn dat je gemotiveerd bent!")
    }
    else{
        reject("Jammer dat de motivatie ontbreekt...")
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

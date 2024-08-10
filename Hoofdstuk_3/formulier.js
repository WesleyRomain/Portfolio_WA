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

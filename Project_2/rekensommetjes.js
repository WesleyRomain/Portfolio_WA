// Nagaan of script effectief wordt geïmplementeerd.
console.log('Script loaded');
// Aanmaken arrowfuncties voor de verschillende bewerkingen.
let optellen = (a = 0, b = 0) => a + b;
let aftrekken = (a= 0, b = 0) => a - b;
let vermenigvuldigen = (a= 0, b = 0) => a * b;
//delen door 0 geeft +oneindig, b wordt default op 1 gezet zodat er een geldig resultaat komt.
let delen = (a= 0, b = 1) => {
    if (b == 0) {
        return "Dit is niet mogelijk";
    }
    else{
        return a / b;
    }

};

document.getElementById('som1').innerText = optellen(5,6);
document.getElementById('som2').innerText = optellen (4,3);
document.getElementById('som3').innerText = vermenigvuldigen(15, 8);
document.getElementById('som4').innerText = aftrekken(16,20);
document.getElementById('som5').innerText = delen(3,0);

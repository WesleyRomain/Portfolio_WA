console.log('Script loaded')

let optellen = (a = 0, b = 0) => a + b;
let aftrekken = (a= 0, b = 0) => a - b
let vermenigvuldigen = (a= 0, b = 0) => a * b;
let delen = (a= 0, b = 1) => {
    if (b == 0) {
        return "Dit is niet mogelijk"
    }
    else{
        return a / b
    }

}; //delen door 0 geeft +oneindig, b wordt default op 0 gezet

document.getElementById('som1').textContent = optellen(5,6);
document.getElementById('som2').textContent = optellen (4,3);
document.getElementById('som3').textContent = vermenigvuldigen(15, 8)
document.getElementById('som4').textContent = aftrekken(16,20)
document.getElementById('som5').textContent = delen(3,0)

alert("Converter Fahrenheit em Celsuis.");

let f = parseFloat(prompt("Digite uma temperatura em Fahrenheit: "));

function grausCelsius(f){
    return (5/9) * (f-32);
}

let resultado = grausCelsius(f);
document.getElementById('demo').innerHTML = resultado;
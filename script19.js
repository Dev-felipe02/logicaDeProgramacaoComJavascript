function grausCelsius(f){
    return (5/9) * (f-32);
}

let resultado = grausCelsius(212);
document.getElementById('demo').innerHTML = resultado;
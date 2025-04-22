let texto = "Fora " + typeof
carName;
document.getElementById('demo1').innerHTML = texto;

function varLocal() {
    let carName = "Volvo";
    let texto = "Dentro: " + typeof carName + " " + carName;

    document.getElementById('demo2').innerHTML = texto ;
}

varLocal();
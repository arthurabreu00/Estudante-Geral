
function mult(){

    var one = Number(document.getElementById("num1").value);
    var two = Number(document.getElementById("num2").value);
    var result = document.getElementById("result");

    result.innerHTML = one * two;

}

function div(){

    var one = Number(document.getElementById("num1").value);
    var two = Number(document.getElementById("num2").value);
    var result = document.getElementById("result");

    result.innerHTML = one / two;

}

function sub(){

    var one = Number(document.getElementById("num1").value);
    var two = Number(document.getElementById("num2").value);
    var result = document.getElementById("result");
    result.innerHTML = one - two;

}

function adc(){
    var one = Number(document.getElementById("num1").value);
    var two = Number(document.getElementById("num2").value);
    var result = document.getElementById("result");

    result.innerHTML = one + two;

}
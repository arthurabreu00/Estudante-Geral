function chamada(){

    let num1 = 1;
    let num2 = 2;

    this.soma(num1,num2)
}

function soma(num1,num2){
    soma = num1 + num2;
    document.getElementById('res').innerHTML = soma;
}
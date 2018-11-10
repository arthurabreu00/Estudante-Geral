function chamada(){

    let num1 = 1;
    let num2 = 1;

    document.getElementById('res').innerHTML = this.soma(num1,num2);
}

function soma(num1,num2){

    if(!num1 || !num2){
        return 0;
    }

    let soma = num1 + num2;
    return soma;
}
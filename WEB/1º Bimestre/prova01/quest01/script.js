// 1 - Uma empresa concederá um aumento de salário aos seus funcionários, variável de acordo com o
// cargo, conforme a tabela abaixo. Faça uma página html e o código em javascript que leia o salário e o
// cargo de um funcionário e calcule o novo salário. Se o cargo do funcionário não estiver na tabela, ele
// deverá, então, receber 40% de aumento. Mostre o salário antigo, o novo salário e a diferença.




var sal = document.getElementById('sal');
var cargo = document.getElementById('cargo');
var btn = document.getElementById('btn');
var result = document.getElementById('result');



function Calc(){

    if(cargo.value == '101') 
        var final = Number(sal.value) * 1.10;
    else if(cargo.value == '102') 
        var final = Number(sal.value) * 1.20;
    else if(cargo.value == '103') 
        var final = Number(sal.value) * 1.30;
    else 
        var final = Number(sal.value) * 1.40;

    result.innerHTML = 
    "O Seu antigo salário é de R$" + sal.value + "<br />" 
    + "O seu novo salário é de R$" +  final.toFixed(2) + "<br />" 
    + "A diferença salarial é de R$" + (final - Number(sal.value)).toFixed(2);



}


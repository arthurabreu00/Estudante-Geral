// 3 - A jornada de trabalho semanal de um funcionário é de 40 horas. O funcionário que trabalhar mais de
// 40 horas receberá hora extra, cujo cálculo é o valor da hora regular com um acréscimo de 50%. Faça uma
// página html e o código em javascript que leia o número de horas trabalhadas em um mês, o salário por
// hora e escreva o salário total do funcionário, que deverá ser acrescido das horas extras, caso tenham sido
// trabalhadas(considereque o mês possua 4 semanas exatas).

var mes = 4 // semanas

var horaTrab = document.getElementById('hrs-trab');
var salHrs= document.getElementById('sal-hrs');
var result =  document.getElementById('result');

function calc(){
    if(horaTrab.value > 40){
        var deficit = Number(horaTrab.value) - 40;
        var salReceber = (deficit * Number(salHrs.value)) * 1.5;

        result.innerHTML= "Você ira receber no pagamento é R$" + ((Number(salHrs.value)*mes) + (salReceber * mes))

    }else if(horaTrab.value == 40){
        result.innerHTML= "Você está em dia !"
    } else{
        result.innerHTML= "Você está em deficit com a empresa ! Procure seu gerente"
    }



}
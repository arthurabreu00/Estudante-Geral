// 5 - Faça um script que calcula o novo valor do salário de um funcionário. O usuário informa o
// salário atual (ex. 750,00) e o percentual do reajuste (ex. 13,5 %).

var sal = prompt("Digite o salário atual")
var pec = prompt("Digite o percentual do aumento")
var rjst = (Number(pec) / 100) + 1;  

var novo = (Number(sal) * rjst)
alert('R$' + novo.toFixed(2))

// 4 - Faça um script que calcule a área total (m2) de uma casa com 4 cômodos. O usuário deve
// inserir a largura e comprimento de cada um dos cômodos, calcular a área individual de cada
// um e por fim exibir a área total da casa.

var soma  = 0;

for(let i = 0;i<4;i++){

    var altura = prompt(`Altura do  ${i+1}º cômodo`)
    var largura = prompt(`Largura do  ${i+1}º cômodo`)

    soma += altura * largura;
    
}

alert(soma + " M²")
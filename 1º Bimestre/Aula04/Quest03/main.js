// 1 - Escreva um script para fazer o aumento Salarial de um objeto funcionário. Por padrão, o
// aumento será de 15%. Entretanto, deve ser aplicada uma regra diferente para cada faixa
// salarial. Regras:
// Para salarioAtual < 1.750,00: aumento igual a 12%
// para 1.750,00 <= salarioAtual < 2.000,00: aumento igual a 10%
// para 2.000,00 <= salarioAtual < 3.000,00: aumento igual a 7%
// para acima de 3.000,00: aumento igual a 5%.

function calculate(){

    let numberOne = document.querySelector('.number-one').value;
    let numberTwo = document.querySelector('.number-two').value;
    var result = document.querySelector(".result");

    if(numberOne > numberTwo){
    result.innerHTML = `O Maior número é ${numberOne} e o Menor ${numberTwo}`
    } else if (numberOne == numberTwo){
      result.innerHTML = `${numberOne} e ${numberTwo} São iguais`
    }
    else { 
      result.innerHTML =  `O Maior número é ${numberOne} e o Menor ${numberTwo}`
        }
  }
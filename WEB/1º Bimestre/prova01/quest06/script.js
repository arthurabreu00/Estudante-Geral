// 5 - Faça uma página html e o código em javascript que leia 3 valores inteiros 
// e apresente na tela o maior deles e em seguida escreva-os em ordem decrescente.


var aux  = 0;
var cont = 0;

function ord(){
    var vet = [0,0,0];
    cont++;

    if(cont > 1){
       
        for(var i = 0; i < 3; i++){

        var div = document.querySelector('b');
        div.parentNode.removeChild(div);

        }

    }

    for(var i = 0 ;i < vet.length ;i++){

        vet[i] = Number(document.getElementById('num'+i).value); // num0

    }


    for(var i = 0; i < vet.length; i++){
        for(var j = 0; j < vet.length; j++){

            if(vet[j] < vet[j+1]){
                
                aux = vet[j];
                vet[j] = vet[j+1];
                vet[j+1] = aux;

            }
        }

        
    }


    for(var i = 0; i < vet.length; i++){

        var nova = document.createElement("b"); 
        var conteudoNovo = document.createTextNode(vet[i]);
        nova.appendChild(conteudoNovo);
        var result1 = document.getElementById('result');
        document.body.insertBefore(nova, result1);
    
    }
    
}   

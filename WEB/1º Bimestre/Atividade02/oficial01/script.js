var sum = 0;
document.querySelector(".btn button").addEventListener("click",purchase)

function purchase(){
    while(order != 105){
        var order = prompt("Digite Seu pedido");
        if(order == 100){
            sum += 8.00
        } else if(order == 101){
            sum += 5.00
        } else if(order == 102){
            sum += 5.00
        }else if(order == 103){
            sum += 13.00
        }else if(order == 104){
            sum += 7.00
        }else if(order == 105){
            alert(`Valor a pagar R$${sum.toFixed(2)} `)
            break
        }else{
            alert("Adicione um código válido")
        }
    }
}
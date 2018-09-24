function init(){
    button = document.querySelectorAll("button");
    button.forEach((btn)=>{
        btn.addEventListener("click",()=>{

            let textBtn = btn.innerHTML;

            this.calc(textBtn)
        })
            

    })

}



function calc(value){
    var vet = [0,0];

    for (let i = 0; i < vet.length; i++) {
        vet[i] = Number(document.querySelector("#num"+i).value);  
    }

    var result = 0;
  
    switch(value) {
       
        case '/':
        result = vet[0] / vet[1];
            break;

        case 'x':
        result = vet[0] * vet[1]
            break;

        case '+':
         result = vet[0] + vet[1]
            break;

        case '-':
            result = vet[0]-vet[1]
            break;
    }

    document.querySelector("#result").innerHTML = result;
}

function reset(){
    vet = [0,0]
    for (var i = 0; i < vet.length; i++) {
       document.getElementById("num"+i).value = "";  
    }
    document.querySelector("#result").innerHTML = 0;


}
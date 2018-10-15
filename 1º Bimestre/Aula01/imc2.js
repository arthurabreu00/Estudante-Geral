document.querySelector("#container").addEventListener("pointermove",function(){
    setInterval(()=>{    
		
        weight = document.querySelector(".weight").value;
        height = document.querySelector(".height").value;
        bmi = weight/(height * height)
    
            if (bmi <= 100){
    
                document.querySelector(".result").innerHTML = bmi
                
                if(bmi <= 18.5){
                    document.querySelector(".display").innerHTML = "<h2> Perigo ! Está abaixo do ideal, procure um medico. </h2>";
                    document.querySelector(".display").style.color = "#c71408";
                }
                else if (bmi > 18.5 && bmi < 25){
                    document.querySelector(".display").innerHTML = "<h2> Parábens ! você está na forma ideal. </h2>";
                    document.querySelector(".display").style.color = "#7af442";
                }
                else if (bmi >= 25 && bmi < 30){
                    document.querySelector(".display").innerHTML = "<h2> Cuidado !</h2>"
                    document.querySelector(".display").style.color = "#f4ce42";
                } else if (bmi >= 30){
                    document.querySelector(".display").innerHTML = "<h2> Perigo ! Está obeso, procure um medico. </h2>";
                    document.querySelector(".display").style.color = "#c71408";
                }
                else{
                    document.querySelector(".display").innerHTML = "<h2> Digite seus dados </h2>"
                    document.querySelector(".display").style.color = "white"
                }
            } 
            
            else{
                document.querySelector(".result").innerHTML = 0
                document.querySelector(".display").innerHTML = "<h2> Digite seus dados !</h2>"
                document.querySelector(".display").style.color = "white"
                
            }
    
    
        }, 1000);
    
    
})


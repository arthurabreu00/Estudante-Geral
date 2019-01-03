var input = document.querySelector('input')
input.addEventListener('keyup', e =>{

    if(e.keyCode == 50){
        let str = input.value;
        str = str.substring(0,(str.length - 1));
        input.value = str;
   }
})
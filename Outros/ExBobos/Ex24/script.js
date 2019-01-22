let grupos = document.querySelectorAll('.form-group');


(function initEvents(){
    grupos.forEach(campo =>{
        campo.addEventListener('click',()=>{
    
            limparFoco();
    
            campo.querySelector('input').classList.add('ativado');
            campo.querySelector('label').classList.add('ativado');
            campo.querySelector('input').focus();
        });
    });

    
    
})();



function limparFoco(){
    grupos.forEach(btn =>{
        btn.querySelector('input').classList.remove('ativado');
        btn.querySelector('label').classList.remove('ativado');
    }); // Limpando todos os campos do style.
}
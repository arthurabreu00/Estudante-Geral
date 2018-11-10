function chamada(){
    document.write(this.parImpar(3));
}

function parImpar(n){
    if(n % 2 == 0)
        return 'Par';
    return 'Impar';
}


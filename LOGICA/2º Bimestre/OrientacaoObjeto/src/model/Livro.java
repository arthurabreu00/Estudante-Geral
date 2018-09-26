package model;
public class Livro {

    String nome;
    String descricao;
    double valor;
    String isbn;
    Autor autor;
    
    void mostrarInfoLivro(){
    
        System.out.println(this.nome);
        System.out.println(this.descricao);
        System.out.println(this.valor);
        System.out.println(this.isbn);
        System.out.println(this.autor.nome);
        System.out.println("***************");
        
    }
    
    
    
}


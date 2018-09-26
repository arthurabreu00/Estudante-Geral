package model;
public class TestarLivros {
    
    public static void main(String[] args){
        
        Livro livroUtramig = new Livro();
        
        livroUtramig.nome = "Java 8";
        livroUtramig.descricao = "Programação";
        livroUtramig.valor = 100;
        livroUtramig.isbn = "1313154";
        
        
        Livro livroEscola = new Livro();

        livroEscola.nome = "Matemática";
        livroEscola.descricao = "Lógica";
        livroEscola.valor = 50;
        livroEscola.isbn = "45648979";

      
        
        Autor autoria = new Autor();
        autoria.cpf = "020.938.936-22";
        autoria.nome = "Arthur Tavares";
        autoria.email = "arthurabreu00@gmail.com";

        livroEscola.autor = autoria;
        livroUtramig.autor = autoria;
        
        
        livroUtramig.mostrarInfoLivro();
        
        livroEscola.mostrarInfoLivro();
        
    }
    
}

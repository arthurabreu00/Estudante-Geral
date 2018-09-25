
package acao;

import modelo.Livro;

public class TestarLivros {
    
    public static void main(String[] args){
    
        Livro livroUtramig = new Livro();
        
        livroUtramig.nome = "JAVA 8";
        livroUtramig.descricao = "Programação";
        livroUtramig.valor = 100;
        livroUtramig.isbn = "1313154";
        
        System.out.println(livroUtramig.nome);
    }
    
}

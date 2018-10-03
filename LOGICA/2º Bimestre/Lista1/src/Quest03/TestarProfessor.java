package Quest03;

import java.util.*;

public class TestarProfessor {

	public static void main(String[] args) {

	        Scanner input = new Scanner(System.in);
	        
	        System.out.print("Digite o nome do professor: ");
	        String professor = input.nextLine();
	        System.out.print("Digite o nome da disciplina: ");
	        String disciplina = input.nextLine();
	        System.out.print("Digite o número de registro: ");
	        int reg = input.nextInt();
	        
	        int dia = 0;
	        
	        while(true) {
	        System.out.print("Digite o dia da admissão: ");
	        	dia = input.nextInt();
	        	if(dia <= 31) break;
	        }
	        
	        int mes = 0;
	        
	        while(true){
	        	
	        System.out.print("Digite o mês da admissão: ");
	        	mes = input.nextInt();
	        	if(mes <= 12) break;
	        }
	        
	        
	        System.out.print("Digite o ano da admissão: ");
	        int ano = input.nextInt();
	        
	        Professor prof = new Professor(professor,disciplina,reg,dia,mes,ano);
	        
	        prof.imprimir();
	    }

	}



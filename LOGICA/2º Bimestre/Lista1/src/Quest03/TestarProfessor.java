package Quest03;

import java.util.*;

public class TestarProfessor {

	public static void main(String[] args) {

		Scanner input = new Scanner(System.in);
		
		for (int i = 0; i < 3; i++) {
			System.out.println("Digite os dados do " + (i+1) + "� Professor");
			
			input = new Scanner(System.in);
			System.out.println("Digite o nome do professor: ");
			String prof = input.nextLine();
			
			input = new Scanner(System.in);
			System.out.println("Digite o nome da disciplina: ");
			String disc = input.nextLine();
			
			input = new Scanner(System.in);
			System.out.println("Digite o n�mero de registro: ");
			int reg = input.nextInt();

			int dia = 0;
			
			while (true) {
				input = new Scanner(System.in);
				System.out.println("Digite o dia da admiss�o: ");
				dia = input.nextInt();
				if (dia <= 31)
					break;
			}


			int mes = 0;
			while (true) {
				input = new Scanner(System.in);
				System.out.println("Digite o m�s da admiss�o: ");
				mes = input.nextInt();
				if (mes <= 12)
					break;
			}
			input = new Scanner(System.in);
			System.out.println("Digite o ano da admiss�o: ");
			int ano = input.nextInt();

			Professor prof2 = new Professor(prof, disc, reg, dia, mes, ano);

			prof2.imprimir();
		}
	}

}

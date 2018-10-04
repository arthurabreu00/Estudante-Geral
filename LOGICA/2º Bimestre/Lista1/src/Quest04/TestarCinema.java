package Quest04;

import java.util.Scanner;

public class TestarCinema {

	public static void main(String[] args) {
		
		Scanner input = new Scanner(System.in);
		
		System.out.println("Digite os dados da sess�o");
		
		System.out.print("Data: ");
		int data = input.nextInt();
		
		System.out.print("Horario: ");
		float horario = input.nextFloat();
		
		System.out.print("Sala: ");
		int sala = input.nextInt();
		
		System.out.print("Valor: ");
		float valor = input.nextFloat();
		
		EntradaDeCinema ent = new EntradaDeCinema(data,horario,sala,valor);
		
		System.out.println("Dados do cliente");
		
		System.out.print("Data de nascimento: ");
		int nasc = input.nextInt();
		
		System.out.print("N�mero da carteira de estudante: ");
		int cart = input.nextInt();
		
		ent.calculaDescontoHorario(nasc,cart);
		ent.imprimaString();
		
	}

}

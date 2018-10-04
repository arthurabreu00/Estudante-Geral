package Quest04;

public class EntradaDeCinema {

	int dataDofilme;
	float horario;
	int sala;
	float valor;

	public EntradaDeCinema(int data, float horario, int sala, float valor) {

		this.dataDofilme = data;
		this.horario = horario;
		this.sala = sala;
		this.valor = valor;

	}

	float calculaDesconto(int nasc) {

		if (this.dataDofilme - nasc <= 12) {

			this.valor *= 0.5;
		}

		return this.valor;

	}

	float calculaDescontoEstudante(int nasc, int cart) {
		if (cart != 0) {
			int idade = this.dataDofilme - nasc;

			if (idade > 12 && idade <= 15) {

				this.valor *= 0.4;

			}

			else if (idade >= 16 && idade <= 20) {

				this.valor *= 0.3;

			}

			else if (idade > 20) {

				this.valor *= 0.2;

			}

		}
		return this.valor;

	}

	float calculaDescontoHorario(int nasc, int cart) {

		this.calculaDesconto(nasc);
		this.calculaDescontoEstudante(nasc, cart); 
		// ACIMA GARANTO QUE O METODO CalculaDescontoHorario() SERA O ULTIMO A SER EXECUTADO. 		
		
		if (this.horario < 16)
			this.valor *= 0.1;

		return this.valor;
	}

	void imprimaString() {

		System.out.println("Data do Filme: " + this.dataDofilme);
		System.out.println("Horario: " + this.horario);
		System.out.println("Sala: " + this.sala);
		System.out.println("Valor: R$" + valor);

	}

}

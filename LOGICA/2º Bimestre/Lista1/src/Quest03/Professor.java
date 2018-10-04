package Quest03;

import java.util.*;

public class Professor {

	/*
	 * 1. DEFINA UMA CLASSE PROFESSOR COM OS DADOS: NOME DO PROFESSOR, NOME DA
	 * DISCIPLINA, DATA DE ADMISS�O, N�MERO DE REGISTRO. INCLUA NA CLASSE UM
	 * CONSTRUTOR PARA SETAR OS DADOS E UM M�TODO PARA IMPRIMIR O CONTE�DO.
	 * 
	 * 2. DEFINA UMA CLASSE DATA COM OS DADOS: DIA, M�S E ANO.
	 * 
	 * 3. REESCREVA A CLASSE PROFESSOR DE FORMA QUE A DATA DE ADMISS�O SEJA UM
	 * OBJETO DA CLASSE DATA. 4. MODIFIQUE A CLASSE DATA CRIADA ANTERIORMENTE PARA
	 * CONTER UM CONSTRUTOR CAPAZ DE SETAR O DIA, M�S E ANO E UM M�TODO CAPAZ DE
	 * IMPRIMIR A DATA.
	 * 
	 * 
	 * 5. CRIE UMA CLASSE COM UM M�TODO PRINCIPAL CAPAZ DE LER INFORMA��ES DO
	 * TECLADO PARA INST�NCIAR TR�S OBJETOS DA CLASSE PROFESSOR E UTILIZAR O M�TODO
	 * IMPRIME_DADOS.
	 * 
	 */

	String nomeProfessor;
	String nomeDisciplina;
	int reg;
	int anoAtual;
	String dataAdd;
	int ano;
	int anoTrabs;

	public Professor(String professor, String disciplina, int reg, int dia, int mes, int ano) {

		Calendar c = Calendar.getInstance();
		this.anoAtual = c.get(Calendar.YEAR);
		this.nomeProfessor = professor;
		this.nomeDisciplina = disciplina;
		this.reg = reg;
		this.ano = ano;
		this.dataAdd = this.data(dia, mes, ano);
	}

	/*
	 * CRIAR M�TODO: INT ANOSDETRABALHO(INT ANO) ESSE M�TODO DEVER� PEGAR O ANO
	 * ATUAL E SUBTRAIR PELO ANO DA DATA DE ADMISS�O.
	 */

	public int anosDeTrabalho() {

		int anoTrab = anoAtual - this.ano;

		return anoTrab;

	}

	public String data(int dia, int mes, int ano) {

		String dataFormt = dia + "/" + mes + "/" + ano;
		System.out.println("Data de admiss�o : " + dataFormt);
		return dataFormt;
	}

	void imprimir() {
		System.out.println("---------------------------------------------");
		System.out.println("Nome do professor : " + this.nomeProfessor);
		System.out.println("Nome do Disciplina : " + this.nomeDisciplina);
		System.out.println("N�mero de registro : " + this.reg);
		System.out.println("Anos trabalhados: " + this.anosDeTrabalho());
		this.imprimirData();
	}

	public void imprimirData() {

		System.out.println("Data de admiss�o: " + this.dataAdd);
	}

}

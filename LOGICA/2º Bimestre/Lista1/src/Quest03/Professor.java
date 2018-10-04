package Quest03;

import java.util.*;

public class Professor {

	/*
	 * 1. DEFINA UMA CLASSE PROFESSOR COM OS DADOS: NOME DO PROFESSOR, NOME DA
	 * DISCIPLINA, DATA DE ADMISSÃO, NÚMERO DE REGISTRO. INCLUA NA CLASSE UM
	 * CONSTRUTOR PARA SETAR OS DADOS E UM MÉTODO PARA IMPRIMIR O CONTEÚDO.
	 * 
	 * 2. DEFINA UMA CLASSE DATA COM OS DADOS: DIA, MÊS E ANO.
	 * 
	 * 3. REESCREVA A CLASSE PROFESSOR DE FORMA QUE A DATA DE ADMISSÃO SEJA UM
	 * OBJETO DA CLASSE DATA. 4. MODIFIQUE A CLASSE DATA CRIADA ANTERIORMENTE PARA
	 * CONTER UM CONSTRUTOR CAPAZ DE SETAR O DIA, MÊS E ANO E UM MÉTODO CAPAZ DE
	 * IMPRIMIR A DATA.
	 * 
	 * 
	 * 5. CRIE UMA CLASSE COM UM MÉTODO PRINCIPAL CAPAZ DE LER INFORMAÇÕES DO
	 * TECLADO PARA INSTÂNCIAR TRÊS OBJETOS DA CLASSE PROFESSOR E UTILIZAR O MÉTODO
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
	 * CRIAR MÉTODO: INT ANOSDETRABALHO(INT ANO) ESSE MÉTODO DEVERÁ PEGAR O ANO
	 * ATUAL E SUBTRAIR PELO ANO DA DATA DE ADMISSÃO.
	 */

	public int anosDeTrabalho() {

		int anoTrab = anoAtual - this.ano;

		return anoTrab;

	}

	public String data(int dia, int mes, int ano) {

		String dataFormt = dia + "/" + mes + "/" + ano;
		System.out.println("Data de admissão : " + dataFormt);
		return dataFormt;
	}

	void imprimir() {
		System.out.println("---------------------------------------------");
		System.out.println("Nome do professor : " + this.nomeProfessor);
		System.out.println("Nome do Disciplina : " + this.nomeDisciplina);
		System.out.println("Número de registro : " + this.reg);
		System.out.println("Anos trabalhados: " + this.anosDeTrabalho());
		this.imprimirData();
	}

	public void imprimirData() {

		System.out.println("Data de admissão: " + this.dataAdd);
	}

}

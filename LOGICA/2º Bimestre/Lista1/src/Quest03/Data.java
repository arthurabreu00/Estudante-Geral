package Quest03;

public class Data {
	
	String horario;
	
	public Data(String horario){
		
		this.horario = horario;
		
	}

	public int[] horaMinuto(){
		
		char hora[] = { this.horario.charAt(0), this.horario.charAt(1)};
		char minuto[] = { this.horario.charAt(3), this.horario.charAt(4)};
		
		int hr = Integer.parseInt(String.copyValueOf(hora));
		int min = Integer.parseInt(String.copyValueOf(minuto));
		
		int hm[] = {hr,min};
		
		return hm;
	} 
	
	public int getHora(){
		
		int hora[] = this.horaMinuto();
		return hora[0];
		
	}
	
	
	public int[] getDataFilme(String data) {

		char dia[] = { data.charAt(0), data.charAt(1) };
		char mes[] = { data.charAt(3), data.charAt(4) };
		char ano[] = { data.charAt(6), data.charAt(7), data.charAt(8), data.charAt(9) };
		int dia1 = Integer.parseInt(String.copyValueOf(dia));
		int mes1 = Integer.parseInt(String.copyValueOf(mes));
		int ano1 = Integer.parseInt(String.copyValueOf(ano));

		int completa[] = { dia1, mes1, ano1 };

		return completa;

	}
}

let readlineSync = require('readline-sync');
var nome;
var dataDoEvento;
var idade;
var dataAtual;
var participantes = 0;

nome = readlineSync.question("Digite seu nome: ");
dataDoEvento = readlineSync.question("Digite a data do evento: ");
idade = readlineSync.question("Digite sua idade: ");
dataAtual = readlineSync.question("Digite a data atual: ");

while (participantes < 100) {

	if(dataDoEvento > dataAtual){
		//condição verdadeira
		if(idade > 18){
			//condição verdadeira
			if(participantes < 100){
				//condição verdadeira
				console.log("Participante cadastrado com sucesso!");
			}else{
				//condição falsa
				console.log("Cadastro não permitido, lista de participantes excedida!");
			}
		}else{
			//condição falsa
			console.log("Cadastro não permitido, idade inválida!");
		}
	}else{
		//condição falsa
		console.log("Cadastro não permitido, data inválida!");
	}

	nome = readlineSync.question("Digite seu nome: ");
	dataDoEvento = readlineSync.question("Digite a data do evento: ");
	idade = readlineSync.question("Digite sua idade: ");
	dataAtual = readlineSync.question("Digite a data atual: ");
	participantes++;
}
console.log("Limite de cadastros atingido!");

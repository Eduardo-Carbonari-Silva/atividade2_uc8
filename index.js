let readlineSync = require('readline-sync');
var nome;
var dataDoEvento;
var idade;
var dataAtual;
var participantes;

nome = readlineSync.question("Digite seu nome: ");
dataDoEvento = readlineSync.question("Digite a data do evento: ");
idade = readlineSync.question("Digite sua idade: ");
dataAtual = readlineSync.question("Digite a data atual: ");

for(var participantes = 0; participantes < 100; participantes++){

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

}

console.log("Cadastro não permitido, lista de participantes excedida!");

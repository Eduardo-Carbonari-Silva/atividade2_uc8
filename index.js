let listaDeEstudantes = ["Lucas", "Igor", "Guilherme", "Eduardo", "Jhonny"];
let quantidadeDeEstudantes = listaDeEstudantes.length;
if (quantidadeDeEstudantes < 5) {
	listaDeEstudantes.push("Welinton");
	console.log(listaDeEstudantes);
} else {
	console.log("O número de alunos desta turma atingiu o limite!");
}
// EXERCICIO 2

const operacao = process.argv[2]

switch(operacao){
	case "soma":
		console.log(+process.argv[3] + +process.argv[4])
		break;
	case "subt":
		console.log(+process.argv[3] - +process.argv[4])
		break;
}
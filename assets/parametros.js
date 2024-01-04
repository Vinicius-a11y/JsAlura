//parametros de funão

function soma(num1, num2) {
	return num1 + num2;
}

console.log(soma(50, 100));
console.log(soma(5000, -100));
console.log(soma(-50, 100));

//parametro x argumentos

//ordem dos  parameetros

function nomeIdade(nome, idade) {
	return `meu nome é ${nome} e minha idade é ${idade}`;
}

// console.log(nomeIdade("Vinicius", 22));

function multiplica(numero1 = 1, numero2 = 1) {
	return numero1 * numero2;
}

console.log(multiplica(soma(4, 5)));

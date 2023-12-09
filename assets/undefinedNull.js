//O null é um tipo especial, pois pode ser traduzido como “ausência de valor” e pode ser atribuído como valor de uma variável: 
let input = null;

if (input === null) {
 console.log('não há informação');
} else {
 console.log(input);
}

//É aqui que entra o tipo undefined. Este tipo também representa “ausência de valor”, porém de uma outra forma: usualmente, enquanto null é um valor atribuído a uma variável que existe e foi iniciada, undefined se refere ao valor de uma variável que não foi inicializada (ou seja, não foi atribuído nenhum valor a ela).É aqui que entra o tipo undefined. Este tipo também representa “ausência de valor”, porém de uma outra forma: usualmente, enquanto null é um valor atribuído a uma variável que existe e foi iniciada, undefined se refere ao valor de uma variável que não foi inicializada (ou seja, não foi atribuído nenhum valor a ela).
// let input = null;
// let input2;

// console.log(input); // null
// console.log(input2); // undefined

console.log(null == undefined); // true
console.log(null === undefined); // false


//Que o computador consegue apenas armazenar valores em alguns tipos de variáveis, como números, texto e booleanos.
// Como declarar uma variável numérica, com tipo number, e associar um valor a ela, podendo ser um inteiro ou um valor de ponto flutuante.
// Como declarar uma variável de texto, conhecida como string, e colocar uma frase, número, pontuação ou uma mistura de todos esses dentro dela.
// Como declarar uma variável booleana e definir seu valor como verdadeiro (true) ou falso (false).
// Onde as booleanas mais aparecem, como resultados de comparações com === ou outros operadores de comparação como >=.
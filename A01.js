/*como criar variáveis em JavaScript
-> variável é um espaço na memória
-> toda variável precisa de: nome e tipo
-> sintaxe: let <nome-variável>
*/

/*let idade variável idade criada, mas nenhum valor ou tipo foi passado pra variável*/

let numero = 15 /*variável chamada numero com o valor 15 associado -> tipo inteiro (ou int, interger)*/

let preco = 9.99 /*variável do tipo double (decimal) chamada preco com o valor 9.99*/

let nome = "JavaScript" /*variável do tipo String (texto) chamada nome com o valor "JavaScript"*/

/*Escreva no console, seu nome, idade e localizção utilizando variáveis*/

let meuNome = "Lucas";

let minhaIdade = 23;

let localizacao = "São Bernardo Do Campo"

console.log("Meu nome é " + meuNome + " e a minha idade é " + minhaIdade + " e moro em " + localizacao + ".")






/*If-else
    -> Estrutura condicional: tomar decisões
*/

let idade = 17

if (idade >= 18) {
    console.log("É maior de idade.")
} else {
    console.log("É menor de idade.")
}

/*Exercício*/

/*MODO PERFUMARIA ATIVADO
Vamos permitir que a entrada do usuário seja capturada*/

/*importando um módulo que permite ler a entrada do usuário*/
const readline = require("readline")

/*configuração para ler os dados do teclado*/
const rl = readline.createInterface ({
    input: process.stdin,
    output: process. stdout
})

/*perguntado a nota*/
rl.question("Digite a nota do aluno: ", function(nota){

    /*convertendo entrada para numero*/
    nota = Number(nota)

if (nota >= 5) {
    console.log("Aprovado")
} else {
    console.log("Reprovado")
}

rl.close();

})
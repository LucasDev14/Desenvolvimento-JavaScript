/*Trabalhando com métodos de console

import { clear } from 'console';
import readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('Qual é seu nome? ', (nome) => {
    console.log(`Olá, ${nome}`);

    rl.close()
})
*/

/*Usando let -> respeita o escopo do bloco
if (true){
    let nome  = "Lucas"
    console.log(nome);
}
console.log(nome)
*/

/*Usando o var -> não respeita o escopo do bloco
if (true){
    var nome = "JavaScript"
    console.log(nome);
}
console.log(nome)*/

/*Exemplo 3 -> dentro de um for
for (let i = 0; i < 3; i++){
    console.log("Dentro do for: ", i)
}
console.log("Fora do for:", i)
*/

/*IF ELSE*/

/*let idade = 20

if (idade < 12) {
    console.log("Criança")
} else if (idade < 18) {
    console.log("Adolescnte")
} else {
    console.log("Adulto")
}

/* Exemplo para saber a média
let a = 5;
let b = 5;
let resultado = (a+b)/2
console.log(resultado)*/

/*
const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
rl.question("Digite a nota P1: ", function (P1) {
    rl.question("Digite a nota P2: ", function (P2) {
        rl.question("Digite a nota P3: ", function (P3) {
            rl.question("Digite a nota P4: ", function (P4) {
                rl.question("Digite a carga horaria (em horas):", function (chTotal) {
                    rl.question("Digite a quantidade de faltas:", function (chFaltas) {
                        P1 = Number(P1)
                        P2 = Number(P2)
                        P3 = Number(P3)
                        P4 = Number(P4)
                        chTotal = Number(chTotal)
                        chFaltas = Number(chFaltas)

                        // calculo media
                        let resultado = (P1 + P2 + P3 + P4) / 4

                        // calculo porcentagem faltas
                        let faltas = (chFaltas / chTotal) * 100

                        if (faltas >= 25) {
                            console.log("Reprovado")
                        }else if (resultado > 6) {
                            console.log("Aluno está Aprovado", resultado)
                        } else {
                            console.log("Aluno está Reprovado", resultado)
                        }

                    })
                })
            })
        })

    })
})

//definindo as infos do sistemas
let id = "admin"
let senha = "admin123"

//definindo as infos ineridas pelo usuarios
let idUsuario = "admin"
let senhaUsuario = "admin123"

// verificando login

if (id == idUsuario && senha == senhaUsuario) {
    console.log("Usuario logado com sucesso")
} else {
    console.log("Usuario ou senha incorretos")
}
*/

/*switch: case
let codigo = 981;

switch (codigo) {
    case 980: console.log("Kindle")
        break;
    case 332: console.log("BYD Dolphin Mini")
        break;
    case 105: console.log("Aspirador robô")
        break;
    default: console.log("Item não encontrado.")
        break;
}*/

/*let n1 = 10;
let n2 = 5;
let operacao = "multiplicaçao"

switch (operacao) {
    case "adição": console.log("Resultado: ", n1+n2)
        break;
    case "subtração": console.log("Resultado: ", n1-n2)
        break;
    case "divisão": console.log("Resultado: ", n1/n2)
        break;
    case "multiplicaçao": console.log("Resultado: ", n1*n2)
        break;
    default:console.log("Operação não encontrada!")
        break;
}*/

/*FOR - REPETIÇÃO*/

/*for (let i = 30; i >= 0; i++) {
    console.log("Contador: ", i)
}*/

/*for (let i = 0; i <= 20; i+=2) {
    console.log("Resultado Par: ", i)
}

for (let i = 1; i <= 20; i+=2) {
    console.log("Resultado Impar: ", i)
}*/


/**/

/*import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
let numero
while (numero < 10) {
rl.question("Digite um número: ", function(numero){
    console.log("Número inválido, Tente de novo")
    numero = Number(numero)

})
}*/

// cria uma função chamada delay que conta em milisegundos
function delay (ms){
    //cria uma rotina que fica "resolvendo" algo, nesse caso,
    //fica esperando milisegundos definidos pelo usúario e exibe o conteúdo no console
    return new Promise(resolve => setTimeout(resolve, ms));
}

let i = 1

while (i <=5){
    console.log(i); //escrever u número na tela
    i++ //incrementar o número
    await delay(1000)
}

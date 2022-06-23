// EMPRESA SAVANIS \\

let prompt = require('prompt-sync') ()


dataAtual = new Date
console.log("Hoje é " + dataAtual.getDate() + "-" + dataAtual.getMonth() + "-" + dataAtual.getFullYear() ) //Obtendo o dia, mês e ano atual do usuário

let dataEvento = new Date("2022-08-28") // Salvando a data do evento com uma string

if (dataAtual < dataEvento) {
    console.log("Continuação de cadastro...")
}
    else if (dataAtual > dataEvento) {
    console.log("Cadastro não permitido por data inválida")
}
 
let idade = parseInt(prompt("Digite sua idade: "))

if (idade >= 18) {
    console.log("Continuação de cadastro...")
}
    else if (idade < 18) {
        console.log("Cadastro não permitido. Idade mínina menor que a permitida.")
    }

let listaParticipantes = [98];

console.log(`Número de participantes: ${listaParticipantes[0]}`);
if (listaParticipantes <=100) {
    console.log("Cadastro concluído!")
}
else if (listaParticipantes >100) {
    console.log("Cadastro não concluído. Número de participantes por evento excedido.")
}


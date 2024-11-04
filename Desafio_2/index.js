
let saldoVitorias = calculaSaldoVitorias(25, 6)
let nivel = nivelJogador(saldoVitorias)

console.log(`O Herói tem saldo de ${saldoVitorias} e está no nível de ${nivel}`)

saldoVitorias = calculaSaldoVitorias(100, 44)
nivel = nivelJogador(saldoVitorias)
console.log(`O Herói tem saldo de ${saldoVitorias} e está no nível de ${nivel}`)

function calculaSaldoVitorias(numVitorias, numDerrotas) {
    let saldoRankeada = numVitorias - numDerrotas
    return saldoRankeada
}

function nivelJogador(saldoVitorias) {
    if (saldoVitorias < 10) {
        return "Ferro"
    } else if (saldoVitorias > 10 && saldoVitorias <= 20) {
        return "Bronze"
    } else if (saldoVitorias > 20 && saldoVitorias <= 50) {
        return "Prata"
    } else if (saldoVitorias > 50 && saldoVitorias <= 80) {
        return "Ouro"
    } else if (saldoVitorias > 80 && saldoVitorias <= 90) {
        return "Diamante"
    } else if (saldoVitorias > 90 && saldoVitorias <= 100) {
        return "Lendário"
    } else if (saldoVitorias > 100) {
        return "Imortal"
    }
}

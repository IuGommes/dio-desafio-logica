const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite seu nome: ", (nomeHeroi) => {
    rl.question("Digite seu nível de XP: ", (nivelXp) => {
        // Convertendo nivelXP para número, caso seja necessário fazer comparações numéricas
        nivelXp = parseInt(nivelXp, 10);



        if (nivelXp < 1000) {
            console.log("O herói " + nomeHeroi + " está no nível " + "Ferro")
        } else if (nivelXp > 1000 && nivelXp <= 2000) {
            console.log("O herói " + nomeHeroi + " está no nível " + "Bronze")
        } else if (nivelXp > 2000 && nivelXp <= 5000) {
            console.log("O herói " + nomeHeroi + " está no nível " + "Prata")
        } else if (nivelXp > 5000 && nivelXp <= 7000) {
            console.log("O herói " + nomeHeroi + " está no nível " + "Ouro")
        } else if (nivelXp > 7000 && nivelXp <= 8000) {
            console.log("O herói " + nomeHeroi + " está no nível " + "Platina")
        } else if (nivelXp > 8000 && nivelXp <= 9000) {
            console.log("O herói " + nomeHeroi + " está no nível " + "Ascendente")
        } else if (nivelXp > 9000 && nivelXp <= 10000) {
            console.log("O herói " + nomeHeroi + " está no nível " + "Imortal")
        } else {
            console.log("O herói " + nomeHeroi + " está no nível " + "Radiante")
        } 

        let vidaExtra = 0

        for (i = 0; i <= nivelXp; i++) {
            vidaExtra += (0.01) 
        } 

console.log("O heroi " + nomeHeroi + " possui " + Math.round(vidaExtra) + " vidas") 

        rl.close()
    })
})
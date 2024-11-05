const readline = require("readline");

const rl = readline.createInterface({

  input: process.stdin,

  output: process.stdout

});

class Hero{
    constructor(heroName, heroAge, heroType){
        this.heroName = heroName
        this.heroAge = heroAge
        this.heroType = heroType
    }
    
    attack() {
        let power
        
        switch (this.heroType) {
            case "mago":
                power = "magia"
                break
            
            case "guerreiro":
                power = "espada"
                break

            case "monge":
                power = "artes maciais"
                break

            case "ninja":
                power = "shuriken"
                break
            
                default:
                    power = "Ataque desconhecido"
        }
        console.log(`O tipo ${this.heroType} atacou usando ${power}`)
    }
}

function setHero(){
    console.log("Escolha um tipo de herói:\n1. Mago\n2. Guerreiro\n3. Monge\n4. Ninja\n")

    rl.question("Digite o número da sua escolha: ", (set) => {

        let heroName;
    
        let heroAge;
    
        let heroType;
    
    if (set === "1"){
        heroName = "Kassandra"
        heroAge = 40
        heroType = "mago"
    } else if (set === "2"){
        heroName = "Kratos"
        heroAge = 68
        heroType = "guerreiro"
    } else if (set === "3"){
        heroName = "Duben"
        heroAge = 89
        heroType = "monge"
    } else if (set === "4"){
        heroName = "Shizen"
        heroAge = 46
        heroType = "ninja"
    }  else {
        console.log("Opção inválida. Tente novamente")
        setHero()
        return
    }

    const hero1 = new Hero(heroName, heroAge, heroType)
    hero1.attack()

    rl.close()
    })
}

setHero()
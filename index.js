class heroi{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar(){
        let ataque;

        if (this.tipo === "mago") {
            ataque = "magia"
        } else if (this.tipo === "guerreiro") {
            ataque = "espada"
        } else if(this.tipo === "monge") {
            ataque = "artes maciais"
        } else if (this.tipo === "ninja") {
            ataque = "shuriken"
        } else {
            ataque = "ataque desconhecido"
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`)
    } 
}

let personagem = new heroi ("Naruto", 13, "ninja")
personagem.atacar()


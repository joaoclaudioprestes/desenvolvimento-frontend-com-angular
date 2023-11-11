class Pessoa {
    nome;
    idade;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.anoDeNascimento = 2023 - idade;
    }

    descrever() {
        console.log(`O nome da pessoa é ${this.nome} e a idade é ${this.idade}`);
    };
};

function compararPessoas(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`O ${p1.nome} é mais velho(a) que ${p2.nome}!`)
    } 
    
    else if (p2.idade > p1.idade) {
        console.log(`O ${p2.nome} é mais velho(a) que ${p1.nome}!`)
    }

    else {
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade!`)
    }
}

const p1 = new Pessoa('Vitor Calis', 35);
const p2 = new Pessoa('Miguel', 16)

compararPessoas(p1, p2)
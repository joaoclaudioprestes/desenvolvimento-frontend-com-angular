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

const joao = new Pessoa('João Prestes', 18);
console.log(joao);
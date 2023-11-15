const pessoa = {
    nome: 'João',
    idade: 18,

    descrever: function () {
        return `O nome da pessoa é ${this.nome} e sua idade é ${this.idade}`
    }
};

console.log(pessoa['nome']);

class Pessoa {
    nome;
    idade;

    descrever() {
        console.log(`O nome da pessoa é ${this.nome} e a idade é ${this.idade}`);
    };
};

const pessoa1 = new Pessoa(); // Instancia é a ocrrenciacia do objeto
pessoa1.nome = 'vitor';
pessoa1.idade = 25;
pessoa1.descrever();
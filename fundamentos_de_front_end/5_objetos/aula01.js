const joao = {
    nome: 'João Prestes',
    idade: 18,
    descrever: function () {
        console.log(`
        Meu nome é: ${this.nome}
        Minha idade é: ${this.idade}
        `);
    }
};

console.log(typeof joao);
console.log(joao);
console.log(joao.nome);

joao.altura = 1.75

console.log(joao.altura)

delete joao.altura

console.log(joao.altura)

joao.descrever()
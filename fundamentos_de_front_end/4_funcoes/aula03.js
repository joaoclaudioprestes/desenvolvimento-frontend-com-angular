function escrevaNome(nome) {
    return `Meu nome é: ${nome}`;
};

console.log(escrevaNome('João'))


function ehMaiorIdade(idade) {
    if (idade >= 18) {
        console.log(`${escrevaNome('João')}! Eu sou maior de idade, pois tenho ${idade} anos.`)
    } else {
        console.log(`${escrevaNome('João')}! Eu sou menor de idade, pois tenho ${idade} anos.`)
    }
}

ehMaiorIdade(18)
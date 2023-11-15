function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2)
}

function classificacaoImc(imc) {
    if (imc < 18.5) {
        return `
        Você está abaixo do peso!
        Seu IMC é ${imc.toFixed(2)}
        `
    }
    
    else if (imc > 18.5 && imc < 25) {
        return `
        Você está com o peso normal!
        Seu IMC é ${imc.toFixed(2)}
        `
    }
    
    else if (imc > 25 && imc < 30) {
        return `
        Você está acima do peso!
        Seu IMC é ${imc.toFixed(2)}
        `
    }
    
    else if (imc > 30 && imc < 40) {
        return `
        Você está obeso!
        Seu IMC é ${imc.toFixed(2)}
        `
    }
    
    else if (imc > 40) {
        return `
        Você está obsidade grave!
        Seu IMC é ${imc.toFixed(2)}
        `
    }
}

(function main() {
    const peso = 75;
    const altura = 1.85;

    const imc = calcularImc(peso, altura);
    console.log(classificacaoImc(imc))
})(); //Chama a função imediantamente

// const main = main();

// const main2 = main;
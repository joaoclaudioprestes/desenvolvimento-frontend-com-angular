const peso = 75;
const altura = 1.85;
const imc = peso / Math.pow(altura, 2);

if (imc < 18.5) {
    console.log(`
    Você está abaixo do peso!
    Seu IMC é ${imc.toFixed(2)}
    `)
}

else if (imc > 18.5 && imc < 25) {
    console.log(`
    Você está com o peso normal!
    Seu IMC é ${imc.toFixed(2)}
    `)
}

else if (imc > 25 && imc < 30) {
    console.log(`
    Você está acima do peso!
    Seu IMC é ${imc.toFixed(2)}
    `)
}

else if (imc > 30 && imc < 40) {
    console.log(`
    Você está obeso!
    Seu IMC é ${imc.toFixed(2)}
    `)
}

else if (imc > 40) {
    console.log(`
    Você está obsidade grave!
    Seu IMC é ${imc.toFixed(2)}
    `)
}
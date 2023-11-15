function incrementarJuros(valor, juros) {
    const valorAcrescimo = (juros / 100) * valor
    return valor + valorAcrescimo
}

function sayMyName(name) {
    console.log(`Olá, ${name}`)
}

sayMyName('João')
console.log(incrementarJuros(158, 10))



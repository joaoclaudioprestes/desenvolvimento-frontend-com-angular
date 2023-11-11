const precoEtanol = 3.79;
const precoGasolina = 5.79;
const tipoCombustivel = 'Etanol';
const gastoMedioKM = 5;
const distanciaKM = 158;
const totalConsumido = distanciaKM / gastoMedioKM;

function custoGasolina() {
    const totalGasto = totalConsumido * precoGasolina;

    return totalGasto
}

function custoEtanol() {
    const totalGasto = totalConsumido * precoEtanol;

    return totalGasto
}

if (tipoCombustivel.toLocaleLowerCase() === 'gasolina') {
    const totalGasto = custoGasolina(gastoMedioKM, precoGasolina);

    console.log(`
    Resultado:
    Tipo de combustivel: ${tipoCombustivel}
    Total combustivel gasto: ${totalConsumido.toFixed(2)}
    Valor que será gasto: R$ ${totalGasto.toFixed(2)} reais
    `)

} else {
    const totalGasto = custoEtanol(gastoMedioKM, precoGasolina);

    console.log(`
    Resultado:
    Tipo de combustivel: ${tipoCombustivel}
    Total combustivel gasto: ${totalConsumido.toFixed(2)}
    Valor que será gasto: R$ ${totalGasto.toFixed(2)} reais
    `)
}
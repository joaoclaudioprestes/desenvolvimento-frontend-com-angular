class Carro {
    marca;
    cor;
    gastoMedioKm;

    constructor(marca,cor,gastoMedioKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioKm = (1 / gastoMedioKm).toFixed(2);
    }

    valorGastoPercurso(distancia, precoCombustivel) { 
        return `O valor gasto para percorrer ${distancia} km, será de R$ ${(distancia * this.gastoMedioKm * precoCombustivel).toFixed(2)} reais`
    }
};

const uno = new Carro('Fiat', 'Preto', 12);

console.log(uno);
console.log(uno.valorGastoPercurso(70, 5.79));

const palio = new Carro('Fiat', 'Prata', 18.8);

console.log(palio);
console.log(palio.valorGastoPercurso(454, 5.79));
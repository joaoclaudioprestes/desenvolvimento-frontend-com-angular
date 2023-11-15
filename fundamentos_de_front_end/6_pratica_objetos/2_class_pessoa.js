class Pessoas {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc() {
        return (this.peso / Math.pow(2, this.altura)).toFixed(2);
    }

    classificarImc() {
        const imc = this.calcularImc();
        if (imc < 18.5) {
            return `
            Você está abaixo do peso!
            Seu IMC é ${imc}
            `
        }
        
        else if (imc > 18.5 && imc < 25) {
            return `
            Você está com o peso normal!
            Seu IMC é ${imc}}
            `
        }
        
        else if (imc > 25 && imc < 30) {
            return `
            Você está acima do peso!
            Seu IMC é ${imc}
            `
        }
        
        else if (imc > 30 && imc < 40) {
            return `
            Você está obeso!
            Seu IMC é ${imc}
            `
        }
        
        else if (imc > 40) {
            return `
            Você está obsidade grave!
            Seu IMC é ${imc}
            `
        }
    };
};



const jose = new Pessoas('José', 185, 1.85);
console.log(jose);
console.log(jose.calcularImc());
console.log(jose.classificarImc());

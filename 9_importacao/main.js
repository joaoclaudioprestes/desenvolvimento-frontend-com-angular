const {print, entradas} = require('./funcoes_aux.js');

let maiorNumero = 0

for (let i = 0; i < entradas.length; i++) {
    if (entradas[i] > maiorNumero) {
        maiorNumero = entradas[i];
    }
}

print(maiorNumero)


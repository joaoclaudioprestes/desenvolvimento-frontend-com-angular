const notas = []

notas.push(5);
notas.push(8);
notas.push(6);
notas.push(9);
notas.push(7);

let soma = 0

for (let i = 0; i < notas.length; i++) {
    soma += notas[i]
}

const media = (soma / notas.length)

console.log(media);
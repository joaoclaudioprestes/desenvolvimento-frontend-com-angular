const alunos = ['joão', 'vitor', 'carlos']

console.log(alunos);

alunos[0] = 'Miguel';

console.log(alunos);

alunos.push('João');

console.log(alunos);

alunos.pop('João');

console.log(alunos);

const notas = []

notas.push(5);
notas.push(8);
notas.push(6);
notas.push(9);
notas.push(7);

const soma = notas[0] + notas[1] + notas[2] + notas[3] + notas[4]

console.log(soma / notas.length);
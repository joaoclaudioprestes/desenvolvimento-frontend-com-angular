const n1 = 5;
const n2 = 3;
const n3 = 7;

const media = (n1 + n2 + n3) / 3;

if (media < 5) {
    console.log(`
    Aluno Reprovado!
    Média: ${media}
    `);
} 

else if (media > 5 && media < 7) {
    console.log(`
    Aluno em Recuperação!
    Média: ${media}
    `);
}

else {
    console.log(`
    Aluno Aprovado!
    Média: ${media}`)
}

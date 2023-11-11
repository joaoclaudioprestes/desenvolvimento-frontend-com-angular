// Faça um programa para calcular o valor de uma viagem.

const precoCombustivel = 5.79;
const kmPorLitro = 12;
const distanciaEmKm = 1870;

const litrosConsumidos = distanciaEmKm / kmPorLitro

const totalGasto = litrosConsumidos * precoCombustivel

console.log(`O carro irá gastar um total de R$ ${totalGasto.toFixed(2)} reias`) 
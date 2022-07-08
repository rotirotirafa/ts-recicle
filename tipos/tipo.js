"use strict";
let nome = 'Rafael'; //string
console.log(nome);
let idade = 26; // number
const anoNascimento = 1996; //auto identifca como number por conta da inicialização
console.log(idade);
function idadePeloAno(ano) {
    return ano - anoNascimento;
}
console.log(idadePeloAno(2040));

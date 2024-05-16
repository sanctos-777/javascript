/*







8-Defina uma função construtora Restaurante com propriedades nome, endereco e 
tipoCozinha. Crie um objeto restaurante1 com nome "La Pizzeria", endereço "Rua das Pizzas, 123" e tipo de cozinha "Italiana".
9-Crie uma função construtora Filme com propriedades titulo, diretor e 
anoLancamento. Crie um objeto filme1 com título "O Poderoso Chefão", 
diretor "Francis Ford Coppola" e ano de lançamento "1972".
10-Defina uma função construtora Funcionario com propriedades nome, cargo e 
salario. Crie um objeto funcionario1 com nome "Carlos", cargo "Gerente" e 
salário "7000".
*/

//  1-Crie uma função construtora chamada Animal que define propriedades para nome 
//  e especie. Crie um objeto animal1 com nome "Leão" e espécie "Felino".

function animal1(nome, especie) {
    this.nome = nome
    this.especie = especie
}
var animal2 = new animal1("humano", "mamifero")
console.log(animal2)

// 2-Defina uma função construtora Produto que tem propriedades nome, preco, 
// e quantidade. Crie um objeto produto1 com nome "Notebook", preço "2500" e 
// quantidade "5".

function Produto(nome, preco, quantidade) {
    this.nome = nome,
        this.preco = preco,
        this.quantidade = quantidade
}
var produto1 = new Produto('notebook', 2500, 5)

console.log(produto1)

// 3 - Crie uma função construtora Carro com propriedades marca, modelo, e ano.
//     Crie um objeto carro1 com marca "Toyota", modelo "Corolla" e ano "2022".

function Carro (marca, modelo, ano){
    this.marca=marca,
    this.modelo=modelo,
    this.ano=ano
}
var carro1 = new Carro('toyota', 'corolla', 2022)
console.log(carro1)

// 4-Defina uma função construtora Livro que tenha propriedades titulo, autor e 
// anoPublicacao. Crie um objeto livro1 com título "Dom Casmurro", autor "Machado 
// de Assis" e ano de publicação "1899".

function livro (titulo, autor, anoPublicacao){
        this.titulo=titulo,
        this.autor=autor,
        this.anoPublicacao=anoPublicacao
}
var livro1 = new livro('dom casmurro', 'machado de assis', 1899)
console.log(livro1)

// 5-Crie uma função construtora ContaBancaria com propriedades titular, saldo e tipo. 
// Crie um objeto conta1 com titular "João", saldo "5000" e tipo "Corrente".

function ContaBancaria (titular, saldo, tipo){
    this.titular=titular,
    this.saldo=saldo,
    this.tipo=tipo
}
var ContaBancaria1 = new ContaBancaria('joao', 5000, 'corrente')
console.log(ContaBancaria1)

// 6-Defina uma função construtora Cachorro com propriedades raca, cor e idade. 
// Crie um objeto cachorro1 com raça "Labrador", cor "Marrom" e idade "5".

function cachorro (raca, cor, idade){
    this.raca=raca
    this.cor=cor
    this.idade=idade
}
var cachorro1 = new cachorro('labrador', 'marrom', 5)
console.log(cachorro1)

// 7-Crie uma função construtora Aluno com propriedades nome, matricula e curso.
//  Crie um objeto aluno1 com nome "Maria", matrícula "2021001" e curso "Engenharia Civil".

function aluno (nome, matricula,curso){
    this.nome=nome,
    this.matricula=matricula,
    this.curso=curso
}
var aluno1 = new aluno('maria', 2021001, 'engenharia civil')
console.log(aluno1)
/*
Crie uma classe ContaBancaria com propriedades 
saldo e titular e métodos para depositar, sacar e verificar o saldo.










*/

//1.Crie uma classe Pessoa com propriedades nome, 
// idade e um método apresentar() que exibe uma mensagem com o nome e a idade da pessoa.

class Pessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    apresentar() {
        console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos`);
    }
}

const Tiago = new Pessoa('Tiago', 20)
Tiago.apresentar()

//2.Crie uma classe Retangulo com propriedades 
// largura e altura e métodos para calcular a área e o perímetro do retângulo.

class Retangulo {
    constructor(largura, altura) {
        this.largura = largura;
        this.altura = altura;

    }
    get area() {
        return this.largura * this.altura;
    }
}

const objeto = new Retangulo(15, 20)
console.log('a area é:', objeto.area)

//3 Crie uma classe ContaBancaria com propriedades 
// saldo e titular e métodos para depositar, sacar e verificar o saldo.

class ContaBancaria {
    constructor(saldo, titular) {
        this.saldo = saldo;
        this.titular = titular;
    }
    depositar(valor) {
        this.saldo = this.saldo + valor
    }
    sacar(valor) {
        this.saldo = this.saldo - valor
    }
    verificar() {
        console.log('meu saldo é', this.saldo, "\n")
    }
}
const conta = new ContaBancaria(1200, 'Tiago')
conta.verificar();

conta.depositar(1200)
conta.verificar();

conta.sacar(400)
conta.verificar();

//4
// Crie uma classe Produto com propriedades nome, 
// preco e quantidade e métodos para calcular 
// o valor total do produto (preço * quantidade).

class Produto {
    constructor(nome, preço, quantidades) {
        this.nome = nome;
        this.preço = preço;
        this.quantidades = quantidades;
    }
    valortotal() {
        return this.preço * this.quantidades
    }
}
const fruta = new Produto('maça', 23, 10)
console.log('o valor total de 10 maças por 23 reais é', fruta.valortotal())


//5 Crie uma classe Carro com propriedades marca, 
// modelo e ano e um método para exibir todas as informações do carro.

class Carro {
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    informacoes() {
        console.log('esse carro ' + this.marca, this.modelo + ' é do ano ' + this.ano)
    }
}

const Carro1 = new Carro('fiat', 'uno', 2010)
Carro1.informacoes()

//6 Crie uma classe Aluno com propriedades nome, 
// matricula, notas (array) e um método para calcular a média das notas.

class aluno {
    constructor(nome, matricula, notas) {
        this.nome = nome
        this.matricula = matricula
        this.notas = notas
    }
    media() {
        let soma = 0
        for (let i = 0; i < this.notas.length; i++) {
            soma += this.notas[i]
        }
        return soma / this.notas.length
    }
}

const aluno1 = new aluno('tiago', 496101, [10, 8, 9, 5])
console.log('a media é ', aluno1.media())

// 7 Crie uma classe Animal com propriedades 
// nome e tipo e um método para exibir uma mensagem com o nome e o tipo do animal.

class animal {
    constructor(nome, tipo) {
        this.nome = nome
        this.tipo = tipo
    }
    caracteristicas() {
        console.log('o nome desse animal é', this.nome, 'seu tipo é', this.tipo)
    }
}
const animal1 = new animal('humano', 'mamifero')
animal1.caracteristicas()

// 8 Crie uma classe Triangulo com propriedades 
// lado1, lado2 e lado3 e métodos para calcular a área e o perímetro do triângulo.

class Triangulo {
    constructor(lado1, lado2, lado3) {
        this.lado1 = lado1
        this.lado2 = lado2
        this.lado3 = lado3
    }
    get area() {
        return this.lado1 * this.lado2 * this.lado3
    }
}
const Triangulo1 = new Triangulo(12, 13, 14)
console.log('a area do triangulo é', Triangulo1.area)

// 9 Crie uma classe Livro com propriedades 
// titulo, autor e ano e um método para exibir todas as informações do livro.

class Livro {
    constructor(titulo, autor, ano) {
        this.titulo = titulo
        this.autor = autor
        this.ano = ano
    }
    resenha() {
        console.log('o nome do titulo do livro é', this.titulo, 'o autor do livro é', this.autor, 'o livro foi lançado no ano de', this.ano)

    }
}
const resenha1 = new Livro('A volta dos que não foram', 'Irineu', 1964)
resenha1.resenha()

// 10 Crie uma classe Circulo com propriedade 
// raio e métodos para calcular a área e o perímetro do círculo?

class Circulo {
    constructor(raio) {
    this.raio = raio;
    }

    calcularArea() {
        return Math.PI * this.raio * this.raio;
    }

    calcularPerimetro() { 
        return 2 * Math.PI * this.raio; 
    }
}
    const Circulo1 = new Circulo (20)
    console.log ('a area é:', Circulo1.calcularArea(), 'e o perimetro é:', Circulo1.calcularPerimetro())

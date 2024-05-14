/*
Crie uma classe ContaBancaria com propriedades 
saldo e titular e métodos para depositar, sacar e verificar o saldo.

Crie uma classe Aluno com propriedades nome, 
matricula, notas (array) e um método para calcular a média das notas.

Crie uma classe Animal com propriedades 
nome e tipo e um método para exibir uma mensagem com o nome e o tipo do animal.

Crie uma classe Triangulo com propriedades 
lado1, lado2 e lado3 e métodos para calcular a área e o perímetro do triângulo.

Crie uma classe Livro com propriedades 
titulo, autor e ano e um método para exibir todas as informações do livro.

Crie uma classe Circulo com propriedade 
raio e métodos para calcular a área e o perímetro do círculo.
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

  const Tiago = new Pessoa ('Tiago', 20)
  Tiago.apresentar()

  //2.Crie uma classe Retangulo com propriedades 
// largura e altura e métodos para calcular a área e o perímetro do retângulo.

  class Retangulo {
    constructor(largura, altura) {
        this.largura= largura;
        this.altura= altura;

    }
    get area (){
      return this.largura*this.altura;
    }
  }

  const objeto = new Retangulo (15, 20)
  console.log('a area é:', objeto.area )

  //3 Crie uma classe ContaBancaria com propriedades 
// saldo e titular e métodos para depositar, sacar e verificar o saldo.

class ContaBancaria {
    constructor(saldo, titular) {
        this.saldo = saldo;
        this.titular = titular;
    }
}

//3
// Crie uma classe Produto com propriedades nome, 
// preco e quantidade e métodos para calcular 
// o valor total do produto (preço * quantidade).

class Produto {
    constructor(nome, preço, quantidades){
        this.nome=nome;
        this.preço=preço;
        this.quantidades=quantidades;
    }
    valortotal (){
        return this.preço*this.quantidades
    }
}
    const fruta = new Produto ('maça', 23, 10)
    console.log('o valor total de 10 maças por 23 reais é', fruta.valortotal())


 //3 Crie uma classe Carro com propriedades marca, 
// modelo e ano e um método para exibir todas as informações do carro.

class Carro {
    constructor(marca, modelo, ano){
        this.marca=marca;
        this.modelo=modelo;
        this.ano=ano;
    } 
    informacoes () {
        console.log('esse carro '+ this.marca, this.modelo +' é do ano '+this.ano)
    }
}

const Carro1 = new Carro('fiat', 'uno', 2010)
Carro1.informacoes()
   

/*













Exercício 9: Contato
Crie um objeto literal que represente um contato, 
com propriedades como nome, email e telefone.

Exercício 10: Lista de Contatos
Crie um array de objetos literais que representem uma lista 
de contatos. Cada objeto deve ter as mesmas propriedades 
definidas no exercício anterior. Adicione métodos para 
adicionar um novo contato à lista, remover um contato
 existente e buscar um contato pelo nome.
*/

// Exercício 1: Criação de Objeto Literal
// Crie um objeto literal que represente um livro, com 
// as propriedades titulo, autor e ano. Em seguida, 
// imprima as informações do livro no console.

// Exercício 2: Adição de Método
    // Adicione um método informacoes() ao objeto 
    // livro que imprima todas as informações do livro, 
    // incluindo título, autor e ano.

const Livro = {
        nome:'A volta dos que não foram',
        autor:'irineu',
        ano:1964,
        informacoes (){
    console.log ('o nome do livro é', this.nome, 'seu autor é', this.autor, 'foi lançado em', this.ano) 
 }
}
   Livro.informacoes(); 

//    Exercício 3: Lista de Compras
//    Crie um objeto literal que represente uma 
//    lista de compras, onde cada item da lista é uma 
//    propriedade com o nome do item e a quantidade desejada.

// Exercício 4: Adição e Remoção de Itens
// Adicione métodos ao objeto lista de compras para
//  adicionar um novo item à lista e remover um item existente.

let lista_De_Compras = {
            "arroz":3,
            "feijao":5,
            "carne":10,
    
        adicao(itens, quantidade){
            this[itens] = quantidade;
            console.log(itens + 'adcionado a lista')
        },
        remocao(itens){
            delete this[itens]
            console.log(itens + 'removido da lista')
        }
};

        lista_De_Compras.adicao("alho",15)
        lista_De_Compras.remocao("feijao")

        console.log(lista_De_Compras)

// Exercício 5: Total da Compra
// Adicione um método ao objeto lista de compras para 
// calcular o valor total da compra, com base na quantidade
//  desejada de cada item e seus preços individuais.
        


  
// Exercício 6: Registro de Funcionários
// Crie um objeto literal que represente um registro de 
// funcionários, onde cada funcionário é representado por um 
// objeto com propriedades como nome, cargo e salário.

// Exercício 7: Adição de Funcionários
// Adicione métodos ao objeto registro de funcionários 
// para adicionar um novo funcionário ao registro e remover um funcionário existente.

let Registro_De_Funcionarios = {
    funcionarios:[
        {
            nome:"Tiago",
            salaio:4600,
            cargo:"programador"
        },
        {
            nome:"Arthur",
            salaio:4600,
            cargo:"programador" 
        },
        {
            nome:"Davi",
            salaio:4600,
            cargo:"programador"
        },
        {
            nome:"Marcos",
            salaio:4600,
            cargo:"programador"
        }
    ],
    adicao(funcionarios){
        this.funcionarios.push(funcionarios)
    },
    remocao(nome){
        this.funcionarios=this.funcionarios.filter(funcionarios=> funcionarios.nome !== nome)
    }
};

console.log(Registro_De_Funcionarios.funcionarios)
Registro_De_Funcionarios.adicao(

    {
        nome:"Ruan",
        salaio:4600,
        cargo:"programador"
    }

)
console.log(Registro_De_Funcionarios.funcionarios)

Registro_De_Funcionarios.remocao(
    "Marcos"
)
console.log(Registro_De_Funcionarios.funcionarios)

// Exercício 8: Aumento de Salário
// Adicione um método ao objeto registro de funcionários 
// para aumentar o salário de todos os funcionários em uma certa porcentagem.


/*

    

    

    

    

    

    

    

    

    

*/

// 1-Crie uma função chamada soma que aceita dois parâmetros e retorna a 
// soma deles.

function soma (a , b){
    return a + b;
}
console.log (soma(2, 3))

// 2-Defina uma função chamada saudacao que imprime "Olá, mundo!" no console e 
//     não tem nenhum parâmetro nem retorno.

function saudacao (){
    console.log("Ola mundo!")
}

saudacao();

// 3-Escreva uma função chamada verificarPar que recebe um número como parâmetro 
//     e retorna verdadeiro se o número for par e falso caso contrário.

function verificarPar (a) {
    if (a % 2 === 0){
        return true
    }
    else {
        return false
    }

}

// 4-Crie uma função chamada calcularAreaCirculo que aceita o raio de um círculo
//      como parâmetro e retorna a área do círculo.

function calcularAreaCirculo (raio){
   return   Math.PI*raio*raio 
}

console.log (calcularAreaCirculo (10))

// 5-Defina uma função chamada retornarDataAtual que não aceita nenhum parâmetro 
//     e retorna a data atual.

function retornarDataAtual (){
    return new Date()
}

console.log(retornarDataAtual())

// 6-Escreva uma função chamada calcularMedia que recebe um array de números 
//     como parâmetro e retorna a média desses números.

function calcularMedia (v){
    let soma = 0 
    for(let i = 0 ; i < v.length; i++){
        soma=soma+v[i]
    }
    return soma / v.length
}
console.log('a media é ', calcularMedia([3,2,5,7,8,9,10,15,14]))

// 7-Crie uma função chamada adicionarDois que aceita um número como parâmetro
//      e retorna esse número adicionado a 2.

function adicionarDois (n){
   return n+2
   }

   console.log('adcionado mais 2:', adicionarDois(5))

//    8-Defina uma função chamada concatenarStrings que recebe duas strings como
//      parâmetros e retorna uma nova string que é a concatenação das duas strings 
//      fornecidas.

function concatenarStrings(pala, pala2){
    return console.log(pala + ' ' + pala2)
}

concatenarStrings('soma', 'menos')

// 9-Escreva uma função chamada verificarNegativo que recebe um número como
//      parâmetro e retorna verdadeiro se o número for negativo e falso caso
//      contrário.

function verificarNegativo (b){
    if (b < 0){
        return true
    }
    else {
        return false
    }
}

console.log(verificarNegativo(-3))

// 10-Crie uma função chamada removerEspacos que recebe uma string como 
//     parâmetro e retorna a mesma string sem espaços em branco.

function removerEspacos (s){
    return s.replace(' ','')
}


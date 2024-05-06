/*
    TIPO NUMERO
        parseInt
        parseFloat
*/
// Variavel Number
var idade = 29;
console.log(typeof idade, idade);
console.log(typeof idade, idade+1);

// Variavel String
var idade = '29';
console.log(typeof idade, idade);
console.log(typeof idade, idade+1);

// Variavel String em Number
var idade = Number('29');
console.log(typeof idade, idade);
console.log(typeof idade, idade+1);

// Variavel Boolean
var number = true;
console.log(typeof number, number);

// Variavel Boolean em Number
var number = Number(false);
console.log(typeof number, number);
var number = Number(true);
console.log(typeof number, number);

/*data*/
var number = new Date ()
console.log(typeof number, number)

/*converter data para numero*/
var number = Number(new Date ())
console.log(typeof number, number)

/*converter usando o parseint*/
var n = "29"
console.log(typeof n, n)
console.log(typeof parseInt(n),parseInt(n))

// converter de string para numero usando o parseflooat
var n = "29.23"
console.log(typeof n, n)
console.log(typeof parseFloat(n), parseFloat(n))
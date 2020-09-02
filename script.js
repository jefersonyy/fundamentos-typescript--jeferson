
var x = 5;
var y = 9;

var somar = (x + y);
var subtrair = (x - y);
var dividir = (x / y);
var multiplicar = (x *y);

/*
alert("soma é:" + somar);
alert("subttracao é:" + subtrair);
alert("multiplicacao é:" + multiplicar);
alert("divisao é: "  + dividir);
*/

var ternario = somar >= 0 ? alert("é maior") : alert("é menor");

function somando (a,b){
    alert("o valor da soma é: " + a+b)
}
somando(1,3);

for (var i = 1; i<=10; i++ ){
    console.log("o valor de i ->" + i);
}
console.log("acessando o var fora do lacao" + i);



const vartexto : number = 10;
const vartextooutro: string = 'novo'
const varjunto = vartexto + vartextooutro;


console.log(varjunto)
let meuBoolean: boolean = false

// o number é um ponto flutuante,
// hexa, octal, e binario
let meuOctal: number = 0o13
alert( "valor meuOctal" + meuOctal);


let meuBinario: number = 0o11;
alert("binario" + meuBinario);

let meuhexa : number = 0xAB13
alert("Com Hexa " + meuhexa);

let texto: string  = "olá typescript";
alert(texto)


let lagraduro: string = "Rua 7 de setembro";
let numero: string = "1238"
let cidade: string = "blumenau"
let estado: string ="sc"

alert(`Enderço;" ${lagraduro}, ${numero}. ${cidade} - ${estado}`); 

let meuArray: number [] = [1,2,"3",4];
alert(meuArray);


let meuArray2: Array<number> = [1,2,3,4];
//operador com tuplas 
// exmplo de tuplas sao os dicionarios 
/* palavra(string) -> singnificado (string)*/

let campeoBrasileiro [string, number] = ["palmeiras,2016"];
let campeoBrasileiro1 [string, number] = ["corinthians,2015"];
let campeoBrasileiro2 [string, number] = ["cruzeiro,2014"];

alert (campeoBrasileiro[0] + "-" + campeoBrasileiro[1]);

let campeoBrasileiro3: [string, number] = ["palmeiras",2016]
    campeoBrasileiro3[0] = "teste" 
alert(campeoBrasileiro3);
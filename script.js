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

let campeoBrasileiro : [string, number] = ["palmeiras,2016"];
let campeoBrasileiro1: [string, number] = ["corinthians,2015"];
let campeoBrasileiro2: [string, number] = ["cruzeiro,2014"];

alert (campeoBrasileiro[0] + "-" + campeoBrasileiro[1]);

let campeoBrasileiro3: [string, number] = ["palmeiras",2016]
    campeoBrasileiro3[0] = "teste" 
alert(campeoBrasileiro3);


enum Estado {desabilitado = -1, habilitado};

let meuEstado: Estado = Estado.habilitado;
alert (meuEstado);



let textoEnum: String = Estado [Estado.desabilitado];
alert("usando o magic number(index) ->" + textoEnum);

///tipo de dados any (qq coisa) 
let v: any = 2;
alert(v);



// como o tipo da variavel é any ele deixa chamar qq metodoque exista
// por exemplo o to Exponential que é do number, sem avisar erro do comp:
alert (v.toExponential());
//agora se tentar chamar qq metodo que nao exste, nao ira ter aviso
/// so vai ter erro quando executar
alert(v.toMetod());


//  tipo de dados void ** sem tipagem **
// as variaveis do tipo void so podem receber 2 valor null  e undefined 

var teste: void = undefined;


// pode-se criar um função void 
function  funcaoTeste(): void {
    alert('Olá')
}

var teste: void = funcaoTeste();
alert(teste);



/// existe  uma configuração do compilador que é 
// strictnullckeks
//Ensure that nullabillity is respected in the type ckecker
// ele verifica que nao pode mais deixar uma var com null  ou undefined



var teste2: number = null;
alert(teste2);


function somar(a: number, b: number){
    return a +b;

}



let resultadosoma = somar (5, 6);
alert (resultadosoma);
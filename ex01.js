//Um novo modelo de carro foi lançado. Ele faz 20km com 1 litro de combustível.
//cada litro de combustivel custa R$5.
//Faça um programa que pergunte ao usuário quanto de dinheiro ele tem e em seguida
//diga quantos litros de combustível ele pode comprar e quantos kilometros o carro
//consegue andar com este tanto de combustível.


let valorDoLitro = 5

let dinheiroDoUsuario = prompt("Quanto de dinheiro você tem?")
let quantosLitrosDaParaComprar = dinheiroDoUsuario / valorDoLitro
let quilometros = 20
let consegueRodar = quantosLitrosDaParaComprar * quilometros

alert("Você pode comprar\n" + quantosLitrosDaParaComprar + "\n" + "litros de combustível." )
alert("Seu carro consegue rodar\n" + consegueRodar + "" + "km.")
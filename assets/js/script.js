const tax = 0.04;
const oneplus7 = 749.0;
const IphoneXMax = 1099.0;
const S10Plus = 999.99;
const Xiaomi9T = 656.14;
const Mate20 = 587.0;
const fones = 99.0;
const caboExtra = 24.95;
const carregador = 47.40;
const powerBank = 30.0;
const capinha = 29.95;
var valorCarrinho = 0.0;

function taxRate(preco) {
    return preco * tax;
}

function formatacaoPreco(preco) {
	return "$ " + preco.toFixed(2);
}

function updateUsuario() {
    let nome = document.getElementById("nome").value;
    var saldo = Number(document.getElementById("saldo").value);
    
    if (nome.length != 0 && saldo.length != 0 && saldo > 0){
        document.querySelector(".nomeUsuario h3").innerHTML = "Olá, " + nome;
        document.querySelector(".saldoConta").innerHTML = "Seu saldo é: " + saldo;
        document.querySelector(".infoUsuario").style.display = "none";
        document.querySelector(".escolhaCel").style.display = "block";
    } else {
        alert("Desculpe, não consegui te identificar\nPor favor, digite seu nome e saldo corretamente!");
    }

}


function modeloCel() {
    let escolha = document.querySelector("select");
    let escolhaID = escolha.value;

    switch (escolhaID){
        case 1:
            valorCarrinho += oneplus7;
            break;
        case 2:
            valorCarrinho += IphoneXMax;
            break;
        case 3:
            valorCarrinho += S10Plus;
            break;
        case 4:
            valorCarrinho += Xiaomi9T;
            break;
        case 5:
            valorCarrinho += Mate20;
            break;
    }
    console.log("O seu carrinho é de: " + valorCarrinho)
}

function acessorios() {

    let escolhaAcessorios;
    
    escolhaAcessorios = confirm("Deseja comprar acessórios?");

    while(escolhaAcessorios) {
        escolha = Number(prompt("Digite 1 para adicionar fones ao seu carrinho (" + formatacaoPreco(fones) + ")\nDigite 2 para adicionar cabo extra ao seu carrinho (" + formatacaoPreco(caboExtra) + ")\nDigite 3 para adicionar carregador ao seu carrinho (" + formatacaoPreco(carregador) + ")\nDigite 4 para adicionar power bank ao seu carrinho (" + formatacaoPreco(powerBank) + ")\nDigite 5 para adicionar case ao seu carrinho (" + formatacaoPreco(capinha) + ")"));

        switch (escolha){
            case 1:
                valorCarrinho += fones;
                break;
            case 2:
                valorCarrinho += caboExtra;
                break;
            case 3:
                valorCarrinho += carregador;
                break;
            case 4:
                valorCarrinho += powerBank;
                break;
            case 5:
                valorCarrinho += capinha;
                break;
        }

        escolhaAcessorios = confirm("Deseja comprar mais acessórios?");
    }
}
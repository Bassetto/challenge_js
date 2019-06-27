const tax = 0.04;
const oneplus7 = 749.0;
const IphoneXsMax = 1099.0;
const S10Plus = 999.99;
const Xiaomi9T = 656.14;
const Mate20 = 587.0;
const fones = 99.0;
const caboExtra = 24.95;
const carregador = 47.40;
const powerBank = 30.0;
const capinha = 29.95;
var valorCarrinho = 0.0;
var saldo = 0.0;

function taxRate(preco) {
    return preco * tax;
}

function formatacaoPreco(preco) {
	return "$" + preco.toFixed(2);
}

function mudaimagem(item) {
    var img = document.getElementById('imagens');
    img.innerHTML = '<img src="./assets/images/cel' + item + '.jpg">';
}

function updateUsuario() {
    let nome = document.getElementById("nome").value;
    saldo = Number(document.getElementById("saldo").value);
    
    if (nome.length != 0 && saldo.length != 0 && saldo > 0){
        document.querySelector(".nomeUsuario h3").innerHTML = "Olá, " + nome;
        document.querySelector(".saldoConta").innerHTML = "Seu saldo é de: " + formatacaoPreco(saldo);
        document.querySelector(".infoUsuario").style.display = "none";
        document.querySelector(".escolhaCel").style.display = "block";
    } else {
        alert("Desculpe, não consegui te identificar\nPor favor, digite seu nome e saldo corretamente!");
    }
}

function confirmacao() {
    taxRate(valorCarrinho);
    let carrinhoFormatado;
    carrinhoFormatado = formatacaoPreco(valorCarrinho);
    document.querySelector(".infoCompra h3").innerHTML = "O valor total da sua compra é de: " + carrinhoFormatado;
    document.querySelector(".escolhaCel").style.display = "none";
    document.querySelector(".confirmacaoCompra").style.display = "block";
}

function modeloCel() {

    valorCarrinho = 0.0;
    let escolha = Number(document.querySelector("select").value);

    if (escolha == 0) {
        alert("Escolha um celular para continuar!")
    } else {
        switch (escolha){
            case 1:
                valorCarrinho += oneplus7;
                break;
            case 2:
                valorCarrinho += IphoneXsMax;
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
        acessorios();
        confirmacao();
    }
}

function acessorios() {

    for (let i = 1; i <= 5; i++){ 
        let check = document.querySelector("#customCheck" + i + "").checked;
        switch (i) {
            case 1:
                if (check == true){ 
                    valorCarrinho += fones;
                }
                break;
            case 2:
                if (check == true){ 
                    valorCarrinho += caboExtra;
                }
                break;
            case 3:
                if (check == true){ 
                    valorCarrinho += carregador;
                }
                break;
            case 4:
                if (check == true){ 
                    valorCarrinho += powerBank;
                }
                break;
            case 5:
                if (check == true){ 
                    valorCarrinho += capinha;
                }
                break;
        }
    }
}

function cancelada() {
    let resposta = false;
    resposta = confirm("Deseja voltar à pagina de compra?");
    if (resposta) {
        document.querySelector(".confirmacaoCompra").style.display = "none";
        document.querySelector(".escolhaCel").style.display = "block";
    } else{
        window.close();
    }
}

function confirmada() {
    if (valorCarrinho > saldo) {
        alert("Você não possui saldo suficiente!")
    } else {
        saldo -= valorCarrinho;
        document.querySelector(".saldoConta").innerHTML = "Seu saldo é: " + formatacaoPreco(saldo);
        document.querySelector(".confirmacaoCompra").style.display = "none";
        document.querySelector(".confirmada").style.display = "block";
    }
}

function novaCompra() {
    document.querySelector(".confirmada").style.display = "none";
    document.querySelector(".escolhaCel").style.display = "block";
}
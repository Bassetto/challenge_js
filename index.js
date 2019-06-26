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
var money = 0;
var valorCarrinho = 0.0;
let escolha;
let continuarCompras = true;

money = Number(prompt("Digite o valor em conta"));

function taxRate(preco) {
    return preco * tax;
}

function ModeloCel() {

    escolha = Number(prompt("Modelos de celulares Disponíveis:\nDigite 1 para escolher OnePlus 7 (" + formatacaoPreco(oneplus7) + ")\nDigite 2 para escolher Iphone X Max (" + formatacaoPreco(IphoneXMax) + ")\nDigite 3 para escolher S10 Plus (" + formatacaoPreco(S10Plus) + ")\nDigite 4 para escolher Xiaomi 9T (" + formatacaoPreco(Xiaomi9T) + ")\nDigite 5 para escolher Huawei Mate 20 (" + formatacaoPreco(Mate20) + ")"));
    switch (escolha){
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

function formatacaoPreco(preco) {
	return "$ " + preco.toFixed(2);
}

do {

    function foramatacaoUpdate() {
        moneyFormatado = formatacaoPreco(money);
        carrinhoFormatado = formatacaoPreco(valorCarrinho);
    }

    let carrinhoFormatado;
    let moneyFormatado;

    alert("O saldo atual da sua conta é de: $" + money)

    ModeloCel();

    acessorios();

    valorCarrinho += taxRate(valorCarrinho);

    foramatacaoUpdate();

    if (money >= valorCarrinho) {
        
        let confirmarCompra;
        confirmarCompra = confirm("O seu saldo em conta atual é de: " + moneyFormatado + "\nO valor total da sua compra é de: " + carrinhoFormatado + "\nVocê deseja concluir a compra?");

        if (confirmarCompra) {
            money = money - valorCarrinho;
            foramatacaoUpdate();

            alert("Sua compra foi concluída com sucesso!\nSeu saldo em conta restante é de: " + moneyFormatado);
        } else {
            alert("A compra foi cancelada com sucesso!");
        }
    } else {
        alert("Você não possui saldo suficiente para a compra!\nA compra foi cancelada!\nSeu saldo em conta é: " + moneyFormatado + " e o valor da sua compra era de: $" + carrinhoFormatado);
    }
    valorCarrinho = 0

    continuarCompras =  confirm("Deseja comprar outro celular?");

} while (continuarCompras)
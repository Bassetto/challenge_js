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
    let escolha;
    let escolhaID;

    escolha = document.querySelector(".escolhaCel").options;
    // escolhaID = escolha.options[escolha.selectedIndex].text;
    alert("Você escolheu: " + escolha);

    // escolha = Number(prompt("Modelos de celulares Disponíveis:\nDigite 1 para escolher OnePlus 7 (" + formatacaoPreco(oneplus7) + ")\nDigite 2 para escolher Iphone X Max (" + formatacaoPreco(IphoneXMax) + ")\nDigite 3 para escolher S10 Plus (" + formatacaoPreco(S10Plus) + ")\nDigite 4 para escolher Xiaomi 9T (" + formatacaoPreco(Xiaomi9T) + ")\nDigite 5 para escolher Huawei Mate 20 (" + formatacaoPreco(Mate20) + ")"));
    // switch (escolha){
    //     case 1:
    //         valorCarrinho += oneplus7;
    //         break;
    //     case 2:
    //         valorCarrinho += IphoneXMax;
    //         break;
    //     case 3:
    //         valorCarrinho += S10Plus;
    //         break;
    //     case 4:
    //         valorCarrinho += Xiaomi9T;
    //         break;
    //     case 5:
    //         valorCarrinho += Mate20;
    //         break;
    // }
}

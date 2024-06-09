// PASSO 1 - DAR UM JEITO DE PEGAR O ELEMENTO HTML DA SETA AVANÇAR
const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
let cartaoAtual = 0;
const cartoes = document.querySelectorAll(".cartao");
// PASSO 2 - DAR UM JEITO DE IDENTIFICAR O CLIQUE DO USUARIO NA SETA AVANÇAR
btnAvancar.addEventListener("click",function(){
    if (cartaoAtual === cartoes.length - 1)return;
// PASSO 3 - FAZER APARECER O PROXIMO CARTÃO DA LISTA, COLOCANDO A CLASSE SELECIONADO NELE
// PASSO 4 - BUSCAR O CARTÃO QUE ESTA SELECIONADO E ESCONDER
    esconderCartaoSelecionado();
    cartaoAtual++;
    mostrarCartao();

});

// OBJETIVO 2 - QUANDO CLICARMOS NA SETA VOLTAR TEMOS QUE MOSTRAR O CARTÃO ANTERIOR DA LISTA

// PASSO 2 - DAR UM JEITO DE IDENTIFICAR O CLIQUE DO USUARIO NA SETA VOLTAR
btnVoltar.addEventListener("click",function(){

    if(cartaoAtual === 0)return;

// PASSO 3 - FAZER VOLTAR CARTÃO DA LISTA, COLOCANDO A CLASSE SELECIONADO NELE
// PASSO 4 - BUSCAR O CARTÃO QUE ESTA SELECIONADO E ESCONDER

    esconderCartaoSelecionado();
    cartaoAtual--;
    mostrarCartao();

});

function mostrarCartao() {
    cartoes[cartaoAtual].classList.add("selecionado");
}

function esconderCartaoSelecionado() {
    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
}


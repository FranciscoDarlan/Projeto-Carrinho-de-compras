/*
let produto = document.querySelector('.produto-input');
let quantidade = document.querySelector('.quantidade-input');

let textoValorQuantidade = document.getElementById('texto-valor-quantidade');
let textNomeProdutoCarrinho = document.getElementById('text-nome-produto-carrinho');
let textValorProdutoCarrinho = document.getElementById('text-valor-produto-carrinho');
let textoTotal = document.getElementById("valor-total");

let divCarrinhoInformacoes = document.querySelector(".carrinho__total");

function adicionar() {
    if (produto.value === "Oculus VR - R$5000") {
        textoValorQuantidade.innerHTML = quantidade.value + "x";
        textNomeProdutoCarrinho.innerHTML = `${produto.value}`;
        textValorProdutoCarrinho.innerHTML = '';
        textoTotal.innerHTML = quantidade.value * 5000;
    } else if (produto.value === "Celular - R$1400") {
        textoValorQuantidade.innerHTML = quantidade.value + "x";
        textNomeProdutoCarrinho.innerHTML = `${produto.value}`;
        textValorProdutoCarrinho.innerHTML = '';
        textoTotal.innerHTML = quantidade.value * 1400;
    } else {
        textoValorQuantidade.innerHTML = quantidade.value + "x";
        textNomeProdutoCarrinho.innerHTML = `${produto.value}`;
        textValorProdutoCarrinho.innerHTML = '';
        textoTotal.innerHTML = quantidade.value * 100;

    } return

}

if (adicionar()) {
    divCarrinhoInformacoes.p
}
function limpar() {

    textoValorQuantidade.textContent = "0x";
    textNomeProdutoCarrinho.innerHTML = 'Nenhum Produto ';
    textValorProdutoCarrinho.innerHTML = 'R$ 00.00';
    textoTotal.innerHTML = "R$ 00.00";
}

*/



// RESOLUÇÃO PROFESSOR >>>>>>>>

let totalGeral;
limpar();

function adicionar() {
    let produto = document.getElementById('produto').value;

    // quebrar a variavel em 2 variaveis para nome e valor >>>>>
    let nomeProduto = produto.split('-')[0];  //função split divide a string e devolve em arrey, o tamanho vai depende da quantidade de caracteres que colocamos que vai aparecer ...
    let valorUnitario = produto.split('R$')[1]; // agora quero somente o numero depois do R$ e peço para o split devolver o array depois do R$ [1] !
    let quantidade = document.getElementById('quantidade').value;

    let totalCarrinho = document.querySelector('.carrinho__total');

    //variavel para calcular >>>>>>>
    let preco = quantidade * valorUnitario;

    //variavel para adicionar o carrinho >>>>>
    let carrinho = document.getElementById('lista-produtos');

    //adicionar no carrinho
    carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span id="texto-valor-quantidade" class="texto-azul"  >${quantidade}x</span> <span id="text-nome-produto-carrinho">${nomeProduto}</span> <span id="text-valor-produto-carrinho" class="texto-azul">R$${valorUnitario}</span>  </section>`;


    totalCarrinho.innerHTML = `Total: <span class="texto-azul" id="valor-total">R$${preco}</span>`

    // atualiza o valor total
    totalGeral = totalGeral + preco;
    let campoTotal = document.getElementById('valor-total');
    campoTotal.innerHTML = `R$${totalGeral}`;
    document.getElementById('quantidade').value = 0;
}

function limpar() {
    totalGeral = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.querySelector('.carrinho__total').innerHTML = 'R$ 0';
}
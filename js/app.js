function adicionar() {
    let produto = document.querySelector('.produto-input');
    let quantidade = document.querySelector('.quantidade-input');

    let textoValorQuantidade = document.getElementById('texto-valor-quantidade');
    let textoTotal = document.getElementById("valor-total");

    textoValorQuantidade.innerHTML = quantidade.value + "x";
    textoTotal.innerHTML = quantidade.value // * produto pegar valor do produto
}
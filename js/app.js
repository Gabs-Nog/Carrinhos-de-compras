let total = 0
limpar()
//selecionar os produtos e calcular o preço.
function adicionar(){
    let produto = document.getElementById('produto').value;
    let nome = produto.split('-')[0];
    let valor = produto.split('R$')[1];
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let somaValor = valor * quantidade;

    if (isNaN(quantidade) || quantidade <= 0) {
        alert("Insira uma quantidade válida.");
        return;
    }

    
    let carrinho = document.getElementById('lista-produtos');
        carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto">
        <span class="texto-azul">${quantidade}x</span> ${nome} <span class="texto-azul">R$${somaValor}</span>
        </section>`;
    total = total + somaValor;
    let totalCarrinho = document.getElementById('valor-total').textContent = (`R$ ${total}`);
    document.getElementById('quantidade').value = 0
}

function limpar(){
    total = 0;
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').textContent = ('R$ 0,00');
}

// Seleciona todos os produtos
const produtos = document.querySelectorAll('.produto');

// Adiciona um evento de clique a cada produto
produtos.forEach(produto => {
    produto.addEventListener('click', () => {
        // Remove a classe 'destaque' de todos os produtos
        produtos.forEach(p => p.classList.remove('destaque'));
        
        // Adiciona a classe 'destaque' ao produto clicado
        produto.classList.add('destaque');
    });
});

const id_carrinho = 'carrinho';

export const obterCarrinho = () => {
  try {
    return JSON.parse(localStorage.getItem(id_carrinho)) || [];
  } catch {
    return [];
  }
};

export const adicionarAoCarrinho = (produto) => {
  const carrinho = obterCarrinho();

  const produtoExistente = carrinho.find((item) => item.id === produto.id);

  const novoCarrinho = produtoExistente ? carrinho.map((item) => item.id === produto.id  ? { ...item, quantidade: item.quantidade + 1 }: item ): [...carrinho, { ...produto, quantidade: 1 }];

  localStorage.setItem(id_carrinho, JSON.stringify(novoCarrinho));

  alert('Produto adicionado ao carrinho com sucesso!');
  
};
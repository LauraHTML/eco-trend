const URL_PRODUTOS = 'https://raw.githubusercontent.com/LauraHTML/eco-trend/main/src/services/produtos.json';

export const buscarProdutos = async () => {
    const response = await fetch(URL_PRODUTOS);

    if (!response.ok) {
        throw new Error('Erro ao buscar produtos');
    }

    const produtos = await response.json();

    return produtos;
};
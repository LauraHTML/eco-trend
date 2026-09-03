import React, { useState, useEffect } from 'react';
import { obterCarrinho } from '../services/carrinho';

const Carrinho = () => {

  const [pedidos, setPedidos] = useState([]);
  const [finalizando, setFinalizando] = useState(false);
  const [mensagem, setMensagem] = useState('');

  useEffect(() => {
    setPedidos(obterCarrinho());
  }, []);

  const atualizarCarrinho = (novoCarrinho) => {
    setPedidos(novoCarrinho);

    localStorage.setItem(
      'carrinho',
      JSON.stringify(novoCarrinho)
    );
  };

  const removerProduto = (id) => {

    const novoCarrinho = pedidos.filter(
      (produto) => produto.id !== id
    );

    atualizarCarrinho(novoCarrinho);
  };

  const aumentarQuantidade = (id) => {

    const novoCarrinho = pedidos.map((produto) =>
      produto.id === id
        ? { ...produto, quantidade: produto.quantidade + 1 }
        : produto
    );

    atualizarCarrinho(novoCarrinho);
  };

  const diminuirQuantidade = (id) => {

    const novoCarrinho = pedidos
      .map((produto) =>
        produto.id === id
          ? { ...produto, quantidade: produto.quantidade - 1 }
          : produto
      )
      .filter((produto) => produto.quantidade > 0);

    atualizarCarrinho(novoCarrinho);
  };

  const total = pedidos.reduce(
    (soma, produto) =>
      soma + produto.preco * produto.quantidade,
    0
  );

  // CHECKOUT
  const finalizarCompra = () => {

    setFinalizando(true);
    setMensagem('');

    return new Promise((resolve, reject) => {

      setTimeout(() => {

        if (pedidos.length === 0) {
          reject('Seu carrinho está vazio.');
          return;
        }

        resolve('Compra realizada com sucesso!');

      }, 2000);

    })
      .then((mensagemSucesso) => {

        setMensagem(mensagemSucesso);

        setPedidos([]);
        localStorage.removeItem('carrinho');

      })
      .catch((erro) => {

        setMensagem(erro);

      })
      .finally(() => {

        setFinalizando(false);

      });
  };

  return (
    <main className="container mx-auto p-6">

      <h1 className="text-3xl mb-6">
        Meu Carrinho
      </h1>

      {pedidos.length === 0 ? (

        <h2>Seu carrinho está vazio.</h2>

      ) : (

        <>
          {pedidos.map((produto) => (

            <div
              key={produto.id}
              className="border rounded-md p-4 mb-4"
            >

              <h2>{produto.nome}</h2>

              <p>
                R$ {produto.preco.toFixed(2)}
              </p>

              <div className="flex gap-2 items-center mt-2">

                <button
                  onClick={() => diminuirQuantidade(produto.id)}
                  className="border px-3 py-1"
                >
                  -
                </button>

                <span>
                  {produto.quantidade}
                </span>

                <button
                  onClick={() => aumentarQuantidade(produto.id)}
                  className="border px-3 py-1"
                >
                  +
                </button>

                <button
                  onClick={() => removerProduto(produto.id)}
                  className="border px-3 py-1"
                >
                  Remover
                </button>

              </div>

            </div>

          ))}

          <h2 className="text-xl font-bold">
            Total: R$ {total.toFixed(2)}
          </h2>

          <button
            onClick={finalizarCompra}
            disabled={finalizando}
            className="mt-4 bg-secondary px-6 py-3 rounded-md"
          >
            {finalizando
              ? 'Processando...'
              : 'Finalizar compra'}
          </button>

        </>

      )}

      {mensagem && (
        <p className="mt-4 font-bold">
          {mensagem}
        </p>
      )}

    </main>
  );
};

export default Carrinho;
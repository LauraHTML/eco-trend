import { useState, useEffect } from 'react';

import Grid from '../components/template/Grid';
import Filtro from '../components/organisms/Filtro';

import { buscarProdutos } from '../services/produtos.js';
import {adicionarAoCarrinho} from '../services/carrinho.js';

const Produtos = () => {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('Todos');

  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);

  const listaProdutos = Array.isArray(produtos)? produtos : Object.values(produtos).flat();
  const categorias = ['Todos',...new Set(listaProdutos.map((produto) => produto.categoria))];

  const produtosFiltrados =
  categoriaSelecionada === 'Todos'? listaProdutos : listaProdutos.filter((produto) => produto.categoria === categoriaSelecionada);


  useEffect(() => {
    const carregarProdutos = async () => {
      try {
        const dados = await buscarProdutos();
        setProdutos(dados);
      } catch (erro) {
        console.error(erro);
      } finally {
        setCarregando(false);
      }
    };

    carregarProdutos();
  }, []);

  if (carregando) {
    return (
      <div className="flex justify-center items-center min-h-60">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-secondary border-t-transparent"></div>
      </div>
    );
   }


  return (
    <>
    <main className="flex flex-col md:flex-row">
        
        <Filtro categorias={categorias} selecionarCategoria={setCategoriaSelecionada} />
        <Grid
        titulo={'Produtos'}
        subtitulo={'Conheça os produtos da nossa loja'}
        itens={produtosFiltrados}
        acaoCard={adicionarAoCarrinho}
      />
      
    </main>
    </>
  )
}

export default Produtos

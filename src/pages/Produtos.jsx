import { useState, useEffect } from 'react';
import produtos from '../services/produtos.json';
import Grid from '../components/template/Grid';
import Filtro from '../components/organisms/Filtro';

import {adicionarAoCarrinho} from '../services/carrinho.js';

const Produtos = () => {
    const [categoriaSelecionada, setCategoriaSelecionada] = useState('Todos');

   const listaProdutos = Array.isArray(produtos)? produtos : Object.values(produtos).flat();
   const categorias = ['Todos',...new Set(listaProdutos.map((produto) => produto.categoria))];

    const produtosFiltrados =
    categoriaSelecionada === 'Todos'? listaProdutos : listaProdutos.filter((produto) => produto.categoria === categoriaSelecionada);

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

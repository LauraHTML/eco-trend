import { useState, useEffect } from 'react';
import produtos from '../services/produtos.json';
import Grid from '../components/template/Grid';
import Filtro from '../components/organisms/Filtro';

import {adicionarAoCarrinho} from '../services/carrinho.js';

const Promocao = () => {

   const listaProdutos = Array.isArray(produtos)? produtos : Object.values(produtos).flat();
   const emPromocao = true;

    const produtosFiltrados = listaProdutos.filter((produto) => produto.promocao === emPromocao);

  return (
    <main className="flex flex-col md:flex-row">
        <Grid
        titulo={'Promoção'}
        subtitulo={'Conheça os produtos da nossa loja'}
        itens={produtosFiltrados}
        acaoCard={adicionarAoCarrinho}
      />
      
    </main>
  )
}

export default Promocao

import React from 'react';
import produtos from '../services/produtos.json';
import Grid from '../components/template/Grid';

const Produtos = () => {
  return (
    <>
    <div>
        <p>Produtos</p>
        <Grid
        titulo={'produtos'}
        subtitulo={'aaa'}
        itens={produtos}
      />
    </div>
    </>
  )
}

export default Produtos

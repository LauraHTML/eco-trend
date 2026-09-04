import { useState, useEffect } from 'react';

import produtos from '../services/produtos.json';
import Grid from '../components/template/Grid';
import Filtro from '../components/organisms/Filtro';

import { buscarProdutos } from '../services/produtos.js'; 
import {adicionarAoCarrinho} from '../services/carrinho.js';

const Promocao = () => {

  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true); 

  const listaProdutos = Array.isArray(produtos)? produtos : Object.values(produtos).flat();
  const emPromocao = true;

  const produtosFiltrados = listaProdutos.filter((produto) => produto.promocao === emPromocao);


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

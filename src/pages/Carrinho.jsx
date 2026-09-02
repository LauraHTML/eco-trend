import React from 'react';
import { useState, useEffect } from 'react';

import produtos from '../services/produtos.json';

const Carrinho = () => {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    const dados = localStorage.getItem('carrinho');
    console.log(dados)
    try {
      setPedidos(dados ? JSON.parse(dados) : []);
    } catch {
      setPedidos([]);
    };
  },[]);

  console.log(pedidos);

  return (
    <>
    <main>
      <div className='bg-card border p-4 rounded-xl m-3'>
        <h2>Pedido</h2>
        <section className=''>
          {pedidos.length === 0 ? (
          <h3>Seu carrinho está vazio</h3>
          
        ) : (
          pedidos.map((produto) => (
            <div key={produto.id} className='border rounded-md mb-3 p-2'>
              <h3>{produto.nome}</h3>
              <p>Quantidade: {produto.quantidade}</p>
              <p>R$ {produto.preco}</p>
            </div>
          ))
        ) }
        </section>
        
        
      </div>
    </main>
    </>
  )
}

export default Carrinho

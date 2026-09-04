import React from 'react'
import Card from '../organisms/Card'

const Grid = ({ titulo = 'titulo', subtitulo = 'subtitulo', itens = [], acaoCard }) => {
  return (
    <section className='container mx-auto max-w-5xl flex flex-col items-start gap-4'>
      <div>
        <h1>{titulo}</h1>
        <h4>{subtitulo}</h4>
      </div>
      {/* numero de linhas e colunas */}

      <div className='mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-stretch'>
        {Object.entries(itens).map(([chave, valor]) => (
          <Card
            key={valor.id}
            titulo={valor.nome}
            imagem={valor.imagem}
            categorias={valor.categorias || []}
            desc={valor.descricao}
            preco={valor.preco}
            acao={() => acaoCard(valor)} />
        ))}
      </div>
      
    </section>
  )
}

export default Grid

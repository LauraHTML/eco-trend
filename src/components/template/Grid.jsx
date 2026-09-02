import React from 'react'
import Card from '../organisms/Card'

const Grid = ({ titulo = 'titulo', subtitulo = 'subtitulo', itens = [] }) => {
  return (
    <section className='container mx-auto max-w-5xl flex flex-col items-center gap-4'>
      <div>
        <h1>{titulo}</h1>
        <h4>{subtitulo}</h4>
      </div>
      {/* numero de linhas e colunas */}
      <div className='grid grid-cols-3 gap-3'>
        {Object.entries(itens).map(([chave, valor]) => (
          <Card
            key={valor.id}
            titulo={valor.nome}
            categorias={valor.categorias || []}
            desc={valor.descricao}
            preco={valor.preco} />
        ))}
      </div>
    </section>
  )
}

export default Grid

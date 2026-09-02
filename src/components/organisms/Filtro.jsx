import React from 'react'
import Button from '../molecules/Button';

const Filtro = ({categorias, selecionarCategoria}) => {
  return (
    <aside className='bg-card border rounded-e-md my-6 h-fit'>
        <div className='border-b-2 p-2 px-4'>
         <h4>Filtro</h4>
        <p>Categorias</p>   
        </div>
        {categorias.map((categoria) => (
            <div key={categoria} className='py-1 px-2'>
               <Button nome={categoria} acao={() => selecionarCategoria(categoria)} /> 
            </div>
        ))}
        
    </aside>
  )
}

export default Filtro

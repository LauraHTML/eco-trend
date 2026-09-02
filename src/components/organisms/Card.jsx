import React from 'react';
import Button from '../molecules/Button';

const Card = ({ titulo = 'card', categorias = [], desc = 'lorem ipsum', acao, preco }) => {
    return (
        <div className='bg-card p-4 border rounded-md flex flex-col gap-6 w-full max-w-xl m-2'>
            {/* header */}
            <div>
                <h3>{titulo}</h3>
                <div className='grid grid-flow-col gap-2'>
                    {categorias.map((categoria) => {
                        <span key={categoria}>{categoria}</span>
                    })}
                </div>
            </div>
            {/* body */}
            <div className='border-b-2 border-dashed py-2'>
                <img src={'/src/assets/hero.png'} height={150} width={200}/>
                <p className='text-muted-foreground'>{desc}</p>
            </div>
            {/* actions */}
            <div className='flex justify-between items-center px-2'>
                <p>R$ {preco}</p>
                <Button estilizacao={'rounded-md bg-secondary'} nome={'Comprar'} acao={acao} />
            </div>
        </div>
    )
}

export default Card
import React from 'react';
import Button from '../molecules/Button';

const Card = ({ titulo = 'card', categorias = [], desc = 'lorem ipsum', acao, preco }) => {
    return (
        <div className='bg p-2 border rounded-md flex flex-col gap-2 w-full max-w-xl m-2'>
            {/* header */}
            <div>
                <h2>{titulo}</h2>
                <div className='grid grid-flow-col gap-2'>
                    {categorias.map((categoria) => {
                        <span key={categoria}>{categoria}</span>
                    })}
                </div>
            </div>
            {/* body */}
            <div>
                <p className='text-muted-foreground'>{desc}</p>
            </div>
            {/* actions */}
            <div className='flex justify-between'>
                <p>R$ {preco}</p>
                <Button estilizacao={'rounded-md p-2'} nome={'Comprar'} />
            </div>
        </div>
    )
}

export default Card
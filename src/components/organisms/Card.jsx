import Button from '../molecules/Button';

const Card = ({ titulo = 'card', categorias = [], desc = 'lorem ipsum', acao, preco }) => {
    return (
        <article className='bg-card p-4 border rounded-md flex flex-col gap-6 w-full max-w-xl m-2 h-full min-h-90'>
            {/* header */}
            <div>
                <h3>{titulo}</h3>
            </div>
            {/* body */}
            <div className='border-b-2 border-dashed py-4'>
                <img src={'/src/assets/hero.png'} height={150} width={200}/>
                <p className='text-muted-foreground line-clamp-3'>{desc}</p>
            </div>
            {/* actions */}
            <div className='flex flex-col md:flex-row justify-between items-center px-2 mt-auto'>
                <p>R$ {preco}</p>
                <Button estilizacao={'rounded-md bg-secondary hover:bg-secondary/85 active:scale-95'} nome={'Comprar'} acao={acao} />
            </div>
        </article>
    )
}

export default Card
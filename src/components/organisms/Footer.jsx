import Button from '../molecules/Button';

const Footer = () => {
  return (
    <footer className="flex flex-col bg-primary rounded-bl-full rounded-tl-full m-4 ms-10 p-2">
      <nav className="grid grid-cols-4 px-2">
        <h2>Slogan bem legal da marca</h2>
        <ul className="justify-between">
          <h3>Suporte</h3>
          <li>Geral</li>
          <li>Em promoção</li>
          <li>aaa</li>
          <li>aaa</li>
        </ul>
        <ul className="justify-between">
          <h3>Navegação</h3>
          <li>Geral</li>
          <li>Em promoção</li>
          <li>aaa</li>
          <li>aaa</li>
        </ul>
        <div id="form" className="bg-secondary flex flex-col gap-3 items-start">
          <h3>Fique por dentro das últimas criações</h3>
          <form action="">
            <input className='bg-background p-2 rounded-md text-input-foreground' placeholder='Digite o seu email' type="text" />
            <Button estilizacao={'bg-secondary p-2 border rounded-md mx-2 transition-3 hover:bg-secondary'} nome={'Inscreva-se'} />
          </form>
          <h3>Nos siga nas redes sociais:</h3>
          <div className='grid grid-cols-3'>
            <span>insta</span>
            <span>x</span>
            <span>facebook</span>
          </div>
        </div>
      </nav>
      <div id='logo' className="bg-secondary col-span-2">
        <h2>EcoTrend</h2>
      </div>
    </footer>
  )
}

export default Footer

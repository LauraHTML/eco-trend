import Button from '../molecules/Button';

const Footer = () => {
  return (
    <footer className="flex flex-col bg-primary m-4 p-2 rounded-xl">
      <nav className="grid grid-cols-6 px-2">
        <div className="flex flex-col gap-3 items-start col-span-2">
          <h2>Slogan bem legal da marca</h2>
        </div>

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
        <div id="form" className="flex flex-col gap-3 items-start col-span-2 bg-background m-2 rounded-md p-4">
          <h3>Fique por dentro das últimas criações</h3>
          <form action="" className='flex flex-wrap gap-0 w-auto'>
            <input className='bg-background p-2 rounded-md text-input-foreground' placeholder='Digite o seu email' type="text" />
            <Button estilizacao={'bg-secondarys border rounded-md mx-2 transition-3 hover:bg-secondary'} nome={'Inscreva-se'} />
          </form>
          <h3>Nos siga nas redes sociais:</h3>
          <div className='flex flex-wrap'>
            <span>insta</span>
            <span>x</span>
            <span>facebook</span>
          </div>
        </div>
      </nav>
      <div id='logo' className="col-span-2">
        <h2>EcoTrend</h2>
      </div>
    </footer>
  )
}

export default Footer

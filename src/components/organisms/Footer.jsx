import Button from '../molecules/Button';

const Footer = () => {
  return (
    <footer className="flex flex-col bg-primary b m-4 p-2 rounded-xl text-card mt-10">

      <nav className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 items-stretch px-2 mt-10">

        <div className="flex flex-col gap-3 items-start col-span-2 px-4">
          <h3>
            Ajudando a restaurar o ecossistema costeiro um acessório por vez
          </h3>
          <p>
            A EcoTrend transforma materiais reaproveitados em acessórios
            únicos, contribuindo para a preservação dos nossos oceanos.
          </p>
        </div>

        <ul className="justify-between">
          <h3>Suporte</h3>
          <li>Contato</li>
          <li>Trocas e devoluções</li>
          <li>Formas de pagamento</li>
          <li>Envio e entrega</li>
        </ul>

        <ul className="justify-between">
          <h3>Navegação</h3>
          <li>Produtos</li>
          <li>Promoções</li>
          <li>Sobre nós</li>
          <li>Meu carrinho</li>
        </ul>

        <div
          id="form"
          className="text-primary-foreground flex flex-col gap-3 items-start col-span-2 bg-primary m-2 rounded-md p-4"
        >
          <h3>Fique por dentro das últimas criações</h3>

          <form action="" className="flex flex-wrap gap-0 w-auto">
            <input
              className="bg-input p-2 rounded-md text-input-foreground"
              placeholder="Digite o seu email"
              type="text"
            />

            <Button
              estilizacao={'bg-secondarys border rounded-md mx-2 transition-3 hover:bg-secondary'}
              nome={'Inscreva-se'}
            />
          </form>

          <h3>Nos siga nas redes sociais:</h3>

          <div className="flex flex-wrap gap-4">
            <span>Instagram</span>
            <span>X</span>
            <span>Facebook</span>
          </div>
        </div>

      </nav>

      <div id="logo" className="col-span-2 flex flex-row items-center gap-2">
        <img
          src="/ecotrend.png"
          alt="Logo com formato de tartaruga da EcoTrend"
          width={100}
          height={100}
        />

        <h2>EcoTrend</h2>
      </div>

    </footer>
  )
}

export default Footer
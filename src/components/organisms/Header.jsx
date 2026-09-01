

const Header = () => {
  return (
    <header className=''>
        <nav className='flex flex-col md:flex-row justify-around items-center my-3'>
            <span>EcoTrend</span>
            <ul className='flex flex-col md:flex-row gap-4'>
                <li>Geral</li>
                <li>Em promoção</li>
                <li>Coleções</li>
                <li>Reviews</li>
            </ul>
            <span>Carrinho</span>
        </nav>
    </header>
  )
}

export default Header

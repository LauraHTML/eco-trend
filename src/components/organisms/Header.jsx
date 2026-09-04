import NavLink from '../molecules/NavLink';
import Button from '../molecules/Button';

import { ShoppingCart } from 'lucide-react';

const Header = () => {
  return (
    <header className=''>
        <nav className='flex flex-col md:flex-row justify-around items-center my-3'>

            <div id="logo" className="col-span-2 flex flex-row items-center gap-2">
                <img
                src="/ecotrend.png"
                alt="Logo com formato de tartaruga da EcoTrend"
                width={100}
                height={100}
                />

                <h2 >EcoTrend</h2>
            </div>

            <ul className='flex flex-col md:flex-row gap-20 bg-muted rounded-full p-4 px-5'>
                <li><NavLink href={'/'} link={'Inicio'}/></li>
                <li><NavLink href={'/produtos'} link={'Produtos'}/></li>
                <li><NavLink href={'/promocao'} link={'Em promoção'}/></li>
                <li><NavLink href={'/sobre-nos'} link={'Sobre nós'}/></li>
            </ul>
            <ul className='flex flex-col md:flex-row gap-4 bg-muted rounded-full p-4 px-5'>
                <li><NavLink href={'/Carrinho'} link={'Carrinho'} /></li>
            </ul>
            
        </nav>
    </header>
  )
}

export default Header

import NavLink from '../molecules/NavLink';
import Button from '../molecules/Button';

import { ShoppingCart } from 'lucide-react';

const Header = () => {
  return (
    <header className=''>
        <nav className='flex flex-col md:flex-row justify-around items-center my-3'>
            <span>EcoTrend</span>
            <ul className='flex flex-col md:flex-row gap-4 bg-muted rounded-full p-4 px-5'>
                <li><NavLink href={'/Produtos'} link={'Geral'}/></li>
                <li><NavLink link={'Em promoção'}/></li>
                <li><NavLink href={'/Sobre'} link={'Sobre nós'}/></li>
                <li><NavLink link={'Reviews'}/></li>
            </ul>
            <ul className='flex flex-col md:flex-row gap-4 bg-muted rounded-full p-4 px-5'>
                <li><NavLink href={'/Carrinho'} link={'Carrinho'} /></li>
            </ul>
            
        </nav>
    </header>
  )
}

export default Header

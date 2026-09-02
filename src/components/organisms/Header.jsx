import NavLink from '../molecules/NavLink';
import Button from '../molecules/Button';

import { ShoppingCart } from 'lucide-react';

const Header = () => {
  return (
    <header className=''>
        <nav className='flex flex-col md:flex-row justify-around items-center my-3'>
            <span>EcoTrend</span>
            <ul className='flex flex-col md:flex-row gap-4 bg-muted rounded-full p-4 px-5'>
                <li><NavLink link={'Geral'}/></li>
                <li><NavLink link={'Em promoção'}/></li>
                <li><NavLink link={'Coleções'}/></li>
                <li><NavLink link={'Reviews'}/></li>
            </ul>
            <Button icone={ShoppingCart} nome={'Carrinho'} estilizacao={'bg-primary p-2 rounded-full text-primary-foreground '} />
        </nav>
    </header>
  )
}

export default Header

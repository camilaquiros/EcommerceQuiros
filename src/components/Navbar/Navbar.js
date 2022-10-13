import './Navbar.scss'
import {Link, NavLink} from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {
    return (
        <header>
            <div className='logoMenu'>
                <Link to={'/'} id="logo">
                    <div>Maquill-AR</div>
                </Link>
                <div className="menu">
                    <NavLink to={'/category/Bases'} className={({isActive}) => isActive? 'categoriaActivaNavbar' : 'categoriaNavbar'}>Bases</NavLink>
                    <NavLink to={'/category/Labiales'} className={({isActive}) => isActive? 'categoriaActivaNavbar' : 'categoriaNavbar'}>Labiales</NavLink>
                    <NavLink to={'/category/Mascaras'} className={({isActive}) => isActive? 'categoriaActivaNavbar' : 'categoriaNavbar'}>Mascaras</NavLink>
                    <NavLink to={'/category/Paletas'} className={({isActive}) => isActive? 'categoriaActivaNavbar' : 'categoriaNavbar'}>Paletas</NavLink>
                    <NavLink to={'/category/Brochas'} className={({isActive}) => isActive? 'categoriaActivaNavbar' : 'categoriaNavbar'}>Brochas</NavLink>
                    <NavLink to={'/category/Esmaltes'} className={({isActive}) => isActive? 'categoriaActivaNavbar' : 'categoriaNavbar'}>Esmaltes</NavLink>
                </div>
            </div>
            <CartWidget />
        </header>
    )
}

export default Navbar;
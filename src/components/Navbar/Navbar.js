import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {
    return (
        <header>
            <div className='logoMenu'>
                <div id="logo">
                    <a href="" >Maquill-AR</a>
                </div>
                <div className="menu">
                    <a href="">Productos</a>
                    <a href="">Contacto</a>
                </div>
            </div>
            <CartWidget />
        </header>
    )
}

export default Navbar;
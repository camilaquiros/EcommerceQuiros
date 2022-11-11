import './Cart.scss'
import { useContext, useEffect } from "react"
import { CartContext } from "../../context/CartContext"
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'

const Cart = () => {

    useEffect(() => {
        document.title = 'Carrito'
    }, [])

    const { cart, clearCart, totalQuantity, total} = useContext(CartContext)  

    if(totalQuantity === 0) {
        return (
            <div className='cartContainer'>
                <h1 className='cartTitle'>No hay productos en el carrito</h1>   
            </div>
        )
    }

    return(
        <div className='cartContainer'>
            <h1 className='cartTitle'>Carrito de compras</h1>
            <div className='cartItemsContainer'>
                { cart.map(p => <CartItem key={p.id} {...p}/>) }
            </div>
                <h3>Total: U$S{total}</h3>
            <div className='cartButtons'>
                <button onClick={() => clearCart()} className="buttonClearCart">Limpiar carrito</button>
                <Link to='/checkout' className='buttonCheckout'>Finalizar compra</Link>
            </div>
        </div>
    )
}

export default Cart
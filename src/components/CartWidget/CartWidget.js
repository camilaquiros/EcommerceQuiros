import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { useNavigate } from 'react-router-dom'

const CartWidget = () => {

    const { totalQuantity} = useContext(CartContext) 

    const navigate = useNavigate()


    return (
        <button className="iconos" onClick={() => navigate('/cart')}>
            <FontAwesomeIcon icon={faCartShopping} />
            <p>{totalQuantity}</p>
        </button>

    )
}

export default CartWidget;
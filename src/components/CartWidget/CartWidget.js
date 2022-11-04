import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'


const CartWidget = () => {

    const { getQuantity } = useContext(CartContext)

    const quantity = getQuantity()

    return (
        <div className="iconos">
            <FontAwesomeIcon icon={faCartShopping} />
            <p>{quantity}</p>
        </div>

    )
}

export default CartWidget;
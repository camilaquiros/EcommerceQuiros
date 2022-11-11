import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";


const CartItem = ({id, imagen, nombre, cantidad, precio}) => {
    const { removeItem } = useContext(CartContext)

    const navigate = useNavigate()

    const handleRemove = (id) => {
        removeItem(id)
    }

    return (
        <div className="cartItem">
            <div className="cartImg">
                <img src={`${imagen}`} alt={nombre} onClick={() => navigate(`/item/${id}`)}/>
            </div>
            <div>
                {nombre}
            </div>
            <div>
                {cantidad}
            </div>
            <div>
                U$S{precio}
            </div>
            <div>
                Subtotal: U$S{precio*cantidad}
            </div>
            <div className="buttonCartItem">
                <button onClick={() => handleRemove(id)}><FontAwesomeIcon icon={faTrash} /></button>  
            </div>
        </div>
    )
}

export default CartItem
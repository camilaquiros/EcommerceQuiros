import { useContext } from "react";
import { CartContext } from "../../context/CartContext";


const CartItem = ({id, imagen, nombre, cantidad, precio}) => {
    const { removeItem } = useContext(CartContext)



    const handleRemove = (id) => {
        removeItem(id)
    }

    return (
        <div>
            <div>
                <img src={`${imagen}`} alt={nombre}/>
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
            <div>
                <button className='ButtonCartItem' onClick={() => handleRemove(id)}>X</button>  
            </div>
        </div>
    )
}

export default CartItem
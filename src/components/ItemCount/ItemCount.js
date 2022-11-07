import React from 'react'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemCount = ({stock, initial = 1, onAdd})=> {

    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if(quantity < stock) {
            setQuantity(quantity+1)
        }
    }

    const decrement = () => {
        if(quantity > 1) {
            setQuantity(quantity - 1)
        }     
    }

    return(
        <div className='counter'>          
                <div className='controls'>
                    <button className="buttonQuantity" id='decrement' onClick={decrement}>-</button>
                    <h4 className='numberQuantity'>{quantity}</h4>
                    <button className="buttonQuantity" id='increment' onClick={increment}>+</button>
                </div>
                <div className="buttonCart">
                    <button className={stock === 0? 'disabled': 'abled'} onClick={event => {
                        onAdd(quantity);
                        toast.success("Producto agregado al carrito");
                        }} disabled={stock === 0? true: false}>{stock === 0? 'Sin stock': 'Agregar al carrito'} </button>
                    <ToastContainer
                    position="top-center"
                    autoClose={1500}
                    hideProgressBar
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="colored"
                    closeButton={false} 
                    />
                </div>
        </div>
    )
}

export default ItemCount
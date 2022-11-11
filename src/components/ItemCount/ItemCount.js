import React from 'react'
import { useState } from 'react'
import Swal from 'sweetalert2'

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
                        Swal.fire({
                            title: '¡Producto agregado al carrito!',
                            toast: true,
                            position: 'top',
                            showConfirmButton: false,
                            timer: 2000,
                            timerProgressBar:true,
                            width: '25vw',
                            padding: '2%',
                            customClass: 'swalSuccess',
                        })
                        }} disabled={stock === 0? true: false}>{stock === 0? 'Sin stock': 'Agregar al carrito'} </button>
                </div>
        </div>
    )
}

export default ItemCount
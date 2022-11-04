import { useState, createContext } from "react"


export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const[cart, setCart] = useState([])

    const addItem = (productToAdd) => {
      if(!isInCart(productToAdd.id)){
        setCart([...cart, productToAdd])
      }
    }
  
    const isInCart = (id) => {
      return cart.some(prod => prod.id === id)
    }

    const removeItem = (id) => {
        const cartWithoutProduct = cart.filter(prod => prod.id !== id)
        setCart(cartWithoutProduct)
    }

    const getQuantity = () => {
        let accu = 0

        cart.forEach(prod => {
            accu += prod.cantidad
        })

        return accu
    }

    return (
        <CartContext.Provider value={{cart, addItem, removeItem, getQuantity}}>
            {children}
        </CartContext.Provider>

    )
}
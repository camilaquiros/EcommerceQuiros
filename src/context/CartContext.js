import { useState, useEffect, createContext, useContext } from "react"

export const CartContext = createContext({
    cart: [],
    totalQuantity: 0
})

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    const [totalQuantity, setTotalQuantity] = useState(0)
    const [total, setTotal] = useState(0)

    useEffect(() => {
        const totalQty = getQuantity()
        setTotalQuantity(totalQty)
    }, [cart]) //eslint-disable-line

    useEffect(() => {
        const total = getTotal()
        setTotal(total)
      }, [cart]) //eslint-disable-line

    const addItem = (productToAdd, cantidad) => {
        if(!isInCart(productToAdd.id)) {
            productToAdd.cantidad = cantidad
            setCart([...cart, productToAdd])
        } else {
            const cartUpdated = cart.map(prod => {
                if(prod.id === productToAdd.id) {
                    const productUpdated = {
                        ...prod,
                        cantidad: cantidad
                    }

                    return productUpdated
                } else {
                    return prod
                }
            })

            setCart(cartUpdated)
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

    const getTotal = () => {
        let accu = 0
  
        cart.forEach(prod => {
            accu += prod.cantidad * prod.precio
        })
  
        return accu
    }

    const clearCart = () => {
        setCart([])
    }

    const getProductQuantity = (id) => {
        const product = cart.find(prod => prod.id === id)

        return product?.cantidad
    }

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, isInCart, totalQuantity, total, clearCart, getProductQuantity }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    return useContext(CartContext)
}
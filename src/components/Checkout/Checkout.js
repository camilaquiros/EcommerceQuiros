import { useState, useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { addDoc, collection, getDocs, query, where, documentId, writeBatch } from "firebase/firestore"
import { db } from "../../services/firebase"
import { useNavigate } from "react-router-dom"
import { FormCheckout } from "../FormCheckout/FormCheckout"
import { ToastContainer, toast } from 'react-toastify';


const Checkout = () => {

    const [loading, setLoading] = useState(false)

    const [inputs, setInputs] = useState({});

    const { cart, total, clearCart } = useContext(CartContext)

    const navigate = useNavigate()

    const createOrder = async() => {
        setLoading(true)

        try{
            const objOrder = {
                buyer: {
                    fullname:"camila",
                    email: "inputs.email",
                    phone: "inputs.phone"
                },
                items: cart,
                total: total
            }

            const batch = writeBatch(db)

            const outOfStock = []
    
            const ids = cart.map(prod => prod.id)
    
            const productsRef = collection(db, 'products')
    
            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))

            const { docs } = productsAddedFromFirestore

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stockDb

                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.cantidad

                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, { cantidad: stockDb - prodQuantity })
                }else {
                    outOfStock.push({ id: doc.id, ...dataDoc})
                }
            })

            if(outOfStock.length === 0) {
                await batch.commit()

                const orderRef = collection(db, 'orders')

                const orderAdded = await addDoc(orderRef, objOrder)

                clearCart()

                setTimeout(() => {
                    navigate('/')
                }, 3000)

                //Toastify orden generada

                return(
                    <div>
                    <p>{toast.success(`El id de su orden es: ${orderAdded.id}`)}</p>
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
                )

            } else {
                //Toastify
                console.log('Hay productos fuera de stock')
            }

        } catch(error) {
            //Toastify
            console.log(error)
        } finally {
            setLoading(false)
        }

    }

    if(loading) {
        return <h1>Se esta generando su orden</h1>
    }

    return (
        <div>
            <h1>Checkout</h1>
            <FormCheckout />
            <button onClick={createOrder}>Generar orden</button>
        </div>
    )
}

export default Checkout
import './Checkout.scss'
import { useState, useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { addDoc, collection, getDocs, query, where, documentId, writeBatch } from "firebase/firestore"
import { db } from "../../services/firebase"
import { useNavigate } from "react-router-dom"
import { FormCheckout } from "../FormCheckout/FormCheckout"
import Swal from 'sweetalert2'
import { SwalError } from '../../services/SweetAlert/SwalError'


const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const { cart, total, clearCart } = useContext(CartContext)
    const [userData, setUserData] = useState(false)
    const [dataSubmit, setDataSubmit] = useState({})

    const data = (inputs) =>{
        setDataSubmit({...inputs})
        setUserData(true)
    }

    const navigate = useNavigate()

    const createOrder = async () => {
        setLoading(true)

        try {
            const objOrder = {
                buyer: dataSubmit,
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
                const stockDb = dataDoc.cantidad

                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.cantidad

                if(stockDb >= prodQuantity && productAddedToCart !== undefined) {
                    batch.update(doc.ref, { cantidad: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc});
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

                Swal.fire({
                    title: '¡Gracias por su compra!',
                    text: `El id de su orden es: ${orderAdded.id}`,
                    toast: true,
                    customClass: 'swalSuccess',
                })

            } else {
                Swal.fire({
                    title: 'Lo sentimos',
                    text: 'Uno de los productos de su carrito esta fuera de stock',
                    toast: true,
                    customClass: 'swalError'
                })

                setTimeout(() => {
                    navigate('/cart')
                }, 3000)
            }

        } catch (error) {
            <SwalError />
        } finally {
            setLoading(false)
        }
        
    }

    if(loading) {
        return(
            <div className='checkoutContainer'>
                <h1>Se esta generando su orden...</h1>
            </div>
        )
    }

    return (
        <div className='checkoutContainer'>
            <h1>Checkout</h1>
            <div className='formContainer'>
                <FormCheckout formData={data}/>
            </div>
            {userData ? <button onClick={createOrder} className='buttonOrder'>Generar orden</button> : ""}
        </div>
    )
}

export default Checkout
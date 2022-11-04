import { useState, useEffect } from 'react';
import './ItemDetailContainer.scss';
import ItemDetail from '../ItemDetail/ItemDetail';
import {useParams} from 'react-router-dom'
import Spinner from '../Spinner/Spinner';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../services/firebase';

const ItemDetailContainer = () => {
    const [product , setProduct] = useState([])
    const [loading, setLoading] = useState(true)

    const {productId} = useParams()

    useEffect(() => {
        const docRef = doc(db, 'products', productId)
        getDoc(docRef).then(response => {
            const data = response.data()
            const productAdapted = {id: response.id, ...data}
            setProduct(productAdapted);
        }).finally(() => {
            setLoading(false);
        })
    }, [productId])

    return (
        <div className='cardContainer'>
            {loading? (<Spinner/>) : (<ItemDetail {...product}/>)}
        </div>
        
        
    )
}

export default ItemDetailContainer;
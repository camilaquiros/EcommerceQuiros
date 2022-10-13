import { useState, useEffect } from 'react';
import './ItemDetailContainer.scss'
import { getProductById } from '../asyncMock';
import ItemDetail from '../ItemDetail/ItemDetail';
import {useParams} from 'react-router-dom'
import Spinner from '../Spinner/Spinner';

const ItemDetailContainer = () => {
    const [product , setProduct] = useState([])
    const [loading, setLoading] = useState(true)

    const {productId} = useParams()

    useEffect(() => {
        getProductById(productId).then(product => {
            setProduct(product)
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
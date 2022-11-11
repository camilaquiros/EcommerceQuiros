import { useEffect } from 'react';
import './ItemDetailContainer.scss';
import ItemDetail from '../ItemDetail/ItemDetail';
import {useParams} from 'react-router-dom'
import Spinner from '../Spinner/Spinner';
import { getProduct } from '../../services/firebase/firestore/products';
import { useAsync } from '../../hooks/useAsync';
import { SwalError } from '../../services/SweetAlert/SwalError';


const ItemDetailContainer = () => {
    const {productId} = useParams()

    const getProductDetail = () => getProduct(productId)

    const {data: product, error, loading} = useAsync(getProductDetail, [productId])

    useEffect(() => {
        document.title = loading? 'Cargando':`${product.nombre}`
    }, [loading, product.nombre])

    if(error) {
        <SwalError />
    }

    return (
        <div className='cardContainer'>
            {loading? (<Spinner/>) : (<ItemDetail key= {product.id} {...product}/>)}
        </div>
    )

}

export default ItemDetailContainer;
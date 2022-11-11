import {useEffect} from 'react'
import './ItemListContainer.scss'
import ItemsList from '../ItemsList/ItemsList';
import { useParams } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';
import { getProducts } from '../../services/firebase/firestore/products';
import { useAsync } from '../../hooks/useAsync';
import { SwalError } from '../../services/SweetAlert/SwalError';


const ItemListContainer = () => {
    const{categoryId} = useParams()

    const getProductsWithCategory = () => getProducts(categoryId)

    const {data: products, error, loading} = useAsync(getProductsWithCategory, [categoryId])

    useEffect(() => {
        document.title = categoryId? `${categoryId}`:'Productos'
    }, [categoryId])

    if(error) {
        <SwalError />
    }

    return (
        <div>
            {loading? (<Spinner/>) : (<ItemsList products={products}/>)}
        </div>
    )
}

export default ItemListContainer;
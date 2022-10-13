import {useState, useEffect} from 'react'
import './ItemListContainer.scss'
import {getProducts, getProductsByCategory} from '../asyncMock';
import ItemsList from '../ItemsList/ItemsList';
import { useParams } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const{categoryId} = useParams()

    useEffect(() => {
        setLoading(true);
        const asyncFunction = categoryId ? getProductsByCategory : getProducts;

        asyncFunction(categoryId).then(products => {
        setProducts(products)
        }).finally(() => {
        setLoading(false);
        })
    }, [categoryId])

    return (
        <div>
            {loading? (<Spinner/>) : (<ItemsList products={products}/>)}
        </div>
    )
}

export default ItemListContainer;
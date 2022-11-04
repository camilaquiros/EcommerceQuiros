import {useState, useEffect} from 'react'
import './ItemListContainer.scss'
import ItemsList from '../ItemsList/ItemsList';
import { useParams } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../../services/firebase';

const ItemListContainer = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const{categoryId} = useParams()

    useEffect(() => {
        setLoading(true);

        const collectionRef = categoryId
        ? query(collection(db, 'products'), where('categoria', '==', categoryId))
        :collection(db, 'products')

        getDocs(collectionRef).then(response => {
            const productsAdapted = response.docs.map(doc => {
                const data = doc.data()
                return {id: doc.id, ...data}
            })
            setProducts(productsAdapted)
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
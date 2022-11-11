import './Navbar.scss'
import {Link, NavLink} from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget';
import { useState, useEffect } from 'react';
import { getDocs, collection, query, orderBy } from 'firebase/firestore'
import { db } from '../../services/firebase'



const Navbar = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {

        const collectionRef = query(collection(db, 'categories'), orderBy('order'))

        getDocs(collectionRef).then(response => {

            const categoriesAdapted = response.docs.map(doc => {
                const data = doc.data()
                const id = doc.id

                return {id, ...data}
            })
            setCategories(categoriesAdapted)
        })
    }, [])

    return (
        <header>
            <div className='logoMenu'>
                <Link to={'/'} id="logo">
                    <div>Maquill-AR</div>
                </Link>
                <div className="menu">
                    {categories.map(cat => (
                        <NavLink key={cat.id} to={`/category/${cat.slug}`} className={({isActive}) => isActive? 'categoriaActivaNavbar' : 'categoriaNavbar'}>{cat.label}</NavLink>
                    ))}
                </div>
            </div>
            <CartWidget />
        </header>
    )
}

export default Navbar;
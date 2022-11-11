import './Footer.scss'
import {Link} from 'react-router-dom'
import { useState, useEffect } from 'react';
import { getDocs, collection, query, orderBy } from 'firebase/firestore'
import { db } from '../../services/firebase'

export const Footer = () => {
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

    return(
        <footer>
        <div className="footerRight">
            <ul className="footerNav">
                <li>
                    {categories.map(cat => (
                        <Link key={cat.id} to={`/category/${cat.slug}`} className={({isActive}) => isActive? 'categoriaActivaNavbar' : 'categoriaNavbar'}>{cat.label}</Link>
                    ))}
                </li>
            </ul>
            <p>Desarrollado por <a href="../index.html">Camila Quirós</a></p>
        </div>
        <ul class="socials">
            <li><a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-instagram"></i>
                <p>Instagram</p>
            </a></li>
            <li><a href="https://www.linkedin.com/in/camilaquiros/" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-linkedin"></i>
                <p>LinkedIn</p>
            </a></li>
            <li><a href="https://github.com/camilaquiros?tab=repositories" target="_blank" rel="noreferrer">
                <i className="fa-brands fa-github"></i>
                <p>GitHub</p>
            </a></li>
        </ul>
    </footer>
    )
}
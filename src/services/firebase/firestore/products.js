import { getDocs, collection, query, where, getDoc, doc } from 'firebase/firestore';
import { db } from '..';


export const getProducts = (categoryId) => {
    return new Promise((resolve, reject) => {
        const collectionRef = categoryId
        ? query(collection(db, 'products'), where('categoria', '==', categoryId))
        :collection(db, 'products')

        getDocs(collectionRef).then(response => {
            const productsAdapted = response.docs.map(doc => {
                const data = doc.data()
                return {id: doc.id, ...data}
            })
            resolve(productsAdapted)
        }).catch(error => {
            reject(error)
        })
    })
}

export const getProduct = (productId) => {
    return new Promise ((resolve,reject) =>{
        const docRef = doc(db, 'products', productId)

        getDoc(docRef)
        .then(response => {

            const data = response.data()
            const productAdapted = { id: response.id, ...data }
            resolve(productAdapted)
        })

            .catch(error => {
                reject(error)
            })

    })
}
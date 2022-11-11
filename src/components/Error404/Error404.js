import './Error404.scss'
import { useEffect } from 'react'

const Error404 = () => {

    useEffect(() => {
        document.title = '404'
    }, [])

    return (
        <div className='error'>
            <img src='https://firebasestorage.googleapis.com/v0/b/ecommercequiros.appspot.com/o/404.jpeg?alt=media&token=7d66b8ac-e300-4c89-8386-701156e5cc28' alt='Error 404'></img>
            <div className='errorText'>
                <h1>¡Lo sentimos!</h1>
                <h2>No hemos encontrado lo que buscabas</h2>
            </div>
        </div>
    )
}

export default Error404;
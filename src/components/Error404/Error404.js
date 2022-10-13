import './Error404.scss'

const Error404 = () => {
    return (
        <div className='error'>
            <img src='./images/404.jpeg'></img>
            <div className='errorText'>
                <h1>¡Lo sentimos!</h1>
                <h2>No hemos encontrado lo que buscabas</h2>
            </div>
        </div>
    )
}

export default Error404;
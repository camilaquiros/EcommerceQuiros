import {Link} from 'react-router-dom'


const Item = ({id, nombre, precio, imagen}) => {
    return (
        <div className='card'>
            <div className='cardInterior'>
                <Link to={`/item/${id}`} >
                    <img src={`${imagen}`} alt={nombre}/>
                    <p className='cardNombre'>{nombre}</p>
                    <p className='cardPrecio'>U$S{precio}</p>
                </Link>
            </div>
        </div>
    )
}

export default Item
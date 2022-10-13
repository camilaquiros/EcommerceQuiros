import {Link} from 'react-router-dom'

const Item = ({id, nombre, categoria, precio, descripcion, imagen, cantidad}) => {
    return (
        <div className='card'>
            <div className='cardInterior'>
                <Link to={`/item/${id}`} >
                    <img src={`/images/${imagen}`} alt={nombre}/>
                    <p className='cardNombre'>{nombre}</p>
                    <p className='cardPrecio'>U$S{precio}</p>
                </Link>
            </div>
        </div>
    )
}

export default Item
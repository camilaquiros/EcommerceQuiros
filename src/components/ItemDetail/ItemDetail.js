import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({id, nombre, categoria, precio, descripcion, imagen, cantidad}) => {
    
    const handleOnAdd = (cantidad) => {
        const productToAdd = {
            id, nombre, precio, cantidad
        }
        console.log(productToAdd)
    }

    return (
        <div className="cardDetail">
            <div className="cardInterior detailInterior">
                <img src={`/images/${imagen}`} alt={nombre}/>
                <p className="cardNombreDetail">{nombre}</p>
                <p className="cardDescriptionDetail">{descripcion} </p>
                <p className="cardPrecioDetail">U$S{precio}</p>
                <ItemCount onAdd={handleOnAdd} stock={cantidad} />
            </div>
        </div>
    )
}

export default ItemDetail
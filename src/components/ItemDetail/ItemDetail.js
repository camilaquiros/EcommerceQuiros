import ItemCount from "../ItemCount/ItemCount"
import { useCart } from '../../context/CartContext'


const ItemDetail = ({id, nombre, precio, descripcion, imagen, cantidad}) => {
    
    const { addItem, getProductQuantity } = useCart()

    const handleOnAdd = (cantidad) => {
        const productToAdd = {
            id, nombre, precio, imagen
        }

        addItem(productToAdd, cantidad)
    }

    const quantityAdded = getProductQuantity(id)

    return (
        <div className="cardDetail">
            <div className="cardInterior detailInterior">
                <img src={`${imagen}`} alt={nombre}/>
                <p className="cardNombreDetail">{nombre}</p>
                <p className="cardDescriptionDetail">{descripcion} </p>
                <p className="cardPrecioDetail">U$S{precio}</p>
                <ItemCount onAdd={handleOnAdd} stock={cantidad} initial={quantityAdded} />
            </div>
        </div>
    )
}

export default ItemDetail
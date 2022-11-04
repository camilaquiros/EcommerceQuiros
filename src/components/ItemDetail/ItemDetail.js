import ItemCount from "../ItemCount/ItemCount"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"


const ItemDetail = ({id, nombre, precio, descripcion, imagen, cantidad}) => {
    
    const { addItem } = useContext(CartContext)

    const handleOnAdd = (cantidad) => {
        const productToAdd = {
            id, nombre, precio, cantidad
        }

        addItem(productToAdd)
    }

    return (
        <div className="cardDetail">
            <div className="cardInterior detailInterior">
                <img src={`${imagen}`} alt={nombre}/>
                <p className="cardNombreDetail">{nombre}</p>
                <p className="cardDescriptionDetail">{descripcion} </p>
                <p className="cardPrecioDetail">U$S{precio}</p>
                <ItemCount onAdd={handleOnAdd} stock={cantidad} />
            </div>
        </div>
    )
}

export default ItemDetail
import Item from "../Item/Item";

const ItemsList = ({products}) => {
    return (
        <div className='itemListContainer'>
            <h1>Listado de productos</h1>
            <div className="cardsContainer">
                { products.map(prod => <Item key={prod.id} {...prod}/>) }
            </div>
        </div>

    )
}

export default ItemsList;
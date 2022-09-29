import cart from "./assets/cart.png"

const CartWidget = () => {
    return (
        <div className="iconos">
            <img src={cart} alt='cart'></img>
            <p>0</p>
        </div>

    )
}

export default CartWidget;
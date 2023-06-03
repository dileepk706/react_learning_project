
const CartData=({items})=>{

    return(
            <div className="cart-container">
                <div className="cart-item-image">
                    <img src={items.img} alt="" />
                </div>
                <div className="cart-item-details">
                    <ul>
                        <li>Name:{items.name}</li>
                        <li>Price:{items.price}</li>
                    </ul>
                </div>
            </div>
        
        
    )
}

export default CartData
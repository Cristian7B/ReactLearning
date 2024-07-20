import { useCart } from "../hooks/useCart"

export function CartItem() {
    const {cart, addToCart} = useCart()
    return (
        <>
        {   
                cart.map(item => {
                    return (
                        <li key={item.title}>
                            <img src={item.thumbnail} alt={item.title} />
                            <div>
                                <strong>{item.title}</strong>
                            </div>
                            <footer>
                                <small>
                                    Qty: {item.quantity}
                                </small>
                                <button onClick={() => addToCart(item)}>+</button>
                            </footer>
                        </li>
                    )
                })
        }
        </>     
    )
}
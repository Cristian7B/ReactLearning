import "./Products.css"
import { AddToCartIcon, RemoveFromCartIcon } from "./Icons"
import { useCart } from "../hooks/useCart"

export function Products({products}) {

    const {cart, addToCart, removeFromCart} = useCart()
    const checkProductInCart = product => {
        return cart.some(item => item.id === product.id)
    }
    return(
        <main className="products">
        <ul>
            {
                products.slice(0, 11).map(product => {
                    const isProduct = checkProductInCart(product)
                    const classButton = isProduct ? "remove": ""
                    return ( 
                            <li key={product.id}>
                                <img 
                                    src={product.thumbnail} 
                                    alt={product.title}
                                    />
                                <div>
                                    <strong>{product.title}</strong> - ${product.price}
                                </div>
                                <div>
                                    <button className={`buttonAddRemove ${classButton}`} onClick={() => {isProduct ? removeFromCart(product):addToCart(product)}}>
                                        {
                                            isProduct ? 
                                            <RemoveFromCartIcon/>:
                                            <AddToCartIcon/>
                                        }
                                    </button>
                                </div>
                            </li>
                        )
                    }
                )  
            }
        </ul>
    </main>
    )
}
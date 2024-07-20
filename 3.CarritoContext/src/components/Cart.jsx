import { useId } from "react"
import {ClearCartIcon, CartIcon} from "./Icons"
import "./Cart.css"
import { useCart } from "../hooks/useCart"
import { CartItem } from "./CartItem"
export function Cart() {
    const cartId = useId()
    const {cart, clearCart} = useCart()
    return (
        <>
            <label htmlFor={cartId} className="cart-button">
                <CartIcon/>    
            </label>    
            <input type="checkbox" hidden id={cartId} />

            <aside className="cart">
                <ul>
                    <CartItem/>
                </ul>
                <button onClick={clearCart}>
                    <ClearCartIcon/>
                </button>
            </aside>
        </>
    )
}
import { createContext } from "react"
import { useReducerCart } from "../hooks/useReducerCart"
 
export const CartContext = createContext()

export function CartProvider({children}) {
    const {state, addToCart, removeFromCart, clearCart} = useReducerCart()
    return (
        <CartContext.Provider value={{
            cart: state,
            addToCart,
            removeFromCart,
            clearCart,
        }}>
            {children}
        </CartContext.Provider>
    )
}
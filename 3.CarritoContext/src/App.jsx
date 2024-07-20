import { useState } from "react"
import { Products } from "./components/Products"
import { products as inicialProducts} from "./mocks/products.json"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { useFilter } from "./hooks/useFilters"
import { Cart } from "./components/Cart"
import { CartProvider } from "./context/cart"


function App() {
  const { filterProducts } = useFilter()
  const productsFiltered = filterProducts(inicialProducts)
  
  return (
    <CartProvider>
      <Header/>
      <Cart/>
      <Products products={productsFiltered}/>
    </CartProvider>
  )
}

export default App

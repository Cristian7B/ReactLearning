import { useState } from "react"
import { Products } from "./components/Products"
import { products as inicialProducts} from "./mocks/products.json"
import { Header } from "./components/Header"
function App() {

  const [products] = useState(inicialProducts)
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  })

  const filterProducts = (products) => {
    return products.filter(product => {
      return (
        product.price >= filters.minPrice && 
        (
          product.category === filters.category ||
          filters.category === 'all'
        )
      )
    })
  }

  const productsFiltered = filterProducts(products)

  return (
    <>
      <Header changeFilters={setFilters}/>
      <Products products={productsFiltered}/>
    </>
  )
}

export default App

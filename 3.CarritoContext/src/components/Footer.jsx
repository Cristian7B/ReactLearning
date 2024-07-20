import { useCart } from '../hooks/useCart'
import { useFilter } from '../hooks/useFilters'
import './Footer.css'

export function Footer() {
    const { cart } = useCart()
    const { filters } = useFilter()
    return (
        <footer className="footer">
            {/* {
                JSON.stringify(filters, null, 2)
            } */}
            {
                JSON.stringify(cart, null, 2)
            }
        </footer>
    )
}
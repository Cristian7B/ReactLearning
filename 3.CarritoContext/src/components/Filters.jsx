import { useContext, useId, useState } from "react"
import { FiltersContext, FiltersProvider } from "../context/filters"
import { useFilter } from "../hooks/useFilters"

export function Filters() {
    const minPriceId = useId()
    const categoryId = useId()
    const {filters, setFilters} = useFilter()

    const handleMinPrice = (event) => {
        setFilters(prevState => ({
            ...prevState,
            minPrice: event.target.value
        }
        ))
    }

    const handleCategory = (event) => {
        setFilters(prevState => ({
            ...prevState,
            category: event.target.value
        }
        ))
    }

    return (
        <section className="filters">
            <div className="inputPrice">
                <label htmlFor={minPriceId}>Precio mínimo</label>
                <input 
                    type="range"
                    id={minPriceId}
                    min="0"
                    max="1000"
                    onChange={handleMinPrice}
                    value={filters.minPrice}
                />
                <span>${filters.minPrice}</span>
            </div>
            
            <div className="inputCategory">
                <label htmlFor={categoryId}>Categorías</label>
                <select id={categoryId} onChange={handleCategory}>
                    <option value="all">Todas</option>
                    <option value="laptops">Portátiles</option>
                    <option value="smartphones">Celular</option>
                </select>
            </div>
        </section>
    )
}
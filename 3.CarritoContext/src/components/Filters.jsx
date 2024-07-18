import { useId, useState } from "react"

export function Filters({changeFilters}) {
    const [minPrice, setMinPrince] = useState(0)
    const minPriceId = useId()
    const categoryId = useId()

    const handleMinPrice = (event) => {
        setMinPrince(event.target.value)
        changeFilters(prevState => ({
            ...prevState,
            minPrice: event.target.value
        }
        ))
    }

    const handleCategory = (event) => {
        changeFilters(prevState => ({
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
                />
                <span>${minPrice}</span>
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
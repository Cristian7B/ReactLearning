import { Filters } from "./Filters";

export function Header({changeFilters}) {
    return (
        <>
            <Filters/>
            <div>
                <h1>React Shop 🛒</h1>
            </div>
        </>
    )
}
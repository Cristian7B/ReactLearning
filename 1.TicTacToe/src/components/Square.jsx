export function Square({children, isSelected, updateBoard, index}) {
    const classItem = isSelected ? "is-selected" : "";

    const handleClick = () => {
        updateBoard(index)
    }
    return (
        <div onClick={handleClick} className={`square ${classItem}`}>
            {children}
        </div>
    )
}
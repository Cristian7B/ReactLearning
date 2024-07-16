import iconGame from "../assets/game-controller-outline.svg"

export function StartGameRedirect() {
    return (
        <div className="redirectCard">
            <div className="cardShow">
                <button><img src={iconGame} alt="" />Let`s Start</button>
                <p>Join the fun and challenge your friends</p>
            </div>
        </div>
    )
}
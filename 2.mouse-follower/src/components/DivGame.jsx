import { useEffect, useState, useRef } from "react"
import { foodEmojis } from "../consts"
import { randomNumber } from "../utils/randomNumber"

export function DivGame({returnStartGame, startGame}) {
    const [counter, setCounter] = useState(0)
    const [showFruit, setShowFruit] = useState(foodEmojis[randomNumber(49)])
    const [timeGame, setTimeGame] = useState(false)
    const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });
    const [positionFruit, setPositionFruit] = useState({x: randomNumber(containerSize.x), y: randomNumber(containerSize.y)})
    const containerRef = useRef(null);

    useEffect(() => {
        if (containerRef.current) {
          setContainerSize({
            x: containerRef.current.offsetWidth,
            y: containerRef.current.offsetHeight,
          });
        }
        setPositionFruit({x: randomNumber(containerSize.x) - 50, y: randomNumber(containerSize.y) - 50})
    }, [startGame]);
    
    const style = {
        left: `${positionFruit.x}px`,
        top: `${positionFruit.y}px`,
        display: startGame ? "block" : "none"
    }

    const handleFruitClick = () => {
        const fruitIndex = randomNumber(49);
        setShowFruit(foodEmojis[fruitIndex]);
        setPositionFruit({x: randomNumber(containerSize.x - 50), y: randomNumber(containerSize.y - 50)})
        setCounter(counter + 1); 
    };

    useEffect(() => {
        if (startGame) {
            setTimeGame(true)

            const timer = setTimeout(() => {
                setTimeGame(false);
                returnStartGame(false);
            }, 5000);

            const timerFruit = setInterval(() => {
                const fruitIndex = randomNumber(49)
                setShowFruit(foodEmojis[fruitIndex])
                setPositionFruit({x: randomNumber(containerSize.x - 50), y: randomNumber(containerSize.y - 50)})
            }, 2000)
            
            setShowFruit(foodEmojis[randomNumber(49)])

            return () => {
                clearTimeout(timer);
                clearInterval(timerFruit);
            };
            
        }
    }, [startGame])

    return(
        <div ref={containerRef} className="gameContainerFood">
            <div style={style} onClick={handleFruitClick} className="elementFood">
                {showFruit}
            </div>
        </div>
    )
}
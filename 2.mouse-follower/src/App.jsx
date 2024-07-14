import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [enabledEffect, setEnabledEffect] = useState(false)
  const [positionMouse, setPositionMouse] = useState({x: 0, y: 0})
  const [styleMouse, setStyleMouse] = useState("none")

  const buttonRemoveDisplay = () => {
    setEnabledEffect(!enabledEffect)
    setStyleMouse(styleMouse === "none" ? "block": "none")
  }

  useEffect(() => {
    const handleMove = (event) => {
      const { clientX, clientY } = event;
      setPositionMouse({x: clientX, y: clientY})
    }
    if (enabledEffect) {
      window.addEventListener("pointermove", handleMove)
    }
    return () => {
      window.removeEventListener("pointermove", handleMove) 
    }
  }, [enabledEffect])

  return (
    <main>
      <div 
        style={{
          display: `${styleMouse}`,
          position: 'absolute',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          border: '1px solid #fff',
          borderRadius: '50%',
          opacity: 0.8,
          pointerEvents: 'none',
          left: -15,
          top: -15,
          width: 30,
          height: 30,
          transform: `translate(${positionMouse.x}px, ${positionMouse.y}px)`
        }}
      />
      <button onClick={buttonRemoveDisplay}>{enabledEffect ? "Desactivar" : "Activar"}</button>
    </main>
  )
}

export default App

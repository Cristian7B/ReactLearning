import { MouseFollower } from './components/MouseFollower'
import './App.css'
import { DivGame } from './components/DivGame'
import { useState } from 'react'

function App() {
  const [startGame, setStartGame] = useState(null)

  const startInformation = () => {
    setStartGame(startGame ? false : true)
  }
  const receiveStartGame = (data) => {
    setStartGame(data)
  }

  return (
    <main>
      <MouseFollower/>
      <DivGame returnStartGame={receiveStartGame} startGame={startGame}/>
      <button onClick={startInformation}>Iniciar</button>
    </main>
  )
}

export default App

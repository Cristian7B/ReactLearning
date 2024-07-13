import { useEffect, useState } from 'react'
import { Square } from './components/Square'
import { TURNS } from './constanst'

import { checkWinner } from './utils/checkWinner'

import confetti from 'canvas-confetti'

import './App.css'
import { Winner } from './components/Winner'
import { removeLocal, saveLocal } from './local/localIndex'


function App() {
  const [board, setBoard] = useState(() => {
   const boardFromStorage = window.localStorage.getItem("board"); 
   return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
  })

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem("turn")
    return turnFromStorage ?? TURNS.X
  })
  const [winner, setWinner] = useState(null)

  const updateBoard = (index) => {

    if (board[index] || winner) return

    const newBoard = [...board]
    newBoard[index] = turn

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X

    setBoard(newBoard)
    setTurn(newTurn);

    const newWinner = checkWinner(newBoard)

    if (newWinner !== null) {
      confetti()
      setWinner(newWinner)
    }
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

    removeLocal()
  }

  useEffect(() => {
    saveLocal({board, turn})
  }, [board, turn])

  return (
    <main className='board'>
      <h1>
        Tic Tac Toe
      </h1>

      <button 
        onClick={resetGame}
      >
          Empezar de nuevo
      </button>

      <section className="game">
        { 
          board.map((_, index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {board[index]}
              </Square>
            )
          })
        }
      </section>
      <section className="turn">
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>

        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>

        <Winner 
          winner={winner}
          resetGame={resetGame}
        />
    </main>
  )
}

export default App  

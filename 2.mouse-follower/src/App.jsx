import { MouseFollower } from './components/MouseFollower'
import './App.css'
import { DivGame } from './components/DivGame'
import { useState } from 'react'

function App() {
  return (
    <main>
      <MouseFollower/>
      <DivGame/>
    </main>
  )
}

export default App

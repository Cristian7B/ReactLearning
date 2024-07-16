import { MouseFollower } from './components/MouseFollower'
import './App.css'
import { DivGame } from './components/DivGame'
import { useState } from 'react'
import { NavPage } from './components/NavPage'
import { TitlePrincipal } from './components/TitlePrincipal'
import { StartGameRedirect } from './components/StartGameRedirect'

function App() {
  return (
    <>
      <div className="principalPageGame">
        <NavPage/>
        <div className="titlePrincipal">
          <TitlePrincipal/>
          <StartGameRedirect/>
        </div>
      </div>
      <main>
        <MouseFollower/>
        {/* <DivGame/> */}
      </main>
    </>
  )
}

export default App

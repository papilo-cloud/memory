import React, { useRef, useState } from 'react'
import { useTasks } from '../hooks/useContext'
import { Game } from './Game'
export const Menu = () => {
    const {myGrid, myGrid1, setTheme, grid, newGame, handleSetTime} = useTasks()
    const [game, setGame] = useState(true)
    const [gameState, setGameState] = useState('numbers')
    const [gameGrid, setGameGrid] = useState(4)
    const [gamePlayers, setGamePlayers] = useState([1,2,3,4])

  function handleStart() {
    if (gameGrid == 4) {
        myGrid()
    } else {
        myGrid1()
    }
    setTheme(gameState)
    setGame(false)
    newGame()
    handleSetTime()
    }

  return (
    <div>
    {
        game ?
        <div className='menu'>
            <h2>memory</h2>
            <div className="cont">
                <div className="box">
                    <p>Select Theme</p>
                    <div className="butn">
                        <button onClick={() => setGameState('numbers')} className={gameState == 'numbers' ? 'active': ''}>Numbers</button>
                        <button onClick={() => setGameState('icons')} className={gameState == 'icons' ? 'active': ''}>Icons</button>
                    </div> 
                </div>
                <div className="box">
                    <p>Number of Players</p>
                    <div className="butn">
                        {gamePlayers.map((numb, i) => <button key={i} className={gamePlayers == 1? 'active': ''} >{numb}</button> )}
                    </div>
                </div>
                <div className="box box3">
                    <p>Grid Size</p> 
                    <div className="butn">
                        <button className={gameGrid == 4 ? 'active': ''} onClick={() => setGameGrid(4)}>4x4</button>
                        <button className={gameGrid == 6 ? 'active': ''} onClick={() => setGameGrid(6)}>6x6</button>
                    </div>
                </div>
                <div className="box">
                    <button onClick={handleStart} className='start'>Start Game</button>
                </div>
            </div>
        </div>:
        <Game setGame={setGame} />
    }
    </div>
  )
}

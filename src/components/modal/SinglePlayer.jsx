import React from 'react'
import { useTasks } from '../../hooks/useContext'

export const SinglePlayer = ({setGame}) => {
    const {grid,handleRestart, handleSetTime} = useTasks()
    function padMin() {
        return Math.floor(grid.minutes / 60)
    }
  return ( 
        <div className="end-cont">
            <div className="txt">
                <h2>You did it!</h2>
                <p>Game over! Here's how you got on...</p>
            </div>
            <div className="mesg">
                <div className="time">
                    <p>Time Elapsed</p>
                    <h3>{padMin()}:{grid.seconds}</h3>
                </div>
                <div className="time">
                    <p>Moves Taken</p>
                    <h3>{grid.moves} Moves</h3>
                </div>
            </div>
            <div className="btn">
                <button onClick={() => {handleRestart(); handleSetTime()}}  className="restart">
                    Restart
                </button>
                <button onClick={() => setGame(true)}>Setup New Game</button>
            </div>
        </div>
  )
}

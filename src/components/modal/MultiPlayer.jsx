import React from 'react'
import { useTasks } from '../../hooks/useContext'

export const MultiPlayer = ({setGame}) => {
    const {grid, handleRestart, handleSetTime} = useTasks()
  return (
        <div className="end-cont">
            <div className="txt">
                <h2>Player 2 Wins!</h2> 
                <p>Game over! Here are the results...</p>
            </div>
            <div className="mesg">
                {
                    grid.playersScore.sort((a, b) => b.score - a.score).map((player, i) => 
                        <div key={player.id} className={i == 0? "time active": 'time'}>
                            <p>Player {player.id}</p>
                            <h3>{player.score} Pairs</h3>
                        </div>
                    )
                }
            </div>
            <div className="btn">
                <button onClick={() => {handleRestart(); handleSetTime()}} className="restart">
                    Restart
                </button>
                <button onClick={() => setGame(true)}>Setup New Game</button>
            </div>
        </div>
  )
}

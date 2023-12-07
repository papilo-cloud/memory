import React from 'react'
import { useTasks } from '../../hooks/useContext'

export const MultiPlayer = ({setGame}) => {
    const {grid, handleRestart, handleSetTime} = useTasks()
    function handleScores() {
        const play = grid.playersScore.sort((a, b) => b.score - a.score)
        let score = true
        if (play[0]?.score == play[1]?.score || play[0]?.score == play[1]?.score == play[2]?.score) {
            score = false
        }
        return score
    }
  return (
        <div className="end-cont">
            <div className="txt">
                {handleScores() ? <h2>Player {grid.playersScore.sort((a, b) => b.score - a.score)[0].id} Wins!</h2> 
                    :<h2>A Draw</h2>
                }
                <p>Game over! Here are the results...</p>
            </div>
            <div className="mesg">
                {
                    grid.playersScore.sort((a, b) => b.score - a.score).map((player, i) => 
                        <div key={player.id} className={handleScores() && i == 0? "time active": 'time'}>
                            <p>Player {player.id} {handleScores() && i == 0 ? '(Winner!)': ''}</p>
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

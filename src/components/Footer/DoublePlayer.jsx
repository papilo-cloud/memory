import React from 'react'
import { useTasks } from '../../hooks/useContext'

export const DoublePlayer = () => {
    const {grid} = useTasks()

    return (
        <div className='double single'>
            <div className="double-cont single-cont">
                    {grid.playersScore.map(play => 
                    <div className='current' key={play.id}>
                        <div className={grid.nextPlayer == play.id ? 'active box': "box"}>
                            <p className='desk'>Player {play.id}</p>
                            <p className="mob">P{play.id}</p>
                            <h2>{play.score}</h2>
                        </div>
                    {grid.nextPlayer == play.id && <p className='current-p'>current turn</p>}
                    </div>
                    )}
            </div>
        </div>
    )
}

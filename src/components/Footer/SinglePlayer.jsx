import React from 'react'
import { useTasks } from '../../hooks/useContext'

export const SinglePlayer = () => {
  const {grid} = useTasks();

  function padSec() {
    let sec = 0
    if (grid.seconds < 10) {
      sec = '0' + grid.seconds
    } else {
      sec = grid.seconds
    }
    return sec
  }
  function padMin() {
    return Math.floor(grid.minutes / 60)
  }
  return (
    <div className='single'>
        <div className="single-cont">
            <div className="box active">
                <p>Time</p>
                <h2>{padMin()}:{padSec()}</h2>
            </div>
            <div className="box">
                <p>Moves</p>
                <h2>{grid.moves}</h2>
            </div>
        </div>
    </div>
  )
}

import React from 'react'
import { useTasks } from '../../hooks/useContext'

export const SinglePlayer = () => {
  const {grid, padMin, padSec} = useTasks();
 
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

import React from 'react'
import { MultiPlayer } from './MultiPlayer'
import { SinglePlayer } from './SinglePlayer'
import { useTasks } from '../../hooks/useContext'

export const Modal = ({setGame}) => {
  const {grid} = useTasks()
  return (
    <div className='modal'>
      {
        grid.players == 1 ?<SinglePlayer setGame={setGame} />:
          <MultiPlayer setGame={setGame} />
      }
        
    </div>
  ) 
}

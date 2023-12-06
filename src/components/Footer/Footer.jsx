import React from 'react'
import { SinglePlayer } from './SinglePlayer'
import { DoublePlayer } from './DoublePlayer'
import { useTasks } from '../../hooks/useContext'

export const Footer = () => {
  const {grid} = useTasks()

  return (
    <div className='footer'>
        {grid.players == 1 ?
          <SinglePlayer />:
        <DoublePlayer />}
    </div>
  )
}

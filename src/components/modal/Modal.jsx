import React from 'react'
import { MultiPlayer } from './MultiPlayer'
import { SinglePlayer } from './SinglePlayer'

export const Modal = ({setGame}) => {
  return (
    <div className='modal'>
        <MultiPlayer setGame={setGame} />
        {/* <SinglePlayer /> */}
    </div>
  ) 
}

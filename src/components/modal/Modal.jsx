import React from 'react'
import { MultiPlayer } from './MultiPlayer'
import { SinglePlayer } from './SinglePlayer'

export const Modal = () => {
  return (
    <div className='modal'>
        <MultiPlayer />
        {/* <SinglePlayer /> */}
    </div>
  )
}

import React, { useState } from 'react'
import { useTasks } from '../../hooks/useContext'

export const Header = () => {
    const [show, setShow] = useState(false)
    const {handleRestart} = useTasks()
  return (
    <div className='header'>
        <nav className="logo">
            <p>memory</p>
            <div className='btnn'>
                <button className='button1' onClick={() => setShow(!show)} >Menu</button>
                {
                    <div className={show ? 'open-menu open': 'open-menu'}>
                        <button onClick={() => handleRestart()}>Restart</button>
                        <button>New Game</button>
                    </div>
                }
            </div>
        </nav>
    </div>
  )
}

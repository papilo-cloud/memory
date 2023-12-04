import React, { useEffect, useRef, useState } from 'react'
import { useTasks } from '../../hooks/useContext'

export const Header = () => {
    const [show, setShow] = useState(false)
    const {handleRestart} = useTasks()
    const menuRef = useRef(!null)

    useEffect(() => {
        if (show) {
            document.documentElement.style.overflow = 'hidden'
        } else {
            document.documentElement.style.overflow = 'unset'
            
        }
        function handleShowMenu(e) {
            if (!menuRef.current?.contains(e.target)) {
                setShow(false)
            }
        }
        document.documentElement.addEventListener('click', handleShowMenu)
        return() => document.documentElement.removeEventListener('click', handleShowMenu)
    }, [show])
    
  return (
    <div className='header'>
        <nav className="logo">
            <p>memory</p>
            <div className='btnn' ref={menuRef}>
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

import React from 'react'
import { useTasks } from '../hooks/useContext'

export const Menu = () => {
    const {myGrid, myGrid1} = useTasks()
  
  return (
    <div className='menu'>
        <h2>memory</h2>
        <div className="cont">
            <div className="box">
                <p>Select Theme</p>
                <div className="butn">
                    <button>Numbers</button>
                    <button>Icons</button>
                </div>
            </div>
            <div className="box">
                <p>Number of Players</p>
                <div className="butn">
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>4</button>
                </div>
            </div>
            <div className="box">
                <p>Grid Size</p>
                <div className="butn">
                    <button onClick={() => myGrid(Number(4))}>4x4</button>
                    <button onClick={() => myGrid1(Number(6))}>6x6</button>
                </div>
            </div>
            <div className="box">
                <button className='start'>Start Game</button>
            </div>
        </div>
    </div>
  )
}

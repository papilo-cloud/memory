import React from 'react'

export const DoublePlayer = () => {
  return (
    <div className='double single'>
        <div className="double-cont single-cont">
            <div className="box active">
                <p>Player 1</p>
                <h2>1</h2>
            </div>
            <div className="box active">
                <p>Player 2</p>
                <h2>2</h2>
            </div>
            <div className="box active">
                <p>Player 3</p>
                <h2>0</h2>
            </div>
            <div className="box active">
                <p>Player 4</p>
                <h2>2</h2>
            </div>
        </div>
    </div>
  )
}

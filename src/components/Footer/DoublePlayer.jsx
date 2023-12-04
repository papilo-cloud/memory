import React from 'react'

export const DoublePlayer = () => {
  return (
    <div className='double single'>
        <div className="double-cont single-cont">
            <div className="box">
                <p className='desk'>Player 2</p>
                <p className="mob">P2</p>
                <h2>1</h2>
            </div>
            <div className="box active">
                <p className='desk'>Player 2</p>
                <p className="mob">P2</p>
                <h2>2</h2>
            </div>
            <div className="box ">
                <p className='desk'>Player 3</p>
                <p className="mob">P3</p>
                <h2>0</h2>
            </div>
            <div className="box ">
                <p className='desk'>Player 4</p>
                <p className="mob">P4</p>
                <h2>2</h2>
            </div>
        </div>
    </div>
  )
}

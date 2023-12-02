import React from 'react'

export const SinglePlayer = () => {
  return (
        <div className="end-cont">
            <div className="txt">
                <h2>You did it!</h2>
                <p>Game over! Here's how you got on...</p>
            </div>
            <div className="mesg">
                <div className="time">
                    <p>Time Elapsed</p>
                    <h3>1:04</h3>
                </div>
                <div className="time">
                    <p>Moves Taken</p>
                    <h3>38 Moves</h3>
                </div>
            </div>
            <div className="btn">
                <button className="restart">
                    Restart
                </button>
                <button>Setup New Game</button>
            </div>
        </div>
  )
}

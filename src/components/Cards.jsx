import React from 'react'
import { useTasks } from '../hooks/useContext'

export const Cards = ({playable}) => {

  const {grid,onFlipped, handleScore, theme} = useTasks()

  function  isFlipCard(params) {
    if (!playable) {
        onFlipped(params)
    }
    handleScore()
  }

  return (
    <div className="cells"
        style={{
            gridTemplateColumns: grid.gridSize === '4x4' ? 'repeat(4, 1fr)' : 'repeat(6, 1fr)',
            gridTemplateRows: grid.gridSize === '4x4' ? 'repeat(4, 1fr)' : 'repeat(6, 1fr)',
        }}>
            {grid.data.map((dat, x) => <div onClick={() => {isFlipCard(dat)}} className={
                dat.flipped || dat.matched ? "flipped cell": " cell"
                }
                
                 key={x}>
                <div className="flip-card">
                    <div className="flipped front"></div>
                    <div className={dat.matched? "flipped back": " back"}
                    style={{
                        backgroundColor: dat.matched ? '#bcced9': ''
                    }}>
                        {
                            theme == 'icons' ? <img src={dat.imgUrl} alt={dat.name} />: <p>{dat.numb}</p>
                        }
                    </div>
                </div>
            </div> )}
        </div>
  )
}

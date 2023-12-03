import React, { useEffect, useMemo, useState } from "react"
// import { Cell } from "./Cell";
// import { Footer } from "./Footer";
import { useTasks } from "../hooks/useContext";
   
export const Game= () => {

    const [correcrGuess, setCorrecrGuess] = useState(true)
    // const [grid, setGrid] = useState<GridProps[]>([])
    const {grid, onFlipped,onMatched, theme, handleFlip, handleMatch} = useTasks()
    //   let matrix = [], row;
//     for (let r = 0; r < rows; r++) {
//         row = [];
//         for (let c = 0; c < columns; c++) {
//             row.push(`${r}${c}`)
//         }
//         matrix.push(row)
//     }
const playable = grid.selectRandom.length !== 2
useEffect(() => {
  if (!playable) {
    setTimeout(() => {
        if (grid?.selectRandom[0]?.name == grid?.selectRandom[1]?.name) {
            grid.selectRandom.length = 0
            // handleFlip()
            onMatched()
        } else {
            handleFlip()
            // alert('matched')
            grid.selectRandom.length = 0
        }
    }, 1000);
  }
}, [grid.selectRandom])
function  isFlipCard(params) {
    if (playable) {
        onFlipped(params)
    }
}
  
console.log(grid.selectRandom.length)
console.log(grid.data)
  return (
    <div className="grid">
        <div className="cells">
            {grid.data.map((dat, x) => <div onClick={() => {isFlipCard(dat)}} className={dat.flipped || dat.matched? "flipped cell": " cell"} key={x}>
                <div className="flip-card">
                    <div className="flipped front"></div>
                    <div className={dat.flipped? "flipped back": " back"}>
                        {
                            theme == 'icons' ? <img src={dat.imgUrl} alt={dat.name} />: <p>{dat.numb}</p>
                        }
                    </div>
                </div>
            </div> )}
        </div>
        {/* <Footer gameState={gameState} /> */}
    </div>

  )
}


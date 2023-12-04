import React, { useEffect, useMemo, useState } from "react"
// import { Cell } from "./Cell";
// import { Footer } from "./Footer";
import { useTasks } from "../hooks/useContext";
import { Cards } from "./Cards";
import { Footer } from "./Footer/Footer";
   
export const Game= () => {
 
    // const [grid, setGrid] = useState<GridProps[]>([])
    const {grid,onMatched, dismissRandom, handleMatch} = useTasks()
    //   let matrix = [], row;
//     for (let r = 0; r < rows; r++) {
//         row = [];
//         for (let c = 0; c < columns; c++) {
//             row.push(`${r}${c}`)
//         }
//         matrix.push(row)
//     }
const playable = grid.selectRandom.length == 2

useEffect(() => {
 if (playable) {
    if (grid.selectRandom[0].name === grid.selectRandom[1].name) {
        onMatched(grid.selectRandom[0])
        dismissRandom()
    } else {
        setTimeout(() => {
            dismissRandom()
            handleMatch()
        }, 1000);
    }
 }
}, [grid.selectRandom])

  
console.log(grid.selectRandom)
console.log(grid?.data)
  return (
    <div className="grid">
        <Cards playable={playable} />
        <Footer />
    </div>

  )
}


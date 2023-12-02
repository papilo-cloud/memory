import React, { useEffect, useMemo, useState } from "react"
// import { Cell } from "./Cell";
// import { Footer } from "./Footer";
import _, { flatten, shuffle } from  'lodash'
import { useTasks } from "../hooks/useContext";
import data from "../data/data.json";

// interface gameProps{
//     columns: number,
//     rows: number
// }
// type GridProps = {
//     number: number
//     name: string
//     imgUrl: string
//     flipped: boolean
//     matched: boolean
// }
export const Game= () => {

    const [correcrGuess, setCorrecrGuess] = useState(true)
    // const [grid, setGrid] = useState<GridProps[]>([])
    const {grid, onFlipped, myGrid} = useTasks()
    const gridData = useMemo(() => shuffle(grid), [])
    //   let matrix = [], row;
//     for (let r = 0; r < rows; r++) {
//         row = [];
//         for (let c = 0; c < columns; c++) {
//             row.push(`${r}${c}`)
//         }
//         matrix.push(row)
//     }
    let shuffleData =[]; 
    useEffect(() => {
     shuffleData.push(shuffle(grid))
       
    }, [])
    // console.log(datal)
console.log(grid)
  return (
    <div className="grid">
        <div className="cells">
            {grid.map((data, x) => <div onClick={() => onFlipped(data)} className={data.flipped? "flipped cell": " cell"} key={x}>
                <div className="flip-card">
                    <div className="flipped front"></div>
                    <div className={data.flipped? "flipped back": " back"}>
                        <img src={data.imgUrl} alt={data.name} />
                    </div>
                </div>
            </div> )}
        </div>
        {/* <Footer gameState={gameState} /> */}
    </div>

  )
}


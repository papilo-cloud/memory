import React, { createContext, useReducer, useContext, useState, useEffect } from "react";
import data from "../data/data.json";
import { shuffle } from "lodash";

// type TaskContextProps = {
//     selectRandom: {
//         number: number
//         name: string
//         imgUrl: string
//         flipped: boolean
//         matched: boolean
//     }[];
//     onFlipped: (data: GridProps) => void;
//     // deleteTask: (id: number) => void;
//     useGrid: (num: number) => void
// }
// type GridProps = {
//     number: number
//     name: string
//     imgUrl: string
//     flipped: boolean
//     matched: boolean
//     id? : number
// }

const TaskContext = createContext({})

export const useTasks = () => {
    return useContext(TaskContext)
}


function ProviderContext({children}) {
    const [grid, dispatch] = useReducer(seteducer, [])
    const [selectRandom, setSelectRandom] = useState([])

    function seteducer(state, action) {
        switch (action.type) {
            case '4x4':{
                return action.datas
            }
            case '6x6': {
                return action.datas
            }    
            case 'isFlipped': {
                return state.map(data => {
                    if (data.number == action.num) {
                        return {...data, flipped: true}
                    } else {
                        return data
                    }
                })
            }
            
            default:
                break;
        }
    }
    function myGrid() {
        dispatch({
            type: '4x4',
            datas: shuffle(data[1])
        })
    }
    function myGrid1() {
        dispatch({
            type: '6x6',
            datas:shuffle( data[0])
        })
    }
  

    //  const myGrid = (num) =>{
        
    //     if (num == 6) {
    //         setGrid(data[0])
    //     }else{
    //         setGrid(data[1])
    //     }
     
    // }

    const onFlipped = (data) => {
        if (data.flipped) {
            return
        }
        dispatch({
            type: 'isFlipped',
            num: data.number
        })
        // const grids = grid.find(dat => dat.name == data.name )
        // if (typeof grids !== 'undefined') {
        //     grids.flipped = true
        // }
        // setGrid(grid.map(dat => {
        //     if (dat.number == data.number) {
        //         return {...dat, flipped: true}
        //     } else {
        //         return dat
        //     }
        // }))
        // // data.flipped = true
        // setGrid(grid)
        // console.log(data)
        // console.log(grid)
        // data = true
        // setGrid({...grid, grid.find(dat => {
        //     if (dat.name == data) {
        //         return {...dat, flipped: true}
        //     } 
        // })})
    }
    console.log(selectRandom)
   
    return (
        <TaskContext.Provider value={
            {
                grid,
                myGrid,
                myGrid1,
                onFlipped
            }
        } >
            {children}
        </TaskContext.Provider>
    )
    
}

export default ProviderContext
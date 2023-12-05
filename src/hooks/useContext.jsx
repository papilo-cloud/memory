import React, { createContext, useReducer, useContext, useState, useEffect } from "react";
import data from "../data/data.json";
import { shuffle } from "lodash";
import setReducer, { INITIALGAME } from "./taskReducer";
import useTime from "./useTime";


const TaskContext = createContext({})

export const useTasks = () => {
    return useContext(TaskContext)
}

function ProviderContext({children}) {
    // const [grid, dispatch] = useReducer(setReducer ,[])
    const [grid, dispatch] = useReducer(setReducer ,INITIALGAME)
    const [theme, setTheme] = useState('numbers')
    const [seconds, setSeconds] = useState(0)
    // const nam = useTime(false)
  
    function myGrid() {
        dispatch({
            type: '4x4',
            datas:shuffle( data[1])
        })
    }
    function myGrid1() {
        dispatch({
            type: '6x6',
            datas:shuffle( data[0])
        })
    }
    const onFlipped = (data) => {
        if (data.flipped) {
            return
        }
        dispatch({
            type: 'isFlipped',
            data: data
        })
       
    }
    const onMatched = (data) => {
        dispatch({
            type: 'isMatched',
            data: data
        })
    }
    const dismissRandom = () => {
       dispatch({
        type: 'dismissRandom'
       })
    }
    const handleMatch = () => {
        dispatch({
         type: 'dismissFlip'
        })
     }
     function  newGame() {
        dispatch({
            type: 'newGame'
        })
     }
     const handleRestart = () => {
        dispatch({
            type: 'restart'
        })
     }
     const setTime = () => {
    
            dispatch({
                type: 'timePassed',
            })
}
 //  const gameEnd = () => {
    //     dispatch({
    //         type: 'isFinished'
    //     })
    //  }
   
    return (
        <TaskContext.Provider value={
            {
                grid,
                myGrid,
                myGrid1,
                onFlipped,
                theme,
                setTheme,
                onMatched,
                dismissRandom,
                handleMatch,
                handleRestart,
                newGame,
                setTime,
                // gameEnd
            }
        } >
            {children}
        </TaskContext.Provider>
    )
    
}

export default ProviderContext
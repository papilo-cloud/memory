import React, { createContext, useReducer, useContext, useState, useEffect } from "react";
import data from "../data/data.json";
import { shuffle } from "lodash";
import setReducer, { INITIALGAME } from "./taskReducer";


const TaskContext = createContext({})

export const useTasks = () => {
    return useContext(TaskContext)
}

function ProviderContext({children}) {
    // const [grid, dispatch] = useReducer(setReducer ,[])
    const [grid, dispatch] = useReducer(setReducer ,INITIALGAME)
    const [theme, setTheme] = useState('numbers')
    const [random, setRandom] = useState([])
    let rand = []
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
    function myNum() {
        dispatch({
            type: 'isMatched',
            dat: gameShape.push(data)
        })
    }
    // function onMatched(data) {
    //     if (data.flipped) {
    //         return
    //     }
    //     dispatch({
    //         type: 'isMatched',
    //         data: data
    //     })
    // }

    const onFlipped = (data) => {
        if (data.flipped) {
            return
        }
        onMatched(data)
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
    const handleFlip = () => {
       dispatch({
        type: 'dismissFlip'
       })
    }
    const handleMatch = () => {
        dispatch({
         type: 'dismissMatch'
        })
     }
   
    return (
        <TaskContext.Provider value={
            {
                grid,
                myGrid,
                myGrid1,
                onFlipped,
                onMatched,
                theme,
                setTheme,
                handleFlip,
                handleMatch
            }
        } >
            {children}
        </TaskContext.Provider>
    )
    
}

export default ProviderContext
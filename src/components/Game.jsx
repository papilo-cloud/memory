import React, { useEffect, useMemo, useState } from "react"
// import { Cell } from "./Cell";
// import { Footer } from "./Footer";
import { useTasks } from "../hooks/useContext";
import { Cards } from "./Cards";
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";
   
export const Game= () => {

     const {grid,onMatched, dismissRandom, handleMatch} = useTasks()
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
    
    return (
        <div className="grid">
            <Header />
            <Cards playable={playable} />
            <Footer />
        </div>
    )
}


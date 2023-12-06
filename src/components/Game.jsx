import React, { useEffect, useMemo, useState } from "react"
// import { Cell } from "./Cell";
// import { Footer } from "./Footer";
import { useTasks } from "../hooks/useContext";
import { Cards } from "./Cards";
import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";
import { Modal } from "./modal/Modal";
   
export const Game= ({setGame}) => {

     const {grid,onMatched, gameEnd, nextPlayers, dismissRandom, handleMatch} = useTasks()
    const playable = grid?.selectRandom?.length == 2
    useEffect(() => {
        if ( grid.data.every(dat => dat.matched)) {
            gameEnd()
        }
    }, [grid.data])

    useEffect(() => {
    if (playable) {
        if (grid.selectRandom[0].name === grid.selectRandom[1].name) {
            onMatched(grid.selectRandom[0])
            dismissRandom()
        } else {
            setTimeout(() => {
                nextPlayers()
                dismissRandom()
                handleMatch()
            }, 1000);
        }
    }
    }, [grid.selectRandom])
    console.log(grid.gameFinish)
    // console.log(grid.data)
    return (
        <div className="grid">
            <Header setGame={setGame} />
                {grid.gameFinish && <Modal setGame={setGame} />}
            <Cards playable={playable} />
            <Footer />
        </div>
    )
}


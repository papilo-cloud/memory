import { shuffle } from 'lodash'
import data from '../data/data.json'
export const INITIALGAME = {
    data: [],
    selectRandom: [],
    theme: 'number',
    moves: 0,
    gameFinish: false,
    gameWon: 0,
    gridSize: '4x4',
    seconds: 0,
    minutes: 0
} 
function setReducer(state, action) {
switch (action.type) {
    case '4x4':{
        return {
            ...state, 
            data: action.datas,
            gridSize: '4x4'
        }
    }
    case '6x6': {
        return {
            ...state, 
            data: action.datas,
            gridSize: '6x6'
        }
    }    
    case 'isFlipped': { 
        return{
            ...state,
            data: state.data.map(dats => {
                if (dats.number === action.data.number) {
                    return {...dats, flipped: true}
                } else {
                    return dats
                }
            }),
            selectRandom: [...state.selectRandom,  action.data],
            moves: state.moves++,
            gameFinish: state.data.every(dat => dat.matched)
        }
    }
    case 'isMatched': { 
        return{
            ...state,
            data: state.data.map(dats => {
                if (dats.name == action.data.name) {
                    return{...dats, matched: true}
                } else {
                    return dats
                }
            }),
    }
    }
    case 'dismissFlip': {
        return {
            ...state,
            data: state.data.map(dats => {
                    return{...dats, flipped: false}
            }),
        }
    }
    case 'dismissRandom': {
        return {
            ...state,
            selectRandom: [],
        }
    }
    case 'restart': {
        return{
            ...state,
            selectRandom: [],
            gameFinish: false,
            moves: 0,
            gameWon: 0,
            minutes: 0,
            seconds: 0,
            data: shuffle(state.data.map(dats => {
                return{...dats, matched: false, flipped: false}
        }))
        }
    }
    // case 'isFinished': {
    //     return{
    //         ...state,
    //     }
    // }
    case 'timePassed': {
        return{
            ...state,
            seconds: state.seconds == 60 ? 0 : state.seconds++,
            minutes: state.minutes++
        }
        
    }
    case 'newGame': {
        return {
            ...state,
            selectRandom: [],
            gameFinish: false,
            moves: 0,
            gameWon: 0,
            minutes: 0,
            seconds: 0
            // timeElapsed: 0
        }
    }
    
    default:
        break;
}
}
export default setReducer



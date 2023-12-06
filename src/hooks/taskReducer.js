import { shuffle } from 'lodash'
export const INITIALGAME = {
    data: [],
    selectRandom: [],
    theme: 'number',
    moves: 0,
    gameFinish: false,
    scores: 0,
    gridSize: '4x4',
    seconds: 0,
    minutes: 0,
    players: 1,
    nextPlayer: 1,
    playersScore: [{id: 1, score: 0},{id: 2, score: 0},{id: 3, score: 0},{id: 4, score: 0}] 
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
            scores: 0,
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
            playersScore: state.playersScore.map(play => {
                if (play.id === state.nextPlayer) {
                    let x = 0
                    return {...play, score: x++}
                } else {
                    return play
                }
            })
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
    case 'RESTART': {
        return{
            ...state,
            selectRandom: [],
            gameFinish: false,
            moves: 0,
            nextPlayer: 1,
            gameWon: 0,
            minutes: 0,
            seconds: 0,
            data: shuffle(state.data.map(dats => {
                return{...dats, matched: false, flipped: false}
        }))
        }
    }
    case 'SET-PLAYERS':{
        return {
            ...state,
            players: action.players,
            playersScore: state.playersScore.slice(0, action.players)
        }
    }
    case 'NEXT-PLAYER': {
        return{
            ...state,
            nextPlayer: state.nextPlayer > state.playersScore.length ? 1 : state.nextPlayer+1,
        }
    }
    case 'GAME-END': {
        return{
            ...state,
            gameFinish: true
        }
    }
    case 'TIME-PASSED': {
        return{
            ...state,
            seconds: state.seconds == 60 ? 0 : state.seconds+1,
            minutes: state.minutes+1
        }
    }
    case 'NEWGAME': {
        return {
            ...state,
            selectRandom: [],
            gameFinish: false,
            moves: 0,
            nextPlayer: 1,
            players: 1,
            playersScore: [{id: 1, score: 0},{id: 2, score: 0},{id: 3, score: 0},{id: 4, score: 0}],
            gameWon: 0,
            minutes: 0,
            seconds: 0
        }
    }
    
    default:
        break;
}
}
export default setReducer



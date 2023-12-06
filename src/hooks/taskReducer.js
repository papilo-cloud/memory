import { shuffle } from 'lodash'
export const INITIALGAME = {
    data: [],
    selectRandom: [],
    theme: 'number',
    moves: 0,
    gameFinish: false,
    // scores: {one: 0, two: 0, three: 0, four: 0},
    one: 0,
    two: 0,
    three: 0,
    four: 0,
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
            moves: state.moves + 1,
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
            one: state.nextPlayer == 1 ? state.one + 1 : state.one,
            two: state.nextPlayer == 2 ? state.two + 1 : state.two,
            three: state.nextPlayer == 3 ? state.three + 1 : state.three,
            four: state.nextPlayer == 4 ? state.four + 1 : state.four,
            
            
            // playersScore: 
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
            playersScore: state.playersScore.slice(0, state.players),
            minutes: 0,
            seconds: 0,
            one: 0,
            two: 0,
            three: 0,
            four: 0,
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
            nextPlayer: state.nextPlayer >= state.playersScore.length ? 1 : state.nextPlayer+1,
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
            seconds: state.seconds == 60 ? 0 : state.seconds + 1,
            minutes: state.minutes + 1
        }
    }
    case 'PLAYERS-SCORE':{
        return{
            ...state,
            playersScore: [{id: 1, score: state.one},{id: 2, score: state.two},
                            {id: 3, score: state.three},{id: 4, score: state.four}].slice(0,state.players)
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
            seconds: 0,
            one: 0,
            two: 0,
            three: 0,
            four: 0,
        }
    }
    
    default:
        break;
}
}
export default setReducer



import data from '../data/data.json'
export const INITIALGAME = {
    data: [],
    selectRandom: [],
    theme: 'number',
    moves: 0,
    stopFlip: false,
    gameWon: 0
} 
function setReducer(state, action) {
switch (action.type) {
    case '4x4':{
        // return state.map(dat => {return{...dat, data: action.datas}})
        return {
            ...state, 
            data: action.datas
        }
    }
    case '6x6': {
        return {
            ...state, 
            data: action.datas
        }
    }    
    case 'isFlipped': { 
        return{
            ...state,
            data: state.data.map(dats => {
                if (dats.number === action.data.number) {
                    return {...dats, matched: true}
                } else {
                    return dats
                }
            }),
            selectRandom: [...state.selectRandom,  action.data]
        }
        // selectRandom: [...state.selectRandom, action.data]
    }
    
    case 'isMatched': { 
        return{
            ...state,
            data: state.data.map(dats => {
                if (dats.name == action.data.name) {
                    return{...dats, flipped: true}
                } else {
                    return dats
                }
            }),
    }
    }
    case 'dismissMatch': {
        return {
            ...state,
            data: state.data.map(dats => {
                    return{...dats, matched: false}
            }),
        }
    }
    case 'dismissRandom': {
        return {
            ...state,
            selectRandom: [],
        }
    }
    
    default:
        break;
}
}
export default setReducer



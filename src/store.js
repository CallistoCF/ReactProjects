import {createStore} from 'redux';

//Initial State for my store
const initial = {
    current: 'red', //swaps between red and black for players turn
    board: [
        [], // col 0
        [], // col 1
        [], // col 2
        [], // col 3
        [], // col 4
        [], // col 5
        [], // col 6
    ],
};

//model/game logic to add here: 

function reducer(state, action) {
    if (action.type === 'DROP_TILE') {
        //console.log('Dropping onto col ' + action.payload);
        const tile = state.current;
        const col = state.board[action.payload].concat(tile); //our new col

        const board = state.board.slice(); //copied board, for immutability
        board[action.payload] = col; //need to update column w/ new tile

        return {
            current: state.current === 'red' ? 'black' : 'red',
            board: board,
        }
    }
    return state;
};

export default createStore(reducer, initial);
import * as actionTypes from '../actions/actionTypes';

const INITIAL_STATE = {
    movies: localStorage.getItem('watchlist') === null ? [] : JSON.parse(localStorage.getItem('watchlist'))
}

const listReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_LIST:
            if (state.movies.indexOf(action.payload) < 0) { 
                return {
                    ...state, movies: [...state.movies, action.payload]
                }
            } else {
                return state;
            }
        case actionTypes.REMOVE_FROM_LIST:
            return {
                state,
                movies: [...state.movies.filter(id => id !== action.payload)]
            }
        default:
            return state;
    }
}

export default listReducer;
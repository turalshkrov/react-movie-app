import * as actionTypes from '../actions/actionTypes';

const INITIAL_STATE = {
    movies: []
}

const listReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_LIST:
            return {
                ...state, movies: [...state.movies, action.payload]
            }
        case actionTypes.REMOVE_FROM_LIST:
            return {
                ...state,
                movies: [state.movies.filter(movie => movie.title !== action.payload)]
            }
        case actionTypes.CLEAR_LIST:
            return {
                ...state, movies: []
            }
        default:
            return state;
    }
}

export default listReducer;
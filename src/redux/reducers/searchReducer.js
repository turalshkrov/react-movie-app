import { CHANGE_SEARCH_KEY } from "../actions/actionTypes";

const INITIAL_STATE = {
    searchKey: 'star wars'
}

const searchReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CHANGE_SEARCH_KEY:
            return {
                ...state,
                searchKey: action.payload
            }
        default:
            return state;
    }
}

export default searchReducer;
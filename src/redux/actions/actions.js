import * as actionTypes from './actionTypes';

export const addToList = (id) => {
    return {
        type: actionTypes.ADD_TO_LIST,
        payload: id
    }
}

export const removeFromList = (id) => {
    return {
        type: actionTypes.REMOVE_FROM_LIST,
        payload: id
    }
}

export const changeSearchKey = (searchKey) => {
    return {
        type: actionTypes.CHANGE_SEARCH_KEY,
        payload: searchKey
    }
}
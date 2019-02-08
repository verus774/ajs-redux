import {
    GET_CARDS_REQUEST,
    GET_CARDS_SUCCESS,
    GET_CARDS_FAILURE,
} from '../constants/cards';

const initialState = {
    items: [],
    isFetching: false,
    error: '',
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_CARDS_REQUEST:
            return {...state, isFetching: true};
        case GET_CARDS_SUCCESS:
            return {...state, isFetching: false, items: action.payload};
        case GET_CARDS_FAILURE:
            return {...state, isFetching: false, error: action.payload};
        default:
            return state;
    }
}

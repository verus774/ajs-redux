import {
    GET_CARDS_REQUEST,
    GET_CARDS_SUCCESS,
    GET_CARDS_FAILURE,
} from '../constants/cards';

function getCardsRequest() {
    return {
        type: GET_CARDS_REQUEST,
    }
}

function getCardsSuccess(cards) {
    return {
        type: GET_CARDS_SUCCESS,
        payload: cards,
    }
}

function getCardsFailure(error) {
    return {
        type: GET_CARDS_FAILURE,
        payload: error,
    }
}

export {
    getCardsRequest,
    getCardsSuccess,
    getCardsFailure,
};

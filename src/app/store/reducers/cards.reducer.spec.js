import {
    GET_CARDS_FAILURE,
    GET_CARDS_REQUEST,
    GET_CARDS_SUCCESS,
} from '../constants/cards';
import cardsReducer from './cards.reducer';

describe('cards reducer', () => {

    it('should return state if action type is not recognized', () => {
        const initialState = {test: 'test'};
        const newState = cardsReducer(initialState, {type: 'not_recognized'});

        expect(newState).toEqual(initialState);
    });

    it('should set true to isFetching', () => {
        const action = {
            type: GET_CARDS_REQUEST,
        };

        const newState = cardsReducer(null, action);
        expect(newState.isFetching).toBe(true);
    });

    it('should set error', () => {
        const action = {
            type: GET_CARDS_FAILURE,
            payload: 'some error',
        };

        const newState = cardsReducer(null, action);
        expect(newState.error).toBe(action.payload);
    });

    it('should set cards items', () => {
        const action = {
            type: GET_CARDS_SUCCESS,
            payload: [],
        };

        const newState = cardsReducer(null, action);
        expect(newState.items).toEqual(action.payload);
    });

});

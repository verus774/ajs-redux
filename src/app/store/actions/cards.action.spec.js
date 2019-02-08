import {getCardsFailure, getCardsRequest, getCardsSuccess} from './cards';
import {
    GET_CARDS_FAILURE,
    GET_CARDS_REQUEST,
    GET_CARDS_SUCCESS,
} from '../constants/cards';

describe('cards actions', () => {

    it('should return GET_CARDS_REQUEST action', () => {
        const result = getCardsRequest();
        expect(result.type).toBe(GET_CARDS_REQUEST);
    });

    it('should return GET_CARDS_SUCCESS action', () => {
        const result = getCardsSuccess([]);
        expect(result.payload).toEqual([]);
        expect(result.type).toBe(GET_CARDS_SUCCESS);
    });

    it('should return GET_CARDS_FAILURE action', () => {
        const result = getCardsFailure('some error');
        expect(result.payload).toBe('some error');
        expect(result.type).toBe(GET_CARDS_FAILURE);
    });

});

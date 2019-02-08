import {getCardsRequest, getCardsSuccess, getCardsFailure} from '../../store/actions/cards';

export default ($http) => {

    const getCards = () => {
        return dispatch => {
            dispatch(getCardsRequest());

            $http.get('/assets/data/cards.json')
                .then(res => dispatch(getCardsSuccess(res.data)))
                .catch(err => dispatch(getCardsFailure(err.statusText)));
        };
    };

    return {
        getCards,
    };
}

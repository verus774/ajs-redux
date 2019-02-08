import mockCards from '../../../assets/data/cards';

describe('service - cardService:', () => {
    let $httpBackend;
    let $ngRedux;
    let cardService;

    beforeEach(() => {
        angular.mock.module('redux-app');

        inject($injector => {
            $httpBackend = $injector.get('$httpBackend');
            $ngRedux = $injector.get('$ngRedux');
            cardService = $injector.get('cardService');
        });
    });

    it('should return cards items', () => {
        const URL = '/assets/data/cards.json';

        $httpBackend.expectGET(URL).respond(200, mockCards);
        $ngRedux.dispatch(cardService.getCards());
        $httpBackend.flush();

        expect($ngRedux.getState().cards.items).toEqual(mockCards);
    })
});

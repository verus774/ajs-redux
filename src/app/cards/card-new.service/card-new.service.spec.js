import mockCards from '../../../assets/data/cards';

describe('service - cardNewService:', () => {
    let $httpBackend;
    let cardNewService;

    beforeEach(angular.mock.module('cardModule'));

    beforeEach(angular.mock.inject((_$httpBackend_, _cardNewService_) => {
        $httpBackend = _$httpBackend_;
        cardNewService = _cardNewService_;
    }));

    it('should return cards data', () => {
        const expectedUrl = '/assets/data/cards.json';
        let response;

        $httpBackend.whenGET(expectedUrl).respond(mockCards);
        cardNewService.getCards().then(data => response = data);
        $httpBackend.flush();

        expect(response).toEqual(mockCards);
    })
});

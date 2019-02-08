describe('component - cardItem:', () => {
    let $componentController;
    let $compile;
    let scope;

    const mockCard = {
        'id': '1',
        'title': 'MBNA',
        'img': 'assets/img/card1.jpg',
        'link': 'https://ya.ru',
        'rewards': [],
        'purchases': {
            'percent': 0,
            'period': '28 months',
            'thenPercent': 19.9
        }
    };

    beforeEach(angular.mock.module('cardModule'));

    beforeEach(angular.mock.inject((_$componentController_, $rootScope, _$compile_) => {
        $componentController = _$componentController_;
        $compile = _$compile_;
        scope = $rootScope.$new();
    }));


    it('should display card', () => {
        scope.card = mockCard;

        let element = angular.element('<card-item card="card"></card-item>');
        element = $compile(element)(scope);
        scope.$digest();

        const h3 = element.find('h3');
        expect(h3.text()).toEqual(mockCard.title);
    });

    /*it('should call the `onDelete` binding, when deleting the hero', function() {
        var onDeleteSpy = jasmine.createSpy('onDelete');
        var bindings = {hero: {}, onDelete: onDeleteSpy};
        var ctrl = $componentController('heroDetail', null, bindings);

        ctrl.delete();
        expect(onDeleteSpy).toHaveBeenCalledWith({hero: ctrl.hero});
    });*/
});

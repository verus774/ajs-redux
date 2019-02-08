import angular from 'angular';

import cardService from './card.service/card.service';
import cardNewService from './card-new.service/card-new.service';
import CardItemComponent from './card-item/card-item.component';
import CardListComponent from './card-list/card-list.component';

export default angular.module('cardModule', [])
    .factory('cardNewService', cardNewService)
    .factory('cardService', cardService)
    .component('cardItem', CardItemComponent)
    .component('cardList', CardListComponent);

import angular from 'angular';
import 'ng-redux';

import store from './store';

import cardModule from './cards/card.module';
import AppComponent from './app.component';

angular.module('redux-app', [
    'ngRedux',
    'cardModule',
])
    .config(store)
    .run(($ngRedux, $rootScope, $timeout) => {
        $ngRedux.subscribe(() => {
            $timeout(() => {$rootScope.$apply(() => {})}, 100);
        });
    })
    .component('app', AppComponent);

(function () {
    'use strict';

    angular
        .module('roi')
        .config(routerConfig);

    /** @ngInject */
    function routerConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'app/main/main.html',
                controller: 'MainController',
                controllerAs: 'main'
            })

            .state('roi', {
                url: '/?customers',
                templateUrl: 'app/roi/roi.html',
                controller: 'RoiController',
                controllerAs: 'roi'
            });

        $urlRouterProvider.otherwise('/');
    }

})();

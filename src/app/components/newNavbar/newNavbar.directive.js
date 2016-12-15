(function() {
    'use strict';

    angular
        .module('roi')
        .directive('newNavbar', newNavbar);

    /** @ngInject */
    function newNavbar() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/components/newNavbar/newNavbar.html',
            controller: NewNavbarController,
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;

        /** @ngInject */
        function NewNavbarController() {
        }
    }

})();

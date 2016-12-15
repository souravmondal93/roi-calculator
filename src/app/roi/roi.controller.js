(function() {
    'use strict';

    angular
        .module('roi')
        .controller('RoiController', RoiController);

    /** @ngInject */
    function RoiController($log) {
        var vm = this;

        vm.customers = 0;
        vm.transactionValue = 0;
        vm.visitorsPerMonth = 0;
        vm.stores = 0;

        $log.info('ROI Controller');

        $watchCollection()
    }
})();
